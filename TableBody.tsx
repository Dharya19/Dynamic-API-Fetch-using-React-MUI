import  './Table1';
import {TableCell} from '@mui/material'

const  TableBody=(props:any)=>{

    //console.log(props.bodyInfo);

    return((props.bodyInfo).slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage).map((elements:object,index:number)=>{
    
        return(<tr key={index}>{Object.values(elements).map((element:string)=><TableCell id='rows'>{(element)}</TableCell>)}</tr>)

        //console.log(Object.keys(elements));
    }))
}

export default TableBody;