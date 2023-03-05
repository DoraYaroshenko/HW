import React, { useRef, useState } from 'react'

export default function Mission2() {
  const[color,setColor] = useState("black");
  const [text, setText] = useState("");
  const [coins, setCoins] = useState(5);
  const [r, setR] = useState(1);

  const createRandom = () => {
    if (coins > 0) {
      let random = Math.ceil(Math.random() * 6);
      setR(random);
      setCoins(coins - 1);
      if (random == 5 || random == 6) {
        setCoins(coins + 2);
        setColor("green");
        setText("You won");
      }
      else{
        setColor("red");
        setText("You loose");
      }
    }
    else {
      alert("You don't have enough coins, bring more")
    }
  }
  return (
    <div className='container text-center'>
      <h1>You have {coins} coins</h1>
      <h2 style={{color:color}}>{text}</h2>
      <img src={"/images/dice" + r + ".jpg"} />
      <br />
      <button onClick={createRandom} className="btn btn-dark">Roll</button>
    </div>
  )
}
