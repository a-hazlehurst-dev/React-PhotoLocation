import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

class Map extends Component{
    
    render(){
        const markers = this.props.markers || []
        return(
            
            <GoogleMap
                defaultZoom ={this.props.zoom}
                defaultCenter ={this.props.defaultcenter}
                center = {this.props.center}
                >
                {
                    markers.map((marker, index) =>
                    <Marker position={marker} />
                    )
                    
                }
            </GoogleMap>

        )
    }
}

export default withGoogleMap( Map )