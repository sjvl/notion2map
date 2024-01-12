import React, { useEffect, useState } from "react"
import { Map } from "pigeon-maps"
import Marker from "../components/Marker"
import Loader from "../components/Loader"

function Home() {
    const [markers, setMarkers] = useState([])
    const [mouse, setMouse] = useState('grab')
  
    useEffect(()=>{
      fetch(`http://localhost:3000/markers`)
          .then(response => response.json())
          .then(data => {
              console.log(data)
              if (data) {
                setMarkers(data)
              }
          });    
    },[])  
  
    let display = markers.map((e) => {
      let anchor = [Number(e.anchor[0]), Number(e.anchor[1])];
      let name = e.name
      let color = 'rgba(230,0,50,.7'; //pas visité
      let date = 'Pas encore visité..'

      if(e.date){
        color = 'rgba(20,230,100,.7' //visité
        date = e.date
      };
  
      if(anchor) {
        return <Marker 
          offset={[15, 30]} 
          anchor={anchor} 
          name={name}
          date={date}
          style={{ width: 30, height: 30, background: color, borderRadius: '30px' }} 
        />
      }
      
    }) 
  
    return (
      <div>
        {
        display.length ? 
        <div style={{cursor: mouse}} onMouseDown={()=> setMouse('grabbing')} onMouseUp={()=> setMouse('grab')} >
          <Map height={'100vh'} defaultCenter={[43.657979, 7.085994]} defaultZoom={10} >
            {display}
          </Map>
        </div>
        : 
        <div style={{display: 'flex', height: '100vh'}}>
          <Loader/>
        </div>
        }

      </div>
    );
  }
export default Home;
