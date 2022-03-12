import React , { useEffect }from "react";
import { Marker, Popup, TileLayer, MapContainer, Circle, LayerGroup, Rectangle, Polyline} from "react-leaflet";
import { Icon } from "leaflet";
import "../app.css";

const myMap = ({points}) => {
    return (
        <div>
            <MapContainer center={[6.244747, -75.574828]} zoom={13}>
                <TileLayer
                    attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                    url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFiaWFuLW9qZWRhIiwiYSI6ImNsMDVxd2hlZDA1bWkzaW56d29mZjZqcjIifQ.Rz31zbVrArZakcIPB0uqzw"
                />
                <Marker position={[6.257970, -75.591267]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <LayerGroup>
                    {
                        points.map((info) => {
                            var color = info.gravedad;
                            if (color=='Alta'){
                                color='red'
                            }else if (color=='Media'){
                                color='yellow'
                            }else {
                                color='green'
                            }
                            return (
                            <Circle
                                center={[info.Latitud, info.Longitud]}
                                pathOptions={{ color: color, fillColor: color }}
                                radius={info.Radio}
                            />
                            )
                        })
                    }

                </LayerGroup>
                <Polyline
                    positions={[
                        [6.252429, -75.612216],
                        [6.237215, -75.544867],
                    ]}
                />
            </MapContainer>
        </div>)
}

export default myMap;