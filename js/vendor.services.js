const url = "http://localhost:5050/api/vendors"

class VendorServices {

    static list = () => {
        return $.getJSON(`${url}`);
    }

    static get = (id) => {
        return $.getJSON(`${url}/${id}`);
    }
    static create = (vendor) => {
        return $.ajax({
            method: "POST",
            url: `${url}`,
            data: JSON.stringify(vendor),
            contentType:"application/json"
        });
    }

    static change = (vendor) => {
        return $.ajax({
            method: "PUT",
            url:`${url}/${vendor.id}`,
            data: JSON.stringify(vendor),
            contentType:"application/json"
        });
    }

    static remove = (id) => {
        return $.ajax({
            method:"DELETE",
            url:`${url}/${id}`
        });
    }




}