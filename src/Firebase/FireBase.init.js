import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBase.config";

const initiallizAuthentiasion =  ()=>{
               initializeApp(firebaseConfig);
               
}
export default initiallizAuthentiasion ;