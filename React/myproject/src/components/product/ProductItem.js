import Styles from './ProductItem.module.css'
import CustomWrapper from '../Layouts/CustomWrapper';
function ProductItem(props)
{
     return <li key={props.item.id}>
        <CustomWrapper>
            <div className={Styles.image}>
            <img src={props.item.image} alt="NO" />
        </div>
        <div className={Styles.content}>
            <h2>{props.item.productName}</h2>
            <p>{props.item.description}</p>
            <h4>{props.item.price}</h4>
        </div>
        <div className={Styles.btn}>
            <button >Buy</button>
        </div>
        </CustomWrapper>
        

     </li>;
}

export default ProductItem;