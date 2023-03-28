import { useState } from "react";
import '../RegistrationPage/Registration.css';
import { Box } from "@mui/material";
import NamesBox from "./NameBox";
import EmailBox from "./EmailBox";
import LocationBox from "./LocationBox";
import GenderButtons from "./GenderButtons";


function RegistrationPage() {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
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
        console.log(data);
    };
    //PASSWORD??
    return (
        <>
            <h1>REGISTER</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                        <NamesBox data={data} handleChange={handleChange} />
                        {/*Need to add alert function if email entered is already in use.*/}
                        <EmailBox data={data} handleChange={handleChange} />
                        <LocationBox data={data} handleChange={handleChange} />
                        <GenderButtons data={data} handleButtonClick={handleButtonClick} />
                        <button id="submit-button" type="submit">Submit</button>
                    </Box>

                </form>
            </div>
        </>
    );
};

export default RegistrationPage;
