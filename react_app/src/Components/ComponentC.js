import React from "react";
import { UserConsumer } from './UserContext';

const ComponentC = () => {
    return (

        <UserConsumer>
            {
                username => <h2> Hello { username } </h2>
            }
        </UserConsumer>
    );
}
 
export default ComponentC;