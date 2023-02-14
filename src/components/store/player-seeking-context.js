import React from "react";

const testManipulateContext =()=>{console.log('temp')}

const PlayerSeekingContext = React.createContext({
    id: Math.random() + Math.random(),
    gamerTag: 'DEFAULTFORAUTOCOMPLETE',
    activisionId: null,
    gamerTagIncludesActivisionId: false,
    searchingCriteria: {
      totalInParty: 1,
      serverLocation: 'DEFAULTFORAUTOCOMPLETE',
      partySizeDesired: 3,
      primaryLanguage: 'DEFAULTFORAUTOCOMPLETE',
      doTestFunction: testManipulateContext}
    })

    export const PlayerSeekingContextProvider = (props)=>{
        const testHandler =()=>{
            console.log('test worked')
        }


        return <PlayerSeekingContext.Provider value={{
            test: 'test',
            onSomeShit: testHandler
        }}>{props.children}</PlayerSeekingContext.Provider>

    }

    // export const AuthContextProvider = (props)=>{
    //     const [isLoggedIn, setIsLoggedIn] = useState(true);
    //     const [isGuestUser, setIsGuestUser] = useState(false);
    
    //     useEffect(() => {
    //         const storedLogin = localStorage.getItem("isLoggedIn");
    //         const storedGuestStatus = localStorage.getItem("isLoggedAsGuest")
        
    //         if (storedLogin === "true" || storedGuestStatus) {
    //           setIsLoggedIn(true);
    //         }
    //       }, []);
    
    //     const loginHandler = (guest) => {
    //       if (guest) {
    //         localStorage.setItem("isLoggedAsGuest", true);
    //         setIsGuestUser(true);
    //       }
    //         localStorage.setItem("isLoggedIn", "true");
    //         setIsLoggedIn(true);
    //       };
        
    //       const logoutHandler = () => {
    //         setIsLoggedIn(false);
    //         setIsGuestUser(false);
    //         localStorage.removeItem("isLoggedIn");
    //         localStorage.removeItem("isLoggedAsGuest");
    //       };
  
        // return <AuthContext.Provider value={{
        //     isLoggedIn,
        //     isGuestUser,
        //     onLogin: loginHandler,
        //     onLogout: logoutHandler,
        // }}>{props.children}</AuthContext.Provider>
    
    // }

export default PlayerSeekingContext