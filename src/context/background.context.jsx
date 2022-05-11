import { createContext } from "react";

export const BackgroundContext = createContext({
    background: null,
    changeBackground: () => {}
})