import { useEffect } from "react"
import GroceryDetails from "../components/GroceryDetails.js"
import GroceryForm from "../components/GroceryForm.js";
import useGroceryContext from "../hooks/useGroceriesContext.js";
const Home = () => {
    const {groceries, dispatch} = useGroceryContext();
    useEffect(() => {
        const fetchGroceries = async () => {
            const response = await fetch('/api/grocery');
            const json = await response.json();
            if (response.ok) {
                dispatch({type: "SET_GROCERIES", payload: json})
            }
        }
        fetchGroceries();
    }, [])
    return (
        <div className="home">
            <div className="groceries">
                {groceries && (
                    groceries.map((grocery) => {
                   return <GroceryDetails key={grocery._id} grocery={grocery} />
                    }))} 
            </div>
            <GroceryForm/>
        </div>
    )
};
export default Home;