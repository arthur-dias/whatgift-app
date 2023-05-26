import styles from './Card.module.css'

interface CardProps {
  icon: string
  title: string
  text: string
}
const Card = ({ icon, title, text }: CardProps) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt='ícone' className={styles.card__icon} />
      <p className={styles.card__title}>{title}</p>
      <p>{text}</p>
    </div>
  )
}

export default Card
