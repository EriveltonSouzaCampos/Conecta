import { HeaderSite } from "./components/Header"
import style from './App.module.css'
import { FacebookLogo } from 'phosphor-react';
import { InstagramLogo } from 'phosphor-react';
import { Prods } from "./components/Products"
import sidePicture from './assets/conversas.svg'
import drinkPicture from './assets/bar.svg'
import sodaPicture from './assets/latas.svg'
import Carousel from "./components/Carousel"
import { Button } from "./components/Button"
import { Forms } from "./components/Forms";

function App() {
  const products = [
    {
      id: 1,
      img: '/src/assets/latas.svg',
      name: 'Garrafa 350ml',
      description: 'Lorem ipsum dolor sit amet'
    },
     {
       id: 2,
        img: '/src/assets/garrafa.svg',
       name: 'Garrafa 150ml',
       description: 'Lorem ipsum dolor sit amet'
     },
  ]
  
  const slides = [
    { text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo hendrerit.”', author: '@danielmaciel' },
    { text: '“Lorem ipsum dolor sit amet consectetur adipisicing elit.”', author: '@joaomaciel' },
    { text: '“Provident illo accusantium deleniti repudiandae hic, minus rem magnam non quo odio.”', author: '@danielclaudio' },
    { text: '“Error quasi molestias cupiditate iste placeat est voluptate aliquam! Ullam.”', author: '@danielmarte' }
  ];
  const options = ["Opção 1", "Opção 2", "Opção 3", "Conexão ruim", "Fraude", "Produto Ruim", "Contratar serviço"]
  return (
   <div>
      <header><HeaderSite/></header>
      <div className={style.productConter}>
          <span>
            <h1>Produtos</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupta, reiciendis quo?</p>
          </span>
          <div className={style.product}>
              {
                products.map((prod) => (
                  <Prods 
                      name = {prod.name}
                      img = {prod.img}
                      description={prod.description}
                  />
                ))
              }
          </div>
      </div>
      <div className={style.marketingConter}>
        <img src={sidePicture} alt="Pessoas num bar" />
        <div className={style.carousel}>
          <Carousel
            slides={slides}
          /> 
          <div className={style.orderYourDrink}>
            <img src={drinkPicture} alt="" />
            <p>Peça para seu bar</p>  
          </div>
        </div>
      </div>
      <div className={style.sodaConter}>
        <div className={style.sodaLeft}>
          <img src={sodaPicture} alt="" />
          <img src={sodaPicture} alt="" />
        </div>
        <div className={style.askButton}>
          <h1>Quer experimentar?</h1>
          <Button/>
        </div>
        <div className={style.sodaRigth}>
          <img src={sodaPicture} alt="" />
        </div>
      </div>
      <div className={style.askUsConter}>
          <div className={style.askUs}>
              <h1>Fale Conosco.</h1>
              <div className={style.socialMedia}>
                  <span>
                    <FacebookLogo size={18}/>
                    <InstagramLogo size={18}/>
                  </span>
                  <span>|</span>
                  <p>REDES SOCIAIS</p>
              </div>
          </div>
          <div className={style.forms}>
            <Forms
              options = {options}
            />
          </div>
      </div>
      <footer className={style.copyrigth}>
        <p>Todos os direitos reservados © 2020 Conecta</p>
        <div>
          <p>PROJETADO POR</p>
          <p>CONECTA.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
