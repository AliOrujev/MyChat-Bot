let askButton = document.getElementById('myButton');
askButton.addEventListener('click', ()=>{
	
	let text = document.getElementById('question').value;
	let question = document.createElement('p');
	question.innerText = text;
	let answerSection = document.getElementById('answer');
	answerSection.appendChild(question)
	let botAnswer = document.createElement('div');
answerSection.appendChild(botAnswer);
switch(text){
	case 'Hello!':
	botAnswer.innerText='Hello, my friend!';
	break;
	case  "What's up?":
	botAnswer.innerText = 'Very well, thanks, and you?';
	break;
	case  "I'm fine, who are you?":
	botAnswer.innerText = "I'm chat-bot, your first project:)";
	break;
	default:
	botAnswer.innerText = "I'm not understand you:(";

}})


