// function saveData() {
//     var name = document.getElementById("name");
//     var roll = document.getElementById("roll");
  
  
  
//     //Saving the value in Firebase Database
//     var key = firebase.database().ref("student").push().key;
    
  
//     var student = {
//       value: name.value,
//       key: roll.value,
//     };
  
//     firebase
//       .database()
//       .ref("student/" + key)
//       .set(student);
  
//     console.log(student);
//   }




function saveData() {
    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;

    //Saving the value in Firebase Database
    var newStudentRef = window.push(window.ref(window.database, "student"));
    
    var student = {
        value: name,
        key: roll
    };

    window.set(newStudentRef, student)
        .then(() => {
            console.log("Data saved successfully:", student);
        })
        .catch((error) => {
            console.error("Error saving data:", error);
        });
}
