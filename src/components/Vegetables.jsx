import React from 'react';
import '../components/Buttons.css'


function Vegetables({val,vegName}){
    const [count , setCount] = React.useState(val);
   
   
    function changeCount(val){
       setCount(count+val) 
    }
   
   
    return(
        <>
         <h1> {vegName} : {count} kg</h1>
         <button onClick={()=>changeCount(+1)} className="btns"> + </button>
         <button onClick={()=>changeCount(-1)}  className="btns"> - </button>
        </>
    )
   }

export default Vegetables;