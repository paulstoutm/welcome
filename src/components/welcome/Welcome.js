import React from 'react';
import Clock from '../clock/Clock'

function Welcome(props) {
    return (
        <h1 className="Welcome">
            Welcome, {props.name}!
            <Clock/>
        </h1>

    );
}

export default Welcome;