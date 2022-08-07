const GroceryDetails = ({ grocery }) => {
    return (
        <div className="grocery-details">
            <h3>{grocery.name}</h3>
            <p><strong>Quantity: {grocery.quantity || 1}</strong></p>
            {grocery.calories && <p>calories: {grocery.calories}</p>}
            {grocery.notes && <p className="notes" style={{fontSize: 'smaller', color: 'gray'}}>notes: {grocery.notes}</p>}
            {grocery.tags && 
           grocery.tags.map((tag, index) =>{ 
               if (index == grocery.tags.length - 1) return ( <p style={{ color: 'gray', textAlign: 'center'}}>{tag}</p>);
               else return ( <p style={{ color: 'gray', textAlign: 'center'}}>{tag}, </p>);
            })}
        </div>
    )
}
export default GroceryDetails;