import { createClient } from "@/app/lib/supabase/server";

import styles from "./profile.module.css";



import Header from "@/app/components/Header";
import Answer from "@/app/components/Answer";

export default async function Profile() {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser();
    console.log(data);
    const { data: userData } = await supabase.from('user').select('*').eq('email', data.user?.email);
    const { data: answerData } = await supabase.from('answer').select('*').eq('student_name', userData?.[0].name);

    answerData?.reverse();

    console.log(answerData);
    return (
        <>
            <Header />
            <div className={styles.container}>
            <div className={styles.detail}>
                <div className={styles.name}>{userData?.[0].name}</div>
                <div className={styles.bio}>{userData?.[0].bio}</div>
            </div>
            <div className="answers">
                <div className={styles.title}>--- Your answers ---</div>
            {answerData?.map((answer) => (
                <Answer key={answer.id} answer={answer} />
                ))}
            </div>
            </div>
        </>
    )
}
