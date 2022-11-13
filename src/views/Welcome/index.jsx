import './style.scss'
import Button from "@/components/Button"

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-container">
        <img
          src="src/assets/logo.svg"
          alt="Squadmakers"
        />
        <img
          src="src/assets/rnmlogo.png"
          alt="Rick and Morty"
          className='rnm-logo'
        />
        <h2>Bienvenido a Rick and Morty</h2>
        <p>
          En esta prueba, evaluaremos su capacidad para construit la aplicación mediante el análisis de código 
          y la reproducción del siquiente diseño.
        </p>
        <Button
          handleClick={() => console.log('click')}
        >
          Continuar
        </Button>
      </div>
    </div>
  )
}

export default Welcome;