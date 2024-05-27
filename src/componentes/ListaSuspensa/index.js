import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado (evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {   //para renderizar uma lista, de qualquer coisa, na tela. Para cada nome eu quero uma option.
                   return <option key={item}>{item}</option> //é baseado na chave que o React vai olhar e vai dizer que tem que renderizar de novo.
                })}
            </select>
        </div>

    )
}

export default ListaSuspensa