import { useState } from "react";

export function TwoWayBinding(){

return (
    <div className="container-fluid">
            <div className="row">
                <div className="col-3">
            <h2>Register User</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input className="text-black" type="text" /></dd>
                        <dt>Price</dt>
                        <dd><input className="text-black" type="number" name="" id="" /></dd>
                        <dt>City</dt>
                        <dd>
                            <select name="" id="">
                            <option value="">Delhi</option>
                            <option value="">Hyd</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                        <input type="checkbox" className="form-check-input"  /> Available
                        </dd>
                    </dl>

                </div>
                <div className="col-9">
                    <h2>Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd> </dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}
{/* <dl>
<dt>User Name</dt>
<dd><input type="text"  onKeyUp={HandleUseraName}/></dd>
</dl>
<p>Hello...! {userName}</p> */}
// const [userName, setUserName] = useState("");
// function HandleUseraName(e){
//     setUserName(e.target.value);