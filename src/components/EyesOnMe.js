// Code EyesOnMe Component Here


function EyesOnMe(){

    const gotFocus=()=>{
        console.log("Good!")      
    }

    const returnFocus=()=>{
        console.log("Hey! Eyes on me!")
       
    }
    return(
        <>
        <button onFocus={gotFocus} onBlur={returnFocus}>Eyes on me</button>
        </>
    )
}

export default EyesOnMe;