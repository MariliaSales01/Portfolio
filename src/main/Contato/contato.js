import './contato.css'

export default function Contato(){
    var texto = '</Contato>'
    return(
        <section className='formulario' id='contato'>
            <h1>{texto}</h1>
            <div className='interface'>
                <h2 className='titulo'>FALA <span>COMIGO.</span></h2>

                <form action='envia.php' method='post'>
                    <input type='text' name='nome' placeholder='Seu nome:' required></input>
                    <input type='email' name='email' placeholder='Seu e-mail:' required></input>
                    <input type='text' name='telefone'
                    placeholder='Seu celular:'></input>
                    <textarea name='mensagem'placeholder='Sua mensagem:' required></textarea>

                    <div className='btn-enviar'>
                        <input type='submit' value='ENVIAR'></input>
                    </div>
                </form>
            </div>
            </section>
    )
}