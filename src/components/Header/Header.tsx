import styles from './Header.module.css'

const Header = (title: string) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>{title}</h1>
    </header>
  )
}

export default Header
