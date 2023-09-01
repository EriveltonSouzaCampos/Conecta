import { HeaderSite } from "./components/Header"
import style from './App.module.css'
import { Prods } from "./components/Products"
import sidePicture from './assets/conversas.svg'
import drinkPicture from './assets/bar.svg'

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
    { text: 'Texto 2', author: 'autor2' },
    { text: 'Texto 3', author: 'autor3' },
    { text: 'Texto 4', author: 'autor4' }
  ];
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
          <p>algo</p>
          <div className={style.orderYourDrink}>
            <p>Peça para seu bar</p>  
          </div>
        </div>
      </div>
   </div>
  )
}

export default App
