let parameters = UtilityService.getUrlParms();


const get = () => {
    let id = +parameters.id
    UserService.get(id)
    .done((ress) => {
        setUserData(ress)
    })
    .fail((err) => {
        alert("Not Found");
    })
}


const save = () => {
    var user = getUserData();
    UserService.change(user)
        .done((res) => {
            alert("Changed!");
        })
        .fail((err) => {
            alert("Failed!")
        });
}

const setUserData = (user) => {
    $("#xid").val(user.id);
    $("#xusername").val(user.username);
    $("#xpassword").val(user.password);
    $("#xfirstname").val(user.firstname);
    $("#xlastname").val(user.lastname);
    $("#xphone").val(user.phone);
    $("#xemail").val(user.email);
    $("#xisreviewer").prop("checked",user.isReviewer);
    $("#xisadmin").prop("checked",user.isAdmin);
};

const clearUserDate = () => {
    $("#xusername").val(0);
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
        id: $("#xid").val(),
        username: $("#xusername").val(),    
        password: $("#xpassword").val(),   
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
get();
