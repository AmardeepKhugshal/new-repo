const input = document.querySelector('#input-link');
const btn = document.querySelector('#qr-btn');
const img = document.querySelector('#qr-img');

btn.addEventListener('click',()=>{
    const inputVal = input.value
    if(!inputVal){
        alert('enter valid link/text')
    }else{
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`
        
    }
})

