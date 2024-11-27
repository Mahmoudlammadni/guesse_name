const words = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Icedtea",
    "Jackfruit"
];

const randomWord = words[Math.floor(Math.random() * words.length)]; 
const formDiv = document.getElementById("inputs");
const maxAttempts = 5;
let attempts = 0;


for (let i = 0; i < randomWord.length; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.id = "n" + i;
    input.maxLength = 1; 
    input.className = "letter-input";

    if (i === 0) {
        input.value = randomWord[0];
        input.readOnly = true;
    }

    formDiv.appendChild(input);
}

function aff(e) {
    e.preventDefault();  
    let correctCount = 0;
    attempts++;

    for (let i = 0; i < randomWord.length; i++) {
        const TargetInput = document.getElementById("n" + i);

        if (TargetInput.value.toLowerCase() === randomWord[i].toLowerCase()) {
            TargetInput.style.backgroundColor = "green";
            TargetInput.disabled = true;
            correctCount++;
        } else if (TargetInput.value !== "") {
            TargetInput.style.backgroundColor = "red"; 
            TargetInput.value = '';
        }
    }

    if (correctCount === randomWord.length) {
        alert("Félicitations ! Vous avez trouvé le mot : " + randomWord);
        return;
    }

    if (attempts >= maxAttempts) {
        alert("Dommage, vous avez épuisé vos tentatives. Le mot était : " + randomWord);
        formDiv.innerHTML = ""; 
    }
}
