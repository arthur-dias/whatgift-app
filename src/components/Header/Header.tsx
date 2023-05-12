import styles from './Header.module.css'

interface HeaderProps {
  title: string
}
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>{title}</h1>
    </header>
  )
}

export default Header
