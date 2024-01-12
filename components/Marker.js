import { useState } from "react";

function Marker(props) {
    const [visibility, setVisibility] = useState(false)
    let tootip = <div
        style={{zIndex: '5', position: 'inherit', whiteSpace: 'nowrap', cursor: 'pointer', backgroundColor: 'white', padding: '5px 15px',  marginTop: '15px', marginLeft: '15px', boxShadow: '5px 5px 10px 1px rgb(100, 100, 100', border: '1px solid #A9D3DE', borderRadius:'0px 8px 8px 8px'}}>
       <div style={{fontSize: '14px', fontWeight: '500'}}>{props.name}</div>
       <div style={{fontSize: '13px', fontWeight: '300'}}>{props.date}</div>
    </div>

    return (
        <div 
            style={{ cursor: 'pointer', position: 'absolute', left: props.left, top: props.top, ...(props.style || {})}}
            onClick={()=> setVisibility(!visibility)}
        >
            {visibility && tootip}
        </div>
    );
}

export default Marker;
