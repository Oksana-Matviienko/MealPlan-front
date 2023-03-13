import axios from "axios"


const getAllMeals = (setMeal)=>{
axios.get("https://meal-plan-vjzk.onrender.com")
.then(({data})=> {console.log(data)
    setMeal(data)
})
}

const addmeal = (title, setTitle, setMeal) =>{
    axios.post("https://meal-plan-vjzk.onrender.com/save", {title})
    .then((data)=> {console.log(data)
    setTitle("")
    getAllMeals(setMeal)}
    )
}

const editMeal = (mealId, title, setMeal, setTitle, setEditing) =>{
        axios.post("https://meal-plan-vjzk.onrender.com/edit", {_id: mealId, title})
        .then((data)=>{
            console.log(data)
            setTitle("")
            setEditing(false)
            getAllMeals(setMeal)
        })
    }


const deleteMeal =(_id, setMeal)=>{
    axios.post("https://meal-plan-vjzk.onrender.com/delete", {_id})
    .then((data)=>{
        console.log(data)
        getAllMeals(setMeal)
    })
}


export {getAllMeals, addmeal, editMeal, deleteMeal}

//імпортуємо axios 
//створюємо функцію для асинхронного запиту, приймаємо в якості параметру setMeal(зміну стану з хуку useEffect з App.js)
//прописуємо axios з методом get і відображаємо в консолі нашу базу данних, щоб перевірити чи працює
//вказуємо, що зміна стану буде відображати данні
// експортуємо нашу функцію 
// прописуємо далі const addMeal, приймаючи в якості параметрів title, setTitle, setMeal і використовуємо метод post
// в посиланні вказуємо http://localhost:4000/save - бо /save вказано в маршрутизаторі для методу post і тут же {title}, щоб зберігати текст, який ми пишемо
// далі прописуємо як вказано 
//- Прописуємо код для редагування записів:
// const editMeal = (mealId, title, setMeal, setTitle, setEditing) =>{
//axios.post("http://localhost:4000/edit", {_id: mealId, title}) - mealID це наш айдішник
//  .then((data)=>{
//  console.log(data)
//  setTitle("")  // очищаємо поле в інпуті після вводу
//  setEditing(false)   // 
//  getAllMeals(setMeal)})}  // задаємо get - запит для нашої бази данних

// Аналогічно прописуємо для видалення deleteMeals