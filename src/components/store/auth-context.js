import React from "react"

const AuthContext = React.createContext({
    isLoggedIn: false,
    isGuestUser: false
})

export default AuthContext