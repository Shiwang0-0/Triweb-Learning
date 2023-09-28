//product---->productlList----->productItem

import ProductList from "../components/product/ProductList";
import { useState } from "react";
import { useEffect } from "react";

function Product()  //we cannot make a component async and then wait for the product list to get all the data.we have to set states for data fetching
{
    let [products, setProducts] = useState([]);
    let [isDataFetched, setIsDataFetching] = useState(true); //by default true,considering when we first time enter the page the data is fetching.
    useEffect(() => {
        setIsDataFetching(true);
        fetch("http://localhost:3004/product", { // by default fetch method send GET request
        }).then(response => response.json())
            .then(responseData => {
                setIsDataFetching(false); //now the value will be changed,its value will be rerendered.means when state changes product() is called again and this will lead us to an infite loop of sending response to the page and fetching request to the server which can ultimately lead us to trouble/get blocked by the server
                setProducts(responseData.data);
            })   //then chaining .
            .catch(err => console.log(err));
    }, []); //this empty list [] can hold multiple dependies,this [] empty list allow to check the condition of the previous time which was true the first time but is false afterwards because in fetch method we have set it false,so it will be false in the second run
    if (isDataFetched) {
        return <div>
            Data is loading.
        </div>
    }
    return <div>

        with data
        <ProductList products={products} />
        {/* sending products as props in the productList component */}
    </div>
}

export default Product;