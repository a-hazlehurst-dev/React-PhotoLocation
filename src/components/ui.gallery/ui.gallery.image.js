import React from 'react';
import './ui.gallery.image.css';

class GalleryImage extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        pics: this.props.pics
     };
    }
    
    render(){
        return(
            <div  >
                {
                    this.props.pics.map((item) =>
                     <div key={item.id} className="col-sm-4 imageBox">
                        <div className="col-sm-12 stripper">
                            
                            <img  src ={item.src} alt="test"   width="100%" />
                        </div>
                        <div className="col-sm-12 altbox">
                            <span ></span>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default GalleryImage;