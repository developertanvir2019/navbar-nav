import React, { useState } from 'react';

const List = ({ item }) => {

    const [toggle, setToggle] = useState(false);
    // console.log(item)
    return (
        <div>
            <li ><a href={item.path}>{item.name}</a></li>
            <button onClick={() => setToggle(!toggle)}>change</button>
            <h1 className={`${toggle ? 'd-none' : 'd-flex'}`}>hi lala</h1>

        </div>
    );
};

export default List;