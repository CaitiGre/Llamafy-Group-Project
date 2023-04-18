import { Box } from "@mui/material";
import style from '../RegistrationPage/Registration.module.css';

export default function GenderButtons({ data, handleButtonClick }) {
    return (
        <>
            <Box display="flex" flexDirection="column" alignItems="center">
                <label htmlFor="gender" className={style["register-label"]}>Style Preference</label>
                <div className={style["gender-div"]}>
                    <button
                        type="button"
                        className={`${style['gender-button']} ${data.gender === 'male' ? style['selected'] : ''}`}
                        onClick={() => handleButtonClick('male')}
                    >
                        Male
                    </button>
                    <button
                        type="button"
                        className={`${style['gender-button']} ${data.gender === 'female' ? style['selected'] : ''}`}
                        onClick={() => handleButtonClick('female')}
                    >
                        Female
                    </button>
                    <button
                        type="button"
                        className={`${style['gender-button']} ${data.gender === 'other' ? style['selected'] : ''}`}
                        onClick={() => handleButtonClick('other')}
                    >
                        All
                    </button>
                </div>
            </Box>
        </>
    );
};