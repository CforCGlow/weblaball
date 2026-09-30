let availableSeats = 45;
function checkRegistration(){let m=document.getElementById("registrationStatus");if(m)m.textContent="Registration for the SEU Tech Summit 2026 is currently open."}
function checkSeats(){let m=document.getElementById("seatMessage");if(!m)return;if(availableSeats>0){m.textContent="Seats are available. Remaining seats: "+availableSeats}else{m.textContent="Sorry, no seats are available."}}
function showGreeting(){let n=document.getElementById("studentName").value;document.getElementById("greetingMessage").textContent="Welcome to the Summit, "+n+"!"}
function submitRegistration(){
 let name=document.getElementById("studentName").value;
 let studentId=document.getElementById("studentId").value;
 let email=document.getElementById("studentEmail").value;
 let workshop=document.getElementById("workshop").value;
 let message=document.getElementById("formMessage");
 if(name===""){message.textContent="Please enter your full name.";return}
 if(studentId===""){message.textContent="Please enter your student ID.";return}
 if(email===""){message.textContent="Please enter your email address.";return}
 if(workshop===""){message.textContent="Please select a workshop.";return}
 let registration={name:name,studentId:studentId,email:email,workshop:workshop};
 let jsonData=JSON.stringify(registration);
 localStorage.setItem("registration",jsonData);
 document.getElementById("jsonOutput").textContent=jsonData;
 message.textContent="Registration saved successfully.";
}
function showSavedRegistration(){
 let d=localStorage.getItem("registration");let o=document.getElementById("savedMessage");
 if(d===null){o.textContent="No saved registration was found.";return}
 let r=JSON.parse(d);o.textContent=r.name+" registered for "+r.workshop+".";
}
function clearRegistration(){localStorage.removeItem("registration");document.getElementById("jsonOutput").textContent="No registration saved yet.";document.getElementById("savedMessage").textContent="Saved registration cleared."}
async function loadWorkshop(){
 document.getElementById("loadMessage").textContent="Please wait. Loading workshop information...";
 const response=await fetch("data/workshop.json");
 if(response.status===200){
  const w=await response.json();
  document.getElementById("workshopTitle").textContent=w.title;
  document.getElementById("workshopDate").textContent=w.date;
  document.getElementById("workshopVenue").textContent=w.venue;
  document.getElementById("workshopSeats").textContent=w.seats;
  document.getElementById("workshopInstructor").textContent=w.instructor;
  document.getElementById("workshopDuration").textContent=w.duration;
  document.getElementById("loadMessage").textContent="Workshop data loaded successfully.";
 }else{document.getElementById("loadMessage").textContent="Could not load workshop data."}
}
async function loadSampleUser(){
 const response=await fetch("https://jsonplaceholder.typicode.com/users/1");
 if(response.status===200){const u=await response.json();document.getElementById("apiUser").textContent=u.name+" - "+u.email}
 else{document.getElementById("apiUser").textContent="Could not load API data."}
}
