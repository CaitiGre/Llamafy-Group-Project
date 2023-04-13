import { useState } from "react";
import style from '../RegistrationPage/Registration.module.css';
import { Box } from "@mui/material";
import bcrypt from 'bcryptjs';
import NamesBox from "./NameBox";
import EmailBox from "./EmailBox";
import LocationBox from "./LocationBox";
import GenderButtons from "./GenderButtons";
import PasswordBox from "./PasswordBox";

const salt = bcrypt.genSaltSync(10);

function RegistrationPage() {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repassword: '',
        location: '',
        gender: ''
    });

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };


    const handleButtonClick = (gender) => {
        setData({ ...data, gender });
    };

    //once backend set up, will send data there. Just here for dummy testing atm.
    const handleSubmit = (event) => {
        event.preventDefault();
        if (data.password !== data.repassword) {
            alert("Your passwords must match.");
        } else if (Object.values(data).includes('')) {
            alert("All details on this form are required.")
        } else {
            const hashedPassword = bcrypt.hashSync(data.password, salt);
            console.log(data);
            console.log(hashedPassword);
        }    
    };
   
    return (
        <>
            <h1 className={style["register-h1"]}>REGISTER</h1>
            <div className={style["form-container"]}>
                <form onSubmit={handleSubmit}>
                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                        <NamesBox data={data} handleChange={handleChange} />
                        {/*Need to add alert function if email entered is already in use.*/}
                        <EmailBox data={data} handleChange={handleChange} />
                        <PasswordBox data={data} handleChange={handleChange} />
                        <LocationBox data={data} handleChange={handleChange} />
                        <GenderButtons data={data} handleButtonClick={handleButtonClick} />
                        <button id={style["submit-button"]} type="submit">Submit</button>
                    </Box>

                </form>
            </div>
        </>
    );
};

export default RegistrationPage;
