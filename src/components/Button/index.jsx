import './style.scss'

function Button(props) {
  return (
    <button
      className='btn'
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  )
}

export default Button;