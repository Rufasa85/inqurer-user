const inquirer = require("inquirer");
const fs = require("fs");

//ask user three questions
inquirer.prompt([
    //1. name 
    {
        type:"input",
        message:"What is your name?",
        name:"username"
    },
    //2. checkboxes for languages
    {
        type:"checkbox",
        message:"What languages do you know?",
        choices:["HTML","CSS","JavaScript","Dothraki"],
        name:"langs"

    },
    //3. list of comm choices
    {
        type:"list",
        message:"how to contact you?",
        choices:["email","text","telekenesis","owl"],
        name:"contact"

    }
]).then(ans=>{
    //take that data, create a json string
    console.log(ans)
    console.log(JSON.stringify(ans))
    // save the json string to a .json file named the users name
    fs.writeFile(`${ans.username}.json`,JSON.stringify(ans,null,4),function(err){
        if(err){
            throw err;
        }
        console.log("wrote!")
    })
})

