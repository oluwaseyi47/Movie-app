import React from 'react' 


const SearchBox = (props) => {
    return (
        <div className='col col-sm-4'>
            <input className='form-control search-box'
            value={props.value}
            onChange ={(event) => props.setSearchValue(event.target.value)}
             placeholder='Type here to search...'>    
            </input>
        </div>
    )
}

export default SearchBox;