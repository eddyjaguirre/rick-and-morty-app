import './style.scss'

function FavButton(props) {

  return (
    <button
      className='btn-fav'
      onClick={props.handleClick}
    >
      <img
        src={`src/assets/star${props.faved ? '-s':''}.svg`}
        alt="fav-star"
      />
    </button>
  )
}

export default FavButton;