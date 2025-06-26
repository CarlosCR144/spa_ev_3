import { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Nota from "./Nota";

export default function App() {
    console.log('CONSOLE LOCALSTORAGE NOTAS', localStorage.getItem('Notas'))
    
    const [arrNotas, setArrNotas] = useState( 
        () => {
            if (localStorage.getItem('Notas')) {
                return JSON.parse(localStorage.getItem('Notas'))
            } else {
                return []
            }
        }
    )

    useEffect( () => {
        localStorage.setItem('Notas', JSON.stringify(arrNotas))
    }, [arrNotas] )

    const agregarNota = (nuevo) => {
        setArrNotas([...arrNotas, nuevo])
    }


    return (
        <div className="container">
            <h1 className="text-4xl font-bold text- text-gray-300 mb-6">Notas adhesivas</h1>
            
            <Formulario agregar={agregarNota} />

            <div className="notes-grid">
                {   
                    arrNotas.map( (nota, index) => (
                        <div key={index}>
                            <Nota
                                titulo={nota.titulo}
                                descripcion={nota.descripcion}
                                importante={nota.importante}
                                eliminar={() => {
                                    setArrNotas(arrNotas.filter( (_, i) => i != index ))
                                }}
                                degree={nota.degree}
                            />
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}