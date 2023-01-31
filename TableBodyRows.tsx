//import React from "react";

const Rows = (props:{bodyData:string[][]}) => {
    
    return (props.bodyData).map((data, index:number) =>
        <tr key={index}>
            {Object.values(data).map((value:string) => <td>{value}</td>)}
                    
        </tr>
    );
}
// const Rows = ((data:string[] , cols:string[]) => {
//     if (data) {
//         return data.map((row) =>
//             <tr>
//                 {cols.map((col,index:any) => <td>{}</td>)}
                    
//             </tr>
//        );
//     }
//     else return [];
// });

export default Rows;