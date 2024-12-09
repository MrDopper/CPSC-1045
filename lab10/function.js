let attendees = [];

function Attendee(firstName, lastName, email, company) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.company = company;

    this.toString = function () {
        return this.firstName + ", " + this.lastName + ", " + this.email + ", " + this.company + "";
    };
}
function addAttendee() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('E-mail').value;
    const company = document.getElementById('company').value;

    const newAttendee = new Attendee(firstName, lastName, email, company);

    attendees.push(newAttendee);
    updateDisplay();
    clearInputs();
}
function updateDisplay() {
    const attendeeList = document.getElementById('attendeeList');
    attendeeList.innerHTML = '';

    let listContent = '';

    for (let i = 0; i < attendees.length; i++) {
        listContent += '<li>' + attendees[i].toString() + '</li>';
    }

    attendeeList.innerHTML = listContent;
}
function clearInputs() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('E-mail').value = '';
    document.getElementById('company').value = '';
}
document.getElementById('add').addEventListener('click', addAttendee);
