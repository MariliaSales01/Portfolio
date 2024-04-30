import './skill.css'

export default function Skill(){
    var skill = '<Habilidades/>'
    return(
        <section className='habilidades' id='habilidades'>
            <h1>{skill}</h1>
            <div className='interface'>
                <h2 className='titulo'>MINHAS <span>ESPECILIDADES.</span></h2>
                       <div className='flex'>        
                            <div className='habilidades-box'>
                                <i class="bi bi-code-square"></i>
                                <h3>Web respansivo</h3>
                                <p>Conhecimento em desenvolvimento web e responsividade, além de compreensão de conceitos como RESTful APIs.</p>
                            </div>

                            <div className='habilidades-box'>
                                <i class="bi bi-clock"></i>
                                <h3>Resolução de Problemas:</h3>
                                <p>Capacidade de analisar e resolver problemas de forma eficiente, muitas vezes sob pressão.</p>
                            </div>

                            <div className='habilidades-box'>
                                <i class="bi bi-chat-right-dots"></i>
                                <h3>Trabalho em Equipe</h3>
                                <p>Capacidade de colaborar efetivamente com outros desenvolvedores, designers e partes interessadas no projeto.</p>
                            </div>
                            
                       </div>
            </div>
        </section>
    )
}