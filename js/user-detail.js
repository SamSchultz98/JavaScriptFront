
const display = () => {
    UserService.get(id)
    .done((res) => {
        render(res);
    })
    
}

const render = (user) => {
    document.getElementById("xid").innerText = user.id;
    document.getElementById("xname").innerText = `${user.firstname} ${user.lastname}`
    document.getElementById("xusername").innerText =  user.username
    document.getElementById("xphone").innerText = user.phone
    document.getElementById("xemail").innerText = user.email
    document.getElementById("xreviewer").innerText = user.isReviewer ? "Yes" : "No"
    document.getElementById("xadmin").innerText = user.isAdmin ? "Yes" : "No"
}

const remove = () => {
    let id = document.getElementById("xid").innerText
    UserService.remove(id)
    .done((res) => {
        alert("Deleted!");
    })
    .fail((err) => {
        alert("Failed to Delete");
    })
}

let parameters = UtilityService.getUrlParms();
console.debug(parameters);
let id = +parameters.id;
display(id);
