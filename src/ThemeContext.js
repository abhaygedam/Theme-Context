import React, { useState } from "react";
import { createContext } from "react";

const light = {
     backgroundColor: "white",
     color: "black",
      borderColor:"black"
}


const dark = {
     backgroundColor: "black",
    color: "white",
     borderColor:"white"
}

export const ThemContext = createContext({});

function ThemeContext({ children }) {
    const [themeColor, setThemeColor] = useState(light);
    
    const handleChangeTheme = () => {
        setThemeColor(themeColor.color=="black" ? dark : light);
    }

    return (
        <>
            <ThemContext.Provider value={ {theme:themeColor , handleChangeTheme}}>{children}</ThemContext.Provider>
        </>
    );
}

export default ThemeContext;

