import React from 'react';
import { connect } from 'react-redux';
import { decremtn__value, increment__value } from '../services/actionCounter/actionCounter';

const Counter = (increment__value, decremtn__value, count) => {
    return (
        <div className="container">
            <h3>Count : {count}</h3>
            <button className="btn btn-primary">Increment</button>
            <button className="btn btn-danger">Decrement</button>
        </div>
    );
};

export default