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
                    <CardItems characters={this.props.characters} visible={this.props.visible}/>
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
    const visibleIndex = props.visible;
    let isVisible = false;
    console.log(`isVisible: ${isVisible}`);
    console.log(items);
    const listItems = items.map((item, index) => {
        isVisible = visibleIndex == index ? true : false;
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
        let pIncredible = 'portrait_incredible';
        let lIncredible = 'landscape_incredible';
        let thumbnailUrl = `${thumbnail.path}/${pIncredible}.${thumbnail.extension}`;

        return(
            <li className={`card-item ${isVisible ? "visible-card" : "hidden-card"}`} key={`card-item-${index}`}>
                {/*
                <figure>
                    <figcaption>{item.name}</figcaption>
                    <img src={thumbnailUrl} alt={item.name}/>
                </figure>
                */}
                <img src={thumbnailUrl} alt={item.name}/>
            </li>
        )
    })
    return listItems;
}

export default CardContainer;