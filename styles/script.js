let etiket=document.querySelectorAll("#displayEffect2")
let etiket2 = document.querySelectorAll("#displayEffect")

console.log(etiket2.length)
for (let index = 0; index < etiket2.length; index++) {
   
    etiket2[index].addEventListener("mouseover",function() {
        etiket[index].style.display="block"
    })
}  
for (let index = 0; index < etiket2.length; index++) {
   
   etiket2[index].addEventListener("mouseleave",function() {
       etiket[index].style.display="none"
   })
}  

