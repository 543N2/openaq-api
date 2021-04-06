let tags = [`date_from`, `date_to`, `parameter`, `city`, `location`]
let inputs = {}

for (t in tags) {
    inputs[tags[t]] = document.getElementById(tags[t]).value
}

let url = `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/measurements` +
    `?date_from=${inputs.date_from}T00%3A00%3A00%2B00%3A00` +
    `&date_to=${inputs.date_to}T23%3A00%3A00%2B00%3A00` +
    `&limit=720` +
    `&page=1` +
    `&offset=0` +
    `&sort=asc` +
    `&parameter=${inputs.parameter}` +
    `&radius=1000` +
    `&country_id=CO` +
    `&city=${inputs.city}&` +
    `location=${inputs.location.replace(" ", "%20")}` +
    `&order_by=datetime`;

function plot(labels, data) {

    var ctx = document.getElementById('myChart');
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


async function openAQ(url) {
    try {
        const response = await fetch(url, { method: 'GET' })
        const data = await response.json();
        array = data.results
        for (a of array) {
            labels.push(a.date.local.substring(0, 10))
            pm25.push(a.value)
        }

        plot(labels, pm25)

    }
    catch (err) {
        console.log("Failed retrieving information", err);
    }

}


let array, labels = [], pm25 = []
openAQ(url)


// url without text interpolation

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