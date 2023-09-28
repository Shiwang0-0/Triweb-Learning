import ProductItem from "./ProductItem";
import Styles from './ProductList.module.css'
function ProductList(props)
{
    return <ul className={Styles.list}>
        <h2>Products List:</h2>
        {props.products.map((item)=>{
                // return item.productName;
               return <ProductItem key={item._id} id={item._id} item={item}/>
            })}
    </ul>
}

export default ProductList;