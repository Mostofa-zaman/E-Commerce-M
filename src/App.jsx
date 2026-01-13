import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pages from './pages/Pages'
import LayOut from './components/LayOut'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import ProductsDetails from './pages/ProductsDetails'
import Faq from './pages/Faq'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<LayOut></LayOut>}>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/pages' element={<Pages></Pages>}></Route>
    <Route path='/shop' element={<Shop></Shop>}></Route>
    <Route path='/blog' element={<Blog></Blog>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
    <Route path='/productsDetails/:id' element={<ProductsDetails></ProductsDetails>}></Route>
    <Route path='/faq' element={<Faq></Faq>}></Route>
    <Route path='/cart' element={<Cart></Cart>}></Route>
    <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
  </Route>
))

function App() {
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
