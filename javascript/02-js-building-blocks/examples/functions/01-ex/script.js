const btn = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

btn.addEventListener("click", () => displayMessage("Your inbox is almost full — delete some mails", "warning"));
btn2.addEventListener("click", () => displayMessage("Anne: Hi there, how are you today?", "chat"));

function displayMessage(msgText, msgType) {
  const body = document.body;

  const panel = document.createElement("div");
  panel.setAttribute("class", "msg-box");
  body.appendChild(panel);

  const msg = document.createElement("p");
  msg.textContent = msgText;
  panel.appendChild(msg);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "x";
  panel.appendChild(closeBtn);

  closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
  setTimeout(() => closeBtn.click(), 5000);

  if (msgType === "warning") {
    msg.style.backgroundImage = "url(icons/warning.png)";
    panel.style.backgroundColor = "#FFFF9E";
  } else if (msgType === "chat") {
    msg.style.backgroundImage = "url(icons/chat.png)";
    panel.style.backgroundColor = "#9DFFFF";
  } else {
    msg.style.paddingLeft = "0";
  }
}
