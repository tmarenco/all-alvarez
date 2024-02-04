import { useDispatch, useSelector } from "react-redux";
import alvarezApi from "../assets/api/alvarezApi";
import { onChecking, onLogin, onLogout, clearErrorMessage, onCheckingCreate, onCreateUser } from "../store/auth/authSlice";

export const useAuthStore = ( ) => {

    const { statusLogin, user, errorMessageLogin, statusCreating, errorMessageCreate } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        dispatch( onChecking() );
        try {
            const { data } = await alvarezApi.post('/auth', {email, password});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch( onLogin({username: data.username, uid: data.uid}) );
        } catch (error) {
            console.log(error)
            const { response } = error;
            dispatch(onLogout(response.data.msg));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const startRegister = async({ username, email, password }) => {
        dispatch( onCheckingCreate() );
        try {
            await alvarezApi.post('/auth/new', {username, email, password});
            dispatch( onCreateUser({errorMessage: undefined, status: 'created'}) );
        } catch (error) {
            console.log(error)
            const { response } = error;
            dispatch(onCreateUser({ errorMessage: response.data.msg, status: 'not-created' }));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }


    return {
        statusLogin,
        errorMessageLogin,
        user,
        statusCreating,
        errorMessageCreate,
        startLogin,
        startRegister
    }
}