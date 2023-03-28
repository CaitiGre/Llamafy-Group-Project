import { Box } from "@mui/material";

export default function GenderButtons({ data, handleButtonClick }) {
    return (
        <>
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
        </>
    );
};