const incrementAsync=()=>{
    return(dispatch)=>{
        setTimeout(()=>{
            dispatch({type:'INCREMENT'});
        },6000);
    };
};

export default incrementAsync;