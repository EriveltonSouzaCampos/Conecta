import { HeaderSite } from "./components/Header"
import style from './App.module.css'
import { Prods } from "./components/Products"

function App() {

  return (
   <div>
      <header><HeaderSite/></header>
      <div>
          <h1>Produtos</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupta, reiciendis quo?</p>
          <div>
              <Prods/>
          </div>
      </div>
   </div>
  )
}

export default App
