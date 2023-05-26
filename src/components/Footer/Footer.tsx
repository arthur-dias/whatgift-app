interface FooterProps {
  text: string
}
const Footer = ({ text }: FooterProps) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

export default Footer
