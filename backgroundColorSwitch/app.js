let colors = document.querySelectorAll('.color');
let main = document.getElementById('main');
console.log(colors);

colors.forEach((color)=>{
    color.addEventListener('click',(e)=>{
        // console.log(e.target)
        if(e.target.id == 'black'){
            main.style.backgroundColor = e.target.id
        }
        if(e.target.id == 'blue'){
            main.style.backgroundColor = e.target.id
        }
        if(e.target.id == 'red'){
            main.style.backgroundColor = e.target.id
        }
        if(e.target.id == 'green'){
            main.style.backgroundColor = e.target.id
        }
        if(e.target.id == 'pink'){
            main.style.backgroundColor = e.target.id
        }

    })
})