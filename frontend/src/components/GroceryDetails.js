const GroceryDetails = ({ grocery }) => {
    return (
        <div className="grocery-details">
            <h4>{grocery.name}</h4>
            <p><strong>Quantity: {grocery.quantity}</strong></p>
            <p style={{ color: 'gray'}}>{grocery.tags}</p>
            <p style={{color : 'blue'}}>{grocery.calories}</p>

        </div>
    )
}
export default GroceryDetails;