import React, {Component} from 'react';

class TextBanner extends Component()
{
    constructor()
    {
        super();
        this.state = 
        {
            decoration = '#',
            userInput = '',
            banner = ''
        };
    }

    makeBanner()
    {
        if(this.state.decoration != '' && this.state.userInput != '') //banner will only show if there is decoration
        {
            let str = String(this.state.userInput); //prevent strange things when the user inputs numbers
            let x = String(this.state.decoration);
            let topBot = Array(str.length+2).join(x);
            let mid = x+str+x;

        }
        else //if either piece is missing, display first column of decoration, even if it == ''
        {
            this.setState( {banner: `${this.state.decoration}
            ${this.state.decoration}
            ${this.state.decoration}`} );
        }
    }

    render()
    {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>"Text Banner"</h4>
                <span className="puzzleText"> {this.makeBanner()} </span>
                <input className="inputLine" />
                <input className="inputLine"/>
            </div>
        ); //return
    }
}