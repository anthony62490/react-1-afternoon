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
        console.log(`Entering isPalindrome(). str:"${str}"`);

        if(str.length === 0)
            return "Please input a phrase";
        //checks an all-alpha string to see that the letters are mirrored along the middle
        let halfLen = Math.floor(str.length/2);
        for(let i=0; i<halfLen; i++)
        {
            let front = str[i].toLowerCase();
            let back = str[str.length-(i+1)].toLowerCase();
            if(front !== back)
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
        let feelinLuckyPunct = '';

        // console.log("check1");

        console.log(`check:       "${check}"`);
        console.log(`check length:"${check.length}"`);

        //strips all non-alpha chars
        for(let i=0; i<check.length; i++)
        {
            if(this.isLetter(check[i]))
                feelinLuckyPunct += check[i];
        }

        console.log(`feelinLucky: ${feelinLuckyPunct}`);

        let v = this.isPalindrome(feelinLuckyPunct);
<<<<<<< HEAD
        this.setState({palindrome: v, userInput: ''});
=======
        this.setState({palindrome: v});
>>>>>>> 4ca31a6c11c426e1bf62614cd4d18298d20768f2
    }

    

    render()
    {
        return (
            <div className="puzzleBox filterStringPB">            
                <h4>"Palindrome"</h4>
                <input className="inputLine" onChange={(x)=> this.handleInput(x)} value={this.state.userInput}/>
                <button className="confirmationButton" onClick={()=> this.palindromeButtonEvent()}>A nut for a jar of tuna.</button>
                <span className="resultsBox">
                    {String(`Palindrome: ${this.state.palindrome}`)}
                </span>
            </div>
        ); //return
    };
};

export default Palindrome;