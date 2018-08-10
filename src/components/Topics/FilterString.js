import React, {Component} from 'react';

class FilterString extends Component
{
    constructor()
    {
        super();
        this.state = 
        {
            unfilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy', 'Thaddeus'],
            filteredArray: [],
            userInput: ''
        };
    }

    handleInput(str)
    {
        this.setState({userInput: str.target.value});
    }

    filterButtonEvent()
    {
        let strs = this.state.unfilteredArray;
        let part = this.state.userInput;
        let match = strs.filter(x => x.startsWith(part));
        this.setState({filteredArray: match, userInput: ''});
    }

    render()
    {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>"Filter String"</h4>
                <span className="puzzleText">
                    {String(this.state.unfilteredArray)}
                </span>
                <input className="inputLine" onChange={(x)=> this.handleInput(x)} value={this.state.userInput} />
                <button className="confirmationButton" onClick={()=> this.filterButtonEvent()}>Filter!</button>
                <span className="resultsBox filterStringRB">
                    {String(this.state.filteredArray)}
                </span>
            </div>
        ); //return
    };
};

export default FilterString;