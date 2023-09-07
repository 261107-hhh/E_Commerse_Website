import { useState } from 'react';
const Category = () => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const items = [
        'HTML',
        'CSS',
        'JavaScript',
        'jQuery',
        'Bootstrap',
        'Angular',
        'CSS',
        'JavaScript',
        'jQuery',
        'Bootstrap',
        'Angular', 'CSS',
        'JavaScript',
        'jQuery',
        'Bootstrap',
        'Angular',
    ];

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchValue(value.toLowerCase());
        filterItems(value.toLowerCase());
    };

    const filterItems = (searchText) => {
        const filtered = items.filter((item) =>
            item.toLowerCase().includes(searchText)
        );
        setFilteredItems(filtered);
    };

    return (
        <div className='dropdown '>

            <button
                className='btn btn-primary dropdown-toggle'
                type='button'
                data-toggle='dropdown'
            >
                Select Category
                <span className='caret'></span>
            </button>
            <ul className='dropdown-menu'>
                <input
                    className='form-control'
                    id='myInput1'
                    type='text'
                    value={searchValue}
                    onChange={handleInputChange}
                    placeholder='Search..'
                />
                {(searchValue === '' ? items : filteredItems).map((item, index) => (
                    <li key={index}>
                        <a href='#asd'>{item}</a>
                    </li>
                ))}
                {filteredItems.length === 0 && searchValue !== '' && (
                    <li>No results found.</li>
                )}
            </ul>
        </div>
    )
}

export default Category;