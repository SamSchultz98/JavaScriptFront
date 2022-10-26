
const save = () => {
    var user = getUserData();
    UserService.create(user)
        .done((res) => {
            clearUserDate();
            alert("created!");
        })
        .fail((err) => {
            alert("Failed!")
        });
}

const clearUserDate = () => {
    $("#xusername").val("");
    $("#xpassword").val("");
    $("#xfirstname").val("");
    $("#xlastname").val("");
    $("#xphone").val("");
    $("#xemail").val("");
    $("#xisreviewer").prop("checked",false);
    $("#xisadmin").prop("checked",false);
}

const getUserData = () => {
    var user = {
        id: 0,
        username: $("#xusername").val(),    //Able to do this when their are input controls
        password: $("#xpassword").val(),    //could also do document.getbyelementid("xpassword").value
        firstname: $("#xfirstname").val(),
        lastname: $("#xlastname").val(),
        phone: $("#xphone").val(),
        email: $("#xemail").val(),
        isReviewer: $("#xisreviewer").prop("checked"),
        isAdmin: $("#xisadmin").prop("checked"),
    };
    console.debug(user);
    return user;
}