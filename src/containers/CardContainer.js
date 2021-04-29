import React, { Component } from 'react';
import '../styles/Card.scss';

class CardContainer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="card-container">
                <ul className="card-list">
                    <CardItems characters={this.props.characters}/>
              </ul>
            </div>
          );
    }
}

/*
function CardContainer(props) {
    return (
      <div className="card-container">
          <ul className="card-list">
              <CardItems characters={props.characters}/>
        </ul>
      </div>
    );
}
*/

function CardItems(props){
    const items = props.characters;
    console.log(items);
    const listItems = items.map((item, index) => {
        /* Get thumbnail images */
        /**
         * portrait_small	50x75px
            portrait_medium	100x150px
            portrait_xlarge	150x225px
            portrait_fantastic	168x252px
            portrait_uncanny	300x450px
            portrait_incredible	216x324px
         */           
        let thumbnail = item.thumbnail;
        //let medium = 'portrait_medium';
        let incredible = 'portrait_incredible';
        let thumbnailUrl = `${thumbnail.path}/${incredible}.${thumbnail.extension}`;

        return(
            <li className="card-item" key={`card-item-${index}`}>
                <figure>
                    <figcaption>{item.name}</figcaption>
                    <img src={thumbnailUrl} alt={item.name}/>
                </figure>
            </li>
        )
    })
    return listItems;
}

export default CardContainer;