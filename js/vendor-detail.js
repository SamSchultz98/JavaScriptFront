
const display = () => {
    VendorServices.get(id)
    .done((res) => {
        render(res);
    })

}

const render = (vendor) => {
    document.getElementById("xid").innerText= vendor.id;
    document.getElementById("xcode").innerText= vendor.code;
    document.getElementById("xname").innerText= vendor.name;
    document.getElementById("xaddress").innerText= vendor.address;
    document.getElementById("xcity").innerText= vendor.city;
    document.getElementById("xstate").innerText= vendor.state;
    document.getElementById("xzip").innerText= vendor.zip;
    document.getElementById("xphone").innerText= vendor.phone;
    document.getElementById("xemail").innerText= vendor.email;
}

const remove = () => {
    let id = document.getElementById("xid").innerText
    VendorServices.remove(id)
    .done((res) => {
        alert("Deleted!");
        window.location.href="vendor-list.html";
    })
    .fail((err) => {
        alert("Failed to Delete");
    })
}


let parameters = UtilityService.getUrlParms();
console.debug(parameters);
let id = +parameters.id;
display(id);