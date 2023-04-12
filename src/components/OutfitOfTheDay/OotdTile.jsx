import React from 'react'

const OotdTile = ( {imgLink, description} ) => {

    return (
        <React.Fragment>
            <img src={imgLink}/>
            <div>
                {description}
            </div>
        </React.Fragment>
    )

}

export default OotdTile;