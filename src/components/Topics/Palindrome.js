import React, {Component} from 'react';

class Palindrome extends Component
{
    constructor()
    {
        super();
        this.state = 
        {
            userInput: '',
            palindrome: ''
        };
    }

    handleInput(input)
    {
        this.setState({userInput: input.target.value});
    }

    palindromeButtonEvent()
    {
        function isLetter(i) 
        {
            i.toLowerCase();
            console.log("test ",i);
            // return i.length !== 1 && i.match(/[A-Z|a-z]/i);
            if (i.length !== 1)
            {
                console.log("check");
                if(i.match(/[a-z|A-Z]/g)) 
                    return true; 
            }
            return false;
        }

        // let check = this.state.userInput;
        console.log(isLetter('a'));
        console.log(isLetter('4'));
        console.log(isLetter('z'));
        console.log(isLetter('A'));
        console.log(isLetter('Z'));
        console.log(isLetter('/'));
        console.log(isLetter('aa'));
        //first, strip out everything that's not a letter and convert to lowercase
        // for(let i=0; i<check.length; i++)
        // {
        //     if(check[i].charAt)
        // }
    }

    

    render()
    {
        return (
            <div className="puzzleBox filterStringPB">            
                <h4>"Palindrome"</h4>
                <input className="inputLine" onChange={(x)=> this.handleInput(x)} value={this.state.userInput}/>
                <button className="confirmationButton" onClick={()=> this.palindromeButtonEvent()}>A nut for a jar of tuna.</button>
                <span className="resultsBox">
                    {this.state.palindrome}
                </span>
            </div>
        ); //return
    };
};

export default Palindrome;