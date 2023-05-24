interface MessageProps {
  text: string | null
}
const Message = ({ text }: MessageProps) => {
  return <div data-cy='message-component'>{text}</div>
}

export default Message
