const fetchData = async () => {
    await fetch("http://192.168.128.2/pokemon", {
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