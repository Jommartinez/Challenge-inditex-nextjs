import './Loading.css'

export const Loading = ({ text }: { text: string }) => {
  return (
    <div className="loading">
      <div className="loading__spinner"></div>
      <p className="loading__text">{text}</p>
    </div>
  )
}
