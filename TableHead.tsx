//import React  from 'react';
//import data from './Table1'
const  TableHead=(props:any)=>{
    //console.log(props.headerInfo);
    
    return ((props.headerInfo).map((elements:object,index:number)=>{
          
        if(index===0)
        {
            return(Object.keys(elements).map((element:any)=>{return<th>{(element)}</th>}))
        }
         //return(Object.keys(elements).map((element:any)=>{return<th>{Object.values(element)}</th>}))
          //console.log(Object.keys(elements));
      }));
}

export default TableHead;