import React, { Component } from 'react';
import axios from 'axios';
import Secrets from '../secrets.json';
import CardContainer from './CardContainer';
import '../styles/Hero.scss';

class HeroesContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            visible: 0,
            count: 10
        }
        this.checkIfThumbNailExists = this.checkIfThumbNailExists.bind(this);
    }

    checkIfThumbNailExists(character){
        const path = character.thumbnail.path;
        //check if thumbnail path contains "image_not_available"
        return !path.includes("image_not_available");
    }

    async componentDidMount(){
        const baseURL = "https://gateway.marvel.com:443/v1/public/";
        const primaryKey = Secrets.PRIMARY_KEY;
        const limit = this.state.count;
        console.log(`HeroesContainer component did mount`);

        const getCharactersURL = `${baseURL}/characters?limit=${limit}&apikey=${primaryKey}`;

        let count = this.state.count;
        let response = await axios.get(getCharactersURL)
            .then((res) => {
                var results = res.data.data.results;
                var resultsWithImage = results.filter(this.checkIfThumbNailExists)
                count = resultsWithImage.length;
                this.setState({
                    data: resultsWithImage,
                    count: count
                });            
            });   
        
        this.timer = setInterval(() => {
            this.setState({
                visible: this.state.visible == count - 1 ? 0 : this.state.visible + 1
            })
        }, 2500);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        let characters = this.state.data;
        let visible = this.state.visible;
        console.log(`visible index: ${visible}`);
        return(
            <div className="hero-container">
                {
                    characters !== undefined ? 
                        <CardContainer characters={characters} visible={visible}/> :
                        <div>No characters found</div>
                }         
            <footer>
                Data provided by Marvel. © 2014 Marvel
            </footer>
            </div>
        )
    }
}

export default HeroesContainer;