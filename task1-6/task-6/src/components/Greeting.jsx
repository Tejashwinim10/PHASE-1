import React from 'react';
import PropTypes from 'prop-types';

const Greeting = (props) => {
    return <div className='crud'>
        Hello, {props.name}!{props.space} {props.message}
    </div>;
};

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

export default Greeting;
