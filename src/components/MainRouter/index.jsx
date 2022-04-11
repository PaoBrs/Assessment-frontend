import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HOME_ROUTER, PRODUCT_DETAILS, ABOUT } from "../../Constants/Routes"
import Navbar from "../Navbar"
import Home from "../../pages/Home"
import ProductDetails from '../../pages/ProductDetails'

function Mainrouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={HOME_ROUTER} element={<Home />} />
        <Route path={`${PRODUCT_DETAILS}/:id`} element={<ProductDetails />} />
        <Route path={ABOUT} element="{<CreatePerson />}" />
      </Routes>
    </BrowserRouter>
  )
}

export default Mainrouter
