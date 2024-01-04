import React from "react";
import { connect } from "react-redux";
import incrementAsync from "./actions";

const CounterComponent=({ counter,incrementAsync })=>{
    return(
        <div>
            <p>Counter:{counter}</p>
            <button onClick={incrementAsync}>Increment Async</button>
        </div>
    );
};

const mapStateToProps=(state)=>{
    return{
        counter: state.counter
    };
};

export default connect(mapStateToProps, { incrementAsync })(CounterComponent);