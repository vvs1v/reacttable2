import React from "react";
import "../style.css"



const TableColumns = ({data,value}) => {
    // console.log("data=" , data);
    console.log("value = ",value);
    return (<>
        
        <table>
            <thead>
                <tr style={{background:"#dddddd",color:"black"}}>
                    <th >Columns</th>
                    
                </tr>

                <tr className="trpad"   style={{background:"black",color:"white",padding:'0px'}}>
                    <th >Name</th>
                    <th>Type</th>
                    <th>Business_Name</th>
                    <th >Business_Description</th> 
                    
                </tr>
            </thead>
            <tbody>
                {data.map((item)=> (
                    <tr key = {item.id} style={{border:'3px solid white',fontSize:'15px'}}>
                        <td> {item.Name}</td>
                        <td>{item.Type}</td>
                        {value ? <><td style={{color:'blue'}}>{item.Business_Name}</td><td style={{color:'blue'}}> {item.Business_Description}</td></>: ""}
                        {/* {value12  ?<td  style={{color:'blue'}}> {item.Business_Description}</td>: " "} */}
                        {/* <td>{item.Business_Name}</td>
                        <td   >{item.Business_Description}</td> */}
                    
                    </tr>
                ))}
            </tbody>
        </table></>
    )
}
export default TableColumns;