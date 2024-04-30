import { useState } from 'react'
import './header.css'

export default function Header(){
    var logo = '<Marilia/>'
  
    const[Toggle, showMenu] = useState(false);

    return(
      <header className='header'>
        <nav className='nav container'>
          <a href='#home' className='nav_logo'>{logo}</a>
        
          <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
            <ul className='nav_list grid'>

              <li className='nav_item'>
                <a href='#sobre' className='nav_link active-link'>Sobre</a>
              </li>

              <li className='nav_item'>
                <a href='#tecnologia' className='nav_link'>Tecnologia</a>
              </li>

              <li className='nav_item'>
                <a href='#habilidades' className='nav_link'>Skils</a>
              </li>

              <li className='nav_item'>
                <a href='#projeto' className='nav_link'>Projeto</a>
              </li>

              <li className='nav_item'>
                <a href='#contato' className='nav_link'>Contato</a>
              </li>
              
            </ul>

            <i class="bi bi-x-lg nav_close" onClick={() => showMenu (!Toggle)}></i>
          </div>

          <div className='nav_toggle'onClick={() => showMenu (!Toggle)}>
              <i class="bi bi-list fa-bars"></i>
          </div>
        </nav>
      </header>
    )
}

