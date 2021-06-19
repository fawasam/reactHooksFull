import React from "react";
import "./App.css"

//usehooks
import classCounter from "./components/useHooks/classCounter";
import CounterHook from "./components/useHooks/CounterHook";
import UsehookObj from "./components/useHooks/UsehookObj";
import UsehookArray from "./components/useHooks/UsehookArray";

//useEffect
import EffectCounter from "./components/useEffect/EffectCounter";
import EffectMouse from "./components/useEffect/EffectMouse";
import MouseContainer from "./components/useEffect/MouseContainer";
import EffectTimer from "./components/useEffect/EffectTimer";
import Fetchdata from "./components/useEffect/Fetchdata";

//useContext
import ComponentA from "./components/useContext/ComponentA";
         //create a context provide with a value
export const userContext =React.createContext()

function App() {
  return (
    <div className="App">
    {/* -----------useState ----------- */}
    {/* <classCounter/> */}
    {/* <CounterHook/> */}
    {/* <UsehookObj /> */}
    {/* <UsehookArray/> */}

    {/*-------------- useEffect -------*/}
    {/* <EffectCounter/> */}
    {/* <EffectMouse/> */}
    {/* <MouseContainer/> */}
    {/* <EffectTimer/> */}
    {/* <Fetchdata/> */}
    {/*--------------- useContext-----------  */}
    <userContext.Provider value={"fawas"}>
    <ComponentA/> 
    </userContext.Provider>
    </div>
  );
}

export default App;
