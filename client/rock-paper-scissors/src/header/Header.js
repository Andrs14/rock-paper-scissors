import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header id="header">
                <span className="logo">ROCK, PAPER, SCISSORS!</span>
            </header>
        );
    }
}

export default Header;