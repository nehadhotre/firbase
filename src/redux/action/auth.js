import { database,auth,googleProvider } from "../../firebase";

export const GoogleAuth=()=>{
return(dispatch)=>{
    auth.signInWithPopup(googleProvider)
}
};
