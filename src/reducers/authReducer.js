import { types } from "../types/types";


const initialState = {
    uid: 123123,
    name:'Erick Paredes',
    dir:{
        b:12
    }
}


export const authReducer = ( state = {}, action) =>{

    switch (action.type) {
        case types.login:
            
            return{
                uid: action.payload.uid,
                name: action.payload.displaName
            }
            
        case types.logout:
            return {}    

        default:
            return state;
    }


}