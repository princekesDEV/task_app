// Write code related to Home page here
let task_arr = JSON.parse(localStorage.getItem("Task List")) || [];
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let name_value = document.querySelector("#name").value;
  let desc_value = document.querySelector("#desc").value;
  let start_date_value = document.querySelector("#start").value;
  let end_date_value = document.querySelector("#end").value;
  let priority_value = document.querySelector("#priority").value;
  let task_obj = {
    name_value,
    desc_value,
    start_date_value,
    end_date_value,
    priority_value,
  };
  task_arr.push(task_obj);
  localStorage.setItem("Task List", JSON.stringify(task_arr));
});
