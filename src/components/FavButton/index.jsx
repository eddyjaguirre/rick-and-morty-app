import './style.scss'

function FavButton(props) {

  const handleClick = (e) => {
    e.stopPropagation();
    props.handleClick;
  }

  return (
    <button
      className='btn-fav'
      onClick={() => handleClick}
    >
      <img
        src={`src/assets/star${props.faved ? '-s':''}.svg`}
        alt="fav-star"
      />
    </button>
  )
}

export default FavButton;