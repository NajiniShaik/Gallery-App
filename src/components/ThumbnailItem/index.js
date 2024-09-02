import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, updateImgId, isActive} = props

  const {id, thumbnailUrl, thumbnailAltText} = imgDetails

  const onChangeId = () => {
    updateImgId(id)
  }

  const applyStyle = isActive ? ' active' : ''

  return (
    <li className="card">
      <button className="button" type="button" onClick={onChangeId}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`img ${applyStyle}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
