import Styles from './ProductItem.module.css'
import CustomWrapper from '../Layouts/CustomWrapper';
import FavouriteContext from '../../store/ContextFavourite';
import { useContext } from 'react';


function ProductItem(props)
{
    const favouriteContext=useContext(FavouriteContext);

    const isFavourite=favouriteContext.isFavouriteItem(props.item._id);
            
    const toggleFavourite=()=>{
        if(isFavourite)
        {
            favouriteContext.removeFavouriteItem(props.item._id);
            // console.log("removed");
        }
        else
        {
            favouriteContext.addFavouriteItem({...props.item}); //normally the reference of the object will go,using spread operator can help sending the actual object.
            // console.log("added");
        }
    }

     return <li key={props.item._id}>
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
        <div>
        <button className={isFavourite?Styles.heartFvrt:Styles.heartUnfvrt}onClick={toggleFavourite} ></button>
        </div>
        </CustomWrapper>
        

     </li>;
}

export default ProductItem;