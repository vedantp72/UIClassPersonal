export function DataBindingComponent() {
    // for array
    var product = {
        Name: "Realme",
        Price: 18000,
        Stock: true
    }
    var categories = ["Electronics", "Footware", "Fashion", "Home Appliance", "Beauty & cosmetic", "Grocery", "Furniture", "Smart Gazette"]
    return (
        <div>
        <div className="container-fluid">
            <h2>Product Details</h2>
            <ol>
                {
                    categories.map(category =>
                        <li key={category}> {category}</li>
                    )
                }
            </ol>
            <select name="" id="">
                {
                    categories.map(category =>
                        <option key={category}>{category}</option>
                    )
                }
            </select>
            <ul className="list-unstyled">
                {
                    categories.map(category =>
                        <li key={category}><input type="checkbox" />{category}
                        </li>
                    )
                }
            </ul>
            <div>
                {
                    categories.map(category =>
                        <div key={category}>
                            <button className="w-25">{category}</button>
                        </div>
                    )
                }
            </div>
            </div>

            {/* <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dd className=""><input type="text" value={product.Name}/></dd>
                <dt>Price</dt>
                <dd>{product.Price}</dd>
                <dt>Stock</dt>
                <dd>{(product.Stock==true)?"Available":"Out of Stock"}</dd>
            </dl> */}


        </div>
    )
}