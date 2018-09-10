// import require modules 
import React from 'react';
import { render } from 'react-dom';

// import components
import HelloWorld from'./components/helloWorld/HelloWorld.jsx';

render(
   <HelloWorld
        name = 'WebKeepers'
   />,
    document.getElementById('mainWrapper'));