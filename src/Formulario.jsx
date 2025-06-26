import { useState } from "react"

export default function Formulario({agregar}) {
    const [notas, setNotas] = useState([]);

    const enviar = (event) => {
        event.preventDefault()
        const inputTitulo = document.getElementById("titulo")
        const inputDescripcion = document.getElementById("descripcion")
        const importanteValue = document.getElementById("importante")
        let importante = ''
        if (!importanteValue.checked) {
            console.log(console.log("IMPORTANTE VALUE FALSE", importanteValue))
            importante = 'False'
        } else {
            console.log(console.log("IMPORTANTE VALUE TRUE", importanteValue))
            importante = 'True'
        }

        function getRandomRotation() {
            const degree = Math.random() * 10 - 5;
            // const transform = 'transform: rotate(' + degree + 'deg)'
            return degree;
        }

        const nuevoNota = {
            titulo: inputTitulo.value.trim(),
            descripcion: inputDescripcion.value.trim(),
            importante: importante,
            degree: getRandomRotation()
        }

        inputTitulo.value = ''
        inputDescripcion.value = ''
        importanteValue.checked = false

        agregar(nuevoNota)
        setNotas([...notas, nuevoNota])
        console.log('FORMULARIO NOTAS', notas)
    }

    return (
        <form onSubmit={enviar}>
            <div className="note-form">
                <div>
                    <input className="focus:ring-indigo-500 focus:border-indigo-500" id="titulo" type="text" placeholder="Título (opcional)"/>
                </div>
                <div>
                    <input className="focus:ring-indigo-500 focus:border-indigo-500" id="descripcion" type="text" placeholder="Descripción (obligatorio)" required/>
                    {/* <textarea className="focus:ring-indigo-500 focus:border-indigo-500" id="descripcion" placeholder="Descripción (obligatorio)" required></textarea> */}
                </div>
                <div className="checkbox-container">
                    <input className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" type="checkbox" id="importante" value='importante'/>                    
                    <label className="text-black-1000" htmlFor="importante">Marcar como importante</label>
                </div>
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Agregar</button>
            </div>
        </form>
    )
}