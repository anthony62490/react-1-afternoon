import React, {Component} from 'react';

class Sum extends Component
{
    constructor()
    {
        super();
        this.state = 
        {
            num1: 0,
            num2: 0,
            sum: ''
        };
    }

    handleInput(num, isOne)
    {
        if(isOne)
            this.setState({num1: num.target.value});
        else
            this.setState({num2: num.target.value});

        // console.log(`${this.state.num1} / ${this.state.num2}`);
    }

    handleEmptyInput(num)
    {
        if(this.state.num1 === 0 && num === 1)
            return "";
        if(this.state.num2 === 0 && num === 2)
            return "";
        else
            return num;
    }

    buttonSumEvent()
    {
        let one = Number(this.state.num1);
        let two = Number(this.state.num2);
        this.setState({sum: (one+two)/*, num1: '', num2: ''*/});
    }

    render()
    {
        return (
            <div className="puzzleBox sumPB">
                <h4>"Sum"</h4>
                <input className="inputLine" onChange={(x)=> this.handleInput(x, true)} value={this.state.value} placeholder={`1st number`}/>
                <input className="inputLine" onChange={(x)=> this.handleInput(x, false)} value={this.state.value} placeholder={`2nd number`}/>
                <button className="confirmationButton" onClick={()=> this.buttonSumEvent()}>Fusion... HA!</button>
                <span className="resultsBox" placeholder={`Sum`}>{this.state.sum}</span>
            </div>
        ); //return
    };
};

export default Sum;