document.getElementById('resumeForm')?.addEventListener('submit',function(event) {
event.preventDefault();


const nameElement = document.getElementById('name') as HTMLInputElement;               
const emailElement = document.getElementById('email') as HTMLInputElement;  ;
const phoneElement = document.getElementById('phome') as HTMLInputElement;  ;
const educationElement = document.getElementById('education') as HTMLInputElement;  ;
const experienceElement = document.getElementById('experience') as HTMLInputElement;  ;
const skillsElement = document.getElementById('skills') as HTMLInputElement; 


const usernameElement = document.getElementById(
    "username"
   )   as HTMLInputElement;


if(nameElement && emailElement && phoneElement &&  educationElement && experienceElement && skillsElement && usernameElement){

const name = nameElement.value;
const email = emailElement.value;
const phone = phoneElement.value;
const education = educationElement.value;
const experience = experienceElement.value;
const skills = skillsElement.value;


const username = usernameElement.value;
const uniquePath =`resumw/${username.replace(/\s+/g, '_')}_cv.html`




const resumeOutput =`    
<h2>Resume</h2> 
<p><strong>Name:</strong> <span id="edit-name" class="editable">  ${name} </span></P>
<p><strong>Email:</strong>  <span id="edit-email" class="editable">${email} </span> </P>
<p><strong>Phone Number:</strong> <span id="edit-phone" class="editable"> ${phone} </span> </P>

<h3>Education</h3>
<p id="edit-education" class="editable">${education}</P>

<h3>Experience</h3>
<p id="edit-experience" class="editable">${experience}</P>

<h3>Skills</h3>
<p id="edit-skills" class="editable">${skills}</P>

`;


const downloadLink = document.createElement('a')
downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
downloadLink.download =uniquePath;
downloadLink.textContent ='Download Your 2024 Resume';


const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;

resumeOutputElement.appendChild(downloadLink)

resumeOutputElement.style.display ="block";
}
}else{
    console.error('one or more output elements are missing')
}
});

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element =>{
        element.addEventListener('click' ,function(){
            const currentElement =element as HTMLElement;
            const currentValue =currentElement.textContent || "";

            if(currentElement.tagName === "p" || currentElement.tagName ==='SPAN' ){
                const input = document.createElement('input')
                input.type ='text'
                input.value = currentValue
                input.classList.add('editing-input')

                currentElement.style.display ='none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }

        })
    })
}