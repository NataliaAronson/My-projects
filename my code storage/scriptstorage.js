let messages = [];

document.addEventListener('DOMContentLoaded', (event) => {
  let restoredMessages = localStorage.getItem("messages");
  let restoredName = localStorage.getItem("name");
  if (restoredMessages != null) {
    document.getElementById("notes").innerHTML = restoredMessages.replace(/,/g, "<br>");
    messages = restoredMessages.split(',');
  }

  if (restoredName != null) {
    document.getElementById("name").value = restoredName;
  }
});


function sendMessage() {
  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;
  
  messages.push(message);

  let messagesString = messages.join("<br>");
  document.getElementById("notes").innerHTML = messagesString;
  localStorage.setItem("messages", messages);
  localStorage.setItem("name", name);
}

