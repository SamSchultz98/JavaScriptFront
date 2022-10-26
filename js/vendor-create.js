const save = () => {
    var vendor = getVendorData();
    VendorServices.create(vendor)
    .done((ress) =>{
        clearVendorData()
        alert("Succesfully Created!")
    })
    .fail((err)=>{
        alert("FAILED")
    });

}


const getVendorData = () => {
    var vendor = {
        id: 0,
        code: $("#xcode").val(),
        name: $("#xname").val(),
        address: $("#xaddress").val(),
        city: $("#xcity").val(),
        state: $("#xstate").val(),
        zip: $("#xzip").val(),
        phone: $("#xphone").val(),
        email: $("#xemail").val()
    }
    console.debug(vendor);
    return vendor;
}

const clearVendorData = () => {
    $("xcode").val("");
    $("xname").val("");
    $("xaddress").val("");
    $("xcity").val("");
    $("xstate").val("");
    $("xzip").val("");
    $("xphone").val("");
    $("xemail").val("");
}