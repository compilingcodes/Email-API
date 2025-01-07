let mailForm = document.getElementById("mailForm");

let fto = document.getElementById("to");
let fSub = document.getElementById("subject");
let fmsg = document.getElementById("msg");

mailForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let data = {
    to: fto.value,
    sub: fSub.value,
    msg: fmsg.value,
  };

  console.log(`data= `, data);
  
  await fetch(`/send/mail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(`email res =`, res);
      console.log("Email sent succesfully");
    })
    .catch((err) => console.log(err.message));
});
