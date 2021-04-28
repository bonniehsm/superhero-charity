import React, { Component } from 'react';
import axios from 'axios';
import Secrets from '../secrets.json';

function CardContainer(props) {
    return (
      <div className="card-container">
          <ul>
              <CardItems characters={props.characters}/>
        </ul>
      </div>
    );
}

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
        let medium = 'portrait_medium';
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

class HeroesContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            images: [],
            data: []
        }
        this.checkIfThumbNailExists = this.checkIfThumbNailExists.bind(this);
    }

    checkIfThumbNailExists(character){
        console.log(`checkIfThumbNailExists called`);
        const path = character.thumbnail.path;
        console.log(path);
        //check if thumbnail path contains "image_not_available"
        return !path.includes("image_not_available");
    }

    async componentDidMount(){
        console.log(Secrets);
        const baseURL = "https://gateway.marvel.com:443/v1/public/";
        const primaryKey = Secrets.PRIMARY_KEY;
        const limit = 15;
        console.log(`HeroesContainer component did mount`);

        const getCharactersURL = `${baseURL}/characters?limit=${limit}&apikey=${primaryKey}`
        console.log(`${getCharactersURL}`);

        let response = await axios.get(getCharactersURL)
            .then((res) => {
                var results = res.data.data.results;
                var resultsWithImage = results.filter(this.checkIfThumbNailExists)
                console.log(resultsWithImage);
                this.setState({
                    data: resultsWithImage
                });            
            });   
    }

    render(){
        let characters = this.state.data;
        console.log(characters);
        return(
            <div>
                <header>
                    <h1>HeroesContainer</h1>
                    {
                        characters != undefined ? 
                            <CardContainer characters={characters}/> :
                            <div>No characters found</div>
                    }
                </header>              
            </div>
        )
    }
}

export default HeroesContainer;