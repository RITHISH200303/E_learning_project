// const adminControl_containor = document.querySelector(
//   ".adminControl_containor"
// );
// const adminChild = document.querySelector("#adminControl_child");
// const editButton = document.querySelector("#ditButton");
// const deleteButton = document.querySelector("#deleteButton");
// const idChanging = document.getElementById("idChanging");
// const cancelReturn = document.getElementById("cancelReturn");

// function summa(user) {
//   adminControl_containor.style.display = "none";
//   idChanging.style.display = "block";
//   idChanging.innerHTML = `
//   <ul>
//   <h3>Edit</h3>
//   <li>
//   <form id="editForm" action="/adminEdited/${user._id}" method="post">
//   <label for="">Name </label>
//   <input type="text" id="name" name="name" value="${user.name}">
//   <label for="">Email</label>
//   <input type="text" id="name" name="userId" value="${user.userId}">
//   <label for="">Password</label>
//   <input type="text" id="name" name="password" value="${user.password}">

//   <div id="EditButtonContainor">
//   <button>Submit</button>
//   <a href="/cancelReturn">
//   Cancel
//   </a>
//   </div>

//   </form>
//   </li>
//   </ul>`;
// }

// async function edit(event) {
//   const userId = event.target.dataset.delete_student;
//   const response = await fetch(`/edit/admin/${userId}`);
//   const responseData = await response.json();
//   const userDetails = responseData.user;
//   const user = userDetails[0];
//   summa(user);
//   //console.log(summal);
// }
// async function deleting(event) {
//   const userId = deleteButton.dataset.delete_student;
//   fetch(`/delete/${userId}`, { method: "POST" });
// }
// adminControl_containor.addEventListener("click", edit);
// deleteButton.addEventListener("click", deleting);
