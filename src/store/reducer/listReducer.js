import {CHECK_LOGIN, ERROR_LOGIN, LIST_DETAILS,LOGOUT} from '../action/actionTypes';


const initialState={
    userList:false,
    errors:'',
    listUsers:[],
    errorLogin:[]


}
export const addSunject=(state=initialState,action)=> {
    switch (action.type) {

        case CHECK_LOGIN:

            return {...state,
                userList:action.res
            };

        case LIST_DETAILS:

            return {...state,
                listUsers:action.reslist.user
            };

        case ERROR_LOGIN:

            return {...state,
                errorLogin:action.reserror
            };
        case LOGOUT:
            return {...state,
                userList:action.reslout
            };


        default:
            return state;
    }
};

export default  addSunject;
