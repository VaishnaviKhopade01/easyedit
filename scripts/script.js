
//all elements

let inputImage = document.getElementById("main-img-input")
let imgContainer = document.getElementById("img-container")
let mainEditableImg = document.getElementById("img-main")
let imgUploader = document.getElementById("image-uploader")
let pannelSettingHandler = document.getElementById("pannel-setting-handler")
let settingMainPannel = document.getElementById("settings")
let settingPannel = document.getElementById("setting-pannel")
let loaderBody = document.getElementById("loader")

let notificationBar = document.getElementById("notification-bar")
let notificationtext = document.getElementById("notification-text")


//notification function

const notification =(text="deafult message",time=1000,type = "success")=>{
    
    notificationBar.style.left = "-1%"
    notificationtext.innerText = text
    
    if(type == "success"){
        
        notificationBar.style.borderRight = "10px solid green"
        
     }else{
         notificationBar.style.borderRight = "10px solid red"
     }

   
    setTimeout(()=>{
        notificationBar.style.left = "-100%"
    },time)

}

notification("something went wrong",3000,"error")






//all image control setting

let blurr = document.getElementById("Blur")
let contrast = document.getElementById("Contrast")
let grayscale = document.getElementById("Grayscale")
// let saturation = document.getElementsById("Saturation")
let invert = document.getElementById("Invert")
let brightness = document.getElementById("Brightness")
let opacity = document.getElementById("Opacity")
let sepia = document.getElementById("Sepia")

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

// open setting pannel 

pannelSettingHandler.addEventListener("click",()=>{
    settingMainPannel.style.display = "block"
})

settingMainPannel.addEventListener("click",()=>{
    settingMainPannel.style.display = "none"
})

settingPannel.addEventListener("click",(e)=>{
    e.stopPropagation()
})

//setting events 

blurr.addEventListener("change", () => {
    mainEditableImg.style.filter = `blur(${blurr.value}px)`
})

contrast.addEventListener("change", () => {
    mainEditableImg.style.filter = `contrast(${contrast.value})`
})

grayscale.addEventListener("change",()=>{
    mainEditableImg.style.filter = `grayscale(${grayscale.value})`
})

// saturation.addEventListener("change", () => {
//     mainEditableImg.style.filter = `saturation(${saturation.value})`

// })

invert.addEventListener("change",()=>{
    mainEditableImg.style.filter = `invert(${invert.value})`
})

brightness.addEventListener("change", () => {
    mainEditableImg.style.filter = `brightness(${brightness.value - 10})`
})


opacity.addEventListener("change",()=>{
    mainEditableImg.style.filter = `opacity(${opacity.value})`
})

sepia.addEventListener("change",()=>{
    mainEditableImg.style.filter = `sepia(${sepia.value})`
})


//setTimeout

setTimeout(()=>{
    loaderBody.style.display="none"
},4000)





