// To Do: 
// Try and Catch for unexpected input.
// Del button for 1 delete at a time.


let string="";

let buttons1 = document.querySelectorAll('.btn-type1');
Array.from(buttons1).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    })
})

let buttons2 = document.querySelectorAll('.btn-type2');
Array.from(buttons2).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target)
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;

        }
        else{
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})





