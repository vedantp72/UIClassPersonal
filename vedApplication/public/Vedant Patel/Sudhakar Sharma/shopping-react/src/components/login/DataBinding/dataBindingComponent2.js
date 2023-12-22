export function DataBindingComponent2()
// for array of object 
// {
//     var products = [
//         {Name : "TV", Price : 25000, Stock : true },
//         {Name : "Mobile", Price : 10000, Stock : false},
//         {Name : "Watch", Price : 1000, Stock : true },
//     ];
//     return (
//         <div className="container-fluid">
//             <h2>Products Table</h2>
//             <table className="table table-hover">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Price</th>
//                         <th>Stock</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         products.map(product =>
//                             <tr key={products.Name}>
//                                 <td>{product.Name}</td>
//                                 <td>{product.Price}</td>
//                                 <td>{(product.Stock==true)?"Available":"Out of Stock"}</td>
//                                 <td>
//                                     <button className="btn btn-info"><span className="bi bi-eye-fill"></span></button>
//                                     <button className="btn btn-warning ms-2"><span className="bi bi-pen"></span></button>
//                                     <button className="btn btn-danger ms-2"><span className="bi bi-trash"></span></button>
//                                 </td>
//                             </tr>
//                             )
//                     }
//                 </tbody>
//             </table>
            
//         </div>
//     )
// }
{
    // Nasted data
    var menu = [
                {Category : "Electronics", Products : ["TV", "Mobile", "Watch", "Laptop"]},
                {Category : "Footwear", Products : ["Nike", "Sparx", "Bata", "Paragon"]} 
            ];
    return (
                <div className="container-fluid">
                    <h2>Select Category</h2>
                    {
                        menu.map(item =>
                          <details key={item.Category}>
                            <summary>{item.Category}</summary>
                            <ul>
                                {
                                    item.Products.map(product =>
                                        <li key={product}>{product}</li>
                                        )
                                }
                            </ul>
                          </details>  
                            )
                    }
                    <h2>Shopping Menu</h2>
                    <ol>
                        {

                            menu.map(item =>
                                <li key={item.Category}>{item.Category}
                                <ul>
                                    {item.Products.map(product => 
                                        <li key={product}> {product}</li>
                                        )}
                                </ul>
                                
                                
                                </li>
                                
                            )
                        }
                        
                    </ol>
                    <h2>Select Product</h2>
                    <select>
                        {
                            menu.map(item =>
                                <optgroup label={item.Category} key= {item.Category}>
                                    {
                                        item.Products.map(product =>
                                            <option key={product} value="">{product}</option>
                                            )
                                    }
                                </optgroup>)
                        }
                    </select>
                </div>
                    )

}