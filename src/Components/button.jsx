import React, {useRef,useEffect} from "react";

export default function Button() {
const [open, toggle] = useToggle(false);

return(
  <div>
    {open && <input/>}
    <button onClick={toggle}>Toggle</button>
  </div>
)


  //const [count, setCount] = useState(0);
//    const inputEl = useRef(null);
//    const [intervalID, updateIntervalID] = useState();
//    const intervalRef = useRef();

//    useEffect( () => { 
//    const id = setInterval(()=> {
//     console.log('a second has passed')
//   }, 1000);


//   intervalRef.current = id;
//   return ()=> clearInterval(intervalRef.current);
// });
// return(
//   <div>
//     <input ref={inputEl} />
//       <button onClick={() => inputEl.current.focus()}>Focus the input!</button>
//   </div>
//)

//    // document.title = 'You clicked ${count} times';
//  // },[count]);
//   updateIntervalID(id);

//   return () => clearInterval(intervalID);(
//    // <>
//     //  <input ref={inputEl} />
//     //  <button onClick={() => inputEl.current.focus()}>
//      //   Focus the input
//     //  </button>
//     //</>
  
  
 };
