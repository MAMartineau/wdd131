const form = document.querySelector("#ticketForm");
const ticketType = document.querySelector("#ticketType");
const dynamicField = document.querySelector("#dynamicField");
const dynamicLabel = document.querySelector("#dynamicLabel");
const dynamicInput = document.querySelector("#dynamicInput");
const errors = document.querySelector("#errors");
const ticketOutput = document.querySelector("#ticketOutput");

ticketType.addEventListener("change", () => {
    if (ticketType.value === "student") {
        dynamicField.hidden = false;
        dynamicLabel.textContent = "Student #";
        dynamicInput.required = true;
        dynamicInput.value = "";
    } else if (ticketType.value === "guest") {
        dynamicField.hidden = false;
        dynamicLabel.textContent = "Access Code";
        dynamicInput.required = true;
        dynamicInput.value = "";
    } else {
        dynamicField.hidden = true;
        dynamicLabel.textContent = "";
        dynamicInput.required = false;
        dynamicInput.value = "";
    }
});

function isPastDate(value) {
    const today = new Date();
    const selectedDate = new Date(value);
    return selectedDate <= today;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    errors.innerHTML = "";
    ticketOutput.innerHTML = "";

    let errorMessages = [];

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = ticketType.value;
    const eventDate = form.eventDate.value;
    const dynamicValue = dynamicInput.value.trim();

    if (firstName === "") {
        errorMessages.push("First name is required.");
    }

    if (lastName === "") {
        errorMessages.push("Last name is required.");
    }

    if (email === "") {
        errorMessages.push("Email is required.");
    }

    if (type === "") {
        errorMessages.push("Please choose Student or Guest.");
    }

    if (eventDate === "") {
        errorMessages.push("Event date is required.");
    } else if (isPastDate(eventDate)) {
        errorMessages.push("Event date must be later than today.");
    }

    if (type === "student") {
        if (dynamicValue.length !== 9 || isNaN(dynamicValue)) {
            errorMessages.push("Student # must be 9 digits.");
        }
    }

    if (type === "guest") {
        if (dynamicValue !== "EVENT131") {
            errorMessages.push("Access Code must be EVENT131.");
        }
    }

    if (errorMessages.length > 0) {
        errors.innerHTML = errorMessages
            .map(message => `<p>${message}</p>`)
            .join("");
        return;
    }

    ticketOutput.innerHTML = `
        <h2>Ticket Created</h2>
        <p>${firstName} ${lastName}</p>
        <p>${email}</p>
        <p>${eventDate}</p>
        <p>${type === "student" ? "Student Ticket" : "Guest Ticket"}</p>
    `;

    form.reset();

    dynamicField.hidden = true;
    dynamicLabel.textContent = "";
    dynamicInput.required = false;
});