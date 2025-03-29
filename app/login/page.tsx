import { login } from '../action'
import styles from './login.module.css'

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label htmlFor="email" className={styles.label}>Email:</label>
        <input id="email" name="email" type="email" required className={styles.input} />
        <label htmlFor="password" className={styles.label}>Password:</label>
      <input id="password" name="password" type="password" required className={styles.input} />
        <button formAction={login} className={styles.button}>Log in</button>
      </form>
    </div>
  )
}