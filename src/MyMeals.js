import {AiFillDelete, AiFillEdit} from "react-icons/ai"                           /*імпортуємо наші іконки з біблотеки */

export const MyMeals =({text, updatingInInput, deleteMeal})=>{   
    return(
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={updatingInInput}></AiFillEdit> {/*Це беремо з бібліотеки іконок для react */}
            <AiFillDelete onClick={deleteMeal}></AiFillDelete> {/*Це беремо з бібліотеки іконок для react */}
        </div>
    )
}

//спочатку встановлюємо packaje з іконками https://react-icons.github.io/react-icons/ 
// копіюємо теги з потрібними іконками і імпортуємо їх
// прописуємо атрибут onClick, де вказуємо пропси editMyMeal та deleteMymeal, а також вказуємо text
// змінюємо editMyMeal на updatingInInput