import React from 'react';
import GalleryImage from './ui.gallery.image'


class CustGallery extends React.Component{
constructor(props){
    super(props);
    this.state = {
        photos:
        [
            {
                id:1,
                src:'https://farm5.staticflickr.com/4739/24338623817_11c3703e0f.jpg',
                alt:"test"
            },
            {
                id:2,
                src:'https://farm5.staticflickr.com/4640/24338623287_38ecb37bbb.jpg',
                alt:"test"
             },
             {
                id:3,
                src:'https://farm5.staticflickr.com/4731/24338622997_338d3996b6.jpg',
                alt:"test"
             },
             {
                id:4,
                src:'https://farm5.staticflickr.com/4729/24338622647_0ced40c85b.jpg',
                alt:"test"
             },
             {
                id:5,
                src:'https://farm5.staticflickr.com/4729/24338622647_0ced40c85b.jpg',
                alt:"test"
             },
             {
                id:6,
                src:"https://farm5.staticflickr.com/4695/39814355744_9802495d51.jpg",
                alt:"test"
             },
             {
                id:7,
                src:'https://farm5.staticflickr.com/4640/24338622347_5525128e6d.jpg',
                alt:"test"
             }
        ],
        images: this.props.photos
    }
}

    render(){
        return(
         
            <div className="gallerywrapper">
               <GalleryImage pics={this.props.photos} />
            </div>
        );
    }

}

export default CustGallery;