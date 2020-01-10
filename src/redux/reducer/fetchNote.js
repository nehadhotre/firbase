const FetchNote = ( INITIAL_STATE= {},action)=>{ 
    switch(action.type){
        case "FETCH-NOTE":
            return action.payload;
            default:
                return "INITIAL-STATE"
    }
}
export default FetchNote;