interface MessageProps {
  text: string | null
}
const Message = ({ text }: MessageProps) => {
  return <div>{text}</div>
}

export default Message
