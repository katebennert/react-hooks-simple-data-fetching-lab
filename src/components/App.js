import React, { useState, useEffect } from 'react';

function App() {

    const [dogImage, setDogImage] = useState(null);

    useEffect(() => {
        fetch ("https://dog.ceo/api/breeds/image/random")
            .then (r => r.json())
            .then (dogData => setDogImage(dogData.message))
    }, [])
    
    return (
        <div>
            {dogImage ? <img src={dogImage} alt="A Random Dog"></img> : <p>Loading...</p>}
        </div>
    )
}

export default App;
