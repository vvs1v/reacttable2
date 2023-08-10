import React, { useState } from "react";

import "../style.css"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import TableName from "./tableName.jsx";
import TableDetails from "./TableDetails";
import datan from "./data"
import datax from "./data2"
import datay from "./data3"
import TableColumns from "./TableColumns";

function Body () {
    
    function getItem1(id) {
        setItem1(id)
        setValue1(0)
    }
    const [value1,setValue1]= useState(0)
    const [item1,setItem1] = useState("-2")
    
    return <>

    <div>
        
        
        <div className="div1">

            <div className="row">
                <div className="col-lg-2" style={{}}>
                    <div style={{background: "black", color:"white",marginBottom:'0px'}}><h5 style={{marginBottom:'0px',marginLeft:'2px'}}>Tables</h5></div>
                    <div  className="tablediv" ><TableName data={datan} onChecked={getItem1} /></div>
                </div>
                <div className="col-lg-10" style={{}}>
                <div className="row" style={{background: "black", color:"white",marginBottom:'0px'}}><h5 style={{marginBottom:'0px',marginLeft:'2px'}}>Metadata</h5></div>
                <div  className="row"  style={{border:'2px solid black',height:'70vh'}}>
                    <div className="col-lg-4 tablediv"   style={{height:'100%',overflow:"scroll"}}>
                       {item1<0?"":  <TableDetails data={datax[item1-1]} value={value1}/>}
                    </div>
                    <div className="col-lg-8 tablediv" style={{height:'100%',overflow:"scroll"}}>
                    {item1<0?"":  <TableColumns data={datay[item1-1]} value={value1}/>}
                {item1<0? "":<div style={{justifyContent:'flex-end',display:'flex',marginTop:'.5%'}}><button style={{background:'blue',color :'whitesmoke',border:'2px solid blue',borderRadius:'12%',width:'200px'}} onClick={()=>setValue1(1)} >Fetch Suggestion</button><button style={{background:'skyblue',color :'whitesmoke',border:'1px solid skyblue',borderRadius:'8%',marginRight:'2%',marginLeft:'3%',width:'100px'}}>Save</button></div>}
                    

                    </div>
                </div>
                </div>
            </div>
        </div>
    </div></>
}

export default Body;