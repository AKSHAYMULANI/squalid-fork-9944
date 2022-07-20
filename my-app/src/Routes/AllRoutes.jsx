import { Route, Routes } from "react-router-dom";
import MainHeader from "../Components/MainHeader";


function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<MainHeader />} />
        </Routes>
    )
}

export default AllRoutes