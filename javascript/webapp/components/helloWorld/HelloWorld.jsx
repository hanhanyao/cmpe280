// import require packages
import React from 'react';

// import style
import './HelloWorld.scss';

class HelloWorld extends React.PureComponent {
    // init setup, only call once when component is created
    // props is immutatable
    // component will change base on state
    constructor(props) {
        super(props);

        // create state from props that pass down from parent
        this.state = {
            name: props.name
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
        console.log(this.state.name);
        return (
            <div className="helloName">
                Hello {this.state.name}!
            </div>
        );
    }
}

export default HelloWorld;