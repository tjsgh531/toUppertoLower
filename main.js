const inputText = document.getElementById('textSection');
const warning = document.getElementById('warning');

inputText.addEventListener('input',()=>{
  const inputValue = inputText.value.toLowerCase();
  
  if(inputValue.includes('test')){
    warning.textContent ='test가 포함되어 있습니다';
  }
  else{
    warning.textContent ='없어';
  }
});