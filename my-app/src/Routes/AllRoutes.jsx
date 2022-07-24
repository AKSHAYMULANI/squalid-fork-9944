import { Route, Routes } from "react-router-dom";
import AddProducts from "../Components/Add Products/AddProducts";
import ShowProducts from "../Components/Products/Showproduct";

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<ShowProducts tag={"Makeup"} />} />
            <Route path="/Makeup" element={<ShowProducts tag={"Makeup"} />} />
            <Route path="/Skincare" element={<ShowProducts tag={"Skincare"} />} />
            <Route path="addProduct" element={<AddProducts />}  />
        </Routes>
    )
}

export default AllRoutes