var userDict =
    [
        {username: 'missy01', password: 'password', email: 'example@example.com'}, 
        {username: 'shan01', password: 'password01', email: 'shan@example.com'}, 
    ]

// registration validation
function validateEmail() {
    var email = document.getElementById("emailInput").value;

    // validate email address
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailValid").classList.add("d-none");
    } 

    else {
        document.getElementById("emailValid").classList.remove("d-none");
    document.getElementById("emailValid").style.color = "red";
    }

    // validate email uniqueness
    for (let i = 0; i < userDict.length; i++) {
        const user = userDict[i];
        if (user.email != email) {
            document.getElementById("uniqueEmail").classList.add("d-none");
        }
        else {
            document.getElementById("uniqueEmail").classList.remove("d-none");
            document.getElementById("uniqueEmail").style.color = "red";
        }
    }
}

function validateUN() {
    var username = document.getElementById("usernameInput").value;

    // validate username length
    if ((username.length >= 3) && (username.length <= 15)) {
        document.getElementById("unLength").classList.add("d-none");
    }
    else {
        document.getElementById("unLength").classList.remove("d-none");
        document.getElementById("unLength").style.color = "red";
    }

    // check username uniqueness
    for (let i = 0; i < userDict.length; i++) {
        const user = userDict[i];
        if (user.username != username) {
            document.getElementById("unUnique").classList.add("d-none");
        }
        else {
            document.getElementById("unUnique").classList.remove("d-none");
            document.getElementById("unUnique").style.color = "red";
        }
    }
}

function validatePW() {
    var password = document.getElementById("passwordInput").value;

    if ((password.length >= 8) && (password.length <= 20)) {
        document.getElementById("pwLength").classList.add("d-none");
    }
    else {
        document.getElementById("pwLength").classList.remove("d-none");
        document.getElementById("pwLength").style.color = "red";    
    }
}

function validatePWConfirm() {
    var password = document.getElementById("passwordInput").value;
    var pwconfirm = document.getElementById("passwordConfirm").value;

    if (password === pwconfirm) {
        document.getElementById("pwConfirm").classList.add("d-none");
    }
    else {
        document.getElementById("pwConfirm").classList.remove("d-none");
        document.getElementById("pwConfirm").style.color = "red";    
    }
}

// sign up 
function signup() {
    var username = document.getElementById("usernameInput").value;
    alert('Welcome, ' + username + '! /n Thank your for signing up.');
    window.location.href = 'sample-post.html';
}

// log in email validation
function validateLogEmail() {
    var emailLog = document.getElementById("inputLogEmail").value;

    // validate email address
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLog)) {
        document.getElementById("emailNotValid").classList.add("d-none");
    } 

    else {
        document.getElementById("emailNotValid").classList.remove("d-none");
    document.getElementById("emailNotValid").style.color = "red";
    }

    // validate if email exist
    for (let i = 0; i < userDict.length; i++) {
        const user = userDict[i];
        if (user.email == emailLog) {
            document.getElementById("emailNotExist").classList.add("d-none");
        }
        else {
            document.getElementById("emailNotExist").classList.remove("d-none");
            document.getElementById("emailNotExist").style.color = "red";
        }
    }
}

// log in email to user's password validation
function login() {
    var emailLog = document.getElementById("inputLogEmail").value;
    var password = document.getElementById("inputLogPassword").value;

    for (let i = 0; i < userDict.length; i++) {
        const user = userDict[i];
        if ((user.email == emailLog) && (user.password == password)) {
            document.getElementById("acctDoNotExist").classList.add("d-none");
            alert('Welcome, ' + user.username + '!');
            window.location.href = 'sample-post.html';
        }
        else {
            document.getElementById("acctDoNotExist").classList.remove("d-none");
            document.getElementById("acctDoNotExist").style.color = "red";
        }
    }
}

