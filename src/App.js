import React, { useState, useEffect }from "react";
import MyMap from "./components/MyMap";

function App() {

    const [points, setPoints] = useState([])

    useEffect(() => {
        consumeData()
        document.title= 'Mapita bonito '
    }, [])

    const consumeData = async () => {
        const answer = await fetch('https://trinsk-backend.herokuapp.com/zones')
        const answerJson = await answer.json()
        console.log(answerJson)
        //setPoints(answerJson)
        /*var newPoints = [
            {"centroid": {"lon": -75.60272578, "lat": 6.219015529999999}, "radius": 0.002646001349619869, "riskTotal": 23, "numberPoints": 11},
            {"centroid": {"lon": -75.54994311, "lat": 6.264764710000001}, "radius": 0.002646001349619869, "riskTotal": 20, "numberPoints": 8},
            {"centroid": {"lon": -75.57968545, "lat": 6.299967769999999}, "radius": 0.002646001349619869, "riskTotal": 9, "numberPoints": 3},
            {"centroid": {"lon": -75.55524952588235, "lat": 6.24399797}, "radius": 0.002646001349619869, "riskTotal": 43, "numberPoints": 17},
            {"centroid": {"lon": -75.59577678999999, "lat": 6.257978700000001}, "radius": 0.002646001349619869, "riskTotal": 24, "numberPoints": 10}
        ]*/
        //newPoints.forEach(element => console.log(element.DIRECCION))
        //let aNewPoints = newPoints.sort((e1, e2) => e2.riskTotal-e1.riskTotal)
        //setPoints(newPoints)
        sortPoints(JSON.parse(answerJson)).then((anotherPoints)=>{
            calculateColors(anotherPoints)
        })

        //calculateColors()
    }
    
    const sortPoints = async (thePoints) => {
        return thePoints.sort((e1, e2) => e2.riskTotal-e1.riskTotal)
    }

    const calculateColors = (thePoints) => {

        var max = thePoints[1].riskTotal
        console.log("valor maximo: "+max)
        var redRange = max*0.3;
        var yellowRange = max*0.1;
        thePoints.forEach(value => {
            if(value.riskTotal>=redRange){
                value.color = 'rojo'
            } else if (value.riskTotal>=yellowRange){
                value.color = 'amarillo'
            }else{
                value.color = 'verde'
            }
        })
        setPoints(thePoints)
        //console.log(points)
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
