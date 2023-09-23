//product---->productlList----->productItem

import ProductList from "../components/product/ProductList";
function Product()
{   
    let products=[
        {
            id:"p1",
            productName:"Tour",
            description:"good tour",
            price:"30000",
            image:"https://media.istockphoto.com/id/1498610798/photo/beautiful-landscape-baan-jabo-mae-hong-son-thailand.jpg?s=2048x2048&w=is&k=20&c=pXXSPFUI5xQTuBFCfwOSbCQvwtqWAZOpFRQWeQkYwSI="
        },
        {
            id:"p2",
            productName:"Ride",
            description:"bad ride",
            price:"10000",
            image:"https://media.istockphoto.com/id/1206473179/photo/mount-abu-hill-station-india.jpg?s=2048x2048&w=is&k=20&c=kD4LbbkMsZkXzdhQDsKfPEQKRyra9aRTD3yO1NljPBo="
        }
    ];
    return <div>
        
            {/* {products} cannot be parsed normally because of key value pairs */}

            {/* {products.map((item)=>{
                // return item.productName;
                return <li key={item.id}>{item.productName}</li>;
            })} */}
            <ProductList products={products}/> 
            {/* sending products as props in the productList component */}
    </div>
}

export default Product;