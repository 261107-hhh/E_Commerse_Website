import React from 'react';
import Navbar from '../partial/navbar';
import Footer from '../partial/footer';
import '../Style/front.css';
import banners from '../Images/banner.jpg';
import Category from '../component/Category';
import Product from './Product';

const Front = () => {

    return (
        <>
            <Navbar />

            <div className='container1'>
                <div>
                    <img className='img-fluid banner' src={banners} alt='BannerImage' />
                </div>

                <div className='d-flex flex-row'>
                    <div className='d-flex flex-wrap' style={{ marginLeft: '10px', zIndex: '0' }}>
                        <Category />
                    </div>
                    <div className='d-flex justify-content-around flex-wrap '>
                        {/* Product cards */}
                        <Product />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Front;

























// import React from 'react';
// import Navbar from '../partial/navbar';
// import Footer from '../partial/footer';
// import '../Style/front.css';
// import banner from '../Images/banner.jpg';
// import prod from '../Images/contact.jpg';
// import { useState } from 'react';

// const Front = () => {
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [searchValue, setSearchValue] = useState('');
//     const [filteredItems, setFilteredItems] = useState([]);
//     const items = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Angular', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Angular'];

//     const handleInputChange = (event) => {
//         const { value } = event.target;
//         setSearchValue(value.toLowerCase());
//         filterItems(value.toLowerCase());
//     };

//     const filterItems = (searchText) => {
//         const filtered = items.filter((item) =>
//             item.toLowerCase().includes(searchText)
//         );
//         setFilteredItems(filtered);
//     };

//     const handleCategorySelect = (category) => {
//         setSelectedCategory(category);
//     };

//     return (
//         <>
//             <Navbar />

//             <div className='container1'>
//                 <banner>
//                     <img className='img-fluid banner' src={banner} alt='BannerImage' />
//                 </banner>

//                 <div className='d-flex flex-row'>
//                     <div className='d-flex flex-wrap' style={{ marginLeft: '10px', zIndex: '0' }}>

//                         <div className='dropdown'>
//                             <button
//                                 className='btn btn-primary dropdown-toggle'
//                                 type='button'
//                                 data-toggle='dropdown'
//                             >
//                                 Select Category
//                                 <span className='caret'></span>
//                             </button>
//                             <ul className='dropdown-menu'>
//                                 <input
//                                     className='form-control'
//                                     id='myInput'
//                                     type='text'
//                                     value={searchValue}
//                                     onChange={handleInputChange}
//                                     placeholder='Search..'
//                                 />
                                
//                                 {(searchValue === '' ? items : filteredItems).map((item, index) => (
//                                     <li key={index}>
//                                         <a
//                                             href='#'
//                                             onClick={() => handleCategorySelect(item)}
//                                         >
//                                             {item}
//                                         </a>
//                                     </li>
//                                 ))}
//                                 {filteredItems.length === 0 && searchValue !== '' && (
//                                     <li>No results found.</li>
//                                 )}
//                             </ul>
//                         </div>

//                         {selectedCategory && (
//                             <div className='selected-category'>
//                                 Selected Category: {selectedCategory}
//                             </div>
//                         )}
//                     </div>
//                     <div className='d-flex justify-content-around flex-wrap '>
//                         {/* Product cards */}
//                         <div className="product-card">
//                             <img src={prod} alt="Product 2" />
//                             <h3>Product 13</h3>
//                             <p>Description of Product 2</p>
//                             <button>Add to Cart</button>
//                         </div>
//                         <div className="product-card">
//                             <img src={prod} alt="Product 2" />
//                             <h3>Product 14</h3>
//                             <p>Description of Product 2</p>
//                             <button>Add to Cart</button>
//                         </div>
//                         <div className="product-card">
//                             <img src={prod} alt="Product 2" />
//                             <h3>Product 15</h3>
//                             <p>Description of Product 2</p>
//                             <button>Add to Cart</button>
//                         </div> <div className="product-card">
//                             <img src={prod} alt="Product 2" />
//                             <h3>Product 13</h3>
//                             <p>Description of Product 2</p>
//                             <button>Add to Cart</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default Front;
