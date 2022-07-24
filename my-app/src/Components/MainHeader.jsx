import Alertbar from "./Alertbar"
import HeaderBar from "./Header"
import { Menubar } from "./MenuBar"

function MainHeader({setQuery,query}){
    return (
        <div>
            <Alertbar />
            <HeaderBar setQuery={setQuery}  query={ query}/>
            <Menubar />
        </div>
    )
}

export default MainHeader