import React, { useState, useEffect } from "react"


const AuthContext = React.createContext({
    defaultValue: 'Will only be used if not using a provider',
    onLogout: ()=>{console.log('Im just here for better autocompletion')},
    onLogin: (email, password)=>{console.log('Im just here for better autocompletion')},
    onGuestLogin: ()=>{console.log('Im just here for better autocompletion')},
})

export const AuthContextProvider = (props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isGuestUser, setIsGuestUser] = useState(false);

    useEffect(() => {
        const storedLogin = localStorage.getItem("isLoggedIn");
    
        if (storedLogin === "true") {
          setIsLoggedIn(true);
        }
      }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", "true");
        console.log('true: ');
        setIsLoggedIn(true);
      };
    
      const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
      };
    
      const guestLoginHandler =()=>{
        console.log('guestLoginHandler: ');
        setIsGuestUser(true);
      }



    return <AuthContext.Provider value={{
        isLoggedIn,
        isGuestUser,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        onGuestLogin: guestLoginHandler
    }}>{props.children}</AuthContext.Provider>

}

export default AuthContext