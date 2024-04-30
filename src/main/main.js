import './main.css'
import foto from '../assets/img.jpeg'

export default function Main(){
    return(
        <main>
            <section className='topoSite' id='topoSite'>
                <div className='Interface'>
                    <div className='flex'>
                        <div className='txt-topoSite'>
                            <h1>Ola me chamo <span>Marilia</span></h1>
                            <h2>Desenvolvedora FrontEnd</h2>
                            <p>orem ipsum luctus nisi interdum sapien pretium nisl auctor quam quisque, nibh feugiat mi hendrerit at dapibus habitasse congue neque, quis accumsan luctus fames est libero molestie hendrerit pretium.</p> 
                        <div className='btn-contato'>
                            <a href='#'>
                                <button>Entrar em contato</button>
                            </a>
                        </div>
                        </div> 
                        <div className='img-topoSite'>
                            <img src={foto}></img>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}