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

    isPalindrome(str)
    {
        //checks an all-lowercase all-alpha string to see that the letters are mirrored along the middle
        let halfLen = Math.floor(str.length/2);
        for(let i=0; i<halfLen; i++)
        {
            if(str[i] !== str[str.length-(i+1)]) //checks from the front and the back of the string
                return false;
        }
        return true;
    }

    isLetter(i) 
    {
        if(i.length === 1 && i.match(/[a-z]/i)) 
        {
            return true; 
        }
        return false;
    }

    palindromeButtonEvent()
    {
        let check = this.state.userInput;
        var noCaps = '';

        console.log(this.isPalindrome("amanaplanacanalpanama"));
        console.log("check1");

        //removes all non-alpha chars
        for(var i=0; i<check.length; i++)
        {
            console.log("check2");
            if(this.isLetter(check[i]))
            {
                console.log("check3");
                noCaps += check[i];
            }
            console.log(noCaps);
        }

        // this.isPalindrome(check);
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