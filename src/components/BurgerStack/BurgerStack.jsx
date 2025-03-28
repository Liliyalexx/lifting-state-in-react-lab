const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
        <div className="burger-stack">
        <ul className="stack">
          {stack.map((ingredient, index) => (
            <li key={index} 
            className="stack-item"
            style={{ backgroundColor: ingredient.color }}>
              <span>{ingredient.name}</span>
              <button 
                className="remove-btn"
                onClick={() => removeFromBurger(index)}>
                ×
              </button>
            </li>
          ))}
        </ul>
        
        </div>
    );
  };
  
  export default BurgerStack;