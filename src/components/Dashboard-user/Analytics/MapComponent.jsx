import React from 'react'
import ReactMapGL,{Marker,NavigationControl, Source, Layer,FlyToInterpolator,WebMercatorViewport,MapController,FullscreenControl, ScaleControl, Popup } from 'react-map-gl';
                       
function MapComponent() {
                            const [viewport, setViewport] = React.useState({
                                latitude: 21.084488,
                                longitude: 72.6430332,
                                zoom: 15,
                        
                            });
                            return (
                                <div>
                                      <ReactMapGL
                                      
                                    {...viewport}
                                    mapboxApiAccessToken ="pk.eyJ1IjoiamF5bmFydXRvIiwiYSI6ImNrcGY3MDFybzA4emQydnFvaHA1emY1cXAifQ.sHf7OSLjvHC6caHHVXTgQw"
                                    mapStyle="mapbox://styles/jaynaruto/ckpf7miyr0l2917vxppvlz8sd"
                                    width="100%"
                                    height="100%"
                                    onViewportChange={(viewport) => setViewport(viewport)}
                                    onDblClick={(coords)=>console.log(coords)}>
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        padding: "10px"
                                                    }}
                                                    >
                                                    <NavigationControl />
                                                    </div>
                                                    <Marker longitude={-122.4376} latitude={37.7577}>
                                                    <div style={{ color: "white" }}>You are here</div>
                                                    </Marker>

                                        </ReactMapGL>
                                        
                                     
                                         
        </div>
    )
}

export default MapComponent
