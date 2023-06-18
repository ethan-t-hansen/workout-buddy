import { useWorkoutsContext } from "./useWorkoutsContext"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {

    const { dispatch } = useAuthContext()

    const { dispatch: workoutsDispatch } = useWorkoutsContext()

    const logout = () => {
        // remove token from storage
        localStorage.removeItem('user')

        // dispatch logout option
        dispatch({type: 'LOGOUT'})
        dispatch({type: 'SET_WORKOUTS', payload: null})
    }

    return {logout}

}