import Card from '../Card/Card'
import { CardsData } from '../../data/cardsData'
import styles from './Cards.module.css'

interface CardProps {
  text: string
}

const Cards = ({ text }: CardProps) => {
  return (
    <div className={styles.cards}>
      {CardsData.map((card) => (
        <Card
          icon={card.icon}
          title={card.title}
          text={card.text}
          key={card.title}
        />
      ))}
      <p className={styles.cards__text}>{text}</p>
    </div>
  )
}

export default Cards
