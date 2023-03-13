import { useEffect, useState } from 'react';
import './App.css';
import { addmeal, getAllMeals, editMeal, deleteMeal} from './FetchMeals';
import { MyMeals } from './MyMeals'; 

function App() {  // прибираємо все зайве, як зазвичай
  const [MyMeal, setMeal] = useState([])  // стан для відображення списку
  const [title, setTitle] = useState("")   // стан для выдображення айтемів
  const [editing, setEditing] = useState(false)  // стан для редагування
  const [mealId, setMealId] = useState("")   

const updatingInInput = (_id, title) =>{
  setEditing(true) // змінюємо стан на тру
  setTitle(title) // при натисканні на іконку редагувати, ми побачиом в інпуті наш item, який потрыбно редагувати.
  setMealId(_id) 
}

  useEffect(()=>{
    getAllMeals(setMeal)
  }, [])

  return (
    <div>
     <h1> Meal plan</h1>
     <input type="text" placeholder="Add a meal" value={title} onChange={(e)=>setTitle(e.target.value)}/>
     <button disabled={!title} // зробити кнопку не активною, якщо нічого користувач не вводить
     onClick= { editing ? () => editMeal(mealId, title, setMeal, setTitle, setEditing) : ()=> addmeal(title, setTitle, setMeal)}>
        {editing ? "Edit" : "Add"}
        </button>
   {/* <MyMeals text={"We got here!"}/>*/}       

   {MyMeal.map((meal)=> <MyMeals text={meal.title} key={meal._id} 
   updatingInInput={()=> updatingInInput(meal._id, meal.title)}
   deleteMeal={()=> deleteMeal(meal._id, setMeal)} /> )}                                                
    </div>
  );
}

export default App;
// Спочатку пишемо код з h1, input, button та p
//потім створюємо ще один файл з назвою MyMeal.js і заповнюємо кодом
//інсталюємо іконки з https://react-icons.github.io/react-icons/  npm install react-icons --save
// прописуємо пропси в MyMeals.js, за допомогою яких передаватимемо інформацію з цих компонентів
//встановлюємо axios => npm i axios
//Створюємо файл FatchMeals.js, там ми поєднуватимемо все з axios(див файл)
//Використовуємо хук useState, прирівнюємо початковий стан до пустого масиву
//приміняємо до початкового стану myMeal метод map і вказуємо, що в компоненті MyMeals кожен <p> з пропсом text буде відображати значення title 
// яке ми беремо з backend => MealModel.js (це наша Schema)
//Щоб все спрацювало, треба використати useEffect щоб передати данні в наші компоненти => запускаємо в useEffect функцію getAllMeals, передаючи
//аргументом зміну стану setMeal.

//ДОДАЄМО НОВІ АЙТЕМИ
//використовуємо useEffect та прописуємо title та setTitle, як стани для нашого створеного в моделі бекеду айтему та прирівнюємо до string
// прирівнюємо в input value ={title}
// прописуємо onChange ={(e)=> setTitle(e.target.value)}
//тепер знову переходимо в наш FetchMeals.js та прописуємо там все необхідне для того, щоб додавати наші айтеми
// потім переходимо знову сюди і прописуємо на кнопку onClick і викликаємо метод addmeals, передаючи title, setMeal, setTitle

//РЕДАГУЄМО ЕЛЕМЕНТИ
//переходимо в FetchMeals.js, і прописуємо там логіку
//повертаємося в App.js і прописуємо  const [editing, setEditing] = useState(false) та   const [mealId, setMealId] = useState("")
// прописуємо метод updatingInInput та передаємо у вигляді визову цієї функції пропс updatingInInput={()=> updatingInInput(meal._id, meal.title)}
// прописуємо логіку у кнопці      
//<button onClick= { editing ? () => editMeal(mealId, title, setMeal, setTitle, setEditing) : ()=> addmeal(title, setTitle, setMeal)}>
       // {editing ? "Edit" : "Add"}
       // </button>

//ВИДАЛЯЄМО 
// прописуємо логіку у FetchMeals.js, потім пишемо в App.js, в нашому методі map 