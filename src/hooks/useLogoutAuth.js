// firebase
import {getAuth, signOut} from 'firebase/auth'

export const useLogoutAuth = () => {
    const auth = getAuth()

    const logout = () => {
        signOut(auth)
    }

    return logout
}