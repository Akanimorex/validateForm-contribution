const isValid =()=>{
    let details ={
        name : document.querySelector('#name').value,
        email:document.querySelector('#email').value,
        password:document.querySelector('#email').value,

    }
    console.log(details.name)

    if (details.name || details.email || details.password === ""){
        document.querySelector('#name-error').textContent = `you left a field blank`
        return false;

    }
}


const validate =(event)=>{
    event.preventDefault();
    const check = isValid();
    if(check){
        return true;

        // clear form

        document.querySelector('#name-error').textContent = ""

        console.log('done')
    }

}


document.querySelector('#form').addEventListener('submit',validate)