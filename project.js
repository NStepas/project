let globalData = [];
let curIndex = 0;

function toObject() {
  var form = document.querySelector('form');
  var formDatat = new FormData(form)
  var obj = {};

  for (let key of formDatat.keys()) {
    obj[key] = formDatat.get(key);
  }
  console.log(obj);
  globalData.push(obj);
  console.log(globalData);
}


function checkTypeOfName() {
  const firstName = document.getElementById('firstName').value;
  const secondName = document.getElementById('secondName').value;
  const button = document.getElementById('but');
  var letters = /^[A-Za-z]+$/;
  if ((letters).test(firstName)) {
    document.getElementById("firstName").style.borderColor = "black";
    button.style.borderColor = 'black';
    button.disabled = false;
  } else {
    console.log('Error');
    document.getElementById("firstName").style.borderColor = "red";
    button.style.borderColor = "red";
    button.disabled = true;
  }

  if ((letters).test(secondName)) {
    document.getElementById('secondName').style.borderColor = "black";
    button.style.borderColor = "black";
    button.disabled = false;
  } else {
    console.log('Error');
    document.getElementById("secondName").style.borderColor = "red";
    button.style.borderColor = "red";
    button.disabled = true;
  }
}

// function checkTypeOfSecondName () {
//   const secondName = document.getElementById('secondName').value;
//   const button = document.getElementById('but');

//   if(isNaN(Number(secondName))) {
//     document.getElementById('secondName').style.borderColor = "black";
//     button.style.borderColor = "black";
//     button.disabled=false;
//   } else {
//     console.log("Error")
//     document.getElementById('secondName').style.borderColor = "red";
//     button.style.borderColor = "red";
//     button.disabled = true;
//   }
// }

function checkTypeOfAge() {
  const age = document.getElementById('age').value;
  const button = document.getElementById('but');
  console.log(typeof age);
  if (isNaN(Number(age))) {
    console.log('Error');
    document.getElementById("age").style.borderColor = "red";
    button.style.borderColor = 'red';
    button.disabled = true;
  } else {
    document.getElementById("age").style.borderColor = "black";
    button.style.borderColor = 'black';
    button.disabled = false;
  }
}

// Функція виводу всіх клієнтів
function showAllClients() {
  const div = document.createElement('div');
  const outputedData = document.getElementsByTagName('span');

  for (key of globalData) {
    let arrayIndex = globalData.indexOf(key);
    div.innerHTML += `    <form name="data" id="${generateRowId()}">
            <p>Client ${arrayIndex + 1}: ${key.firstName}</p>
            <div class="first_name_case"><label for="first_name">First name</label>
              <span class="in">${key.firstName}</span>  
            </div>
            <div class="second_name_case"><label for="second_name">Second name</label>
              <span class="in">${key.secondName}</span>
            </div>
            <div class="age_case"><label for="age">Age</label>
              <span class="in">${key.age}</span>
            </div>
            <div class="type_of_abonement_case" id="type_of_abonement_case">
              <label for="type_of_abonement">Type of abonement</label>
              <span class="in">${key.abonement}</span>
            </div>
        </div>
        <button onclick ="remove(this, ${arrayIndex}); return false" id="removeButton">delete</button>
        <button onclick ="" id="editButton">Edit</button>
        </form>`;
    document.querySelector('.p1').appendChild(div);
  }
}

const generateRowId = () => {
  curIndex++;
  return curIndex;

};
const remove = (item, arrIndex) => {
  curIndex--;
  console.log(arrIndex);
  // for(let i = 0; i < globalData.length; i++) {
  // console.log(globalData[i]);
  const index = globalData.indexOf(arrIndex);
  if (index) {
    globalData.splice(index, 1);
    item.parentNode.remove();
  } else {
    throw new Error('Smth went wrong, try again later');
  }
}

// function deleteClient() {
//   let nameIndex = document.querySelector('.client-delete');
//   let indexDelete = nameIndex.value;
//   if (indexDelete >= 0 && indexDelete < globalData.length) {
//     globalData.splice(indexDelete, 1);
//     document.querySelector('.p1').innerHTML = "";
//     for (key of globalData) {
//       let indexOutput = globalData.indexOf(key);
//       document.querySelector('.p1').innerHTML += ('client:' + (indexOutput + 1) + ' -');
//       for (i in key) {
//         document.querySelector('.p1').innerHTML += (' ' + key[i] + ' ');
//       }
//     }
//   } else {
//     document.querySelector('.p1').innerHTML = "Sorry, no one is registered under this number!!!";
//   }
//   console.log(globalData)
// }



















// if (outputedData.length > 0) {
//   // for (let i = 0; i < outputedData.length; i++) {
//     // if (outputedData[i].textContent === key.firstName) {
//       // continue;
//     // }
//      div.innerHTML += `    <form name="data" id="formElem_${generateRowId()}">
//       <p>Client ${arrayIndex + 1}: ${key.firstName}</p>
//       <div class="main-div" id="row_0"></div>
//       <div class="first_name_case"><label for="first_name">First name</label>
//         <span class="in">${key.firstName}</span>
//       </div>
//       <div class="second_name_case"><label for="second_name">Second name</label>
//         <span class="in">${key.secondName}</span>
//       </div>
//       <div class="age_case"><label for="age">Age</label>
//         <span class="in">${key.age}</span>
//       </div>
//       <div class="type_of_abonement_case" id="type_of_abonement_case">
//         <label for="type_of_abonement">Type of abonement</label>
//         <span class="in">${key.abonement}</span>
//       </div>
//   </div>
//   </form>`;
//   document.querySelector('.p1').appendChild(div);
//     //     for (key of globalData) {
//     //         let arrayIndex = globalData.indexOf(key);
//     //         div.innerHTML += `    <form name="data" id="formElem_${generateRowId()}">
//     //     <p>Client ${arrayIndex + 1}: ${key.firstName}</p>
//     //     <div class="main-div" id="row_0"></div>
//     //     <div class="first_name_case"><label for="first_name">First name</label>
//     //       <span class="in">${key.firstName}</span>
//     //     </div>
//     //     <div class="second_name_case"><label for="second_name">Second name</label>
//     //       <span class="in">${key.secondName}</span>
//     //     </div>
//     //     <div class="age_case"><label for="age">Age</label>
//     //       <span class="in">${key.age}</span>
//     //     </div>
//     //     <div class="type_of_abonement_case" id="type_of_abonement_case">
//     //       <label for="type_of_abonement">Type of abonement</label>
//     //       <span class="in">${key.abonement}</span>
//     //     </div>
//     // </div>
//     // </form>`;
//     //         document.querySelector('.p1').appendChild(div);
//     //     }
//   // }
// } else {
const aga = () => {
  alert(true)
}