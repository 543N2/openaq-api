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
    'pm25':
    {
        'name': 'PM 2.5',
        'unit': 'µg/m³',
        'hours': 24,
        'category':
            [
                {
                    criteria: 'Good',
                    color: 'rgba(0,228,0,1)',
                    min: 0,
                    max: 12,
                },
                {
                    criteria: 'Acceptable',
                    color: 'rgba(255,255,0,1)',
                    min: 13,
                    max: 37,
                },
                {
                    criteria: 'Harmful to sentitive groups',
                    color: 'rgba(255,126,0,1)',
                    min: 38,
                    max: 55,
                },
                {
                    criteria: 'Harmful',
                    color: 'rgba(255,0,0,1)',
                    min: 56,
                    max: 150,
                },
                {
                    criteria: 'Very harmful',
                    color: 'rgba(143,63,151,1)',
                    min: 151,
                    max: 250,
                },
                {
                    criteria: 'Dangerous',
                    color: 'rgba(126,0,35,1)',
                    min: 251,
                    max: 500,
                }
            ]

    },

    'pm10':
    {
        'name': 'PM 10',
        'unit': 'µg/m³',
        'hours': 24,
        'category':
            [
                {
                    criteria: 'Good',
                    color: 'rgba(0,228,0,1)',
                    min: 0,
                    max: 54,
                },
                {
                    criteria: 'Acceptable',
                    color: 'rgba(255,255,0,1)',
                    min: 55,
                    max: 154,
                },
                {
                    criteria: 'Harmful to sentitive groups',
                    color: 'rgba(255,126,0,1)',
                    min: 155,
                    max: 254,
                },
                {
                    criteria: 'Harmful',
                    color: 'rgba(255,0,0,1)',
                    min: 255,
                    max: 354,
                },
                {
                    criteria: 'Very harmful',
                    color: 'rgba(143,63,151,1)',
                    min: 355,
                    max: 424,
                },
                {
                    criteria: 'Dangerous',
                    color: 'rgba(126,0,35,1)',
                    min: 425,
                    max: 604,
                }
            ],
    },
    'co':
    {
        'name': 'CO',
        'unit': 'µg/m³',
        'hours': 8,
        'category':
            [
                {
                    criteria: 'Good',
                    color: 'rgba(0,228,0,1)',
                    min: 0,
                    max: 5094,
                },
                {
                    criteria: 'Acceptable',
                    color: 'rgba(255,255,0,1)',
                    min: 5095,
                    max: 10819,
                },
                {
                    criteria: 'Harmful to sentitive groups',
                    color: 'rgba(255,126,0,1)',
                    min: 10820,
                    max: 14254,
                },
                {
                    criteria: 'Harmful',
                    color: 'rgba(255,0,0,1)',
                    min: 14255,
                    max: 17688,
                },
                {
                    criteria: 'Very harmful',
                    color: 'rgba(143,63,151,1)',
                    min: 17689,
                    max: 34862,
                },
                {
                    criteria: 'Dangerous',
                    color: 'rgba(126,0,35,1)',
                    min: 34863,
                    max: 57703,
                }
            ]
    },
    'so2':
    {
        'name': 'SO₂',
        'unit': 'µg/m³',
        'hours': 1,
        'category':
            [
                {
                    criteria: 'Good',
                    color: 'rgba(0,228,0,1)',
                    min: 0,
                    max: 93,
                },
                {
                    criteria: 'Acceptable',
                    color: 'rgba(255,255,0,1)',
                    min: 94,
                    max: 197,
                },
                {
                    criteria: 'Harmful to sentitive groups',
                    color: 'rgba(255,126,0,1)',
                    min: 198,
                    max: 486,
                },
                {
                    criteria: 'Harmful',
                    color: 'rgba(255,0,0,1)',
                    min: 487,
                    max: 797,
                },
                {
                    criteria: 'Very harmful',
                    color: 'rgba(143,63,151,1)',
                    min: 798,
                    max: 1583,
                },
                {
                    criteria: 'Dangerous',
                    color: 'rgba(126,0,35,1)',
                    min: 1584,
                    max: 2629,
                }
            ]
    },
    'no2':
    {
        'name': 'NO₂',
        'unit': 'µg/m³',
        'hours': 1,
        'category':
            [
                {
                    criteria: 'Good',
                    color: 'rgba(0,228,0,1)',
                    min: 0,
                    max: 100,
                },
                {
                    criteria: 'Acceptable',
                    color: 'rgba(255,255,0,1)',
                    min: 101,
                    max: 189,
                },
                {
                    criteria: 'Harmful to sentitive groups',
                    color: 'rgba(255,126,0,1)',
                    min: 190,
                    max: 677,
                },
                {
                    criteria: 'Harmful',
                    color: 'rgba(255,0,0,1)',
                    min: 678,
                    max: 1221,
                },
                {
                    criteria: 'Very harmful',
                    color: 'rgba(143,63,151,1)',
                    min: 1222,
                    max: 2349,
                },
                {
                    criteria: 'Dangerous',
                    color: 'rgba(126,0,35,1)',
                    min: 2350,
                    max: 3853,
                }
            ]
    },
    'o3':
    {
        'name': 'O₃',
        'unit': 'µg/m³',
        'hours': 8,
        'category':
            [
                {
                    criteria: 'Good',
                    color: 'rgba(0,228,0,1)',
                    min: 0,
                    max: 106,
                },
                {
                    criteria: 'Acceptable',
                    color: 'rgba(255,255,0,1)',
                    min: 107,
                    max: 138,
                },
                {
                    criteria: 'Harmful to sentitive groups',
                    color: 'rgba(255,126,0,1)',
                    min: 139,
                    max: 167,
                },
                {
                    criteria: 'Harmful',
                    color: 'rgba(255,0,0,1)',
                    min: 168,
                    max: 207,
                },
                {
                    criteria: 'Very harmful',
                    color: 'rgba(143,63,151,1)',
                    min: 208,
                    max: 393,
                },
                {
                    criteria: 'Dangerous',
                    color: 'rgba(126,0,35,1)',
                    min: 394,
                    max: 394,
                }
            ]
    },
}



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
        configRaw = {}
        configSmooth = {}
        while (document.body.childNodes[document.body.childNodes.length - 1].tagName === "CANVAS") {
            document.body.removeChild(document.body.childNodes[document.body.childNodes.length - 1])
        }
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
function createConfig(labels, data, type, parameter) {

    console.log("Executed createConfig().")

    if (type === 'raw') {

        configRaw.type = 'line'

        configRaw.options = {}
        configRaw.options.scales = {}
        configRaw.options.scales.y = {}
        configRaw.options.scales.y.beginAtZero = true
        
        configRaw.options.plugins = {}
        configRaw.options.plugins.title = {}
        configRaw.options.plugins.title.display = true
        configRaw.options.plugins.title.text = `${AQI[parameter].name} RAW DATA CHART`
                      

        
        configRaw.data = {}
        configRaw.data.labels = labels
        configRaw.data.datasets = []
        configRaw.data.datasets.unshift(
            {
                label: `${AQI[parameter].name} [${AQI[parameter].unit}] (raw)`,
                data: data,
                fill: false,
                borderColor: 'rgba(0,0,0, 1)',
                borderWidth: 1
            },
        )
    }
    else if (type === 'smooth') {

        var maxValue = 0
        for (let i = 0; i < data.length; i++) {
            if (data[i] !== undefined) {
                if (data[i] > maxValue) {
                    maxValue = data[i]
                }
            }
        }

        configSmooth.type = 'line'
        
        configSmooth.options = {}
        configSmooth.options.scales = {}
        configSmooth.options.scales.y = {}
        configSmooth.options.scales.y.beginAtZero = true
        configSmooth.options.scales.y.max = maxValue * 1.25

        configSmooth.options.plugins = {}
        configSmooth.options.plugins.title = {}
        configSmooth.options.plugins.title.display = true
        configSmooth.options.plugins.title.text = `${AQI[parameter].name} SMOOTH DATA CHART`
        
        configSmooth.data = {}
        configSmooth.data.labels = labels
        configSmooth.data.datasets = []

        for (a in AQI[parameter]['category']) {

            configSmooth.data.datasets.push(
                {
                    label: AQI[parameter]['category'][a].criteria,
                    data: Array(labels.length).fill(AQI[parameter]['category'][a].max),
                    fill: true,
                    backgroundColor: AQI[parameter]['category'][a].color,
                    pointRadius: 0
                }
            )
        }
        configSmooth.data.datasets.unshift(
            {
                label: `${AQI[parameter].name} [${AQI[parameter].unit}] (smooth)`,
                data: data,
                fill: false,
                borderColor: 'rgba(0,0,0, 1)',
                borderWidth: 3
            })
    }

    console.log(`>> Configuration file for plotting Raw Data:`)
    console.log(configRaw)
    console.log(`>> Configuration file for plotting Smooth Data:`)
    console.log(configSmooth)

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
// Inputs: data, totalValidPoints (period)
// Outputs: avgData
// Actions: smoData
// status: OK, but needs to clean code.
// --------------------------------------------
// Dataset
function movingAverage(data, totalValidPoints) {

    console.log("Executed movingAverage().")

    let smoothData = []

    // Moving average parameters
    let minValidPoints = Math.floor(0.75 * totalValidPoints)

    console.log(`>> Total period: ${totalValidPoints} hours.`)
    console.log(`>> Valid period: ${minValidPoints} hours.`)

    // Validation criteria for data
    const isValid = (d) => d > 0 && d !== null && d !== undefined && d !== "NA"

    // First phase: 0 to totalValidPoints
    for (let i = 0; i < totalValidPoints; i++) {
        let validos = 0
        let suma = 0
        for (j = 0; j <= i; j++) {
            if (isValid(data[j])) {
                validos += 1
                suma += data[j]
            }
        }

        if (validos >= minValidPoints) {
            smoothData[i] = suma / validos
        }
        else {
            smoothData[i] = undefined
        }
    }

    // Second phase: totalValidPoints to n
    for (let i = totalValidPoints; i < data.length; i++) {
        let validos = 0
        let suma = 0
        for (let j = i - totalValidPoints + 1; j <= i; j++) {
            if (isValid(data[j])) {
                validos += 1
                suma += data[j]
            }
        }
        // console.log(validos)
        if (validos >= minValidPoints) {
            smoothData[i] = suma / validos
        }
        else {
            smoothData[i] = undefined
        }
    }

    console.log(`>> Hourly based Smooth Data:`)
    console.log(smoothData)

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
        for (a of array) {
            apiLabels.push(a.date.utc)
            apiData.push(a.value)
        }
        console.log(`Executed getData()`)
        console.log(`>> Labels array from API:`)
        console.log(apiLabels)
        console.log(`>> Data array from API:`)
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
    console.log(`>> Total of hours: ${hours}.`)

    return hours
}
// --------------------------------------------



// --------------------------------------------
// UNIT CONVERTER
// -------------------------------------------- 
// Description: Converts units to ug/m3.
// Inputs: NA
// Outputs: NA
// Actions: rawData
// status: OK
// -----------------------------------------------------
function unitConverter(rawData, point, index) {
    const Kstd = 101325 / 298.15 / 8.314472
    const conversionFactor = {
        "co": Kstd * 28.010,
        "no2": Kstd * 46.006,
        "o3": Kstd * 48,
        "so2": Kstd * 64.066,
        "pm25": 1,
        "pm10": 1,
    }
    if (rawData[index] === undefined) {
        rawData[index] = undefined
    } else {
        rawData[index] = point * conversionFactor[parameters.parameter]
    }
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

    console.log(`Executed createRaw()`)

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
            let validData = apiData[a] > 0 && apiData[a] !== "" && apiData[a] !== null && apiData[a] !== undefined
            if (exist) {
                if (validData) {
                    rawData[d] = apiData[a]
                    break
                }
                else {
                    rawData[d] = undefined
                }
            } else {
                rawData[d] = undefined
            }
        }
        smoLabels[d] = dateToUTC(rawLabels[d], 'reverse')
    }

    // Converts units to ug/m3
    rawData.map((point, index) => unitConverter(rawData, point, index))

    console.log('>> Hourly based Labels:')
    console.log(rawLabels)
    console.log(">> Hourly based Raw Data:")
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
        `location=${parameters.location.replaceAll(" ", "%20")}` +
        `&order_by=datetime`;

    console.log(`Executed getURL()`)
    console.log(`>> URL: ${parameters.url}`)

}
// --------------------------------------------



// --------------------------------------------
// GET DATES
// -------------------------------------------- 
// Description: Reads HTML dates and writes to parameters.
// Inputs: NA
// Outputs: NA
// Actions: tags, parameters
// status: OK
// --------------------------------------------
function getDates() {

    let dateFrom = document.getElementById('date_from')
    let dateTo = document.getElementById('date_to')

    if (dateFrom.value === "" || dateTo.value === "") {
        alert("Remember to choose the dates.")
        dateFrom.setAttribute('style', 'background-color: #ffff00')
        dateTo.setAttribute('style', 'background-color: #ffff00')
    }

    parameters.date_from = dateFrom.value
    parameters.date_to = dateTo.value

    parameters.date_from_utc = dateToUTC(parameters.date_from, 'from')
    parameters.date_to_utc = dateToUTC(parameters.date_to, 'to')

    console.log(`Executed getDates().`)
    console.log(`>> Date from: ${parameters.date_from}, UTC: ${parameters.date_from_utc}`)
    console.log(`>> Date to: ${parameters.date_to}, UTC: ${parameters.date_to_utc}`)

}
// --------------------------------------------


// --------------------------------------------
// DROP DOWN OPTIONS BUILDER
// -------------------------------------------- 
// Description: Adds the options array to the given selector.
// Inputs: options
// Outputs: NA
// Actions: HTML tags
// status: OK
// --------------------------------------------
function dropdownBuilder(values, displays, selectorStr) {

    // let options = ['Op1', 'Op2', 'Op3', 'Op4']
    let selector = document.getElementById(selectorStr)

    while (selector.firstChild) {
        selector.removeChild(selector.firstChild)
    }

    for (let i = 0; i < values.length; i++) {
        let opt = document.createElement("OPTION")
        opt.value = values[i]
        opt.innerHTML = displays[i]
        selector.appendChild(opt)
    }
}
// --------------------------------------------


// --------------------------------------------
// CITY DROP DOWN QUERIES
// -------------------------------------------- 
// Description: Query the API to obtain city names.
// Inputs: options
// Outputs: NA
// Actions: NA
// status: OK
// --------------------------------------------
async function cityQuery() {

    console.log("Executed cityQuery().")

    let cityElements = document.getElementById("city")

    let URL = 'https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/cities?limit=100&page=1&offset=0&sort=asc&country=CO&order_by=city'
    let response = await fetch(URL, { method: 'GET' })
    const data = await response.json();
    let array = await data.results

    for (let c of array) {
        let option = document.createElement("OPTION")
        option.innerHTML = c.city
        option.value = c.city
        cityElements.appendChild(option)
    }

    cityElements.addEventListener("change", () => {
        parameters.city = cityElements.value

        console.log(`>> City: ${parameters.city}`)
    })
}
// --------------------------------------------


// --------------------------------------------
// LOCATION DROP DOWN QUERIES
// -------------------------------------------- 
// Description: Query the API to obtain location names..
// Inputs: options
// Outputs: NA
// Actions: HTML tags
// status: OK
// --------------------------------------------
async function locationQuery() {

    console.log("Executed locationQuery().")

    let cityElements = document.getElementById("city")

    cityElements.addEventListener('change', async (e) => {

        let cityStr = parameters.city.replaceAll(" ", "%20")
        let URL = `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/locations?limit=100000&page=1&offset=0&sort=desc&radius=1000&country=CO&` +
            `city=${cityStr}` +
            `&order_by=location&dumpRaw=false`
        let response = await fetch(URL, { method: 'GET' })
        let dataObject = await response.json()
        let data = []
        for (loc of dataObject.results) {
            data.push(loc.name)
        }
        let array = [... new Set(data)]
        array.unshift("Set station")
        dropdownBuilder(array, array, "location")
    })

    let locationElements = document.getElementById("location")

    locationElements.addEventListener('change', async () => {
        parameters.location = locationElements.value

        console.log(`>> Location: ${parameters.location}`)

    })
}
// --------------------------------------------


// --------------------------------------------
// PARAMETER DROP DOWN QUERIES
// -------------------------------------------- 
// Description: Query the API to obtain parameter names..
// Inputs: options
// Outputs: NA
// Actions: HTML tags
// status: IN PROGRESS
// --------------------------------------------
async function parameterQuery() {

    console.log("Executed parameterQuery().")

    let locationElements = document.getElementById("location")
    locationElements.addEventListener('change', async (e) => {
        let cityStr = parameters.city.replaceAll(" ", "%20")
        let locationStr = parameters.location.replaceAll(" ", "%20")
        let URL = `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/locations?limit=100000&page=1&offset=0&sort=desc&radius=1000&country=CO&` +
            `city=${cityStr}` +
            `&location=${locationStr}` +
            `&order_by=location&dumpRaw=false`
        let response = await fetch(URL, { method: 'GET' })
        let dataObject = await response.json()

        let values = []
        let displays = []
        for (param of dataObject.results[0].parameters) {
            // displays.push(`${param.displayName} [${param.unit}]`)
            displays.push(`${param.displayName} [µg/m³]`)
            values.push(param.parameter)
        }

        values.unshift("")
        displays.unshift("Select pollutant")

        dropdownBuilder(values, displays, "parameter")

        let parameterElements = document.getElementById("parameter")
        parameterElements.addEventListener("change", () => {
            parameters.parameter = document.getElementById("parameter").value

            console.log(`>> Parameter: ${parameters.parameter}`)
        })
    })
}
// --------------------------------------------

// --------------------------------------------
// SHOW/HIDE INSTRUCTIONS
// -------------------------------------------- 
// Description: Show and hide instructions
// Inputs: NA
// Outputs: NA
// Actions: NA
// status: OK
// --------------------------------------------
function loadInstructions() {
    let instructions_button = document.getElementById('instructions_button')
    
    let instructions_content = document.getElementById('instructions_content')
    instructions_content.style.display = 'none'
    
    instructions_button.addEventListener('click', () => {

        if (instructions_content.style.display === 'none') {
            instructions_content.style.display = 'block'
            instructions_button.innerHTML = " Hide "
            instructions_button.style.backgroundColor = "darksalmon"
            instructions_button.style.color = "black"
        }
        else {
            instructions_content.style.display = 'none'
            instructions_button.innerHTML = " Instructions "
            instructions_button.style.backgroundColor = "rgb(95, 95, 95)"
            instructions_button.style.color = "white"
        }
    })
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

loadInstructions()

cityQuery()
    .then(res => locationQuery())
    .then(res => parameterQuery())
    .catch(err => {
        alert("Error capturing inputs.")
        console.log(err)
    })

let apiLabels = []
let apiData = []

let rawLabels = []
let rawData = []

let smoLabels = []
let smoData = []

var canvas
var configRaw = {}
var configSmooth = {}

button_plot = document.getElementById(`button_plot`)
button_plot.addEventListener("click", e => {
    clearData()
    getDates()
    getURL()
    getData()
        .then(res => createRaw(parameters.date_from_utc, parameters.date_to_utc))
        .then(res => smoData = movingAverage(rawData, AQI[parameters.parameter]["hours"]))
        .then(res => createConfig(smoLabels, rawData, 'raw', parameters.parameter))
        .then(res => createConfig(smoLabels, smoData, 'smooth', parameters.parameter))
        .then(res => plot(configRaw))
        .then(res => plot(configSmooth))
        .catch(e => {
            alert("There is not enough valid information to proceed. Please verify the dates.")
            console.log(e)
        })

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

    createConfig(mochueloLabels, mochueloRawData, 'raw')
    createConfig(mochueloLabels, mochueloSmoothData, 'smooth')
    plot(configRaw)
    plot(configSmooth)
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