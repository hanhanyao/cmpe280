// import require packages
import React from 'react';

// import style
import './Header.scss';

class Header extends React.PureComponent {
    // init setup, only call once when component is created
    // props is immutatable
    // component will change base on state
    constructor(props) {
        super(props);

        // create state from props that pass down from parent
        this.state = {

        }
    }

    // call when props change
    static getDerivedStateFromProps(props, state) {
    
    }

    // call after component is mounted to the dom
    // add listenner here if needed
    componentDidMount() {

    }

    // call after component update
    componentDidUpdate(prevProps, prevState) {

    }

    // render the React component or html component to the dom -> draw to browser
    // should return a single component
    render() {
        return (
            <header id="header">
                This is from Header
            </header>
        );
    }
}

export default Header;