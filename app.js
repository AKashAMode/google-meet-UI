const joinedpeople = document.getElementById('contain-box');
const contributor = document.getElementById('peoples-container');
const closebox = document.getElementById('close-window');
const contributorsContainer = document.getElementById('contributors-box');
const inputname = document.getElementById('input-name');


function performOpe(){
     joinedpeople.style.display = 'none';
     contributor.style.display = 'block';

}

function closeOpe(){
    contributor.style.display = 'none';
    joinedpeople.style.display = 'flex';
}

let students = ["abhishek","rohit","vrushali","komal","raju"];


students.forEach((stud) => {

    contributorsContainer.innerHTML += 
                `<div class="people-contain">
               <div class="joined-people">
                <p class="people-icon">${stud.charAt(0)}</p>
                <h4 class="student-name">${stud}</h4>
               </div>
               <div class="people-voice">
                <img src="./img/microphone.png" class="people-icon-style microphone-icon" alt="microphone">
                <img src="./img/dots.png" class="people-icon-style" alt="people-info">
               </div>
            </div>`
});

function showResult(){
  const searchText = inputname.value.toLowerCase();
  contributorsContainer.innerHTML = '';

  const filterNames = students.filter((stud) => {
       if(stud.toLowerCase().includes(searchText.toLowerCase())){
        return true;
       }
      
  })

  filterNames.forEach((stud) => {
    contributorsContainer.innerHTML += 
                `<div class="people-contain">
               <div class="joined-people">
                <p class="people-icon">${stud.charAt(0)}</p>
                <h4 class="student-name">${stud}</h4>
               </div>
               <div class="people-voice">
                <img src="./img/microphone.png" class="people-icon-style microphone-icon" alt="microphone">
                <img src="./img/dots.png" class="people-icon-style" alt="people-info">
               </div>
            </div>`
});

};