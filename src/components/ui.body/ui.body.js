import React from 'react';
import axios from 'axios';
import './ui.body.css';
import Gallery from 'react-grid-gallery';
import  Map from './maps/maps';
import Weather from './weather/weather';
import LocationSearchInput from "./search/ui.search"



class AppBody extends React.Component{
    constructor(){
        super();
        this.state = {
            images:[],
            markers:[],
            weather:'',
            tags:'',
            searchText: '',
            center:{lat:53.201, lng:2.3562},
            zoom: 11,
            key:'AIzaSyCv1TJmGi-CLd18lqfY30-qM-B37KnJ7v0'
        }
        this.divMapStyle ={
            color: 'white',
            border: '1px solid black',
            height: '400px',
            padding: '0px'
        }

        this.containerStyle={
            paddingLeft:  '50px',
            paddingRight:  '50px'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        axios.get('http://web.flickrsystem.api/api/v1/image/' + this.state.searchText + "/"+ this.state.tags)
        .then(response => {
                this.setState({images: response.data.gallery});
                this.setState({markers:response.data.mapMarkers});
                this.setState({weather:response.data.weather});
                this.setState({center:response.data.mapMarkers[0]});
        })
      

    }

    updateInputValue(evt) {
        this.setState({
            searchText: evt.target.value
        });
      }

      updateTags(evt) {
        this.setState({
            tags: evt.target.value
        });
      }
     

    render(){
        return(
            <div className="body">
               <div className="container-fluid" style={this.containerStyle}>
                   <div className="row">
                       <LocationSearchInput />
                    </div>
                    <div className="row" style={this.divMapStyle} >
                    
                            <Map 
                                zoom={12}
                                markers = {this.state.markers}
                                center={this.state.center}
                                defaultCenter={{lat:40.728,lng: -73.989}}
                                containerElement={<div style={{height:100+'%'}}/>}
                                mapElement={<div style={{height:100+'%'}}/>} />
                     
                   </div>  
                    <div className="row">   
                        <div className="col-md-8">
                            <Gallery images={this.state.images}/>  
                        </div>
                        <div className="col-md-4">
                            <Weather weatherData = {this.state.weather}/>
                           
                        </div>
                    </div>  
                </div>
                
           
            </div>
        );
    }

}
export default AppBody;