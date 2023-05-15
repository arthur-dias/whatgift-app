import styles from './Presentation.module.css'

interface PresentationProps {
  title: string
  text: string
}
const Presentation = ({ title, text }: PresentationProps) => {
  return (
    <div className={styles.presentation}>
      <h1 className={styles.presentation__title}>{title}</h1>
      <p className={styles.presentation__text}>{text}</p>
    </div>
  )
}

export default Presentation
