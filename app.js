// --------------------------------------------
// AIR QUALITY INDEX INFORMATION
// -------------------------------------------- 
// Description: Zones of alarm for PM 2.5 air quality index.
// Inputs: NA
// Outputs: NA
// Actions: NA
// status: OK
// --------------------------------------------
const AQI = {
    'pm25': [
        {
            category: 'Good',
            // color: 'rgba(0,230,64,1)',
            color: '#7def7d',
            min: 0,
            max: 12
        },
        {
            category: 'Acceptable',
            // color: 'rgba(255,255,0,1)',
            color: '#f4f474',
            min: 13,
            max: 37
        },
        {
            category: 'Harmful to sentitive groups',
            // color: 'rgba(250,190,88,1)',
            color: '#fab97a',
            min: 38,
            max: 55
        },
        {
            category: 'Harmful',
            // color: 'rgba(255,0,0,1)',
            color: '#f97979',
            min: 56,
            max: 150
        },
        {
            category: 'Very harmful',
            // color: 'rgba(121,7,242,1)',
            color: '#c79fcb',
            min: 151,
            max: 250
        },
        {
            category: 'Dangerous',
            // color: 'rgba(165,42,42,1)',
            color: '#b87e00',
            min: 251,
            max: 500
        }
    ]
}
// --------------------------------------------


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
        smoLabels = []
        smoData = []
        document.body.removeChild(canvas)
    }

    console.log(`Executed clearData()`)

}
// --------------------------------------------


// --------------------------------------------
// CREATE PLOT CONFIGURATION OBJECT
// -------------------------------------------- 
// Description: Creates config file to plot background
// Inputs: start, end
// Outputs: NA
// Actions: rawLabels
// Status: OK
// -----------------------------------------------------
function createConfig(labels, rawData, smoothData) {

    // let maxValue = Math.max.apply(null, smoothData)
    var maxValue = 0
    for (let i = 0; i< rawData.length; i++) {
        if (rawData[i] !== undefined) {
            if (rawData[i] > maxValue) {
                maxValue = rawData[i]
            }
        }
    }

    config.type = 'line'

    config.options = {}
    config.options.scales = {}
    config.options.scales.y = {}
    config.options.scales.y.beginAtZero = true

    config.data = {}
    config.data.labels = labels
    config.data.datasets = []
    
    for (a in AQI.pm25) {
        if (maxValue <= AQI.pm25[a].max) {
            config.data.datasets.push(
                {
                    label: AQI.pm25[a].category,
                    data: Array(labels.length).fill(maxValue),
                    fill: true,
                    backgroundColor: AQI.pm25[a].color,
                    pointRadius: 0
                }
            )
        }
        else {
            config.data.datasets.push(
                {
                    label: AQI.pm25[a].category,
                    data: Array(labels.length).fill(AQI.pm25[a].max),
                    fill: true,
                    backgroundColor: AQI.pm25[a].color,
                    pointRadius: 0
                }
            )
        }
    }

    config.data.datasets.unshift(
        {
            label: 'PM 2.5 [??g/m??] (raw)',
            data: rawData,
            fill: false,
            borderColor: 'rgba(0,0,0, 1)',
            borderWidth: 1
        },
        {
            label: 'PM 2.5 [??g/m??] (smooth)',
            data: smoothData,
            fill: false,
            borderColor: 'rgba(0,0,0, 1)',
            borderWidth: 4
        })

}


// --------------------------------------------
// PLOT
// -------------------------------------------- 
// Description: Creates canvas, context and plots the dataset.
// Inputs: labels, data
// Outputs: NA
// Actions: canvas
// status: OK
// --------------------------------------------
function plot(config) {

    // var ctx = document.getElementById('myChart').getContext('2d')
    canvas = document.createElement("CANVAS")
    var ctx = canvas.getContext('2d')
    canvas.setAttribute('id', 'myChart', 'class', 'canvas', 'style', 'margin:0;')
    document.body.appendChild(canvas)

    var myChart = new Chart(ctx, config);

    console.log(`Executed plot()`)

}
// --------------------------------------------



// --------------------------------------------
// MOVING AVERAGE
// -------------------------------------------- 
// Description: Calculates moving average given the period with acceptance of 75% of previous data.
// Inputs: rawData
// Outputs: avgData
// Actions: smoData
// status: OK, but needs to clean code.
// --------------------------------------------
// Dataset
function movingAverage(data) {

    let smoothData = []

    // Moving average parameters
    let pTot = 24
    let pVal = Math.floor(0.75 * pTot)
    console.log(`Total period: ${pTot}, Valid period: ${pVal}`)

    // Validation criteria for data
    const isValid = (d) => d > 0 && d !== null && d !== undefined && d !== "NA"

    // First phase: 0 to pTot
    for (let i = 0; i < pTot; i++) {
        let validos = 0
        let suma = 0
        for (j = 0; j <= i; j++) {
            if (isValid(data[j])) {
                validos += 1
                suma += data[j]
            }
        }
        // console.log(validos)
        if (validos >= pVal) {
            smoothData[i] = suma / validos
        }
        else {
            smoothData[i] = undefined
        }
    }

    // Second phase: pTot to n
    for (let i = pTot; i < data.length; i++) {
        let validos = 0
        let suma = 0
        for (let j = i - pTot + 1; j <= i; j++) {
            if (isValid(data[j])) {
                validos += 1
                suma += data[j]
            }
        }
        // console.log(validos)
        if (validos >= pVal) {
            smoothData[i] = suma / validos
        }
        else {
            smoothData[i] = undefined
        }
    }

    //console.log(smoothData)
    return smoothData
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
        console.log(array)
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
        smoLabels[d] = dateToUTC(rawLabels[d], 'reverse')
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

let smoLabels = []
let smoData = []

var canvas
var config = {}

button_plot = document.getElementById(`button_plot`)
button_plot.addEventListener("click", e => {

    clearData()
    getParameters()
    getURL()
    getData()
        .then(res => createRaw(parameters.date_from_utc, parameters.date_to_utc))
        .then(res => smoData = movingAverage(rawData))
        .then(res => createConfig(smoLabels, rawData, smoData))
        .then(res => plot(config))

})
// --------------------------------------------




// SOFTWARE TEST:
// --------------------------------------------

// 1. MOCHUELO DATA
function mochueloTest() {

    var mochueloLabels = ['2021-03-19-01', '2021-03-19-02', '2021-03-19-03', '2021-03-19-04', '2021-03-19-05', '2021-03-19-06', '2021-03-19-07', '2021-03-19-08', '2021-03-19-09', '2021-03-19-10', '2021-03-19-11', '2021-03-19-12', '2021-03-19-13', '2021-03-19-14', '2021-03-19-15', '2021-03-19-16', '2021-03-19-17', '2021-03-19-18', '2021-03-19-19', '2021-03-19-20', '2021-03-19-21', '2021-03-19-22', '2021-03-19-23', '2021-03-20-00', '2021-03-20-01', '2021-03-20-02', '2021-03-20-03', '2021-03-20-04', '2021-03-20-05', '2021-03-20-06', '2021-03-20-07', '2021-03-20-08', '2021-03-20-09', '2021-03-20-10', '2021-03-20-11', '2021-03-20-12', '2021-03-20-13', '2021-03-20-14', '2021-03-20-15', '2021-03-20-16', '2021-03-20-17', '2021-03-20-18', '2021-03-20-19', '2021-03-20-20', '2021-03-20-21', '2021-03-20-22', '2021-03-20-23', '2021-03-21-00', '2021-03-21-01', '2021-03-21-02', '2021-03-21-03', '2021-03-21-04', '2021-03-21-05', '2021-03-21-06', '2021-03-21-07', '2021-03-21-08', '2021-03-21-09', '2021-03-21-10', '2021-03-21-11', '2021-03-21-12', '2021-03-21-13', '2021-03-21-14', '2021-03-21-15', '2021-03-21-16', '2021-03-21-17', '2021-03-21-18', '2021-03-21-19', '2021-03-21-20', '2021-03-21-21', '2021-03-21-22', '2021-03-21-23', '2021-03-22-00', '2021-03-22-01', '2021-03-22-02', '2021-03-22-03', '2021-03-22-04', '2021-03-22-05', '2021-03-22-06', '2021-03-22-07', '2021-03-22-08', '2021-03-22-09', '2021-03-22-10', '2021-03-22-11', '2021-03-22-12', '2021-03-22-13', '2021-03-22-14', '2021-03-22-15', '2021-03-22-16', '2021-03-22-17', '2021-03-22-18', '2021-03-22-19', '2021-03-22-20', '2021-03-22-21', '2021-03-22-22', '2021-03-22-23', '2021-03-23-00', '2021-03-23-01', '2021-03-23-02', '2021-03-23-03', '2021-03-23-04', '2021-03-23-05', '2021-03-23-06', '2021-03-23-07', '2021-03-23-08', '2021-03-23-09', '2021-03-23-10', '2021-03-23-11', '2021-03-23-12', '2021-03-23-13', '2021-03-23-14', '2021-03-23-15', '2021-03-23-16', '2021-03-23-17', '2021-03-23-18', '2021-03-23-19', '2021-03-23-20', '2021-03-23-21', '2021-03-23-22', '2021-03-23-23', '2021-03-24-00', '2021-03-24-01', '2021-03-24-02', '2021-03-24-03', '2021-03-24-04', '2021-03-24-05', '2021-03-24-06', '2021-03-24-07', '2021-03-24-08', '2021-03-24-09', '2021-03-24-10', '2021-03-24-11', '2021-03-24-12', '2021-03-24-13', '2021-03-24-14', '2021-03-24-15', '2021-03-24-16']
    var mochueloRawData = [44, 29, 39, 13, 33, 51, 51, 81, 84, 47, 50, 38, 66, 59, 28, 26, 76, 98, 27, 23, 20, 58, 38, 46, 49, 56, 44, 70, 78, 87, 91, 81, 86, 54, 47, 29, 43, 17, 56, , 58, 87, 102, 16, 8, 24, 54, 57, 65, 26, 59, 80, 54, 47, 53, 36, 33, 33, 32, 31, 19, 27, 27, 42, 50, 34, 39, 41, 40, 57, 55, 33, 30, 48, 39, 61, 36, 36, 56, 31, 45, 35, 41, 40, 30, 47, 27, 28, 38, 36, 26, 27, 37, 43, 59, 62, 61, 63, 54, 59, 65, 59, 75, 63, 43, 59, 93, 60, 35, 20, 41, 44, 47, 43, 40, 48, 37, 43, 50, 55, 36, 43, 35, 43, 54, 37, 56, 37, 58, 48, 51, 48, 28, 46, 35, 25]
    var mochueloSmoothData = movingAverage(mochueloRawData)

    console.log("Mochuelo labels: " + mochueloLabels)
    console.log("Mochuelo Raw Data: " + mochueloRawData)
    console.log("Mochuelo Smooth Data: " + mochueloSmoothData)

    createConfig(mochueloLabels, mochueloRawData, mochueloSmoothData)
    plot(config)
}
// --------------------------------------------



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