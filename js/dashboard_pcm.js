// Crossfilter + D3 + DCJS Module
// console.log('dashboard_pcm.js loading...')

// import d3 from 'd3'                                             // D3 module
// import colorbrewer from 'colorbrewer'                           // Cynthia Brewer color scales module
// import dc from 'dc'
// import crossfilter from 'crossfilter'

// Require data here.
var usJson = './data/geojson/us-states.json';
// var pcmJson = '../data/geojson/2014_risk_clusters.4326.geo.json';
var pcmData = '../data/wkt/2014_risk_clusters.json';

d3.json(pcmData, function(error, pcm) {
  if (error) return console.error(error);
  // console.log(pcm);
  createViz(pcm);
});

var createViz = function (data) {

    // format our data
    var roundingPrecision = 10
    // var dateFormat = d3.time.format('%m/%d/%Y');
    // var numberFormat = d3.format('.2f');

    data.forEach(function(d) {
        d.source_id   = +d.SOURCE_ID
        d.grid_code   = +d.GRID_CODE
        d.lmi_index   = +(+d.LMiIndex).toFixed(roundingPrecision)
        d.lmi_pvalue  = +(+d.LMiPValue).toFixed(roundingPrecision)
        d.lmi_zscore  = +(+d.LMiZScore).toFixed(roundingPrecision)
        d.co_type     = d.COType
    })
    for(d in data)

    // Run the data through crossfilter and load our 'facts'
    var facts = crossfilter(data)
    var all = facts.groupAll()

    // LMi Index dimension.
    var lmiIndex = facts.dimension(function (d) {
        return d.lmi_index       // add the lmi_index dimension
    })
    var lmiIndexGroupSum = lmiIndex.group()
        .reduceSum(function(d) { return d.lmi_index })	// sums
    var lmiIndexGroupCount = lmiIndex.group()
        .reduceCount(function(d) { return d.lmi_index }) // counts
    var lmiIndex_Min = +lmiIndex.bottom(1)[0].lmi_index*100
    var lmiIndex_Max = +lmiIndex.top(1)[0].lmi_index*100
    // console.log('lmiIndex Scale: ',lmiIndex_Min, lmiIndex_Max)

    // LMi P Value dimension.
    var lmiPValue = facts.dimension(function (d) {
        return d.lmi_pvalue       // add the lmi_index dimension
    })
    var lmiPValueGroup = lmiPValue.group()
        .reduceSum(function(d) { return d.lmi_pvalue })	// sums
    var lmiPValueGroupCount = lmiPValue.group()
        .reduceCount(function(d) { return d.lmi_pvalue }) // counts
    var lmiPValue_Min = +lmiPValue.bottom(1)[0].lmi_pvalue*100
    var lmiPValue_Max = +lmiPValue.top(1)[0].lmi_pvalue*100
    // console.log('lmiPValue Scale: ',lmiPValue_Min, lmiPValue_Max)

    // LMi Z Score dimension.
    var lmiZScore = facts.dimension(function (d) {
        return d.lmi_zscore       // add the lmi_index dimension
    })
    var lmiZScoreGroup = lmiZScore.group()
        .reduceSum(function(d) { return d.lmi_zscore })	// sums
    var lmiZScoreGroupCount = lmiZScore.group()
        .reduceCount(function(d) { return d.lmi_zscore }) // counts
    var lmiZScore_Min = +lmiZScore.bottom(1)[0].lmi_zscore*100
    var lmiZScore_Max = +lmiZScore.top(1)[0].lmi_zscore*100
    // console.log('lmiZScore Scale: ',lmiZScore_Min, lmiZScore_Max)

    // Grid Code (Row Chart).
    var gridCode = facts.dimension(function (d) {
        var code = d.grid_code //.getCode()
        // console.log(code)
        switch (code) {
            case 5:
                return "0.5"
            case 9:
                return "1.9"
            case 10:
                return "2.10"
            case 12:
                return "3.12"
            case 23:
                return "4.23"
            case 45:
                return "5.45"
        }
    })
    var gridCodeGroup = gridCode.group()

    // CO Type (Pie Chart).
    var coType = facts.dimension(function (d) {
        if (d.co_type === 'HH')
            return 'HH'
        else
            return 'Other'
    })
    var coTypeGroup = coType.group()

    // Create datatable dimension.
    var lmiZScoreDimension = facts.dimension(function (d) {
        return d.lmi_zscore
    })

    // Setup the charts.
    var transitionDurationTime = 500

    // Count all the facts.
    dc.dataCount(".dc-data-count")
        .dimension(facts)
        .group(all)

    // Create the dc.js chart objects & link to div
    var lmiIndexChart = dc.barChart("#dc-lmi-index-chart")
    var lmiPValueChart = dc.barChart("#dc-lmi-pvalue-chart")
    var lmiZScoreChart = dc.barChart("#dc-lmi-zscore-chart")
    var coTypeChart = dc.pieChart("#dc-co-type-chart")
    var gridCodeChart = dc.rowChart("#dc-grid-code-chart")
    var dataTable = dc.dataTable("#dc-table-graph")
    // var usMap = dc.geoChoroplethChart("#us-map")
    // var pcmMap = dc.geoChoroplethChart("#pcm-map")  // default global group.
    // var pcmMap = dc.geoChoroplethChart('#pcm-map', lmiIndexGroupCount)  // specifies group.

    var chartMargins = {top: 10, right: 10, bottom: 20, left: 40}
    var gapValue = 65           // 65 = norm, 80 works okay, 60 is nice.
    var barPaddingValue = 120   // overrides gap values. 30

    // (Bar Graph).
    lmiIndexChart
        .dimension(lmiIndex)
        .group(lmiIndexGroupCount)
        .transitionDuration(transitionDurationTime)
        // .width(480)
        // .height(150)
        .margins(chartMargins)
        .centerBar(true)
        .gap(gapValue)
        .barPadding(barPaddingValue)
        .x(d3.scale.linear().domain([0, 0.9]))
        .y(d3.scale.linear().domain([lmiIndex_Min, lmiIndex_Max]))
        .elasticY(true)
        .xAxis()
        .tickFormat()

    lmiIndexChart.on('filtered', function(event) {
        console.log(event)
    })

    // (Bar Graph).
    lmiZScoreChart
        .dimension(lmiZScore)
        .group(lmiZScoreGroup)
        .transitionDuration(transitionDurationTime)
        // .width(480)
        // .height(150)
        .margins({top: 10, right: 10, bottom: 20, left: 40})
        .centerBar(true)
        .gap(1)
        .x(d3.scale.linear().domain([0, 170]))
        .y(d3.scale.linear().domain([lmiZScore_Min, lmiZScore_Max]))
        .elasticY(true)
        .xAxis().tickFormat(function(v) {return v})

    lmiZScoreChart.on('filtered', function(event) {
        console.log(event)
    })

    // (Bar Graph).
    lmiPValueChart
        .dimension(lmiPValue)
        .group(lmiPValueGroup)
        .transitionDuration(transitionDurationTime)
        // .width(480)
        // .height(150)
        .margins({top: 10, right: 10, bottom: 20, left: 40})
        .centerBar(true)
        .gap(65)
        .barPadding(0)              // overrides gap values. tweak until happy.
        .x(d3.scale.linear().domain([0, 0.6]))
        .y(d3.scale.linear().domain([lmiPValue_Min, lmiPValue_Max]))
        .elasticY(true)
        .xAxis().tickFormat(function(v) {return v})

    lmiPValueChart.on('filtered', function(event) {
        console.log(event)
    })

    // (Row Chart).
    gridCodeChart
        .dimension(gridCode)
        .group(gridCodeGroup)
        // .width(300)
        // .height(220)
        .margins({top: 5, left: 10, right: 10, bottom: 20})
        .colors(d3.scale.ordinal(d3.scale.category10))
        .label(function (d){
        return d.key.split(".")[1]
        })
        .title(function(d){return d.value})
        .elasticX(true)
        .xAxis().ticks(4)

    gridCodeChart.on('filtered', function(event) {
        console.log(event)
    })

    // (Pie Chart).
    coTypeChart
        .dimension(coType)
        // .width(250)
        // .height(220)
        .radius(100)
        .innerRadius(50)
        .title(function(d){return d.value})
        .group(coTypeGroup)

    coTypeChart.on('filtered', function(event) {
        console.log(event)
    })

    // Risk cluster (Data Table).
    var numberVisibleRows = 20

    dataTable
        .dimension(lmiZScoreDimension)
        .group(function(d) { return "2014 Risk Clusters" })
        .size(numberVisibleRows)
        .columns([
            function(d) { return d.lmi_index },
            function(d) { return d.lmi_zscore },
            function(d) { return d.lmi_pvalue },
            function(d) { return d.grid_code },
            function(d) { return d.co_type },
            function(d) { return d.source_id }
        ])
        .sortBy(function(d){ return d.lmi_index })
        .order(d3.descending)

    // Choropleth.
    // var window = BrowserWindow.getFocusedWindow()
    // console.log(window.getSize)
    // var viewportWidth = $(window).width();
    // var viewportHeight = $(window).height()/2;
    // console.log(viewportWidth, viewportHeight);

    var dfwCoords = [32.7801399, -96.8004511]
    var mapWidth = 1000  //1000, 500
    var mapHeight = 500 //500, 250
    var mapPadding = 20
    var numberFormat = d3.format(".2f")

    // console.log('d3: ')
    // console.log(d3)
    // console.log('d3.geo.albersUsa(): ')
    // console.log(d3.geo.albersUsa())

    /*
    var mapProjection = d3.geo.albersUsa()
        .center(dfwCoords)
        // .scale(mapWidth)
        .fitSize([mapWidth, mapHeight], pcmJson)
        // .fitExtent([[mapPadding, mapPadding], [mapWidth, mapHeight]], pcmJson)
    */

    // Errors out saying d3.geo is undefined... wth?

    // dc.utils.nameToId = function (name) {
    //     return name.toString().toLowerCase().replace(/[\s]/g, "_").replace(/[\.']/g, "");
    // }
    //
    // console.log(dc)

    // ISSUE: dc.js does not cast integers to strings before doing a lowerCase comversion on values.
    // SOLUTION: Temporary - overwriting the dc.js method to properly cast to a string first.
    // IMPLEMENTATION: Monkey patch the method and override on the dc.js prototype object after loading it.

    // var vcData = d3.csv(vcDataPath, function (csv) {
    //     var data = crossfilter(csv)
    //     console.log(data)
    //
    //     var states = data.dimension(function (d) {
    //         return d["State"]
    //     })
    //     var stateRaisedSum = states.group().reduceSum(function (d) {
    //         return d["Raised"]
    //     })
    //
    //     var industries = data.dimension(function (d) {
    //         return d["Industry Group"]
    //     })
    //     var statsByIndustries = industries.group().reduce(
    //             function (p, v) {
    //                 p.amountRaised += +v["Raised"]
    //                 p.deals += +v["Deals"]
    //                 return p
    //             },
    //             function (p, v) {
    //                 p.amountRaised -= +v["Raised"]
    //                 if (p.amountRaised < 0.001) p.amountRaised = 0 // do some clean up
    //                 p.deals -= +v["Deals"]
    //                 return p
    //             },
    //             function () {
    //                 return {amountRaised: 0, deals: 0}
    //             }
    //     )
    //
    //     var rounds = data.dimension(function (d) {
    //         return d["RoundClassDescr"]
    //     })
    //     var statsByRounds = rounds.group().reduce(
    //             function (p, v) {
    //                 p.amountRaised += +v["Raised"]
    //                 p.deals += +v["Deals"]
    //                 return p
    //             },
    //             function (p, v) {
    //                 p.amountRaised -= +v["Raised"]
    //                 if (p.amountRaised < 0.001) p.amountRaised = 0 // do some clean up
    //                 p.deals -= +v["Deals"]
    //                 return p
    //             },
    //             function () {
    //                 return {amountRaised: 0, deals: 0}
    //             }
    //     )
    // }

    // console.log(vcData)

    // usMap
    //     .width(mapWidth)
    //     .height(mapHeight)
    //     // .dimension(states)
    //     .dimension(lmiIndex)
    //     // .group(stateRaisedSum)
    //     .group(lmiIndexGroupSum)
    //     .colors(d3.scale.quantize().range(["#E2F2FF", "#C4E4FF", "#9ED2FF", "#81C5FF", "#6BBAFF", "#51AEFF", "#36A2FF", "#1E96FF", "#0089FF", "#0061B5"]))
    //     .colorDomain([0, 200])
    //     .colorCalculator(function (d) { return d ? pcmMap.colors()(d) : '#ccc' })
    //     .overlayGeoJson(usJson.features, "state", function (d) {
    //         return d.properties.name
    //     })
    //     .valueAccessor(function(kv) {
    //         // console.log(kv)
    //         return kv.value
    //     })
    //     .title(function (d) {
    //         return "LMi Index: " + d.key + "\nTotal Amount Raised: " + numberFormat(d.value ? d.value : 0) + "M"
    //     })
    //
    // usMap.on('filtered', function(event) {
    //     console.log(event)
    // })

    // pcmMap
    //     .width(mapWidth)
    //     .height(mapHeight)
    //     .dimension(lmiIndex)
    //     .group(lmiIndexGroupSum)
    //     // .projection(mapProjection)
    //     // .projection(d3.geo.albersUsa().center(dfwCoords).fitSize([mapWidth, mapHeight], pcmJson))
    //     .colors(d3.scale.quantize().range(["#E2F2FF", "#C4E4FF", "#9ED2FF", "#81C5FF", "#6BBAFF", "#51AEFF", "#36A2FF", "#1E96FF", "#0089FF", "#0061B5"]))
    //     .colorDomain([0, 200])
    //     .colorCalculator(function (d) { return d ? pcmMap.colors()(d) : '#ccc' })
    //     .overlayGeoJson(pcmJson.features, "cells", function (d) {
    //         // return d.properties.geometry
    //         return d.properties.SOURCE_ID
    //         // return d.properties.LMiIndex
    //     })
    //     .valueAccessor(function(kv) {
    //         // console.log(kv)
    //         return kv.value
    //     })
    //     .title(function (d) {
    //         return "LMi Index: " + d.key + "\nScore: " + numberFormat(d.value ? d.value : 0)
    //     })
    //
    // pcmMap.on('filtered', function(event) {
    //     console.log(event)
    // })

    // Render the Charts
    dc.renderAll()

    // console.log('startViz() completed.')
}
