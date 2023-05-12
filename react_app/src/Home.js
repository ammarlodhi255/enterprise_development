import { useState } from 'react';

const Home = () => {

    const handleClick = (e) => {
        console.log("Click Me Event Fired!!");
    }

    const handleClickWithArgument = (name, e) => {
        console.log(`Hello ${name}, handleClickWithArgument Fired!!`);
    }

    // useState:

    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(20);

    const handleChange = (e) => {
        setName("Luigi");
        setAge(30);    
    }

    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1);
    }

    const handleDecrement = () => {
        setValue(value - 1);
    }


    // Outputting lists:
    
    const [students, setStudents] = useState([
        {name: 'Ammar', age:23, id:1},
        {name: 'Ahmed', age:21, id:2},
        {name: 'Muzamil', age:24, id:3},
    ]
    );

    return (
        <div className="home">
            <h1>Welcome to My Homepage</h1>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickWithArgument('Ammar', e)}>Click Me Again</button>
            <p>My Name is {name} and I am {age} years old</p>
            <button onClick={handleChange}>Change</button> <br />
            <button onClick={handleIncrement}>+</button>
            <span>{value}</span>
            <button onClick={handleDecrement}>-</button>
            <br /> <br />
            <h2>Students:</h2>
            <div className="students">
                {students.map((student) => (
                    <div className="student" key={student.id}>
                        <h4>Name: {student.name}</h4>
                        <p>Age: {student.age}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;