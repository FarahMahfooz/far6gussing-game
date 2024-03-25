#!/usr/bin/evn node

console.log("guess a number between 1 to 10");
//now variable creat
let a:number=Math.floor(Math.random()*10)

import inquirer from "inquirer";
import chalk from "chalk";

while(true){let input = await inquirer.prompt
    ({name:"guess",type:"number",
     message:"Enter your guess number you want brtween 1 to 10:"}
     )
     //provide
let ans:number=input.guess
if  (a==ans)
     {console.log ("congratulation your guess number absolutely correct")
break};
 {console.log("sorry you guss wrong number try again")}
     console.log("let's play!")
}
     



















