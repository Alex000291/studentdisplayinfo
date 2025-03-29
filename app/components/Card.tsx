import styles from './card.module.css'

interface Answer {
    student_name: string;
    fully_correct: boolean;
}

interface CardProps {
    answers: Answer[];
    rank: number;
}

export default function Card({ answers, rank }: CardProps) {
    const { student_name } = answers[0];
    const accuracy = answers.reduce((acc: number, answer: Answer) => acc + (answer.fully_correct ? 1 : 0), 0) / answers.length;
    const accuracyPercentage = (accuracy * 100).toFixed(2);
    return (
        <div 
            className={`${styles.card} ${rank === 1 ? styles.first : ''} ${rank === 2 ? styles.second : ''} ${rank === 3 ? styles.third : ''}`}
            style={{ '--index': rank - 1 } as React.CSSProperties}
        >
            <span className={styles.rank}>{rank}.</span>
            <span className={styles.name}>{student_name}</span>
            <span className={styles.accuracy}>accuracy: {accuracyPercentage}%</span>
        </div>
    );
}
