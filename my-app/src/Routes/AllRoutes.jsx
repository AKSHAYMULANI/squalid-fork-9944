import { Route, Routes } from "react-router-dom";
import Alertbar from "../Components/Alertbar";


function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Alertbar />} />
        </Routes>
    )
}

export default AllRoutes