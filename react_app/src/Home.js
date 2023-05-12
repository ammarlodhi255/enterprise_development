import { useState } from 'react';

const Home = () => {

    const handleClick = (e) => {
        console.log("Click Me Event Fired!!");
    }

    const handleClickWithArgument = (name, e) => {
        console.log(`Hello ${name}, handleClickWithArgument Fired!!`);
    }

    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(20);

    const handleChange = (e) => {
        setName("Luigi");
        setAge(30);    
    }

    return (
        <div className="home">
            <h1>Welcome to My Homepage</h1>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickWithArgument('Ammar', e)}>Click Me Again</button>
            <p>My Name is {name} and I am {age} years old</p>
            <button onClick={handleChange}>Change</button>
        </div>
    );
}

export default Home;