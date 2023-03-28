import { useState } from "react";
import '../components/Registration.css';
import { Box } from "@mui/material";


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

    return (
        <>
            <h1>REGISTER</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                        <Box display="flex" flexDirection="row">
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <label htmlFor="first-name">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                id="first-name"
                                value={data.firstName}
                                onChange={handleChange}
                                placeholder="Llama"
                            />
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <label htmlFor="last-name">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                id="last-name"
                                value={data.lastName}
                                onChange={handleChange}
                                placeholder="Alpaca"
                            />
                        </Box>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={data.email}
                                onChange={handleChange}
                                placeholder="llama@lavenderllama.co.nz"
                            />
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <label htmlFor="location">Primary Location</label>
                            <input
                                type="text"
                                name="location"
                                id="location"
                                value={data.location}
                                onChange={handleChange}
                                placeholder="Which city should llama base the recommendations?"
                            />
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <label htmlFor="gender">Style Preference</label>
                            <div className="gender-div">
                                <button
                                    type="button"
                                    className={`gender-button ${data.gender === 'male' ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('male')}
                                >
                                    Male
                                </button>
                                <button
                                    type="button"
                                    className={`gender-button ${data.gender === 'female' ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('female')}
                                >
                                    Female
                                </button>
                                <button
                                    type="button"
                                    className={`gender-button ${data.gender === 'other' ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('other')}
                                >
                                    All
                                </button>
                            </div>
                        </Box>
                        <button id="submit-button" type="submit">Submit</button>
                        </Box>

                </form>
            </div>
        </>
    );
};

export default RegistrationPage;
