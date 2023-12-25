const searchReducer = (state= "", action)=>{
    switch(action.type){
        case "UPDATE_SEARCH":
            return action.payload;
        default:
            return "";    
    }
}

export default searchReducer