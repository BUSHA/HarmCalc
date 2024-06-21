// Initialize an empty array to hold the timeline rows
let timelineRows = [],
    
    // Initialize a Map to track harmonic affected frequencies
    harmonicAffectedFreq = new Map,

    // Initialize an array of band objects with properties: Band, Channel, Frequency, FreqMin, and FreqMax
    bands = [{
        Band: "H",  // Name of the band
        Channel: "H1",  // Channel identifier
        Frequency: 5653,  // Center frequency in MHz
        FreqMin: 5638,  // Minimum frequency in MHz
        FreqMax: 5668  // Maximum frequency in MHz
    }, {
        Band: "H",
        Channel: "H2",
        Frequency: 5693,
        FreqMin: 5678,
        FreqMax: 5708
    }, {
        Band: "H",
        Channel: "H3",
        Frequency: 5733,
        FreqMin: 5718,
        FreqMax: 5748
    }, {
        Band: "H",
        Channel: "H4",
        Frequency: 5773,
        FreqMin: 5758,
        FreqMax: 5788
    }, {
        Band: "H",
        Channel: "H5",
        Frequency: 5813,
        FreqMin: 5798,
        FreqMax: 5828
    }, {
        Band: "H",
        Channel: "H6",
        Frequency: 5853,
        FreqMin: 5838,
        FreqMax: 5868
    }, {
        Band: "H",
        Channel: "H7",
        Frequency: 5893,
        FreqMin: 5878,
        FreqMax: 5908
    }, {
        Band: "H",
        Channel: "H8",
        Frequency: 5933,
        FreqMin: 5918,
        FreqMax: 5948
    }, {
        Band: "L",
        Channel: "L1",
        Frequency: 5333,
        FreqMin: 5318,
        FreqMax: 5348
    }, {
        Band: "L",
        Channel: "L2",
        Frequency: 5373,
        FreqMin: 5358,
        FreqMax: 5388
    }, {
        Band: "L",
        Channel: "L3",
        Frequency: 5413,
        FreqMin: 5398,
        FreqMax: 5428
    }, {
        Band: "L",
        Channel: "L4",
        Frequency: 5453,
        FreqMin: 5438,
        FreqMax: 5468
    }, {
        Band: "L",
        Channel: "L5",
        Frequency: 5493,
        FreqMin: 5478,
        FreqMax: 5508
    }, {
        Band: "L",
        Channel: "L6",
        Frequency: 5533,
        FreqMin: 5518,
        FreqMax: 5548
    }, {
        Band: "L",
        Channel: "L7",
        Frequency: 5573,
        FreqMin: 5558,
        FreqMax: 5588
    }, {
        Band: "L",
        Channel: "L8",
        Frequency: 5613,
        FreqMin: 5598,
        FreqMax: 5628
    }, {
        Band: "O",
        Channel: "O1",
        Frequency: 5474,
        FreqMin: 5459,
        FreqMax: 5489
    }, {
        Band: "O",
        Channel: "O2",
        Frequency: 5492,
        FreqMin: 5477,
        FreqMax: 5507
    }, {
        Band: "O",
        Channel: "O3",
        Frequency: 5510,
        FreqMin: 5495,
        FreqMax: 5525
    }, {
        Band: "O",
        Channel: "O4",
        Frequency: 5528,
        FreqMin: 5513,
        FreqMax: 5543
    }, {
        Band: "O",
        Channel: "O5",
        Frequency: 5546,
        FreqMin: 5531,
        FreqMax: 5561
    }, {
        Band: "O",
        Channel: "O6",
        Frequency: 5564,
        FreqMin: 5549,
        FreqMax: 5579
    }, {
        Band: "O",
        Channel: "O7",
        Frequency: 5582,
        FreqMin: 5567,
        FreqMax: 5597
    }, {
        Band: "O",
        Channel: "O8",
        Frequency: 5600,
        FreqMin: 5585,
        FreqMax: 5615
    }, {
        Band: "D",
        Channel: "D1",
        Frequency: 5362,
        FreqMin: 5347,
        FreqMax: 5377
    }, {
        Band: "D",
        Channel: "D2",
        Frequency: 5399,
        FreqMin: 5384,
        FreqMax: 5414
    }, {
        Band: "D",
        Channel: "D3",
        Frequency: 5436,
        FreqMin: 5421,
        FreqMax: 5451
    }, {
        Band: "D",
        Channel: "D4",
        Frequency: 5473,
        FreqMin: 5458,
        FreqMax: 5488
    }, {
        Band: "D",
        Channel: "D5",
        Frequency: 5510,
        FreqMin: 5495,
        FreqMax: 5525
    }, {
        Band: "D",
        Channel: "D6",
        Frequency: 5547,
        FreqMin: 5532,
        FreqMax: 5562
    }, {
        Band: "D",
        Channel: "D7",
        Frequency: 5584,
        FreqMin: 5569,
        FreqMax: 5599
    }, {
        Band: "D",
        Channel: "D8",
        Frequency: 5621,
        FreqMin: 5606,
        FreqMax: 5636
    }, {
        Band: "R",
        Channel: "R1",
        Frequency: 5658,
        FreqMin: 5643,
        FreqMax: 5673
    }, {
        Band: "R",
        Channel: "R2",
        Frequency: 5695,
        FreqMin: 5680,
        FreqMax: 5710
    }, {
        Band: "R",
        Channel: "R3",
        Frequency: 5732,
        FreqMin: 5717,
        FreqMax: 5747
    }, {
        Band: "R",
        Channel: "R4",
        Frequency: 5769,
        FreqMin: 5754,
        FreqMax: 5784
    }, {
        Band: "R",
        Channel: "R5",
        Frequency: 5806,
        FreqMin: 5791,
        FreqMax: 5821
    }, {
        Band: "R",
        Channel: "R6",
        Frequency: 5843,
        FreqMin: 5828,
        FreqMax: 5858
    }, {
        Band: "R",
        Channel: "R7",
        Frequency: 5880,
        FreqMin: 5865,
        FreqMax: 5895
    }, {
        Band: "R",
        Channel: "R8",
        Frequency: 5917,
        FreqMin: 5902,
        FreqMax: 5932
    }, {
        Band: "F",
        Channel: "F1",
        Frequency: 5740,
        FreqMin: 5725,
        FreqMax: 5755
    }, {
        Band: "F",
        Channel: "F2",
        Frequency: 5760,
        FreqMin: 5745,
        FreqMax: 5775
    }, {
        Band: "F",
        Channel: "F3",
        Frequency: 5780,
        FreqMin: 5765,
        FreqMax: 5795
    }, {
        Band: "F",
        Channel: "F4",
        Frequency: 5800,
        FreqMin: 5785,
        FreqMax: 5815
    }, {
        Band: "F",
        Channel: "F5",
        Frequency: 5820,
        FreqMin: 5805,
        FreqMax: 5835
    }, {
        Band: "F",
        Channel: "F6",
        Frequency: 5840,
        FreqMin: 5825,
        FreqMax: 5855
    }, {
        Band: "F",
        Channel: "F7",
        Frequency: 5860,
        FreqMin: 5845,
        FreqMax: 5875
    }, {
        Band: "F",
        Channel: "F8",
        Frequency: 5880,
        FreqMin: 5865,
        FreqMax: 5895
    }, {
        Band: "E",
        Channel: "E1",
        Frequency: 5705,
        FreqMin: 5690,
        FreqMax: 5720
    }, {
        Band: "E",
        Channel: "E2",
        Frequency: 5685,
        FreqMin: 5670,
        FreqMax: 5700
    }, {
        Band: "E",
        Channel: "E3",
        Frequency: 5665,
        FreqMin: 5650,
        FreqMax: 5680
    }, {
        Band: "E",
        Channel: "E4",
        Frequency: 5645,
        FreqMin: 5630,
        FreqMax: 5660
    }, {
        Band: "E",
        Channel: "E5",
        Frequency: 5885,
        FreqMin: 5870,
        FreqMax: 5900
    }, {
        Band: "E",
        Channel: "E6",
        Frequency: 5905,
        FreqMin: 5890,
        FreqMax: 5920
    }, {
        Band: "E",
        Channel: "E7",
        Frequency: 5925,
        FreqMin: 5910,
        FreqMax: 5940
    }, {
        Band: "E",
        Channel: "E8",
        Frequency: 5945,
        FreqMin: 5930,
        FreqMax: 5960
    }, {
        Band: "B",
        Channel: "B1",
        Frequency: 5733,
        FreqMin: 5718,
        FreqMax: 5748
    }, {
        Band: "B",
        Channel: "B2",
        Frequency: 5752,
        FreqMin: 5737,
        FreqMax: 5767
    }, {
        Band: "B",
        Channel: "B3",
        Frequency: 5771,
        FreqMin: 5756,
        FreqMax: 5786
    }, {
        Band: "B",
        Channel: "B4",
        Frequency: 5790,
        FreqMin: 5775,
        FreqMax: 5805
    }, {
        Band: "B",
        Channel: "B5",
        Frequency: 5809,
        FreqMin: 5794,
        FreqMax: 5824
    }, {
        Band: "B",
        Channel: "B6",
        Frequency: 5828,
        FreqMin: 5813,
        FreqMax: 5843
    }, {
        Band: "B",
        Channel: "B7",
        Frequency: 5847,
        FreqMin: 5832,
        FreqMax: 5862
    }, {
        Band: "B",
        Channel: "B8",
        Frequency: 5866,
        FreqMin: 5851,
        FreqMax: 5881
    }, {
        Band: "A",
        Channel: "A1",
        Frequency: 5865,
        FreqMin: 5850,
        FreqMax: 5880
    }, {
        Band: "A",
        Channel: "A2",
        Frequency: 5845,
        FreqMin: 5830,
        FreqMax: 5860
    }, {
        Band: "A",
        Channel: "A3",
        Frequency: 5825,
        FreqMin: 5810,
        FreqMax: 5840
    }, {
        Band: "A",
        Channel: "A4",
        Frequency: 5805,
        FreqMin: 5790,
        FreqMax: 5820
    }, {
        Band: "A",
        Channel: "A5",
        Frequency: 5785,
        FreqMin: 5770,
        FreqMax: 5800
    }, {
        Band: "A",
        Channel: "A6",
        Frequency: 5765,
        FreqMin: 5750,
        FreqMax: 5780
    }, {
        Band: "A",
        Channel: "A7",
        Frequency: 5745,
        FreqMin: 5730,
        FreqMax: 5760
    }, {
        Band: "A",
        Channel: "A8",
        Frequency: 5725,
        FreqMin: 5710,
        FreqMax: 5740
    }, {
        Band: "X",
        Channel: "X1",
        Frequency: 4990,
        FreqMin: 4975,
        FreqMax: 5005
    }, {
        Band: "X",
        Channel: "X2",
        Frequency: 5020,
        FreqMin: 5005,
        FreqMax: 5035
    }, {
        Band: "X",
        Channel: "X3",
        Frequency: 5050,
        FreqMin: 5035,
        FreqMax: 5065
    }, {
        Band: "X",
        Channel: "X4",
        Frequency: 5080,
        FreqMin: 5065,
        FreqMax: 5095
    }, {
        Band: "X",
        Channel: "X5",
        Frequency: 5110,
        FreqMin: 5095,
        FreqMax: 5125
    }, {
        Band: "X",
        Channel: "X6",
        Frequency: 5140,
        FreqMin: 5125,
        FreqMax: 5155
    }, {
        Band: "X",
        Channel: "X7",
        Frequency: 5170,
        FreqMin: 5155,
        FreqMax: 5185
    }, {
        Band: "X",
        Channel: "X8",
        Frequency: 5200,
        FreqMin: 5185,
        FreqMax: 5215
    }];

// Function to generate timeline rows for visualization
function generatetimelineRows() {
    // Clear the timelineRows array and iterate over the bands array
    for (channel in timelineRows = [], bands) {
        var e = [];
        
        // Push Band information
        e.push(bands[channel].Band);

        // Push Channel information with Frequency in parentheses
        e.push(bands[channel].Channel + " (" + bands[channel].Frequency + ")");
        
        // Push tooltip text: Channel with Frequency and Frequency range
        e.push(bands[channel].Channel + " (" + bands[channel].Frequency + ")\r\n" + bands[channel].FreqMin + " - " + bands[channel].FreqMax);
        
        // Push Start date (using FreqMin as year, month is set to 1, day is set to 1)
        e.push(new Date(bands[channel].FreqMin, 1, 1));
        
        // Push End date (using FreqMax as year, month is set to 1, day is set to 1)
        e.push(new Date(bands[channel].FreqMax, 1, 1));
        
        // Add the constructed row to the timelineRows array
        timelineRows.push(e);
    }
}

function drawChart() {
    // Get the HTML element where the timeline chart will be drawn
    let e = document.getElementById("example5.1"),
    
    // Create a new Timeline visualization object
        n = new google.visualization.Timeline(e),
    
    // Create a new DataTable to hold the timeline data
        a = new google.visualization.DataTable;

    // Add columns to the DataTable
    a.addColumn({
        type: "string",
        id: "Band"
    }); // Column for Band
    a.addColumn({
        type: "string",
        id: "Channel"
    }); // Column for Channel
    a.addColumn({
        type: "string",
        role: "tooltip"
    }); // Column for Tooltip text
    a.addColumn({
        type: "date",
        id: "Start"
    }); // Column for Start date
    a.addColumn({
        type: "date",
        id: "End"
    }); // Column for End date
    
    // Add rows to the DataTable using the timelineRows array
    a.addRows(timelineRows); 

    // Draw the timeline chart with specific options
    n.draw(a, {
        timeline: {
            colorByRowLabel: !0,  // Color rows by their label
            avoidOverlappingGridLines: !1  // Allow overlapping grid lines
        }
    });
}

function drawTable() {
    // Initialize an empty array to hold DataTable rows
    let e = [];
    
    // Iterate through each harmonic frequency entry in the harmonicAffectedFreq map
    for (let n of harmonicAffectedFreq) {
        // Construct the row with RC Frequency, Harmonic Frequency Range, and Affected Channel
        e.push([n[1].rcFreq + "", n[1].harmonicCount + ":  " + n[1].harmonicMin + " - " + n[1].harmincMax, n[1].channel]);
    }
    
    // Create a new DataTable
    var a = new google.visualization.DataTable;
    
    // Add columns to the DataTable
    a.addColumn("string", "RC Frequency, MHz"); // Column for RC Frequency in MHz
    a.addColumn("string", "Harmonic, Frequency Range"); // Column for Harmonic and its Frequency Range
    a.addColumn("string", "Affected Channel"); // Column for Affected Channel
    
    // Add rows to the DataTable using the array e
    a.addRows(e);
    
    // Draw the table in the HTML element with id "table_div"
    new google.visualization.Table(document.getElementById("table_div")).draw(a, {
        showRowNumber: !1 // Do not show row numbers in the table
    });
}

function calculateHarmonics() {
    // Generate timeline rows
    generatetimelineRows();
    // Reset the harmonicAffectedFreq map
    harmonicAffectedFreq = new Map;

    // Get the spectrum value from the input element and initialize variables
    let e = Number(document.getElementById("spectrum").value),
        n = {},
        a = Number(Math.ceil(e / 2));
    
    // Get the frequency value from the input element and initialize BaseFreqMin and BaseFreqMax
    n.Frequency = Number(document.getElementById("frequency").value);
    n.BaseFreqMin = n.Frequency - a;
    n.BaseFreqMax = n.Frequency + a;

    // Loop through harmonics from 4 to 14 (inclusive)
    for (let r = 4; r < 15 && (n.FreqMax = n.BaseFreqMax * r, n.FreqMin = n.BaseFreqMin * r, !(n.FreqMin > 6300)); r++) {
        // Check the range of each band channel
        for (channel in bands)
            if (!(n.FreqMax < bands[channel].FreqMin) && !(n.FreqMin > bands[channel].FreqMax) && isLinkInRange(bands[channel], n)) {
                // Create an object to represent the affected frequency
                var F = Object({
                    rcFreq: n.Frequency,
                    harmonicCount: r,
                    harmonicMin: n.FreqMin,
                    harmincMax: n.FreqMax,
                    band: bands[channel].Band,
                    channel: bands[channel].Channel,
                    channelFreq: bands[channel].Frequency
                });

                // Update the harmonicAffectedFreq map
                harmonicAffectedFreq.has(F.rcFreq + F.harmonicCount) ? 
                    harmonicAffectedFreq.get(F.rcFreq + F.harmonicCount).channel += ", " + F.channel : 
                    harmonicAffectedFreq.set(F.rcFreq + F.harmonicCount, F)
            }
        
        // If the frequency crosses the threshold, add it to the timeline rows
        if (n.FreqMax > 4990) {
            var q = [];
            q.push("" + n.Frequency);
            q.push(n.Frequency + " Harmonic: " + r);
            q.push(n.Frequency + " Harmonic: " + r + "(" + n.FreqMin + " - " + n.FreqMax + ")");
            q.push(new Date(n.FreqMin, 1, 1));
            q.push(new Date(n.FreqMax, 1, 1));
            timelineRows.push(q);
        }
    }

    // Draw the harmonic timeline chart and table
    drawChart();
    drawTable();
}

// Function to check if a frequency range overlaps with a band channel's frequency range
function isLinkInRange(e, n) {
    // Iterate from the minimum to the maximum frequency of the harmonic range
    for (let a = n.FreqMin; a <= n.FreqMax; a++)
        // If any frequency within this range falls within the band's frequency range, return true
        if (a >= e.FreqMin && a <= e.FreqMax) return !0;

    // If no overlapping frequency is found, return false
    return !1;
}

// Generate the initial timeline rows
generatetimelineRows();

// Load the Google Charts library with the timeline and table packages
google.charts.load("current", {
    packages: ["timeline", "table"]
});

// Set a callback to draw the chart once the Google Charts library is loaded
google.charts.setOnLoadCallback(drawChart);
