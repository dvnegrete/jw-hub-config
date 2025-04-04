import { CONSTANTS } from "../data"

const ListVideos = () => {
    return (
        <>
            <h3>Persona asignada a la tarea</h3>
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
            <p>*️⃣Recuerda no compartir la contraseña con quienes no esten autorizados❗</p>
        </>
    )
}

export default ListVideos;