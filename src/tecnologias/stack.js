import './stack.css'
import css from '../assets/tecnologia/css-3.png'
import html from '../assets/tecnologia/html-5.png'
import node from '../assets/tecnologia/nodejs.png'
import react from '../assets/tecnologia/react-logo-1000-transparent.png'
import js from '../assets/tecnologia/script-java.png'
import ts from '../assets/tecnologia/Typescript_logo_2020.svg.png'
import git from '../assets/tecnologia/logo-git-icon-e1586889963495.webp'
import mongo from '../assets/tecnologia/mongodb.png'
import mysql from '../assets/tecnologia/mysql_PNG23.png'

export default function Stack(){
    return(
        <section className='stack' id='tecnologia'>
            <h1>Minha Stack de tecnólogias </h1>
            <div className='tecnologias'>
                <img src={css}></img>
                <img src={html}></img>
                <img src={node}></img>
                <img src={react}></img>
                <img src={js}></img>  
                <img src={ts}></img> 
                <img src={git}></img>
                <img src={mongo}></img>
                <img src={mysql}></img>
            </div>
        </section>
    )
}