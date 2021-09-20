let btnAdd = document.querySelector('button');
let table = document.querySelector('table');


let NameInput = document.querySelector('#Name');
let CityInput = document.querySelector('#City');
let AgeInput = document.querySelector('#Age');

/*
btnAdd.addEventListener('click', () => {
  let Name = NameInput.value;
  let City = CityInput.value;
  let Age = AgeInput.value;

  let template = `
                <tr>
                    <td>${Name}</td>
                    <td>${City}</td>
                    <td>${Age}</td>
                </tr>`;

  table.innerHTML += template;
});*/

function validate() {
  var isReadyForInsert = true;
  var Name = document.getElementById('Name').value;
  if (Name == "") {
    isReadyForInsert = false;
    alert('Name field is not having proper value');
  }
  var City = document.getElementById('City').value;
  if (City == "") {
    isReadyForInsert = false;
    alert('City field is not having proper value');
  }
  var Age = document.getElementById('Age').value;
  {
    if (Age == "") {
      isReadyForInsert = false;
      alert('Age field is not having proper value');

    } else if (isNaN(Age)) {
      isReadyForInsert = false;
      alert("please enter numertic number")
    }
  }


  return isReadyForInsert;

}



btnAdd.addEventListener('click', () => {
  if (validate()) {
    let Name = NameInput.value;
    let City = CityInput.value;
    let Age = AgeInput.value;

    let template = `
                  <tr>
                      <td>${Name}</td>
                      <td>${City}</td>
                      <td>${Age}</td>
                  </tr>`;

    table.innerHTML += template;
  }
});
