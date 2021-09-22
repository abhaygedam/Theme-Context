import { useContext } from "react";
import "./Style.css";
import { ThemContext } from "../ThemeContext";
import Form from './Form';

const Navbar = () => {

   
const {theme, handleChangeTheme} = useContext(ThemContext);

    return (
        document.body.style.backgroundColor = theme.backgroundColor,
        document.body.style.color = theme.color,
        <>
       
            <div bodyAttributes={theme} >  
            <div className="navbar">
                <button>Coursera</button>
                <div className="content">
                    <button onClick={handleChangeTheme}>Change Theme</button>
                    <p>Contack Us</p>
                </div>
            </div>
            </div>

            <Form  theme={theme} ></Form>
          </>    
    );
}

export default Navbar;