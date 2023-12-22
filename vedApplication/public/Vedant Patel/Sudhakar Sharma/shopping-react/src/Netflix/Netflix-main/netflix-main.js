import '../Netflix-main/netflix-main.css';
import { NetflixRegister } from "../Netflix-register/netflix-register";

export function NetflixMain()
{
    return(
        <div className="text-white text-center main">
            <h1 className="font-weight-bold">Unlimited movies, TV shows and more</h1> 
            <h4>Watch anywhere. Cancel anytime.</h4>
            <NetflixRegister/>
        </div>
    )
}