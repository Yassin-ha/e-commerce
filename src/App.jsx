import {Route, Routes} from "react-router-dom"
import Nav from "./components/Nav"
import {Home, Shopping, SingleProduct, Results, Error, Cart} from "./pages/index"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { calculateTotal } from "./features/cart/cartSlice"


function App() {
  const {cartItems} = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/results" element={<Results />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route path="/listProducts/:searchTerm" element={<Results />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Error" element={<Error/>} />
      </Routes>
    </main>
  )
}

export default App
