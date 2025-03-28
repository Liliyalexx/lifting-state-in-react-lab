// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ availableIngredients, addToBurger }) => {
    return (
        <div className="ingredient-list">
             <h2>Available Ingredients</h2>
        <ul className="ingredients">
          {availableIngredients.map((ingredient, index) => (
            <li key={index} 
            className="ingredient-item"
            style={{ backgroundColor: ingredient.color }}>
              <span>{ingredient.name}</span>
              <button 
                className="add-btn"
                onClick={() => addToBurger(ingredient)}>
                +
              </button>
            </li>
          ))}
        </ul>
        </div>
    );
  };
  
  export default IngredientList;
  