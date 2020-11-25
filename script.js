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
	case 'Привет!':
	botAnswer.innerText='Привет, мой дорогой друг, это Chat-Bot, для продолжения диалога напиши "Да"';
	break;
	case  "Да":
	botAnswer.innerText = 'У меня есть пару милых котиков, если хочешь на них посмотреть пиши "Хочу!"';
	break;
	case  "Хочу!":
	botAnswer.innerHTML="<img src='https://im.jigsawplanet.com/?rc=img&pid=3befaa6cfd26&size=160'>";
	break;
		case  "Еще!":
	botAnswer.innerHTML="<img src='https://kmsk.dp.ua/sites/t-k/files/styles/newsorder/public/1487714251_koshka-kot-ulica-vesna-pary.jpg?itok=N39PVLBP'>";
	break;
	case  "Хочу увидеть щенят!":
	botAnswer.innerHTML="<img src='https://hobby-puzzle.ru/images/product_images/thumbnail_images/1606_0.jpg'>";
	break;
	case  "GIF":
	botAnswer.innerHTML="<img src='https://i.gifer.com/7d25.gif'>";
	break;
	default:
	botAnswer.innerText = 'Хочешь посмотреть на щенят?Пиши"Хочу увидеть щенят!"';

}})

var pc = document.getElementById("pic_cntr");
     botAnswer.innerHTML="<img src='http://www.stihi.ru/pics/2010/02/27/2487.jpg'>";

var img = new Image();
img.src = 'https://sun9-49.userapi.com/c850324/v850324974/d096f/mx_dWs7JFCA.jpg'
pc.appendChild(img)