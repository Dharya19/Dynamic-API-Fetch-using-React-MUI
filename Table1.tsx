import { useEffect, useState } from "react";
import Tablehead from "./TableHead";
import Tablebody from "./TableBody";
import './Table1.css';
import {Table,TableBody,TableHead,TableContainer,TableRow,TablePagination} from '@mui/material';

const Table1=(props:any) =>{
    
    const [data,setData]:any[]=useState([]);
    const [page, setPage] =useState(0);
    const [rowsPerPage, setRowsPerPage] =useState(10);

    const ChangePage = (event:unknown, newPage:number) => {
        setPage(newPage);
      };
    
      const ChangeRowsPerPage = (event:React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    //console.log(setData());
    useEffect(()=>{
    
        const fetchData=async():Promise<void>=>{
            try{
                let apidata:object[]= await fetch(props.link).then((res)=>{return (res.json())});
                //console.log(apidata);
                //console.log(typeof(apidata));
                //console.log(Object.keys(apidata[0]));
                setData( apidata);
                
            }
            catch(error){
                console.log("error -:",error);
            }   
        }
        fetchData();
    
    },[props.link])

    return(
         
        <>
        
        <TableContainer sx={{ maxHeight: 580 }}>
            <Table  align="center">
            
                <TableHead >
                    <TableRow>
                        <Tablehead headerInfo={data} />
                    </TableRow>
                </TableHead>
            
                <TableBody>
                    <Tablebody bodyInfo={data}  page={page}  rowsPerPage={rowsPerPage}/>
                </TableBody>
            </Table>
        </TableContainer>
        
        
        <TablePagination
            id="TablePagination"
            rowsPerPageOptions={[1,10,20,30, 40, 50, 100]}
            
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={ChangePage}
            onRowsPerPageChange={ChangeRowsPerPage}
           color='success'
           
        />
        </> 
    )
}

export default Table1;

































    //console.log(data);
    //console.log(setData());
    //console.log(Object.keys([0]))
    //let header = Object.keys(data[0])
    //return header.map((key, index) => {
    //return <th key={index}>{key.toUpperCase()}</th>
//       })
//    }


//console.log(org_data[0]);


// let Tablehead=():any=>{
//      //let arr=[];
     
//     //  return Object.keys(data).map((element:any,index:number)=>{
//     //     return(<th>{(element)}</th>)
//     // })

//     // return Object.keys(data).map((element:any,index:number)=>{
//     //     return(<th>{(element)}</th>)
//     // })

//     // for(let i=0;i<1;i++)
//     // {
//     //     let data1=arr.push(Object.values(data));
//     //     for(i=0;i<1;i++)
//     //     {
//     //         console.log(data1);
//     //     }
//     //     console.log(arr);
//     //     let keys=Object.keys(data);
//     //     console.log(keys.length);
//     //     for(let j=0;j<keys.length;j++)
//     //     {
//     //         // return(
//     //         //     // <th>{Object.keys(data[j])}</th>
//     //         //     <th>{Object.keys(data[i])}</th>
//     //         // )
//         //     return (data.map((elements:any)=>{

//         //         return(Object.keys(elements).map((element:any)=>{return<th>{(element)}</th>}))
        
//         //        //console.log(Object.keys(elements));
//         //    }));


//         return (data.map((elements:object,index:number)=>{
           
//             if(index===0)
//             {
//                 return(Object.keys(elements).map((element:any)=>{return<th>{Object.values(element)}</th>}))
//             }
//            //console.log(Object.keys(elements));
//        }));

            
//     //     }
//     // }

//     // return <tr>{data.map((elements:object,index:number)=>{return(<th key={index}>{Object.keys(elements)}</th>)})}</tr>


//     // return (data.map((elements:any)=>{

//     //      return(<th>{Object.keys(elements)}</th>)

//     //     //console.log(Object.keys(elements));
//     // }));

// //     return (data.map((elements:object)=>{

// //         return(Object.keys(elements).map((element:string,index:number)=>{return <th key={index}>{(element)}</th>}))

// //        //console.log(Object.keys(elements));
// //    }));


// // let tableHeader:any = [];
// // let data1=tableHeader;
// //   data.map((item:object) => tableHeader.push(Object.keys(item)));
  
// //   return Object.keys(data1);


// // return (data.map((elements:any)=>{

// //     return(Object.keys(elements).map((element:any)=>{return Object.values(element).map((ele:any)=>{return<th>{(ele)}</th>})}))

// //    //console.log(Object.keys(elements));
// // }));
//  }
//Tablehead();

// let TableBody=()=>{
//     var arr:any=[];
//     (arr.push(Object.values(data)));
//         console.log(arr[0][0]);
//         console.log(Object.keys(arr[0]))
//     return data.map((elements:object,index:number)=>
//     {
        
//         return(<tr key={index}><td>{Object.values(elements)}</td></tr>)
//     })
    
// }

// let TableBody=()=>{
    

//         //console.log(Object.keys(arr[0][0]))
//         // for(let i=0;i<data.length;i++)
//         // {
//         //     let Keys=Object.keys(data(0))
//         //   for(let j=0;j<Keys.length;j++)
//         //   {

//         //   }  
//         // }
//     // return data.map((elements:object,index:number)=>
//     // {
        
//     //     return(<tr key={index}><td>{Object.values(elements)}</td></tr>)
//     // })

//     return(data.map((elements:object)=>{

//         return(<tr>{Object.values(elements).map((element:string,index:number)=><td key={index}>{(element)}</td>)}</tr>)

//        //console.log(Object.keys(elements));
//    }));

    
// }

// let TableBody=()=>{
//     return  data.map((elements:object,index:number)=>
//     {
//         for(let i=0;i<(Object.keys(elements)).length;i++)
//         {
//             return(<tr><td>{Object.values(elements)}</td></tr>)
//             // console.log(Object.keys(elements).length)
            
            
//         }
//     })
// }