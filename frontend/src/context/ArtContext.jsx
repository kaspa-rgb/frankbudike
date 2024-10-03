import { createContext } from "react";
import { artwork } from "../assets/images/imgAssets";

export const ArtContext = createContext();

const ArtContextProvider = (props) => {
    const value = {
        artwork
    }
    return (
        <ArtContext.Provider value={value}>
            {props.children}
        </ArtContext.Provider>
    )
}
export default ArtContextProvider;