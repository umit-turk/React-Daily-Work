import React from 'react'

const Button = ({handleClick}) => {
    console.log("Button - rerender")
    return (
        <div>
            <button onClick={handleClick} >Sayacı arttır</button>
        </div>
    )
}

export default React.memo(Button);
