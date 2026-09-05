import Card from '../ui/Card'
import PlaceholderImage from '../ui/PlaceholderImage'

/** Tarjeta de logo de aliado/organización. */
function AllyCard({ ally }) {
  const { name, logo, url } = ally

  const content = (
    <Card className="p-6 flex items-center justify-center h-full">
      <PlaceholderImage
        src={logo}
        alt={name}
        aspectRatio="16 / 9"
        label={name}
        className="bg-transparent"
      />
    </Card>
  )

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
        {content}
      </a>
    )
  }

  return content
}

export default AllyCard
