import './portfolio.css'
import img from '../../assets/foto.png'
import quiz from '../../assets/Quiz.jpeg'
import { DiGithubBadge } from "react-icons/di";
import { BsBoxArrowUpRight } from "react-icons/bs";


export default function Portfolio(){
    var texto = '</Portfolio>'
    return(
        <section className='portfolio' id='projeto'>
            <h1>{texto}</h1>

        <div className='wrapper-projects'>

            <div className='card-projects'>
                <div className='content-project'>
                    <div className='image-project'>
                        <img src={quiz}/> 
                    </div>
                    <span className=''>Quiz</span>
                    <p>Esse projeto é um quiz feito com ReactNative</p>

                    <div className='cta-project'>
                        <a href='#'>
                            Código
                            <DiGithubBadge className='github'/>
                        </a>
                        <a href='#'>
                           Site
                           <BsBoxArrowUpRight className='arrow'/>
                        </a>
                    </div>

                </div>
            </div>

            <div className='card-projects'>
                <div className='content-project'>
                    <div className='image-project'>
                        <img src={quiz}/> 
                    </div>
                    <span className=''>Quiz</span>
                    <p>Esse projeto é um quiz feito com ReactNative</p>

                    <div className='cta-project'>
                        <a href='#'>
                            Código
                            <DiGithubBadge className='github'/>
                        </a>
                        <a href='#'>
                           Site
                           <BsBoxArrowUpRight className='arrow'/>
                        </a>
                    </div>

                </div>
            </div>

            <div className='card-projects'>
                <div className='content-project'>
                    <div className='image-project'>
                        <img src={quiz}/> 
                    </div>
                    <span className=''>Quiz</span>
                    <p>Esse projeto é um quiz feito com ReactNative</p>

                    <div className='cta-project'>
                        <a href='#'>
                            Código
                            <DiGithubBadge className='github'/>
                        </a>
                        <a href='#'>
                           Site
                           <BsBoxArrowUpRight className='arrow'/>
                        </a>
                    </div>

                </div>
            </div>

        </div>
        
        </section>
    )
}