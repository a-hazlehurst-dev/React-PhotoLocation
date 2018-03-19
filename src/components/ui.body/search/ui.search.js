import React, {Component} from 'react';
import axios from 'axios';
import {Typeahead,AsyncTypeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './ui.search.css'

class LocationSearchInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchText: '',
            options: [ 
                'John',
                'Miles',
                'Charles',
                'Herbie'
            ]
        }
        

    }
  

    updateInputValue = (query) =>{

        axios.get('http://web.flickrsystem.api/api/v1/place/' + query)
        .then(response => { this.setState({options: response.data}); });
      }

   
    render(){
        
        return(
             <div >

             <AsyncTypeahead className="form-control-lg"
                    minLength={2}
                    onSearch={this.updateInputValue}
                    options={this.state.options}
                    placeholder="Search for a location..."
                    />
            </div>)
        

    }
}

export default  LocationSearchInput 