import { Route, Routes } from "react-router-dom";
import Navbar from "../Component/Navbar";
import PrivateRoute from "../Component/PrivateRoute";
import Login from "./Login";
import Products from "./Products";
import ProductsPage from "./ProductsPage";
import Error from "./Error"

function AllRoutes() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<div>Home decoration</div>} />
          <Route path="/login" element={<Login/>} />
          <Route
            path="/products"
            element={
              // <PrivateRoute>
              <PrivateRoute>
              <Products/>
              </PrivateRoute>
              // {/* </PrivateRoute> */}
            }
          />
          <Route
            path="/products/:id"
            element={
             // <PrivateRoute>
                <ProductsPage/>
             // </PrivateRoute>
            }
          />
           <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default AllRoutes;
