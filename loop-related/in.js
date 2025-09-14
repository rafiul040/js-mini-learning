// PROBLEM 1

// let username = "";



// do{
    // username = window.prompt("Enter Your Name")

// }while(username === "" || username === null)

    // console.log(`Hello ${username}`)



    let loggedIn = false;

    let username;
    let password;




// Solved By While Loop


    while(!loggedIn){
    username = window.prompt("Enter Your Username");
    password = window.prompt("Enter Your Password");


    if(username === 'myUserName' && password === "myPassword"){
         loggedIn = true;
        console.log("You are Logged in!!")
    }else{
        console.log("Invalid Credentials! Please Try Again")
    }

}




// Solved By do While LOOP


do{
    username = window.prompt("Enter Your Username");
    password = window.prompt("Enter Your Password");


    if(username === 'myUserName' && password === "myPassword"){
         loggedIn = true;
        console.log("You are Logged in!!")
    }else{
        console.log("Invalid Credentials! Please Try Again")
    }

}while(!loggedIn)



    // SOLVED