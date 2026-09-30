let availableSeats = 45;
function checkRegistration(){let m=document.getElementById("registrationStatus");if(m)m.textContent="Registration for the SEU Tech Summit 2026 is currently open."}
function checkSeats(){let m=document.getElementById("seatMessage");if(!m)return;if(availableSeats>0){m.textContent="Seats are available. Remaining seats: "+availableSeats}else{m.textContent="Sorry, no seats are available."}}
function showGreeting(){let n=document.getElementById("studentName").value;let o=document.getElementById("greetingMessage");if(o)o.textContent="Welcome to the Summit, "+n+"!"}
function showVenueReminder(){let m=document.getElementById("venueMessage");if(m)m.textContent="Reminder: Please arrive at the Permanent Campus Auditorium by 8:45 AM."}
