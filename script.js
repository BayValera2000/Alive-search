input = document.querySelector('#input1');
let list = document.querySelectorAll('li');
window.addEventListener('load', function(){
    input.addEventListener('input', function(){
        let value = this.value;
        if(value != ''){
            for(let i = 0; i < list.length; i++){
                if(list[i].innerText.search(value) == -1){
                    list[i].classList.add('hide');
                }
            }
        }
        else{
            for(let i = 0; i < list.length; i++){
                list[i].classList.remove('hide');
            }
        }
    })
});