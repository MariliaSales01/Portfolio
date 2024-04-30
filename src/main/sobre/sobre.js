import './sobre.css'
import foto from '../../assets/img.jpeg'

export default function Sobre(){
    var title = '<Sobre/>'
    return(
        <section className='sobre' id='sobre'>
            <h1 id='title'>{title}</h1>
            <div className='interface'>
              <div className='flex'>
                <div className='img-sobre'>
                    <img src={foto}></img>
                </div>
                <div className='txtSobre'>
                    <h2>MUITO PRAZER, <span>SOU MARILIA SALES.</span></h2>
                    <p> Em 2022, comecei o curso técnico em DSI onde me apaixonei na área, principalmente na disiplina de Front-end quando prendi Html,CSS e JavaScript para web.
                    Escolhi me aprofundar em JavaScript mas precisamente em React devido a sua Fácil Integração
                    que facilita a integração com outros frameworks e sua Reatividade.</p>
                    <p>Tenho conhecimentos básico
                    em Node onde eu também achei esse frameworks legal de se aprender e futuramente pretendo 
                    me aprofundar e me trornar uma desenvolvidora Full-stak.
                    Tenho como objetivo entregar sites respansivos e interativos para o usuário para que com isso 
                    ele tenha uma experiencia satisfatória ao utilizar o site.</p>

                    <div className='btn-social'>
                        <a href='https://github.com/MariliaSales01' target="_blank"> <button><i class="bi bi-github"></i></button></a>
                        <a href='https://www.linkedin.com/in/marilia-sales-348432242/ target="_blank"'><button><i class="bi bi-linkedin"></i></button></a>
                    </div>
                </div>

                </div>  
            </div>
        </section>
    )
}