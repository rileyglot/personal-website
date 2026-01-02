import {useState, useEffect} from 'react'
import myLogo from '/Rileyglot-with-image.png'
import './App.css'

function App() {
    const [woodcuttingLevel, setWoodcuttingLevel] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [lastUpdated, setLastUpdated] = useState(null);

    console.log("Component is rendering")

useEffect(() => {
    fetch('https://corsproxy.io/?' + 'https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=redux_alex')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');  // Split into array of lines
            const woodcuttingLine = lines[9];  // Get the 10th line
            const woodcuttingData = woodcuttingLine.split(',');
            const woodcuttingLevel = woodcuttingData[1];
            console.log("Woodcutting line:", woodcuttingLevel);
            setWoodcuttingLevel(woodcuttingLevel);
            setIsLoading(false);
            setLastUpdated(new Date().toLocaleString());
        })
}, [])

    return (
        <>
            <div>
                <a href="https://ultimateframedata.com/steve" target="_blank">
                    <img src={myLogo} className="logo" alt="my logo!"/>
                </a>
            </div>
            <h1>Hello!</h1>
            {isLoading ? <h4>Loading...</h4> : <h4>Woodcutting Level: {woodcuttingLevel} as of {lastUpdated}</h4>}

        </>

    )
}

export default App