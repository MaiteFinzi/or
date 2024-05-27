
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placerholderModificada = `${props.placeholder}...`

    //let valor = 'Guilherme Silveira'

     //const[valor, setValor] = useState('') //valor (para ler) e a forma de definir esse valor (para escrever)
    
    const aoDigitado = (evento) => {
        const valor = evento.target.value
        console.log(valor)
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placerholderModificada}/>
        </div>
    )
}

export default CampoTexto