import { ingredients } from "../../data/burger-data"
import Ingredient from "./Ingredient"

const IngredientList = (props) => {
	return (
		<ul>
			{props.ingredients.map((ingredient, idx) => (
				<Ingredient key={idx} isList={true} ingredient={ingredient}/>
			))}
		</ul>
	)
}

export default IngredientList