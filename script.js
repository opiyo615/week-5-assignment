javascript

// ==================================
// part 1; variables & conditionals
// ==================================

let hour = new Date().getHours(); let greetingsText = "";

if (hour < 12) {
    greetingsText = "Good morning!";
} else if (hour < 18) {
    greetingsText = "Good afternoon!";
} else {
    greetingsText = "Good evening!";
}

documents.getElementById("greetings").innerText = greetingsText;

// ==================================
// part 2;custom functions
// ==================================

function showTime() {
    const now = new Date();

document.getElementById("FunctionResult").innerText = current time is:" + now.toLocaleTimeString();
}

function greetUser(name) {
Document.getElementById("FunctionResult").innerText = "Hello, ${ name} ! Welcome back.";  
}
// ==================================
// part 3; LOOPS EXAMPLES
// ==================================
function showNumbers() {
    const output =
document.getElementById("Loopoutput");
    output.innerHTML = ""; 
    for (let i = 1; i <= 5; i++) {
        let li =
    document.createElement("li");
        li.textcontent = 'Number:  ${i}';
        output.appendChild(li);
    }
}

function showfruits() {
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
    const output = document.getElementById("Loopoutput");
    output.innerHTML = ""; 
    for (let fruit of fruits) {
        let li = document.createElement("li");
        li.textContent = fruit;
        output.appendChild(li);
    }
}

// ==================================
// part 4; DOM Interactions
// ==================================
function updateName() {
    const name =
    document.getElementById("nameInput").value;
    if (name) {
document.getElementById("displayname").innerText = ' you entered: ${name}';
    } else {
        document.getElementById("displayname").innerText = "Please enter a name.";




    }
}
