import { useState } from "react";
import '../components/Registration.css';

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
            <div>
                <h1>REGISTER</h1>
                <form onSubmit={handleSubmit}>
                    <div className="name-div">
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                value={data.firstName}
                                onChange={handleChange}
                                placeholder="Llama"
                            />
                        </label>
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="lastName"
                                value={data.lastName}
                                onChange={handleChange}
                                placeholder="the Cow"
                            />
                        </label>
                    </div>
                    <div className="email-div">
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                placeholder="llama@lavenderllama.co.nz"
                            />
                        </label>
                    </div>
                    <div className="location-div">
                        <label>
                            Primary Location:
                            <input
                                type="text"
                                name="primaryLocation"
                                value={data.primaryLocation}
                                onChange={handleChange}
                                placeholder="Which city should llama base the recommendations?"
                            />
                        </label>
                    </div>
                    <div className="gender-div">
                        <label>
                            Style Preference:
                            <button
                                type="button"
                                className={`gender-button ${data.gender === 'male' ? 'selected' : ''}`}
                                onClick={() => handleButtonClick('male')}
                            >Male
                            </button>
                            <button
                                type="button"
                                className={`gender-button ${data.gender === 'female' ? 'selected' : ''}`}
                                onClick={() => handleButtonClick('female')}
                            >Female
                            </button>
                            <button
                                type="button"
                                className={`gender-button ${data.gender === 'other' ? 'selected' : ''}`}
                                onClick={() => handleButtonClick('other')}
                            >All
                            </button>
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default RegistrationPage;
