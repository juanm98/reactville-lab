import '../../styles/burger.css'
import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'
import { ingredients } from '../../data/burger-data'
import { useState } from 'react'

const BurgerShop = () => {
  // console.log(ingredients)
  const [stack, setStack] = useState([])

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient])
  }
  const removeFromBurger = (idx) => {
    setStack(stack.filter((ingre, ix) => ix !== idx))
  }

  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={() => setStack([])}>Clear Order</button>
      </nav>
      <section>
        <IngredientList ingredients = {ingredients} addToBurger={addToBurger}/>
        <BurgerStack stack= {stack} removeFromBurger={removeFromBurger}/>
      </section>
    </div>
  )
}

export default BurgerShop