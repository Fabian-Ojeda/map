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

                <LayerGroup>
                    {
                        points.map((info) => {
                            var color = info.color;
                            if (color=='rojo'){
                                color='red'
                            }else if (color=='amarillo'){
                                color='yellow'
                            }else {
                                color='green'
                            }
                            return (
                                <Circle
                                    //key={info._id}
                                    center={[info.centroid.lat, info.centroid.lon]}
                                    pathOptions={{ color: color, fillColor: color }}
                                    radius={(info.radius*1609)}
                                />
                            )
                        })
                    }

                </LayerGroup>

            </MapContainer>
        </div>)
}

export default myMap;