const labels = document.querySelectorAll(".form-control label")

labels.forEach(label =>{
    label.innerHTML = label.innerText
    .split('')
    .map((text,idx)  => `<span style="transition-delay: ${idx * 50}ms">${text}</span>`)
    .join('')

})

console.log(text)