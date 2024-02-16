// import React from 'react';
// import '../Style/front.css';
// import prod from '../Images/contact.jpg';

// const Product = () => {

//     return (
//         <>
//             <div className="product-card">
//                 <img src={prod} alt="Product 2" />
//                 <h3>Product 13</h3>
//                 <p>Description of Product 2</p>
//                 <button>Add to Cart</button>
//             </div>
//             <div className="product-card">
//                 <img src={prod} alt="Product 2" />
//                 <h3>Product 14</h3>
//                 <p>Description of Product 2</p>
//                 <button>Add to Cart</button>
//             </div>
//             <div className="product-card">
//                 <img src={prod} alt="Product 2" />
//                 <h3>Product 15</h3>
//                 <p>Description of Product 2</p>
//                 <button>Add to Cart</button>
//             </div> <div className="product-card">
//                 <img src={prod} alt="Product 2" />
//                 <h3>Product 13</h3>
//                 <p>Description of Product 2</p>
//                 <button>Add to Cart</button>
//             </div>
//             <div className="product-card">
//                 <img src={prod} alt="Product 2" />
//                 <h3>Product 14</h3>
//                 <p>Description of Product 2</p>
//                 <button>Add to Cart</button>
//             </div>
//             <div className="product-card">
//                 <img src={prod} alt="Product 2" />
//                 <h3>Product 15</h3>
//                 <p>Description of Product 2</p>
//                 <button>Add to Cart</button>
//             </div>
//         </>
//     )
// }

// export default Product;



import React, { useEffect, useState } from 'react';
import '../Style/front.css';
import Card from '../partial/card';
import { toast } from 'react-toastify'
import { getAllProducts } from '../services/product';
import { getAllCategories } from '../services/category';

const Product = () => {

    const [productData, setProductData] = useState(null);
    // const [category, setCategory] = useState(0);

    // useEffect(() => {
    //     const getCategory = async () => {
    //         try {
    //             const response = await getAllCategories();

    //         }
    //         catch {

    //         }
    //     }
    // }, [])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await getAllProducts();
                // const data = await JSON.stringify(response.products);
                // const data = await (response);

                console.log(JSON.stringify(data))
                if (productData) {
                    setProductData(
                        {
                            products: [...productData.products, ...data.products],
                        }
                    )
                }
                else {
                    setProductData(data)
                }

            } catch (err) {
                console.log(err);
                if (err.message === "Network Error") {
                    toast.error("Error: Please Try again Later")
                }
                else {
                    toast.warn("error: " + err)

                }
            }
        };
        getProducts();
    }, [])

    const displayCard = () => {
        return (
            (productData) &&
            productData.products.map((ele,index) => {
                return (
                    <>
                        <Card key={ele.srno} product={ele} />
                    </>
                )
            })
        )
    }

    return (
        <>
            <div className='product'>
                {productData ? displayCard() : <h1> Try again later</h1>}
            </div>
        </>
    )

}

export default Product;