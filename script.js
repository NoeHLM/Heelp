const table = document.querySelector("table");

const fetchData = async () => {
    await fetch("http://192.168.64.4/test", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        },

    }).then((response) => {
        console.log(response);
        return response.json();
    })
}

const createTable = (data) => {
    let tableData = "";
    data.forEach((pokemon) => {
        tableData += "<tr>";
        tableData += `<td>${pokemon.poke}</td>`;
        tableData += "</tr>";
    });
    table.innerHTML = tableData;
    console.log();
}

fetchData().then((data) => createTable(data));