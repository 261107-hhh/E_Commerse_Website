// {
//     (searchValue === '' ? items : filteredItems).map((item, index) => (
//         <li key={index}>
//             <a href='#asd'>{item}</a>
//         </li>
//     ))
// }
// {
//     filteredItems.length === 0 && searchValue !== '' && (
//         <li>No results found.</li>
//     )
// }



import { useEffect, useState } from "react";
import { getAllCategories } from "../services/category";
import { toast } from 'react-toastify'
import { getAllProductByCategoryID } from "../services/product";

const Category = () => {

    const [searchValue, setSearchValue] = useState('');
    const [filteredItems, setFilteredItems] = useState(null);
    // const [flag, setFlag] = useState(false);
    const [category, setCategory] = useState(null);
    const [product, setProducts] = useState(null);

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
        // if (value === '') { setFilteredItems(null) }

        setSearchValue(value)

        // console.log(filteredItems[0])
    }



    const loadByCategoryID = async (id) => {
        console.log("call for get by categories: " + id)
        const getProductsByCategoryID = await getAllProductByCategoryID(id);
        if (product) {
            await setProducts({
                products: [...product.products, ...getProductsByCategoryID.products],
            })
        }
        else {
            await setProducts(getProductsByCategoryID);
        }
        console.log(product + "categories products");

    }

    const displayCategory = () => {

        return (
            <>
                <ul className="dropdown-menu">
                    <input className='form-control'
                        id='myInput1'
                        type='text'
                        value={searchValue}
                        onChange={handleInputChange}
                        placeholder='Search..'
                    />

                    {(searchValue === '' ? category.categories : filteredItems).map((item, index) => (
                        <li key={item.srno}>
                            <a onClick={() => loadByCategoryID(item.srno)}>{item.name}</a>
                        </li>
                    ))}
                    {/* {(filteredItems.isNull())} */}

                </ul>
            </>
        )
    }

    return (
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" >
                    Search Categories<span className='caret'></span>
                </button>

                {(category) ? displayCategory() :
                    <h3> Not Present</h3>}


            </div >
        </>
    )
}
export default Category;