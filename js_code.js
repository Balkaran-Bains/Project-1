const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( function(button) {
    button.addEventListener('click', function(H){
        if(H.target.id=='Blue'){
            body.style.backgroundColor= 'rgb(25, 220, 230)';
        }

        if(H.target.id=='White'){
            body.style.backgroundColor= H.target.id;
        }

        if(H.target.id=='Pink'){
            body.style.backgroundColor= H.target.id;
        }

        if(H.target.id=='orange'){
            body.style.backgroundColor= 'rgb(248, 162, 3)';
        }
    })
})

