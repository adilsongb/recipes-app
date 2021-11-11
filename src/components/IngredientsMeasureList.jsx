import PropTypes from 'prop-types';
import React from 'react';

export default function IngredientsMeasureList({ ingredients }) {
  const arrayKeys = Object.keys(ingredients);
  const ingredientsKeys = arrayKeys.filter((key) => key.includes('strIngredient'));
  const ingredientMeasureKeys = arrayKeys.filter((key) => key.includes('strMeasure'));

  return (
    <ul>
      { ingredientsKeys.map((key, index) => (
        ingredients[key] && (
          <label
            htmlFor={ key }
            key={ key }
            data-testid={ `${index}-ingredient-name-and-measure`}
          >
            { `${ingredients[key]} - ${ingredients[ingredientMeasureKeys[index]]}` }
            <input
              type="checkbox"
              id={ key }
              name={ key }
              checked={ false }
              // onChange={}
            />
          </label>
        )))}
    </ul>
  );
}

IngredientsMeasureList.propTypes = {
  ingredients: PropTypes.shape(
    PropTypes.any,
  ).isRequired,
};
