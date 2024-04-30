import './portfolio.css'
import img from '../../assets/foto.png'
import quiz from '../../assets/Quiz.jpeg'

export default function Portfolio(){
    var texto = '</Portfolio>'
    return(
        <section className='portfolio' id='projeto'>
            <h1>{texto}</h1>

            <div className='portfolio-container'>
                <div className='portfolio-box'>
                <a href='#'><img src={quiz}></img></a>
                </div>

                <div className='portfolio-box'>
                    <a href='#'><img src={img}></img></a>
                </div>

                <div className='portfolio-box'>
                    <a href='#'><img src={img}></img></a>
                </div>

                <div className='portfolio-box'>
                    <a href='#'><img src={img}></img></a>
                </div>


                <div className='portfolio-box'>
                    <a href='#'><img src={img}></img></a>
                </div>

                <div className='portfolio-box'>
                    <a href='#'><img src={img}></img></a>
                </div>

            </div>
        </section>
    )
}