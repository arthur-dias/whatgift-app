import Github from '../../assets/github.svg'
import styles from './Footer.module.css'

interface FooterProps {
  text: string
}
const Footer = ({ text }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.footer}>
      <p className={styles.footer__text}>{text}</p>
      <a href='https://github.com/arthur-dias' target='_blank' rel='noreferrer'>
        <img src={Github} alt='ícone' className={styles.footer__icon} />
      </a>
      <p className={styles.footer__text}>{currentYear}</p>
    </div>
  )
}

export default Footer
