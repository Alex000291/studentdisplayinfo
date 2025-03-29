import { createClient } from '@/app/lib/supabase/server'

import Card from "./Card";

import styles from './rank.module.css'

interface Answer {
    id: number;
    created_at: string;
    student_name: string;
    lesson: number;
    fully_correct: boolean;
    score: number;
    full_score: number;
}

export default async function Rank() {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from("answer")
        .select("*");

    const answersGroupedByStudent = data.reduce<Record<string, Answer[]>>((acc, answer) => {
        acc[answer.student_name] = acc[answer.student_name] || [];
        acc[answer.student_name].push(answer);
        return acc;
    }, {});

    // 获取排序后的学生名字数组
    const sortedStudentNames = Object.keys(answersGroupedByStudent).sort((a, b) => {
        const aAnswers = answersGroupedByStudent[a];
        const bAnswers = answersGroupedByStudent[b];
        
        // 计算 a 的正确率（全对题目数 / 总题目数）
        const aCorrectCount = aAnswers.filter(ans => ans.fully_correct).length;
        const aAccuracy = aCorrectCount / aAnswers.length;

        // 计算 b 的正确率（全对题目数 / 总题目数）
        const bCorrectCount = bAnswers.filter(ans => ans.fully_correct).length;
        const bAccuracy = bCorrectCount / bAnswers.length;

        return bAccuracy - aAccuracy; // 降序排序
    });

    return (
        <>
            <div className={styles.title}>
                ---- this is the rank of all students ----
            </div>
            <div className={styles.rank}>
                {sortedStudentNames.map((studentName, index) => {
                    const answers = answersGroupedByStudent[studentName];
                    // 使用学生名字作为key
                    console.log(index + 1)
                    return (
                    <Card 
                        key={studentName}
                        answers={answers}
                        rank={index + 1}
                    />
                );
            })}
        </div>
        </>
    );
}
