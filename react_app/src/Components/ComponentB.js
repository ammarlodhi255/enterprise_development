import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { PersonContext } from "../App";
import UserContext from "./UserContext";

const ComponentB = () => {

    const name = useContext(UserContext);
    const person = useContext(PersonContext);

    return (
        <div>
            { name }, { person }
            <ComponentC />
        </div>
    );
}
 
export default ComponentB;