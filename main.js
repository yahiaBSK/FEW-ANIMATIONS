
//     ON CLICK 'LOGN' BUTTON   ==>


submit.addEventListener('click', function () {
  
  
  
  var progress_C = document.querySelector('.progress-container')
  var progress_B = document.getElementById('progress')
  var input = document.getElementById('input')
  var submit = document.getElementById('submit')
  var alertt = document.querySelector('.alert')
  var checked = document.getElementById('checked')
  var done = document.getElementById('done')
  
  
  
  if (input.value.length <= 1) {
    setTimeout(() => {
      alertt.style.opacity = "1"
      input.style.boxShadow = "0 0 0 3px rgba(255, 0, 0, 0.34)"
    }, 200)
    submit.style.color = "rgba(255, 0, 0, 0.70)"
    
  }else{
    submit.style.color = "green"
    alertt.style.opacity = "0"
    input.style.boxShadow ="0 0 0 3px rgba(0, 141, 7, 0.34)"
    progress_C.style.animation = " progress-c 5s ease-in-out";
    setTimeout (() => {progress_B.style.animation = "progress 4.5s ease-in-out "}, 700)
    setTimeout (() => {progress_B.style.width= "295px" ; progress_C.style.opacity = "1"}, 4500)
    setTimeout(()=>{
      checked.style.zIndex = "2"
      checked.style.opacity = "1"
      checked.style.animation = "checked 0.6s"
    },5300)
    setTimeout(() => {
      checked.style.boxShadow = "0 0 0 4px rgba(0, 141, 7, 0.44)"
      done.style.backgroundColor = "rgba(0, 141, 7, 0.44)"
      done.style.color = "white"
    }, 5850)
    setTimeout(()=>{
      done.style.opacity = "1"
      done.style.animation = "done 0.6s"
    },5700)
  }
})

// ------------------------------------------------