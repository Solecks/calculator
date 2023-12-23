let a = "";
let b = "";
let as = "";
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
const action = ['-', '+', 'x', '/' , '%'];

const out = document.querySelector('.class-screen p');

function ClearAll() {
    a = '';
    b = '';
    as = '';
    finish = false;
    out.textContent = '0';
}

document.querySelector('.as').onclick = ClearAll;

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('as')) return;

    out.textContent = '';

    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && as === '') {
            a += key;
            out.textContent = a;
        } 
        else if (a!== '' && b!== '' && finish) { 
            b = key ; 
            finish = false ;
            out.textContent=  b;

        }
        else {
            b += key;
            out.textContent = a + as + b;
        }
    }

    if (action.includes(key)) {
        as = key;
        out.textContent = a + as;
    }
    if (key === '=') { 
        if (b=== '') b = a ;
     switch(as) { 
     case '+' : 
        a = (+a) + (+b); 
        break;
     case '-' : 
        a = a - b; 
        break ; 
         
     case 'x' : 
        a = a * b; 
        break ; 
     case '/' : 
     if (b === '0' ) { 
        out.textContent = "Error" ; 
        a = ' ' ; 
        b = ' '; 
        as = ' ';
        return;
}
        a = a / b; 
        break ; 
        case '%' : 
        a = (+a) % (+b) ;
        break;
     }   
     finish = true ; 
     out.textContent = a ; 
     console.log(a , b , as) ; 
    }
};
