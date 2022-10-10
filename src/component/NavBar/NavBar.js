import React from 'react';
import List from '../List/List';

const NavBar = () => {
    const menubar = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'about', path: '/about' },
        { id: 3, name: 'contact', path: '/contact' }
    ]


    return (
        <nav>
            <ul>
                {
                    menubar.map(item => <List key={item.id} item={item}></List>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;