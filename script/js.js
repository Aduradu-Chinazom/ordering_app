let username = prompt("What is your name?")
let welcome = document.getElementById("welcome")
let message
 = ("Welcome " + username + ", It's a pleasure to have you!!!")
welcome.innerHTML=message;

let btn1 = document.getElementById('btn1');
let flex1 = document.getElementById("flex1");

btn1.onclick = function () {
    let input1 = document.getElementById("input1");
    let first_response = input1.value.toLowerCase();

    if (first_response === "rice") {
        let answer1 = "What type of rice do you want?";
        document.getElementById("answer1").innerHTML = answer1;

        flex1.innerHTML = `<input placeholder="order" type="text" id="input2"><button id="btn2">Enter</button>`;

        let btn2 = document.getElementById("btn2");
        let flex2 = document.getElementById("flex2");

        btn2.onclick = function () {
            let input2 = document.getElementById("input2");
            let second_response = input2.value.toLowerCase();
    
            if (second_response === "fried rice" || second_response === "jollof rice") {
                let answer2 = "Great choice!!! That will be 5000 naira. Thank you for choosing Zomie's <3";
                document.getElementById("answer2").innerHTML = answer2;
            } else if (second_response === "chinease rice") {
                let answer2 = "Great choice!!! That will be 6000 naira. Thank you for choosing Zomie's <3";
                document.getElementById("answer2").innerHTML = answer2;
            } else {
                let answer2 = "Sorry that isn't available";
                document.getElementById("answer2").innerHTML = answer2;
            }
    
            document.getElementById("question1").innerHTML = "Would you like to order a drink with your meal?";
    
            flex2.innerHTML = `<input placeholder="order" type="text" id="input3"><button id="btn3">Enter</button>`;
    
            // Set up the click event for btn3 after it is created in the DOM
            let btn3 = document.getElementById("btn3");
            let flex3 =document.getElementById("flex3");
            btn3.onclick = function () {
                let input3 = document.getElementById("input3").value.toLowerCase();
    
                if (input3 === "yes") {
                    let answer3 = "We have water, coke, and orange juice.";
                    document.getElementById("answer3").innerHTML = answer3;
    
                    flex3.innerHTML = `<input placeholder="order" type="text" id="input4"><button id="btn4">Enter</button>`;
    
                    let btn4 = document.getElementById("btn4");
    
                    btn4.onclick= function () {
                        let input4 = document.getElementById("input4").value.toLowerCase();
    
                        if (input4 === "water"|| input4 === "coke" || input4 === "orange juice"){
                            let answer4 = "That will be 500 Naira <3";
                            document.getElementById("answer4").innerHTML = answer4;
                        }
                        else{
                            let answer4 = "Sorry, that isn't available <3";
                            document.getElementById("answer4").innerHTML = answer4;
                        }
                    }
    
    
                } else if (input3 === "no") {
                    let answer3 = "Okay, Thank you for Choosing Zomie's <3";
                    document.getElementById("answer3").innerHTML = answer3;
                }
            };
        };
    }else if( first_response === "pasta"){
        let answer1 = "What type of pasta do you want?";
        document.getElementById("answer1").innerHTML = answer1;

        flex1.innerHTML = `<input placeholder="order" type="text" id="input2"><button id="btn2">Enter</button>`;

        // Set up the click event for btn2 after it is created in the DOM
        let btn2 = document.getElementById("btn2");
        let flex2 = document.getElementById("flex2");

        btn2.onclick = function () {
            let input2 = document.getElementById("input2");
            let second_response = input2.value.toLowerCase();
    
            if (second_response === "stir-fried pasta" || second_response === "jollof pasta") {
                let answer2 = "Great choice!!! That will be 5000 naira. Thank you for choosing Zomie's <3";
                document.getElementById("answer2").innerHTML = answer2;
            }else {
                let answer2 = "Sorry that isn't available";
                document.getElementById("answer2").innerHTML = answer2;
            }
    
            document.getElementById("question1").innerHTML = "Would you like to order a drink with your meal?";
    
            flex2.innerHTML = `<input placeholder="order" type="text" id="input3"><button id="btn3">Enter</button>`;
    
            // Set up the click event for btn3 after it is created in the DOM
            let btn3 = document.getElementById("btn3");
            let flex3 =document.getElementById("flex3");
            btn3.onclick = function () {
                let input3 = document.getElementById("input3").value.toLowerCase();
    
                if (input3 === "yes") {
                    let answer3 = "We have water, coke, and orange juice.";
                    document.getElementById("answer3").innerHTML = answer3;
    
                    flex3.innerHTML = `<input placeholder="order" type="text" id="input4"><button id="btn4">Enter</button>`;
    
                    let btn4 = document.getElementById("btn4");
    
                    btn4.onclick= function () {
                        let input4 = document.getElementById("input4").value.toLowerCase();
    
                        if (input4 === "water"|| input4 === "coke" || input4 === "orange juice"){
                            let answer4 = "That will be 500 Naira <3";
                            document.getElementById("answer4").innerHTML = answer4;
                            
                            let final = "Thank you for choosing Zomie's <3";
                            document.getElementById("final").innerHTML = final;
                        }
                        else{
                            let answer4 = "Sorry, that isn't available <3";
                            document.getElementById("answer4").innerHTML = answer4;
                        }
                    }
    
    
                } else if (input3 === "no") {
                    let answer3 = "Okay, Thank you for Choosing Zomie's <3";
                    document.getElementById("answer3").innerHTML = answer3;
                }
            };
        };
    }
     else {
        let answer1 = "Sorry that isn't available";
        document.getElementById("answer1").innerHTML = answer1
        let fle = document.getElementById("fle")

        fle.innerHTML = `<button id="back_up_btn1">Yes</button><button id="back_up_btn2">No</button>`;

        let answer1_backup= "Would you like to order something else?";
        document.getElementById("answer1_backup").innerHTML = answer1_backup;
    }

    let back_up_btn1 = document.getElementById("back_up_btn1")
    let back_up_btn2 = document.getElementById("back_up_btn2")

    back_up_btn1.onclick= function(){
        let answer1 = "";
        document.getElementById("answer1").innerHTML = answer1
        let answer1_backup= "";
        document.getElementById("answer1_backup").innerHTML = answer1_backup
        let fle = document.getElementById("fle")
        fle.innerHTML = ``;
    }

    back_up_btn2.onclick= function(){
        let answer1 = "Okay, thank you for choosing Zomie's <3";
        document.getElementById("answer1").innerHTML = answer1
        let answer1_backup= "";
        document.getElementById("answer1_backup").innerHTML = answer1_backup
        let fle = document.getElementById("fle")
        fle.innerHTML = ``;
    }

};
