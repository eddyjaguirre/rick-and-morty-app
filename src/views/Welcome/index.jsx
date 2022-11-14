import './style.scss'
import Button from "@/components/Button"

function Welcome(props) {
  return (
    <>
      {
        props.show.length === 0
        &&
        <div className="welcome">
          {JSON.stringify(props.show)}
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
              handleClick={props.handleContinue}
            >
              Continuar
            </Button>
          </div>
        </div>
      }
    </>
  )
}

export default Welcome;