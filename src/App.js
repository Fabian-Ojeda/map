import React, { useState, useEffect }from "react";
import MyMap from "./components/MyMap";

function App() {

    const [points, setPoints] = useState([])

    useEffect(() => {
        consumeData()
        document.title= 'Mapita bonito '
    }, [])

    const consumeData = async () => {
        const answer = await fetch('https://apipoints.herokuapp.com/pointsCrash')
        const answerJson = await answer.json()
        console.log(answerJson)
        setPoints(answerJson)
    }
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <MyMap
        points={points}/>
    </div>
  );
}

export default App;
