import React from 'react';
import { useGlobalState } from './global';

function Output(){
        
    const globalCountValue = useGlobalState("myArr")

        return (
            <div>
                How many times you've clicked!
                <p>{globalCountValue}</p>
            </div>
        )
}
 
export default Output;