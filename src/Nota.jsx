export default function Nota({ titulo, descripcion, importante, eliminar, degree }) {
    if (importante === 'True') {
        return (
            <div className="note-item important-note" style={{transform: 'rotate(' + degree + 'deg)'}}>
                    <h3 className="text-gray-900">{titulo}</h3>
                    <button className="delete-btn" aria-label="Eliminar nota" onClick={eliminar}>&times;</button>
                    <p className="handwritten-font">{descripcion}</p>
            </div>
        )
    } else {
        return (
            <div className="note-item" style={{transform: 'rotate(' + degree + 'deg)'}}>
                    <h3 className="text-gray-900">{titulo}</h3>
                    <button className="delete-btn" aria-label="Eliminar nota" onClick={eliminar}>&times;</button>
                    <p className="handwritten-font">{descripcion}</p>
            </div>
        )
    }

    
}