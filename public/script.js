// script.js
document.getElementById('food-log-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const foodItem = document.getElementById('food-item').value;
    const calories = document.getElementById('calories').value;

    addFoodItem(foodItem, calories);

    document.getElementById('food-log-form').reset();
});

function addFoodItem(foodItem, calories) {
    const foodLog = document.getElementById('food-log');
    const listItem = document.createElement('li');
    listItem.textContent = `${foodItem}: ${calories} calories`;
    foodLog.appendChild(listItem);
}
// script.js
let calorieGoal = 0;
let currentCalories = 0;

document.getElementById('goal-form').addEventListener('submit', function (event) {
    event.preventDefault();
    calorieGoal = parseInt(document.getElementById('calorie-goal').value);
    document.getElementById('goal-display').textContent = calorieGoal;
});

document.getElementById('food-log-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const foodItem = document.getElementById('food-item').value;
    const calories = parseInt(document.getElementById('calories').value);
    currentCalories += calories; // Update the current calorie count
    addFoodItem(foodItem, calories);
    document.getElementById('food-log-form').reset();
    updateCalorieProgress();
});

function addFoodItem(foodItem, calories) {
    const foodLog = document.getElementById('food-log');
    const listItem = document.createElement('li');
    listItem.textContent = `${foodItem}: ${calories} calories`;
    foodLog.appendChild(listItem);
}

function updateCalorieProgress() {
    const progressDisplay = document.createElement('p');
    progressDisplay.textContent = `Current Calories: ${currentCalories}/${calorieGoal}`;
    document.body.appendChild(progressDisplay);
}
// script.js
let calorieGoal = 0;
let currentCalories = 0;

// Handle user info form submission
document.getElementById('user-info-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const userName = document.getElementById('user-name').value;
    const userEmail = document.getElementById('user-email').value;

    // Display the user's name
    document.getElementById('display-name').textContent = userName;
    document.getElementById('user-display').style.display = 'block'; // Show welcome message and goal form
    document.getElementById('food-log-form').style.display = 'block'; // Show food log form
    document.getElementById('user-info-form').reset(); // Reset user info form
});

document.getElementById('goal-form').addEventListener('submit', function (event) {
    event.preventDefault();
    calorieGoal = parseInt(document.getElementById('calorie-goal').value);
    document.getElementById('goal-display').textContent = calorieGoal;
});

document.getElementById('food-log-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const foodItem = document.getElementById('food-item').value;
    const calories = parseInt(document.getElementById('calories').value);
    currentCalories += calories; // Update the current calorie count
    addFoodItem(foodItem, calories);
    document.getElementById('food-log-form').reset();
    updateCalorieProgress();
});

function addFoodItem(foodItem, calories) {
    const foodLog = document.getElementById('food-log');
    const listItem = document.createElement('li');
    listItem.textContent = `${foodItem}: ${calories} calories`;
    foodLog.appendChild(listItem);
}

function updateCalorieProgress() {
    const progressDisplay = document.getElementById('calorie-progress');
    if (!progressDisplay) {
        const newProgressDisplay = document.createElement('p');
        newProgressDisplay.id = 'calorie-progress';
        newProgressDisplay.textContent = `Current Calories: ${currentCalories}/${calorieGoal}`;
        document.body.appendChild(newProgressDisplay);
    } else {
        progressDisplay.textContent = `Current Calories: ${currentCalories}/${calorieGoal}`;
    }
}
    