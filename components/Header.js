import styles from './Header.module.css'

export default function Header({ title }) {
  return (
    <>
      <div className={styles.header}>
          <img src="/favicon.svg" alt="Puterbot Logo" id="header-logo" />
          <h1 className="title">{title}</h1>
          <h2>AI-First Process Automation</h2>
      </div>
    </>
  );
}
