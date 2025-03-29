import styles from "./answer.module.css"

interface Answer {
    id: number;
    created_at: string;
    student_name: string;
    lesson: number;
    fully_correct: boolean;
    score: number;
    full_score: number;
}

export default function Answer({answer}: {answer: Answer}) {

    const image_url = `https://diiwploqjtbjefofvtsn.supabase.co/storage/v1/object/public/answer/${answer.id}.png`

    return (
        <div className={styles.container}>
            {/* <div className={styles.name}>{answer.student_name}</div>
            <div className={styles.lesson}>{answer.lesson}</div>
            <div className={styles.fully_correct}>{answer.fully_correct}</div>
            <div className={styles.score}>{answer.score}</div>
            <div className={styles.full_score}>{answer.full_score}</div> */}
            <div className={styles.description}>
                At lesson <span className={styles.lesson}>{answer.lesson}</span>, <span className={styles.student_name}>{answer.student_name}</span> got <span className={styles.score}>{answer.score}</span> out of <span className={styles.full_score}>{answer.full_score}</span>.
                <br />And is <span className={answer.fully_correct ? styles.fully_correct : styles.not_fully_correct}>{answer.fully_correct ? "fully correct " : "not fully correct"}</span>.
            </div>
            <img src={image_url} alt="answer" className={styles.image} />
        </div>
    )
}
