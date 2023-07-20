const item = document.querySelectorAll("li")
const list = document.querySelector("ul")

item.forEach(element =>{
    element.addEventListener("dragstart",(e)=>{
        setTimeout(() => e.target.classList.add("active"),0)
    })
    element.addEventListener("dragend",(e)=>{
        e.target.classList.remove("active")
    })
})

list.addEventListener("dragover",(e)=>{
    e.preventDefault()
    const elementActiveClass = document.querySelector(".active")
    const elementNormal = [...list.querySelectorAll("li:not(.active)")]
    let nextSebling = elementNormal.find(Sebling => {
        return e.clientY <= Sebling.offsetTop + Sebling.offsetHeight / 2;
    })
    list.insertBefore(elementActiveClass,nextSebling)
})

