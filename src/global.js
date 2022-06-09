import { createGlobalState } from 'react-hooks-global-state';

const {setGlobalState, useGlobalState} = createGlobalState({
    myArr: [],
});

export {useGlobalState, setGlobalState}