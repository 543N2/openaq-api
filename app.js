// --------------------------------------------
// CLEAR DATA
// -------------------------------------------- 
// Description: Clears the fetched API data and deletes canvas.
// Inputs: NA
// Outputs: NA
// Actions: apiLabels, apiData, rawLabels, rawData
// status: OK
// --------------------------------------------
function clearData() {

    // if (labels.length !== 0) {
    if (document.getElementById('myChart')) {
        apiLabels = []
        apiData = []
        rawLabels = []
        rawData = []
        document.body.removeChild(canvas)
    }

    console.log(`Executed clearData()`)

}
// --------------------------------------------



// --------------------------------------------
// PLOT
// -------------------------------------------- 
// Description: Creates canvas, context and plots the dataset.
// Inputs: labels, data
// Outputs: NA
// Actions: canvas
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

    console.log(`Executed plot()`)

}
// --------------------------------------------



// --------------------------------------------
// GET PARAMETERS
// -------------------------------------------- 
// Description: Offsets UTC to Colombia time, to get labels
// Inputs: date
// Outputs: dateLabel
// Actions: NA
// Status: OK
// --------------------------------------------
function dateToLabel(date) {
    let year = date.substr(0, 4)
    let month = date.substr(5, 2)
    let day = date.substr(8, 2)
    let hour = date.substr(11, 2)
    let minute = date.substr(14, 2)
    let dateLabel = `${year}-${month}-${day} ${hour}:${minute}`

    console.log(`Executed dateToLabel()`)

    return dateLabel
}
// --------------------------------------------



// --------------------------------------------
// GET DATA
// -------------------------------------------- 
// Description: Gets data from API and fills apiLabels & apiData arrays
// Inputs: NA
// Outputs: NA
// Actions: apiLabels, apiData
// Status: OK
// --------------------------------------------
async function getData() {
    try {
        const response = await fetch(parameters.url, { method: 'GET' })
        const data = await response.json();
        let array = data.results
        for (a of array) {
            apiLabels.push(a.date.utc)
            apiData.push(a.value)
        }

        console.log(`Executed getData()`)
        console.log(apiLabels)
        console.log(apiData)

    }
    catch (err) {
        console.log(`Error fetching data: ${err}`)
    }
}
// --------------------------------------------



// --------------------------------------------
// CALCULATE NUMBER OF HOURS
// -------------------------------------------- 
// Description: Calculates number of hours between two dates
// Inputs: startDate, endData
// Outputs: hours
// Actions: NA
// status: OK
// -----------------------------------------------------
function numberOfHours(startDate, endDate) {
    let startDateUTC = new Date(startDate)
    let endDateUTC = new Date(endDate)
    let hours = (endDateUTC.getTime() - startDateUTC.getTime()) / 3600000 + 1

    console.log(`Executed numberOfHours()`)

    return hours
}
// --------------------------------------------



// --------------------------------------------
// CREATE RAW
// -------------------------------------------- 
// Description: Creates array of complete data labels
// Inputs: start, end
// Outputs: NA
// Actions: rawLabels
// Status: OK
// -----------------------------------------------------
function createRaw(start, end) {

    let startDate = new Date(start)
    let endDate = new Date(end)
    let hours = numberOfHours(startDate, endDate)

    for (let d = 0; d < hours; d++) {

        // raw labels
        rawLabels[d] = startDate.toISOString().substr(0, 19) + "+00:00"
        startDate.setHours(startDate.getHours() + 1)

        // compare rawLabels with apiLabels
        for (let a in apiLabels) {
            let exist = rawLabels[d] === apiLabels[a]
            if (exist) {
                rawData[d] = apiData[a]
                break
            } else {
                rawData[d] = undefined
            }
        }
        rawLabels[d] = dateToUTC(rawLabels[d],'reverse')
    }
    console.log(`Executed createRaw()`)
    console.log('rawLabels')
    console.log(rawLabels)
    console.log("rawData")
    console.log(rawData)
}
// --------------------------------------------



// --------------------------------------------
// DATE TO UTC
// -------------------------------------------- 
// Description: Offsets Colombia time to UTC, to query
// Inputs: date, fromOrTo
// Outputs: dateTQ
// Actions: NA
// status: OK
// -----------------------------------------------------
function dateToUTC(date, startOrEnd) {
    let dateTQ = new Date(date)
    let hourFix
    startOrEnd === 'from' ? hourFix = 5 : startOrEnd === 'to' ? hourFix = 5 + 23 : startOrEnd === 'reverse' ? hourFix = -5 : hourFix = 0
    dateTQ.setHours(dateTQ.getHours() + hourFix)

    console.log(`Executed dateToUTC()`)

    return dateTQ.toISOString().substr(0, 19) + "+00:00"
}
// --------------------------------------------



// --------------------------------------------
// GET URL
// -------------------------------------------- 
// Description: Builds URL to query the API endpoint
// Inputs: NA
// Outputs: NA
// Actions: parameters
// status: OK
// --------------------------------------------
function getURL() {
    parameters.url = `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/measurements` +
        `?date_from=${parameters.date_from_utc.substr(0, 19).replaceAll(":", "%3A")}%2B00%3A00` +
        `&date_to=${parameters.date_to_utc.substr(0, 19).replaceAll(":", "%3A")}%2B00%3A00` +
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

    console.log(`Executed getURL()`)
}
// --------------------------------------------



// --------------------------------------------
// GET PARAMETERS
// -------------------------------------------- 
// Description: Reads HTML elements into parameters object.
// Inputs: NA
// Outputs: NA
// Actions: tags, parameters
// status: OK
// --------------------------------------------
function getParameters() {
    try {
        let tags = [`date_from`, `date_to`, `parameter`, `city`, `location`]
        for (t of tags) {
            parameters[t] = document.getElementById(t).value
            if (t.includes('date')) {
                let fromOrTo
                t.includes('from') ? fromOrTo = 'from' : t.includes('to') ? fromOrTo = 'to' : fromOrTo = null
                parameters[`${t}_utc`] = dateToUTC(parameters[t], fromOrTo)
            }
        }

        console.log(`Executed getParameters()`)
        console.log(parameters)
    }
    catch (err) {
        alert("Please verify you have entered a valid date")

        console.log(`Error fetching data`)
        console.log(err)
    }
}
// --------------------------------------------



// --------------------------------------------
// MAIN PROGRAM
// -------------------------------------------- 
// Description: Controls work flow
// Inputs: NA
// Outputs: NA
// Actions: parameters, apiLabels, apiData, rawLabels, rawData, canvas, button_plot
// status: OK
// --------------------------------------------
let parameters = {}

let apiLabels = []
let apiData = []

let rawLabels = []
let rawData = []

var canvas

button_plot = document.getElementById(`button_plot`)
button_plot.addEventListener("click", e => {

    clearData()
    getParameters()
    getURL()
    getData()
        .then(res => createRaw(parameters.date_from_utc, parameters.date_to_utc))
        .then(res => plot(rawLabels, rawData))

})
// --------------------------------------------



// HEYY!! convert rawLabels to Local time!!!




// TEMPORARY CODE:
// --------------------------------------------


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



// Not included yet:
// -----------------------------------------------------




// Calculates the Daily Moving Average of a set of datapoints
// status: in progress
// -----------------------------------------------------
function dailyMovingAverage(data, period) {
    let result = []
    let acum = 0
    for (let p = 0; p < data.length; p++) {
        if ((data[p] !== null) && (data[p] !== undefined) && (data[p] > 0)) {
            acum++
        }
        result.push(acum)
    }

}


// Data for testing movingAverage function
// let dataDay = [50, 69, 78, 90, 56, 70, 91, 93, 37, 28, 7, 23, 1, 26, 38, 32, 100, 17, 44, 17, 0, 20, 35, 47, 12, 87, 43, 21, 23, 14, 20, 20, 3, 30, 7, 6, 8, 20, 48, 39, 0, 20, 25, 9, 18, 1, 24, 23]
// let labelsDay = ['2021-01-01-00', '2021-01-01-01', '2021-01-01-02', '2021-01-01-03', '2021-01-01-04', '2021-01-01-05', '2021-01-01-06', '2021-01-01-07', '2021-01-01-08', '2021-01-01-09', '2021-01-01-10', '2021-01-01-11', '2021-01-01-12', '2021-01-01-13', '2021-01-01-14', '2021-01-01-15', '2021-01-01-16', '2021-01-01-17', '2021-01-01-18', '2021-01-01-19', '2021-01-01-20', '2021-01-01-21', '2021-01-01-22', '2021-01-01-23', '2021-01-02-00', '2021-01-02-01', '2021-01-02-02', '2021-01-02-03', '2021-01-02-04', '2021-01-02-05', '2021-01-02-06', '2021-01-02-07', '2021-01-02-08', '2021-01-02-09', '2021-01-02-10', '2021-01-02-11', '2021-01-02-12', '2021-01-02-13', '2021-01-02-14', '2021-01-02-15', '2021-01-02-16', '2021-01-02-17', '2021-01-02-18', '2021-01-02-19', '2021-01-02-20', '2021-01-02-21', '2021-01-02-22', '2021-01-02-23']
// dailyMovingAverage(dataDay, 24)
// plot(labelsDay, dataDay)
// plot(labelsDay, newData)
// 
// 
// 


// Fixes the info for one day
// status: in progress
// -----------------------------------------------------
// function dayFixer (daySet) {
//     let = newDay = []
//     for (let d=0; d<23; d++) {

//         if(daySet[d)
//     }
// }


// Calculates the Simple Moving Average of a set of datapoints
// status: OK
// -----------------------------------------------------
// function simpleMovingAverage(data, period) {
//     let result = []
//     for (let d = 0; d < data.length; d++) {
//         if (d < period - 1) {
//             result.push(data[d])
//         }
//         else {
//             let average = 0
//             for (let m = 0; m < period; m++) {
//                 average += dataDay[d - m] / period
//             }
//             result.push(average)
//         }
//     }
//     return result
// }