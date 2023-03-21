
import React, { useEffect,useState } from "react";
import "./Home.css";
import Product from "./Product";
function Home(){

    const [products,setProduct] = useState([]);
    // console.log(products);
    async function getProductData(){
        const getAPI = await fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products");
        const data = await getAPI.json();
        
        setProduct(data);
    }
    useEffect(()=>{
        getProductData();
    },[])

    
       
    return(
        <>
        <div className="home">
            
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"  alt=""/>
                {/* Product id,title,price,rating,image */}
            {products.map((product,id) => {
                
            return(   
            <div className="home_row">
                
                <Product 
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    rating={Math.ceil(product.rating.rate)}
                    image={product.image}
                />
                <Product 
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    rating={Math.ceil(product.rating.rate)}
                    image={product.image}
                />
                <Product 
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    rating={Math.ceil(product.rating.rate)}
                    image={product.image}
                />
                
                
            </div>

            
          
           
            )
            })
            }        

            
        
               
            
            
            
           
        </div>
        </>
    )
    
}
 export default Home