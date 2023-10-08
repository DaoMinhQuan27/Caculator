let text = document.querySelector('.text');
text.value = '';
function setValue(e){
    console.log(e.value);
    text.value += e.value;
    text.innerHTML = text.value;
}

function deleteText(){
    text.value = '';
    text.innerHTML = text.value;
}
function caculate(){
    text.value = eval(text.value);
    text.innerHTML = text.value;
}