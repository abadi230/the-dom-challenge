const counter = document.querySelector('#counter');
let interval = setInterval( increment, 1000);
const minus = document.getElementById('-');
const plus = document.getElementById('+');
const heart = document.getElementById('<3'); 
let like = 0;
const pause = document.querySelector('#pause')
const commentForm = document.querySelector('form')

  let isPaused = false;

function increment(){
    if(!isPaused){
        counter.innerHTML =+ parseInt(counter.innerText) + 1;
    }
}
function dicremnt(){
    counter.innerHTML = parseInt(counter.innerText) - 1;
}

document.addEventListener("DOMContentLoaded", function() {
    interval
  });

  minus.addEventListener('click', e=>{
    dicremnt();
  })

  plus.addEventListener('click', e=>{
    increment();
  })

  likes = document.querySelector(".likes")
  let li = document.createElement('li')
  likes.appendChild(li)
  li.style.display= 'none'
  heart.addEventListener('click', e=>{
    like++
    li.style.display = 'block'
    li.innerHTML = `${like} have been liked`
  })


  pause.addEventListener('click', e=>{
      if(pause.innerHTML === "pause"){

          e.preventDefault();
          isPaused= true;
          minus.disabled = true;
          plus.disabled = true;
          heart.disabled = true;
          pause.innerHTML = 'resume'
      }else{
        isPaused= false;
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        pause.innerHTML = 'pause'
      }
  })

  commentForm.addEventListener('submit', e=>{
      e.preventDefault();
      let value = commentForm.children[0].value

    const d=document.querySelector(".comments"),
            p=document.createElement("p");
            
            p.innerText=value,d.appendChild(p)
  })