import React from "react";
import "../style.css"

const TableDetails = ({data,value}) => {
    // console.log("data=" , data);
    
   

    return (<>
        
        <table>
            <thead>
                <tr style={{background:"#dddddd",color:"black"}}>
                    <th style={{}}>Table Details</th>
                    
                </tr>
                <tr   style={{background:"black",color:"white",padding:'0px'}}>
                    <td >Column Name</td>
                    <td>Field</td>
                    
                </tr>
            </thead>
            <tbody>

                {data.map((item,index)=>(
                    <tr key = {item.id} style={{border:'3px solid white'}}>    
                    <td> {item.Column_Name}</td>
                    {value || index<3 ?<td style={{ color: index<3?'black':'blue',fontWeight:index<3?'bold':'normal'}}> {item.Field}</td>: " "}</tr>  
                    
                    
                    ))}
            </tbody>
        </table></>
    )
}
export default TableDetails;