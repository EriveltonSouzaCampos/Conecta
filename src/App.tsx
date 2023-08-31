import { HeaderSite } from "./components/Header"
import style from './App.module.css'
import { Prods } from "./components/Products"

function App() {
  const products = [
    {
      id: 1,
      img: '/src/assets/latas.svg',
      name: 'Lata de Cola',
      description: 'lorem lorem lorem lorem e lorem'
    },
     {
       id: 2,
        img: '/src/assets/garrafa.svg',
       name: 'Lata de Cola',
       description: 'lorem lorem lorem lorem e lorem'
     },
  ]
  return (
   <div>
      <header><HeaderSite/></header>
      <div>
          <h1>Produtos</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupta, reiciendis quo?</p>
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
   </div>
  )
}

export default App
