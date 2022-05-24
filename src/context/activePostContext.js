import {createContext} from "react";

const activePostContext = createContext({
    name: null,
    content: null,
    created: null,
})

export default activePostContext;