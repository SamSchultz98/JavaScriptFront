const refresh = () => {
    UserService.list()
    .done((res) => {
        display(res);
    })
    .fail((err) => {
        console.error(err);
    })
}

const display = (users) => {
    let tbodyCrtl = document.getElementById("tbody");
    tbodyCrtl.innerHTML="";
    for(let user of users){
        let row = "<tr>";
        row += `<td>${user.id}</td>`;
        row += `<td>${user.firstname} ${user.lastname}</td>`;
        row += `<td>${user.username}</td>`;
        row += `<td>${user.phone}</td>`;
        row += `<td>${user.email}</td>`;
        row += `<td>${user.isReviewer ? "Yes": "No" }</td>`;
        row += `<td>${user.isAdmin ? "Yes" : "No"}</td>`;
        row += `<td><a href="user-detail.html?id=${user.id}">Detail</a>`    //After the html, adding ?id=${user.id} gets the user id that is on the line
        row += ` | `
        row += `<a href="user-change.html?id=${user.id}">Edit</a>`
        row += `</td>`
        row += "</tr>";
        tbodyCrtl.innerHTML += row;
    }
}
