const deleteClientBtns = document.querySelectorAll("#delete-client");

deleteClientBtns.forEach((btn) => {
    const {value} = btn;

    btn.addEventListener("click", () => {
        window.location.href = `../php/deleteClient.php?id=${value}`;
    })
})