import styles from './landingPage.css';

function LandingPage(){
    return(
        <div>
            <div className="landingPageContainer">
            <h1>LLAMAFY</h1>
            <h2>IT'S TIME TO BUTTON UP OR SHUT UP</h2>
            <div className="buttonContainer">
                <button>LOGIN</button>
                <button>REGISTER</button> 
            </div>
        </div>
        <div className="aboutContainer">
            <h2>No time for drama? Trust in Llama!</h2>
            <p>LLAMAFY was created to ease your worries and allow you to make one less decision in your already overwhelming day. Unlike other applications that can make suggestions surrounding potential wardrobe choices, LLAMAFY employs the use of artificial intelligence to account for your temperature, gender and general clothing preferences based on what you already have in your wardrobe.</p>
            <div className="parallaxImage"></div>
        </div>
        <div className="aboutContainer2">
            <p>Simply register with us, answer some basic questions about your current wardrobe and you're done! We can save you up to 16* hours a week in choosing clothes to wear with the simple click of a button.</p>
            <p>*Don't quote us on this. We're just enthusiastic</p>
        </div>
        </div>
        
        
    )
}

export default LandingPage;