import './App.css'
import { CONSTANTS } from './data'

function App() {

  return (
    <>
      <h1>Videos instructivos de JW HUB</h1>
      <p>Dirigido exclusivamente a los voluntarios con solicitud A-2 aprobada</p>
      <h3>Persona asignada a la tarea</h3>
      <div className="card">
        <ul className='list'>
          {
            CONSTANTS.map((item) => (
              <li key={item.number}>
                <span> Video {item.number}</span>
                <a href={item.url} target="_blank">{item.title}</a>
              </li>

            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
