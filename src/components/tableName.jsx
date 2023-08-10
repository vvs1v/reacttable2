import React, { useState } from "react";
import "../style.css"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';



const TableName = ({data,onChecked,onChecked2}) => {
    // console.log("data2=",data)
    // const handleClick = (value)=>{
    //     console.log(value)
    // }
    const[valu,setValu]=useState(0)

    
    return (<>
        
        <table  >
            <thead  >
                <tr style={{background:"#00338D",color:"white"}}>
                    <th >Table Name</th>
                    
                </tr>
                
            </thead>
            <tbody>
                {data.map((item)=> (
                    <tr  key = {item.id} style={{border:'3px solid white',fontSize:'17px'}} >
                        <td id="item.id" onClick={()=>{onChecked(item.id); setValu(item.id);}} > {item.name} {item.id===valu?<ArrowRightIcon fontSize="large"/>:''}</td>
                     
                    </tr>
                ))}
            </tbody>
        </table></>
    )
}
export default TableName;