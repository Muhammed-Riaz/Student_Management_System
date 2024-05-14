import inquirer from "inquirer"

const  randomnum =Math.floor(10000 + Math.random() * 90000);

let mybalnce :number = 0

const answer = await inquirer.prompt([
    {
    name:"std",
    message:"Enter your Name :",
    type:"input",
    validate: function (value){
        if (value.trim()!==""){
            return true;
        }
        return "please enter a non-empty value.";
    },
},   

    {
    name:"course",
    message:"select your course :",
    type:"list",
    choices:["HTML","JAVASCRIPT","C++","PYTHON","TYPESCRIPT"],
    },
]);

const coursefees : {[key: string]:number} = {
    HTML:2000,
    JAVASCRIPT:5000,
    java : 80000,
    PYTHON: 10000,
    TYPESCRIPT:12000
};
console.log(`\n coursefees : ${coursefees[answer.course]}\n`);
console.log(`Balnce: ${mybalnce}\n`);

let pymentType = await inquirer.prompt([{
    name:"pyment",
    type:"list",
    message:"select pyment method",
    choices:["Bank transfer","easy paisa","jazz cash"],
},
{
    name:"amount",
    type:"input",
    message:"Transfer money",
    validate: function (value){
        if (value.trim()!==""){
            return true
        }
        return "please enter a non-empty value.";
    },
}

]);

console.log(`\n you select a pyment method ${pymentType.pyment} `);

const tutionfees = coursefees[answer.course];


const paymentAmount = parseFloat(pymentType.amount);



if (tutionfees == paymentAmount) {
    console.log(`congratulation, you have syccesfully enrolled ${answer.course} course`);


    let ans = await inquirer.prompt([
        {
            name : "select",
            message : "would you like to do Next ?",
            type :"list",
            choices : ["View status", "Exit"],
        },
    ])
    if (ans.select ==="View status") {
        console.log(`\n ************status***********`);
        console.log(`Student ID ${randomnum}`);
        console.log(`course : ${answer.course}`);
        console.log(`Tution Fees paid ${paymentAmount}`);
        console.log(`your Balance is :${mybalnce += paymentAmount - 500} `);
    
    }else{
        console.log("\n Exiting student management system");
        
    }

}else{
    console.log("invalid ammount due to course \n");
    
}
