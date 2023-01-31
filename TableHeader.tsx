//import React from "react";

const Headercells = (props:{headers:string[]}) => {
    // const headers =
    //     ["Name", "Age", "Contact", "Email"

    //     ]



    // return(headers.map((elements:any)=>{
    //     console.log(Object.keys(elements));
    //     return <th>{Object.keys(elements)}</th>
    // }))
    // console.log((headers[0]));
    // return(<th>{Object.keys(headers)}</th>);
    return ((props.headers).map((header) => {

        <th>{header}</th>
    }));


    //console.log(headers.length);
    //return (<th>{Object.keys(headers)}</th>);
}
// Headercells();
export default Headercells;