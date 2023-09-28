import FavouriteContext from '../store/ContextFavourite';
import { useContext } from 'react';
import ProductList from "../components/product/ProductList";



function FavouriteItems()
{
    const favouriteContext=useContext(FavouriteContext);
    return <div>
    <h1>my favourite items</h1>
    <ProductList products={favouriteContext.favouriteItems} />
    {/* sending products as props in the productList component */}
    </div>
}

export default FavouriteItems;