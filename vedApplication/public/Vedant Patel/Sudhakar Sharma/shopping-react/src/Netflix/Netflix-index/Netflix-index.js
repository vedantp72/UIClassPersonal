import "../Netflix-index/netflix-index.css";
import {NetflixHeader} from "../Netflix-header/netflix-header";
import { NetflixMain } from "../Netflix-main/netflix-main";
export function NetflixIndex(){
    return(
        <div id="banner">
            <div id="shade">
                <NetflixHeader/>
                <main>
                    <div><NetflixMain/></div>
                </main>
            </div>
        </div>
    )
}