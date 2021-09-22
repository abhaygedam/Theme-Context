import "./Style.css";

const Form = ({theme}) => {
    return (
        <div>
            <div className="form" style={theme}>
                <label>Name</label><br/>
                <input type="text" placeholder="Enter Name" /> <br />
                 <label>Email</label><br/>
                <input type="text" placeholder="Enter Email" /> <br />
                 <label>Mobile Number</label><br/>
                <input type="text" placeholder="Enter Mobile Number" /> <br/>
                <input type="submit" name="Submit" />
             </div>
        </div>
    );
}

export default Form;