import { createContext, useState } from "react" //React Context is a way to manage state globally.
//React context allows us to pass down and use (consume) data in whatever component we need in our React app without using props.

const FavouriteContext = createContext( //createContext returns a component
    {
        favouriteItems: [],
        addFavouriteItem: () => { },
        removeFavouriteItem: () => { },
        isFavouriteItem: () => { }
    });

export function ContextFavourite(props) {
    const [userFavourite, setUserFavourite] = useState([]);  //userFavourite state will be changed 

    //add
    const addFavouriteItem = (product) => {
        setUserFavourite((prevUserFavourite) => {
            return prevUserFavourite.concat(product) //returns previous user with concatinating new product,will replace the new list(the whole list will change).
        })
    }
    const removeFavouriteItem = (id) => {
        setUserFavourite((prevUserFavourite) => {
            return prevUserFavourite.filter(product => product._id !== id);
        })
    }
    const isFavouriteItem = (id) => {
        return userFavourite.some(product=>product._id === id)
    }



    const context = {
        favouriteItems: userFavourite,
        addFavouriteItem: addFavouriteItem,
        removeFavouriteItem: removeFavouriteItem,
        isFavouriteItem: isFavouriteItem

    }

    return <FavouriteContext.Provider value={context}>
        {props.children}
    </FavouriteContext.Provider>
}

export default FavouriteContext;