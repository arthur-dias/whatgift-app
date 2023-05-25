import styles from './Message.module.css'

interface MessageProps {
  text: string
}

const addNewLines = (text: string) => {
  const sentences = text.split('\n')

  const modifiedText = sentences.map((sentence, index) => (
    <li key={index} className={styles.list__item} data-cy='message-text'>
      {sentence}
      <br />
    </li>
  ))

  return modifiedText
}
const Message = ({ text }: MessageProps) => {
  return (
    <div className={styles.message} data-cy='message-component'>
      <ul className={styles.message__list}>{addNewLines(text)}</ul>
    </div>
  )
}

export default Message
