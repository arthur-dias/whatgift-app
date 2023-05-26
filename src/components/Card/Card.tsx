import { CardProps } from '../../types'
import styles from './Card.module.css'

const Card = ({ icon, title, text }: CardProps) => {
  return (
    <div data-cy='card-component' className={styles.card}>
      <img
        data-cy='card-icon'
        src={icon}
        alt='ícone'
        className={styles.card__icon}
      />
      <p data-cy='card-title' className={styles.card__title}>
        {title}
      </p>
      <p data-cy='card-text'>{text}</p>
    </div>
  )
}

export default Card
