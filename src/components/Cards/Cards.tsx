import Card from '../Card/Card'
import { CardsData } from '../../data/cardsData'
import styles from './Cards.module.css'

const Cards = () => {
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
    </div>
  )
}

export default Cards
