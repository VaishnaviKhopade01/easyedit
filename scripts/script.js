
//all elements

let inputImage = document.getElementById("main-img-input")
let imgContainer = document.getElementById("img-container")
let mainEditableImg = document.getElementById("img-main")
let imgUploader = document.getElementById("image-uploader")

//events

inputImage.addEventListener("change",()=>{   //add event on input file

    let imgObj = inputImage.files[0]  //.file[0]
    if(!imgObj) return
    let imgurl = URL.createObjectURL(imgObj)  //URL.createObj()
    console.log(imgurl)
     mainEditableImg.src = imgurl

     imgUploader.style.display = "none"
     imgContainer.style.display = "block"

})