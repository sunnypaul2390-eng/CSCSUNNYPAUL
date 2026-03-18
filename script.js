function submitForm() {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let service = document.getElementById("service").value;

    let apps = JSON.parse(localStorage.getItem("apps")) || [];

    apps.push({
        name: name,
        mobile: mobile,
        service: service,
        status: "Pending"
    });

    localStorage.setItem("apps", JSON.stringify(apps));

    alert("Application Submitted Successfully");
}
