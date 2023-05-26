import Github from '../../assets/github.svg'
import styles from './Footer.module.css'

const Footer = (text: string) => {
  const currentYear = new Date().getFullYear()

  return (
    <div data-cy='footer-component' className={styles.footer}>
      <p data-cy='footer-text' className={styles.footer__text}>
        {text}
      </p>
      <a
        data-cy='footer-link'
        href='https://github.com/arthur-dias'
        target='_blank'
        rel='noreferrer'>
        <img
          data-cy='footer-icon'
          src={Github}
          alt='ícone'
          className={styles.footer__icon}
        />
      </a>
      <p data-cy='footer-year' className={styles.footer__year}>
        {currentYear}
      </p>
    </div>
  )
}

export default Footer
