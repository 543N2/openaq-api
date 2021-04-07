// Clears the data
// status: OK
// --------------------------------------------

function clearData() {

    // if (labels.length !== 0) {
    if (document.getElementById('myChart')) {
        labels = []
        pm25 = []
        document.body.removeChild(canvas)
    }
}


// Plots the dataset
// status: OK
// --------------------------------------------
function plot(labels, data) {

    // var ctx = document.getElementById('myChart').getContext('2d')
    canvas = document.createElement("CANVAS")
    var ctx = canvas.getContext('2d')
    canvas.setAttribute('id', 'myChart', 'class', 'canvas', 'style', 'margin:0;')
    document.body.appendChild(canvas)

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'PM 2.5',
                data: data,
                fill: false,
                borderColor: 'rgba(0,0,0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}


// Gets API information and fills labels & pm25 data arrays
// Status: OK
// --------------------------------------------
async function getData() {
    try {
        const response = await fetch(parameters.url, { method: 'GET' })
        const data = await response.json();
        let array = data.results
        for (a of array) {
            labels.push(a.date.local.substring(0, 10))
            pm25.push(a.value)
        }
    }
    catch (err) {
        console.log("Failed retrieving information", err);
    }

}

// Builds URL to query the API endpoint
// status: OK
// --------------------------------------------
function getURL() {
    parameters.url = `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/measurements` +
        `?date_from=${parameters.date_from}T00%3A00%3A00%2B00%3A00` +
        `&date_to=${parameters.date_to}T23%3A00%3A00%2B00%3A00` +
        `&limit=10720` +
        `&page=1` +
        `&offset=0` +
        `&sort=asc` +
        `&parameter=${parameters.parameter}` +
        `&radius=1000` +
        `&country_id=CO` +
        `&city=${parameters.city}&` +
        `location=${parameters.location.replace(" ", "%20")}` +
        `&order_by=datetime`;
}

// Reads HTML elements into parameters obj
// status: OK
// --------------------------------------------
function getParameters() {
    let tags = [`date_from`, `date_to`, `parameter`, `city`, `location`]
    for (t of tags) {
        parameters[t] = document.getElementById(t).value
    }
}


// Main program flow
// status: OK
// --------------------------------------------
let parameters = {}
var canvas
let labels = []
let pm25 = []

button_plot = document.getElementById(`button_plot`)
button_plot.addEventListener("click", e => {

    clearData()
    getParameters()
    getURL()
    getData()
        .then(res => plot(labels, pm25))
})


// url without text interpolation
// -----------------------------------------------------
// let url = `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/measurements` +
//     `?date_from=2020-11-01T00%3A00%3A00%2B00%3A00` +
//     `&date_to=2020-11-30T23%3A00%3A00%2B00%3A00` +
//     `&limit=720` +
//     `&page=1` +
//     `&offset=0` +
//     `&sort=desc` +
//     `&parameter=pm25` +
//     `&radius=1000` +
//     `&country_id=CO` +
//     `&city=Bogota&` +
//     `location=Puente%20Aranda` +
//     `&order_by=datetime`;

