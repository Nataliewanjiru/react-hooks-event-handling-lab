// Code Keypad Component Here

function Keypad (){

const inputValue=(event)=>{
  console.log("Entering password...")
  console.log(event.target.value)
}
    return (
        <div>
            <form>
                <input type="password"  onChange={inputValue}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Keypad;