import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All")

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoods = [...foods, newFood]
    setFoods(newFoods);
  }

  // function handleClick (foodId) {
  //   const newFoods = foods.filter(food => food.id !== foodId);
  //   setFoods(newFoods)
  // }

  function updateHeat (foodId) {
    const newFoods = foods.map(food => {
      if(food.id === foodId) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      }
      else {
        return food;
      }
    })
    setFoods(newFoods)
  }

  function handleFilterChange(event) {
    setFilterBy(event.target.value)
  }

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => {
      updateHeat(food.id)}}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>

    <select name="filter" onChange={handleFilterChange}>
      <option value="All">All</option>
      <option value="American">American</option>
      <option value="Sichuan">Sichuan</option>
      <option value="Thai">Thai</option>
      <option value="Mexican">Mexican</option>
    </select>

    </div>
  );
}

export default SpicyFoodList;
