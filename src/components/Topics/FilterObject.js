import React, {Component} from 'react';

class FilterObject extends Component
{
    constructor()
    {
        super();
        this.state = 
        {
            unfilteredArray: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                },
                {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                },
                {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                },
                {
                    name: 'Tad Ghostal',
                    age: 'around 40',
                    title: 'The host with the most',
                    hairColor: '?'
                }
            ],
            userInput: '',
            filteredArray: []
        };
    }

    handleInput(numString)
    {
        this.setState({userInput: numString.target.value})
    }

    filterButtonEvent()
    {
        let objs = this.state.unfilteredArray;
        let param = this.state.userInput;
        let matches = objs.filter((x)=> x.hasOwnProperty(param));
        this.setState({filteredArray: matches, userInput: ''});
    }

    render()
    {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>"Filter Object"</h4>
                <span className="puzzleText">
                    {JSON.stringify(this.state.unfilteredArray)}
                </span>
                <input className="inputLine" onChange={(x)=> this.handleInput(x)} value={this.state.userInput}/>
                <button className="confirmationButton" onClick={()=> this.filterButtonEvent()}>Sort!</button>
                <span className="resultsBox filterObjectRB">
                    {JSON.stringify(this.state.filteredArray)}
                </span>
            </div>
        ); //return
    };
};

export default FilterObject;