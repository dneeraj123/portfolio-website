import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "./reducers";

const ProfileContext = createContext();

const Context = ({children }) => {
    
    const [profileState, dispatch] = useReducer(dataReducer, {
        name : "Neeraj D"
    });

    return (
        <ProfileContext.Provider value={{ profileState, dispatch }}>
            {children}
        </ProfileContext.Provider>
    )
}

export default Context;
export const useProfileContext = () => useContext(ProfileContext);