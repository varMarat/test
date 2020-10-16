import './css/index.css'
import './scss/index.scss'

document.querySelector('.navbar__btn').addEventListener('click', (e)=>{
    e.preventDefault()
    document.querySelector('.dropdown').classList.toggle('dropdown__active')

})
document.querySelector('.dropdown__btn').addEventListener('click', (e)=>{
    e.preventDefault()
    document.querySelector('.dropdown').classList.toggle('dropdown__active')

})
