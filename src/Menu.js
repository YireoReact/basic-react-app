import React from 'react';
import './Menu.css';

class Menu extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div class="Menu">
                <ul>
                    {this.props.items.map((menuItem, i) => 
                    <li key={i}>
                        <a href={menuItem.link}>{menuItem.name}</a>
                    </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Menu;