import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Product from './pages/Product';
import Contact from "./pages/Contact";
import Layout from './components/Layouts/Layout';
import AddProduct from './pages/AddProduct';
import FavouriteItems from './pages/FavouriteItems'
function App() {
  return (
   <Layout>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/Product' element={<Product />}></Route>
      <Route path='/Product/add' element={<AddProduct />}></Route>
      <Route path='/product/favourite' element={<FavouriteItems />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
