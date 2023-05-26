import Card from '../Card/Card'
import { CardsData } from '../../data/cardsData'
import styles from './Cards.module.css'

const Cards = (text: string) => {
  return (
    <div data-cy='cards-component' className={styles.cards}>
      {CardsData.map((card) => (
        <Card
          icon={card.icon}
          title={card.title}
          text={card.text}
          key={card.title}
        />
      ))}
      <p data-cy='cards-text' className={styles.cards__text}>
        {text}
      </p>
    </div>
  )
}

export default Cards
