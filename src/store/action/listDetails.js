import  {CHECK_LOGIN,LIST_DETAILS,ERROR_LOGIN,LOGOUT}  from '../action/actionTypes';
import jsonlogin from '../../json/Login.json'
import boardlist from '../../json/DashBoardPage.json'
const login_details=(restrue)=>{
    return{
        type:CHECK_LOGIN,
        res:restrue
    };

}

const login_error=()=>{
    return{
        type:ERROR_LOGIN,
        reserror:"Username OR Password  is Incorrect"
    };

}

const listing_details=(details)=>{
    return{
        type:LIST_DETAILS,
        reslist:details
    };
}


const logout_details=(res)=>{
    return{
        type:LOGOUT,
        reslout:res
    };

}

export const checkLogin=(list)=>{

    return dispatch => {

        const jsonSucces=jsonlogin;
        if((jsonSucces.username==list.username) && (jsonSucces.password==list.password)){


            dispatch(login_details(true));
        }
        else{
            dispatch(login_error());
        }


    };
};

export const listDetails=()=>{

    return dispatch => {
        const details=boardlist;

        dispatch(listing_details(details));



    };
};
export const logoutDetails=()=>{

    return dispatch => {

        dispatch(logout_details(false));



    };
};