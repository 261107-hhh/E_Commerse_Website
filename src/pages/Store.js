// import Category from "../component/Category";
// import Product from "./Product";
import banners from '../Images/banner.jpg';


import { useEffect, useState } from "react";
import { getAllCategories } from "../services/category";
import { toast } from 'react-toastify'
import { getAllProductByCategoryID, getAllProducts } from "../services/product";
import Card from "../partial/card";
import { useParams } from "react-router-dom";



const Store = () => {

    const { categoryId } = useParams(1)
    const [productData, setProductData] = useState(null)
    const [searchValue, setSearchValue] = useState('');
    const [filteredItems, setFilteredItems] = useState(null);
    // const [flag, setFlag] = useState(false);
    const [category, setCategory] = useState(null);
    // const [product, setProducts] = useState(null);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const data = await getAllCategories();

                console.log(JSON.stringify(data))
                if (category) {
                    setCategory(
                        {
                            categories: [...category.categories, ...data.categories],
                        }
                    )
                }
                else {
                    setCategory(data)
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
        getCategories();
    }, [])

    useEffect(() => {
        const getProducts = async () => {
            try {
                let data;
                if (!categoryId) {
                    data = await getAllProducts();

                } else {
                    data = await getAllProductByCategoryID(categoryId);
                }
                // const data = await JSON.stringify(response.products);
                // const data = await (response);

                console.log(JSON.stringify(data))
                if (productData) {
                    await setProductData(
                        {
                            products: [...productData.products, ...data.products],
                        }
                    )
                }
                else {
                    await setProductData(data)
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
    }, [categoryId])


    const filterItems = (searchText) => {
        const filtered = category.categories.filter((item) =>
            item.name.includes(searchText));
        setFilteredItems(filtered);
        console.log(JSON.stringify(filtered) + ": This is filtered ");
        console.log(JSON.stringify(filteredItems) + ": This is filtered items ");

    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        console.log(e.target.value);
        filterItems(value);
        setSearchValue(value)
    }



    const loadByCategoryID = async (id) => {
        await setProductData(null)
        console.log("call for get by categories: " + id)
        let getProductsByCategoryID = null;
        if (id === 0) {
            getProductsByCategoryID = await getAllProducts();
        }
        else {
            getProductsByCategoryID = await getAllProductByCategoryID(id);
        }
        console.log(JSON.stringify(productData) + "categories products");

        // if (productData) {
        //     setProductData(
        //         {
        //             products: [...productData.products, ...getProductsByCategoryID.products],
        //         }
        //     )
        // }
        // else {
        setProductData(getProductsByCategoryID)
        // }

        // if (product) {
        //     setProducts({
        //         products: [...product.products, ...getProductsByCategoryID.products],
        //     })
        // }
        // else {
        //     setProducts(getProductsByCategoryID);
        // }
        console.log(JSON.stringify(productData) + "categories products");

    }


    const displayCard = () => {
        return (
            (productData) &&
            productData.products.map(ele => (
                <Card key={ele.srno} product={ele} />
            ))
        );
    };


    const displayCategory = () => {

        return (
            <>

                {/* <div className='d-flex flex-wrap align-self-stretch' > */}

                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" style={{
                        // "width":"100%",
                        // "margin": "2px 10px auto 10px"
                        "display": "block",
                        "marginRight": "10px",
                        "marginLeft": "2px"
                    }} >
                        Categories<span className='caret'></span>
                    </button>

                    <ul className="dropdown-menu">
                        <input className='form-control'
                            id='myInput1'
                            type='text'
                            value={searchValue}
                            onChange={handleInputChange}
                            placeholder='Search..'
                        />
                        <li onClick={() => loadByCategoryID(0)}>All

                        </li>
                        {(searchValue === '' ? category.categories : filteredItems).map(item => (


                            <li key={item.srno} style={{ "border": "2px solid red" }}
                                onClick={() => loadByCategoryID(item.srno)}>{item.name}
                            </li>

                        ))}
                        {searchValue !== '' && (filteredItems === null || filteredItems.length === 0) && <h1> No result</h1>}

                    </ul >
                </div >
                {/* </div> */}
            </>
        )
    }

    return (
        <>
            <banner>
                <div>
                    <img className='img-fluid banner' src={banners} alt='BannerImage' />
                </div>
            </banner>

            <section>
                <div className='d-flex mb-4'>
                    <div className='d-flex flex-wrap  align-self-stretch'>
                        {(category) ? displayCategory() :
                            <h3>Try again later</h3>}
                    </div>
                    <div className='d-flex flex-wrap  align-self-stretch'>
                        <div className='product' style={
                            {
                                "display": "flex",
                                "flexDirection": "row",
                                "flexWrap": "wrap",
                                "alignContent": "spaceBetween",
                                "justifyContent": "space-evenly"
                            }
                        }>
                            {productData ? displayCard() : <h1> Try again later</h1>}
                        </div>

                    </div>
                </div>
            </section >
        </>
    )
}
export default Store;