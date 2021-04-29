import React, { Component } from 'react';
import axios from 'axios';
import Secrets from '../secrets.json';
import CardContainer from './CardContainer';
import '../styles/Hero.scss';

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
                    <h1>Superheroes need their superhowers</h1>
                </header> 
                {
                    characters !== undefined ? 
                        <CardContainer characters={characters}/> :
                        <div>No characters found</div>
                }         
            </div>
        )
    }
}

export default HeroesContainer;