import { useEffect, useState } from "react"
import GroceryDetails from "../components/GroceryDetails.js"
const Home = () => {
    const [groceries, setGroceries] = useState(null);
    useEffect(() => {
        const fetchGroceries = async () => {
            const response = await fetch('/api/grocery');
            const json = await response.json();
            if (response.ok) {
                setGroceries(json);
            }
        }
        console.log((groceries))
        fetchGroceries();
    }, [])
    return (
        <div className="home">
            <div className="groceries">
                {groceries && groceries.map((grocery) => {
                   return <GroceryDetails key={grocery._id} grocery={grocery} />

                })} 
            </div>
        </div>
    )
};
export default Home;