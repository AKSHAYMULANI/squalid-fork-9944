import Alertbar from "./Alertbar"
import HeaderBar from "./Header"
import { Menubar } from "./MenuBar"

function MainHeader(){
    return (
        <div>
            <Alertbar />
            <HeaderBar />
            <Menubar />
        </div>
    )
}

export default MainHeader