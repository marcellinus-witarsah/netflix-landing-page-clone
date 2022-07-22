//for faq animation
let prevBtnId;

//variables for shoutout box or comments
let form = document.getElementById("question-form")
let container = document.getElementById("question-container")
let user = document.getElementById("name") 
let email = document.getElementById("email") 
let question = document.getElementById("question") 
let arrQuestions = []

//variables for hover animations
let menu_1 = document.getElementById("netflix-menu-1")
let menu_2 = document.getElementById("netflix-menu-2") 

const dict = {
    "question-1": "answer-1",
    "question-2": "answer-2",
    "question-3": "answer-3",
    "question-4": "answer-4",
    "question-5": "answer-5",
    "question-6": "answer-6",
}

function revealAnswer(btn){
    if (prevBtnId === btn.id){
        document.querySelector('#'+dict[btn.id]).classList.remove('reveal')
        document.querySelector('#'+btn.id).querySelector('.fa').classList.remove('fa-times')
        document.querySelector('#'+btn.id).querySelector('.fa').classList.add('fa-plus')
        prevBtnId = null
        return;
    }
    else{
        for([key, value] of Object.entries(dict)){
            document.querySelector('#'+value).classList.remove('reveal')
            document.querySelector('#'+key).querySelector('.fa').classList.remove('fa-times')
            document.querySelector('#'+key).querySelector('.fa').classList.add('fa-plus')
        }
        document.querySelector('#'+dict[btn.id]).classList.add('reveal')
        document.querySelector('#'+btn.id).querySelector('.fa').classList.remove('fa-plus')
        document.querySelector('#'+btn.id).querySelector('.fa').classList.add('fa-times')
    }
    prevBtnId = btn.id  
}

//for shoutout box or comments
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    alert("New question or comment added")
    div = document.createElement('div')
    date = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`
    let data = {
        'dataName': user.value,
        'dataEmail': email.value,
        'dataTime': date,
        'dataQuestion': question.value,
    }
    div.classList = "question-item"
    div.innerHTML = createQuestionElement(data)
    container.appendChild(div)
    user.value = ""
    email.value = "" 
    question.value = "" 
})

function createQuestionElement(data){
    let divElement = 
    `
        <div class="question-item-left">
            <img src="./resources/images/user.png" alt="pict">
        </div>
        <div class="question-item-right">
            <div class="person-info">
               <h3>${data['dataName']} (${data['dataTime']})</h3>
            </div>
            <div class="content">
                <p>
                    ${data['dataQuestion']}
                </p>
            </div>
        </div>
    `
    return divElement
}

//hover animation
const dropdown_reveal = (event)=>{
    event.preventDefault()
    event.target.querySelector(".dropdown_menu--animated").style.display = "block"
}

const dropdown_hide = (event)=>{
    event.preventDefault()
    event.target.querySelector(".dropdown_menu--animated").style.display = "none"
}

menu_1.addEventListener("mouseover", dropdown_reveal)
menu_1.addEventListener("mouseleave", dropdown_hide)
menu_2.addEventListener("mouseover", dropdown_reveal)
menu_2.addEventListener("mouseleave", dropdown_hide)
