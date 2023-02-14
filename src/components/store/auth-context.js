import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    defaultValue: 'Will only be used if not using a provider',
    onLogout: ()=>{console.log('Im just here for better autocompletion')},
    onLogin: (guest)=>{console.log('Im just here for better autocompletion')},
    onGuestLogin: ()=>{console.log('Im just here for better autocompletion')},
})


export const AuthContextProvider = (props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isGuestUser, setIsGuestUser] = useState(false);

    useEffect(() => {
        const storedLogin = localStorage.getItem("isLoggedIn");
        const storedGuestStatus = localStorage.getItem("isLoggedAsGuest")
    
        if (storedLogin === "true" || storedGuestStatus) {
          setIsLoggedIn(true);
        }
      }, []);

    const loginHandler = (guest) => {
      if (guest) {
        localStorage.setItem("isLoggedAsGuest", true);
        setIsGuestUser(true);
      }
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
      };
    
      const logoutHandler = () => {
        setIsLoggedIn(false);
        setIsGuestUser(false);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("isLoggedAsGuest");
      };

    return <AuthContext.Provider value={{
        isLoggedIn,
        isGuestUser,
        onLogin: loginHandler,
        onLogout: logoutHandler,
    }}>{props.children}</AuthContext.Provider>

}

export default AuthContext