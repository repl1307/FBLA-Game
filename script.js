function typewriterEffect(elem){
  const fullText = elem.textContent;
  elem.textContent = "";
  let i = 0;
  const appendText = () => {
    if(i < fullText.length){
      elem.textContent += fullText.charAt(i++);
      setTimeout(() => appendText(), 25);
    }
  }
  appendText();
  return fullText;
}

function intro(){
  const text = typewriterEffect(document.querySelector('.animated-text'));
  setTimeout(() => {
    const gameplayGifs = document.getElementById('gameplay-gifs');
    gameplayGifs.classList.toggle('hidden');
  }, text.length*30);
}

intro();
