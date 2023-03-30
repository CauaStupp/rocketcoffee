import Logo from './assets/imgs/logo-desktop.svg';
import LogoMobile from './assets/imgs/logo-mobile.svg';
import IconMobileOpen from './assets/imgs/menu-buguer-open.svg';
import IconMobileClose from './assets/imgs/menu-buguer-close.svg';
import Coffee from './assets/imgs/rocket-coffee.png';
import EffectOne from './assets/imgs/blur-1.png';
import EffectTwo from './assets/imgs/blur-2.png'
import EffectMobile from './assets/imgs/blur-mobile.png';
import { menuMobile } from './functions/menuMobile';
import './global.css';
import './assets/styles/header.css';
import './assets/styles/main.css';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="effect one">
      <img src="${EffectTwo}" alt="Efeito de azul"/>
    </div>
    <header class="header">
      <div class="logo">
        <img src="${Logo}" alt="Logo" />
      </div>
      <div class="logo-mobile">
        <img src="${LogoMobile}" alt="Logo" />
      </div>

      <nav class="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Recompensas</a>
          </li>
          <li>
            <a href="/">Gift Cards</a>
          </li>
          <li>
            <a href="/">Lojas</a>
          </li>
        </ul>
      </nav>

      <nav class="nav-mobile">
        <ul>
          <li class="active">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Recompensas</a>
          </li>
          <li>
            <a href="/">Gift Cards</a>
          </li>
          <li>
            <a href="/">Lojas</a>
          </li>
        </ul>
      </nav>

      <button class="btn">
        <a href="/">Pegar meu café</a>
      </button>
      <button class="btn-mobile-open">
        <img src="${IconMobileOpen}"/>
      </button>
      <button class="btn-mobile-close">
        <img src="${IconMobileClose}"/>
      </button>
    </header>

    <main class="main">
      <div class="main-title">
        <h1>Great Coffee</h1>
        <code>< Great Code /></code>
      </div>

      <div class="main-image">
        <img src="${Coffee}" alt="Foto do copo da RocketCoffee"/>
      </div>
    </main>
    <div class="effect two">
      <img src="${EffectOne}" alt="Efeito de azul"/>
    </div>
    <div class="effect mobile">
      <img src="${EffectMobile}" alt="Efeito de azul"/>
    </div>
  </div>
`


setInterval(() => {
  menuMobile();
}, 100);

