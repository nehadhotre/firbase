import { database } from "../../firebase";
export const createNote = (item) => {
    return async (dispatch) => { database.push(item) }
};

export const fetchNote=()=>{
    return async (dispatch)=>{
        await database.on("value",(snapshot)=>{
            let a=snapshot.val();
            dispatch({type:"FETCH-NOTE",payload:a})
        })}
};

export const removeNote =(id)=>{
    return async (dispatch)=>{
        database.child(id).remove();
    }
}
