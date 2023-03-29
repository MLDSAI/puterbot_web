import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/favicon.svg" alt="Puterbot Logo" className={styles.logo} />
      </footer>
    </>
  )
}
