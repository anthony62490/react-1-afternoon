import React, {Component} from 'react';

class EvenAndOdd extends Component
{
    constructor()
    {
        super();
        this.state = 
        {
            evenArray: [],
            oddArray: [],
            userInput: ''
        };
    }

    handleInput(numString)
    {
        this.setState({userInput: numString.target.value})
    }

    evenOddButtonEvent()
    {
        let test = this.state.userInput;
        console.log(test);
        let nums = this.state.userInput.split(",");
        let evens = nums.filter(x => (x%2 === 0));
        let odds = nums.filter(x => (x%2 === 1));
        this.setState({evenArray:evens, oddArray:odds, userInput:''});
    }

    render()
    {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>"Evens and Odds"</h4>
                <input className="inputLine" onChange={(x)=> this.handleInput(x)} value={this.state.userInput}/> {/* updates this.userInput with user-defined value - Does NOT render it to the screen */}
                <button className="confirmationButton" onClick={()=> this.evenOddButtonEvent()}>Line 'em Up!</button>
                <span className="resultsBox">
                    {String(this.state.evenArray)}
                </span>
                <span className="resultsBox">
                    {String(this.state.oddArray)}
                </span>
            </div>
        ); //return
    };
};

export default EvenAndOdd;