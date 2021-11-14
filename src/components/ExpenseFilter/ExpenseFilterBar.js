import React from 'react'

const ExpenseFilterBar = (props) => {

   let fillHeight = "0";

   if (props.maxValue > 0) {
      fillHeight = Math.round(props.value / props.maxValue * 100);
   };

   return (
      <div className="flex flex-col">
         <div className="w-3 border-2 flex flex-col-reverse border-blue-400 rounded-b-2xl h-20 ml-7 mt-2 mb-2">
            <div className="bg-blue-300 w-2" style={{height: fillHeight}}></div>
         </div>
         <div className="ml-4 w-10 text-blue-400 mb-2">{props.label}</div>
      </div>
   )
}

export default ExpenseFilterBar
