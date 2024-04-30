import './App.css';
import Header from './header/header'
import Portfolio from './main/Portfolio/portfolio';
import Main from './main/main';
import Skill from './main/skill/skill';
import Sobre from './main/sobre/sobre';
import Stack from './tecnologias/stack';
import Contato from './main/Contato/contato';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Stack/>
      <Skill/>
      <Sobre/>
      <Portfolio/>
      <Contato/>
    </div>
  );
}

