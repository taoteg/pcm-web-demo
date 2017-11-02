// Leaflet Map Module
// console.log('leaflet-map.js loading...')

var filter = function(feature, layer) {
    if (feature) {
        // console.log('feature found: ')
        // console.log(feature)
        return feature
    }
    if (layer) {
        // console.log('layer found: ')
        // console.log(layer)
        return layer
    }
    return false
}

var stylePoint = function(feature) {
    return {
        // fillOpacity: 0.5,
        // dashArray: '0'
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    }
}

var styleMultiPoint = function(feature) {
    return {
        // fillColor: 'yellow',
        // fillOpacity: 0.5,
        // color: 'red',
        // opacity: 0.7,
        // weight: 1,
        // dashArray: '0'
    }
}

var styleLineString = function(feature) {
    return {
        // fillColor: 'yellow',
        // fillOpacity: 0.5,
        // color: 'red',
        // opacity: 0.7,
        // weight: 1,
        // dashArray: '0'
    }
}

var styleMultiLineString = function(feature) {
    return {
        // fillColor: 'yellow',
        // fillOpacity: 0.5,
        // color: 'red',
        // opacity: 0.7,
        // weight: 1,
        // dashArray: '0'
    }
}

var stylePolygon = function(feature) {
    return {
        fillColor: 'yellow',
        fillOpacity: 0.5,
        color: 'red',
        opacity: 0.9,
        weight: 1,
        dashArray: '0'
    }
}

var logFeatureValues = function(feature) {
    // console.log(feature.properties.COType)
    // console.log(feature.properties.GRID_CODE)
    // console.log(feature.properties.LMiIndex)
    // console.log(feature.properties.LMiPValue)
    // console.log(feature.properties.LMiZScore)
    // console.log(feature.properties.SOURCE_ID)
}

var stylePolygon_LMiIndex = function(feature) {
    logFeatureValues(feature)
    // Styling logic here based on feature property values.
    // Colors:
    // #462020,#723A30,#814049,#864C65,#805D80,#6D7096,#5184A2
    // #fff5f0,#fee0d2,#fcbba1,#fc9272,#fb6a4a,#ef3b2c,#cb181d,#99000d
    // #ffffff,#fff5f0,#fee0d2,#fcbba1,#fc9272,#fb6a4a,#ef3b2c,#cb181d,#a50f15,#67000d,#450c03
    if (feature.properties.LMiIndex >= 0.0 && feature.properties.LMiIndex < 0.01) {
        return {
            fillColor: '#ffffff',
            fillOpacity: 0.8,
            color: '#ffffff',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiIndex >= 0.01 && feature.properties.LMiIndex < 0.02) {
        return {
            fillColor: '#fff5f0',
            fillOpacity: 0.8,
            color: '#fff5f0',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiIndex >= 0.02 && feature.properties.LMiIndex < 0.03) {
        return {
            fillColor: '#fee0d2',
            fillOpacity: 0.8,
            color: '#fee0d2',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiIndex >= 0.03 && feature.properties.LMiIndex < 0.04) {
        return {
            fillColor: '#fcbba1',
            fillOpacity: 0.8,
            color: '#fcbba1',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiIndex >= 0.04 && feature.properties.LMiIndex < 0.05) {
        return {
            fillColor: '#fc9272',
            fillOpacity: 0.8,
            color: '#fc9272',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiIndex >= 0.05 && feature.properties.LMiIndex < 0.06) {
        return {
            fillColor: '#fb6a4a',
            fillOpacity: 0.8,
            color: '#fb6a4a',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiIndex >= 0.06 && feature.properties.LMiIndex < 0.07) {
        return {
            fillColor: '#ef3b2c',
            fillOpacity: 0.8,
            color: '#ef3b2c',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiIndex >= 0.07 && feature.properties.LMiIndex < 0.08) {
        return {
            fillColor: '#cb181d',
            fillOpacity: 0.8,
            color: '#cb181d',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiIndex >= 0.08 && feature.properties.LMiIndex < 0.09) {
        return {
            fillColor: '#a50f15',
            fillOpacity: 0.8,
            color: '#a50f15',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiIndex >= 0.09 && feature.properties.LMiIndex < 0.1) {
        return {
            fillColor: '#67000d',
            fillOpacity: 0.8,
            color: '#67000d',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiIndex >= 0.1) {
        return {
            fillColor: '#450c03',
            fillOpacity: 0.8,
            color: '#450c03',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    }
}

var stylePolygon_LMiPValue = function(feature) {
    logFeatureValues(feature)
    // Styling logic here based on feature property values.
    if (feature.properties.LMiPValue >= 0.0 && feature.properties.LMiPValue <= 0.01) {
        return {
            fillColor: 'purple',
            fillOpacity: 0.5,
            color: 'purple',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiPValue > 0.01 && feature.properties.LMiPValue <= 0.02) {
        return {
            fillColor: 'blue',
            fillOpacity: 0.5,
            color: 'blue',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiPValue > 0.02 && feature.properties.LMiPValue < 0.03) {
        return {
            fillColor: 'green',
            fillOpacity: 0.5,
            color: 'green',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiPValue > 0.03 && feature.properties.LMiPValue < 0.04) {
        return {
            fillColor: 'yellow',
            fillOpacity: 0.5,
            color: 'yellow',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiPValue > 0.04 && feature.properties.LMiPValue < 0.05) {
        return {
            fillColor: 'orange',
            fillOpacity: 0.5,
            color: 'orange',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiPValue >= 0.05 && feature.properties.LMiPValue < 0.1) {
        return {
            fillColor: 'red',
            fillOpacity: 0.5,
            color: 'red',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiPValue >= 0.1) {
        return {
            fillColor: 'black',
            fillOpacity: 0.5,
            color: 'black',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    } else {
        return {
            fillColor: 'pink',
            fillOpacity: 0.5,
            color: 'pink',
            opacity: 0.9,
            weight: 1,
            dashArray: '0'
        }
    }
}

var stylePolygon_LMiZScore = function(feature) {
    logFeatureValues(feature)
    // Styling logic here based on feature property values.
    if (feature.properties.LMiZScore >= 0 && feature.properties.LMiZScore < 2) {
        return {
            fillColor: 'white',
            fillOpacity: 0.8,
            color: 'black',
            opacity: 1,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiZScore >= 2 && feature.properties.LMiZScore < 6) {
        return {
            fillColor: 'yellow',
            fillOpacity: 0.8,
            // color: 'yellow',
            color: 'black',
            opacity: 1,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiZScore >= 6 && feature.properties.LMiZScore < 11) {
        return {
            fillColor: 'gold',
            fillOpacity: 0.8,
            // color: 'gold',
            color: 'black',
            opacity: 1,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiZScore >= 11 && feature.properties.LMiZScore < 16) {
        return {
            fillColor: 'orange',
            fillOpacity: 0.8,
            // color: 'orange',
            color: 'black',
            opacity: 1,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiZScore >= 16 && feature.properties.LMiZScore < 21) {
        return {
            fillColor: 'red',
            fillOpacity: 0.8,
            // color: 'red',
            color: 'black',
            opacity: 1,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiZScore >= 21 && feature.properties.LMiZScore < 31) {
        return {
            fillColor: 'darkred',
            fillOpacity: 0.8,
            // color: 'darkred',
            color: 'black',
            opacity: 1,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiZScore >= 31 && feature.properties.LMiZScore < 51) {
        return {
            fillColor: 'maroon',
            fillOpacity: 0.8,
            // color: 'maroon',
            color: 'black',
            opacity: 1,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiZScore >= 51 && feature.properties.LMiZScore < 71) {
        return {
            fillColor: 'pink',
            fillOpacity: 0.8,
            // color: 'pink',
            color: 'black',
            opacity: 1,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiZScore >= 71 && feature.properties.LMiZScore < 101) {
        return {
            fillColor: 'purple',
            fillOpacity: 0.8,
            // color: 'purple',
            color: 'black',
            opacity: 1,
            weight: 1,
            dashArray: '0'
        }
    } else if (feature.properties.LMiZScore >= 101 && feature.properties.LMiZScore < 151) {
        return {
            fillColor: 'blue',
            fillOpacity: 0.8,
            // color: 'blue',
            color: 'black',
            opacity: 1,
            weight: 1,
            dashArray: '0'
        }
    } else {
        return {
            fillColor: 'grey',
            fillOpacity: 0.8,
            // color: 'grey',
            color: 'black',
            opacity: 1,
            weight: 1,
            dashArray: '0'
        }
    }
}

var styleMultiPolygon = function(feature) {
    return {
        // fillColor: 'yellow',
        // fillOpacity: 0.5,
        // color: 'red',
        // opacity: 0.7,
        // weight: 1,
        // dashArray: '0'
    }
}

var styleGeometryCollection = function(feature) {
    return {
        // fillColor: 'yellow',
        // fillOpacity: 0.5,
        // color: 'red',
        // opacity: 0.7,
        // weight: 1,
        // dashArray: '0'
    }
}

var onEachFeature = function(feature, layer) {
    var currentPopup = L.popup({
        minHeight: 160,
        minWidth: 240,
        closeOnClick: true,
        keepInView: true
    })

    var popupText = ''
    for (var f in feature.properties) {
        var propertyKey = f.toString()
        var propertyValue = feature.properties[f]
        // console.log(propertyKey, propertyValue)
        popupText += '<div class="popupPropertyText font-secondary"><span class="popupPropertyLabel">' + propertyKey + '</span>:  <span class="popupPropertyValue">' + propertyValue + '</span></div>'
    }
    currentPopup.setContent(popupText)
    layer.bindPopup(currentPopup)
}

var isArray = function(value) {
    return value && typeof value === 'object' && typeof value.length === 'number' && typeof value.splice === 'function' && !(value.propertyIsEnumerable('length'));
}

var isObject = function(value) {
    // console.log(value)
    var testResult = typeof(value)
    // console.log('testResult: ', testResult)
    return testResult
}

var pointToLayer = function(feature, latlng) {
    return L.circleMarker(latlng, stylePoint(feature))
}

// var loadData = function(target) {
//     console.log(target);
//     $.ajax({
//       dataType: "json",
//       url: target.urls,
//       data: '', //data,
//       success: success
//     });
//
//     var success = function(data) {
//         console.log(data);
//         return data;
//     }
// }

var loadDataIntoGroup = function(data) {
    // console.log(data)

    // var requestURL = data.url;
    // var request = new XMLHttpRequest();
    //
    // request.open('GET', requestURL);
    // request.responseType = 'json';
    // request.send();
    //
    // request.onload = function() {
    //     var geodata = request.response;
    //     console.log(geodata);
    //     // populateGroup(geodata);
    // }

    $.getJSON(data.url, function (data) {
        console.log(data);
        populateGroup(data);
    });
};

var populateGroup = function(data) {
    console.log(data);
    var dataType = data.type
    // console.log(dataType)

    if (dataType === 'FeatureCollection') {
        // console.log('FeatureCollection detected.')
        var features = data.features
        // console.log(features)
        for (var f in features) {
            // console.log(f)
            var targetFeature = features[f]
            // console.log('targetFeature: ', targetFeature)
            var targetFeatureType = features[f].geometry.type
            // console.log('targetFeatureType: ', targetFeatureType)
            var dataLayer = null

            if (targetFeatureType == 'Point') {
                // console.log('Point found:')
                dataLayer = L.geoJson(data, pointToLayer(data))
            }
            if (targetFeatureType == 'MultiPoint') {
                // console.log('MultiPoint found:')
                dataLayer = L.geoJson(data, { filter: filter, style: styleMultiPoint, onEachFeature: onEachFeature })
            }
            if (targetFeatureType == 'LineString') {
                // console.log('LineString found:')
                dataLayer = L.geoJson(data, { filter: filter, style: styleLineString, onEachFeature: onEachFeature })
            }
            if (targetFeatureType == 'MultiLineString') {
                // console.log('MultiLineString found:')
                dataLayer = L.geoJson(data, { filter: filter, style: styleMultiLineString, onEachFeature: onEachFeature })
            }
            if (targetFeatureType == 'Polygon') {
                // console.log('Polygon found:')
                dataLayer = L.geoJson(data, { filter: filter, style: stylePolygon_LMiIndex, onEachFeature: onEachFeature })
                // dataLayer = L.geoJson(data, { filter: filter, style: stylePolygon_LMiPValue, onEachFeature: onEachFeature })
                // dataLayer = L.geoJson(data, { filter: filter, style: stylePolygon_LMiZScore, onEachFeature: onEachFeature }) // USE
                // dataLayer = L.geoJson(data, { filter: filter, style: stylePolygon_colorScales, onEachFeature: onEachFeature })
            }
            if (targetFeatureType == 'MultiPolygon') {
                // console.log('MultiPolygon found:')
                dataLayer = L.geoJson(data, { filter: filter, style: styleMultiPolygon, onEachFeature: onEachFeature })
            }
            if (targetFeatureType == 'GeometryCollection') {
                // console.log('GeometryCollection found:')
                dataLayer = L.geoJson(data, { filter: filter, style: styleGeometryCollection, onEachFeature: onEachFeature })
            }
            // console.log(dataLayer)
            return dataLayer
        }
    } else {
        console.log('This is not a supported data object.')
    }
}

var addMiniMap = function() {
    var minimap_provider = 0      // 0
    var minimap_minZoom = 0       // 0
    var minimap_maxZoom = 13      // 13
    var minimap_url = Maptiles.providers[minimap_provider]._url
    var minimap_attr = Maptiles.providers[minimap_provider].options.attribution
	//Note that you cannot use the same layer object again, as that will confuse the two map controls.
	var miniMapBasemap = new L.TileLayer(minimap_url, { minZoom: minimap_minZoom, maxZoom: minimap_maxZoom, attribution: minimap_attr })
	var miniMapControl = new L.Control.MiniMap(miniMapBasemap, { toggleDisplay: true })  //.addTo(map)
    return miniMapControl
}

var createMap = function(mapElement) {
    // console.log('creating the map...');

    // Generate Reference Coordinates.
    var locations = [
        [32.7767, -96.7970],    // Dallas
        [32.7555, -97.3308],    // Fort Worth
        [30.2672, -97.7431]     // Austin
    ]

    var markerOverlays = {}
    var groupedOverlays = {}

    // Create Map Markers.
    var dallas = L.marker(locations[0]).bindPopup('This is Dallas, TX.')
    var fortworth = L.marker(locations[1]).bindPopup('This is Fort Worth, TX.')
    var austin = L.marker(locations[2]).bindPopup('This is Austin, TX.')

    markerOverlays = {
        'Dallas, TX': dallas,
        'Fort Worth, TX': fortworth,
        'Austin, TX': austin
    }

    // Leaflet Configuration.
    var defaultLocation = locations[1]
    var defaultZoomLevel = 12 //10
    var minZoom = 5
    var maxZoom = 17 //15
    var mapConfiguration = {
        center: defaultLocation,
        zoom: defaultZoomLevel,
        minZoom: minZoom,
        maxZoom: maxZoom
    };

    // Leaflet Map.
    var map = L.map(mapElement, mapConfiguration)           // Create Map.
    var basemap = Maptiles.providers[5].addTo(map)          // Basemap Tiles - Set default TileLayer for map.
    addMiniMap().addTo(map)                                 // Add Minimap.
    var scaleControl = new L.control.scale().addTo(map)     // Create Map Scale.

    // Create Layers Control.
    var layersControl = new L.control.groupedLayers(Maptiles.layers).addTo(map);
    // var layersControl = new L.control.groupedLayers(Maptiles.layers, groupedOverlays).addTo(map);

    // Define Data Layers.
    var dataLayersQueue = [];

    // NOTE: Removing these density layers because they add no value and are HUGE for web.
    //
    // var fw_2013_rtm_dens_vct = {};
    // fw_2013_rtm_dens_vct.url = '../data/geojson/2013_rtm_dens_vct.4326.geo.json';
    // fw_2013_rtm_dens_vct.name = '2013 RTM Density'
    // // console.log(fw_2013_rtm_dens_vct);
    // dataLayersQueue.push(fw_2013_rtm_dens_vct);
    //
    // var fw_2014_all_vct = {};
    // fw_2014_all_vct.url = '../data/geojson/2014_fw_all_vct.4326.geo.json';
    // fw_2014_all_vct.name = '2014 RTM Density'
    // // console.log(fw_2014_all_vct);
    // dataLayersQueue.push(fw_2014_all_vct);

    var fw_2014_risk_clusters = {};
    fw_2014_risk_clusters.url = '../data/geojson/2014_risk_clusters.4326.geo.json';
    fw_2014_risk_clusters.name = '2014 Risk Clusters Data'
    // console.log(fw_2014_risk_clusters);
    dataLayersQueue.push(fw_2014_risk_clusters);

    var fw_elem_school_6111 = {};
    fw_elem_school_6111.url = '../data/wkt/fw_elem_school_6111.geo.json';
    fw_elem_school_6111.name = 'FW Elementary School 6111'
    // console.log(fw_elem_school_6111);
    dataLayersQueue.push(fw_elem_school_6111);

    var fw_fire_92216 = {};
    fw_fire_92216.url = '../data/wkt/fw_fire_92216.geo.json';
    fw_fire_92216.name = 'FW Fire Dept 92216'
    // console.log(fw_fire_92216);
    dataLayersQueue.push(fw_fire_92216);

    var fw_health_soc_srv_62 = {};
    fw_health_soc_srv_62.url = '../data/wkt/fw_health_soc_srv_62.geo.json';
    fw_health_soc_srv_62.name = 'FW Health & Social Services 62'
    // console.log(fw_health_soc_srv_62);
    dataLayersQueue.push(fw_health_soc_srv_62);

    var fw_pharm_44611 = {};
    fw_pharm_44611.url = '../data/wkt/fw_pharm_44611.geo.json';
    fw_pharm_44611.name = 'FW Pharmacies 44611'
    // console.log(fw_pharm_44611);
    dataLayersQueue.push(fw_pharm_44611);

    var fw_police_92212 = {};
    fw_police_92212.url = '../data/wkt/fw_police_92212.geo.json';
    fw_police_92212.name = 'FW Police 92212'
    // console.log(fw_police_92212);
    dataLayersQueue.push(fw_police_92212);

    var fw_rel_civic_org_813 = {};
    fw_rel_civic_org_813.url = '../data/wkt/fw_rel_civic_org_813.geo.json';
    fw_rel_civic_org_813.name = 'FW Relevant Civic Organizations 813'
    // console.log(fw_rel_civic_org_813);
    dataLayersQueue.push(fw_rel_civic_org_813);

    var AST_813 = {};
    AST_813.url = '../data/geojson/ast_rel_civic_org_813.epsg4326.geo.json';
    AST_813.name = 'AST Rel Civic Org 813'
    // console.log(AST_813);
    dataLayersQueue.push(AST_813);

    var unitedStatesData = {};
    unitedStatesData.url = '../data/geojson/UnitedStates.geo.json';
    unitedStatesData.name = 'United States'
    // console.log(unitedStatesData);
    dataLayersQueue.push(unitedStatesData);

    // var texasData = new L.GeoJSON.AJAX('../data/geojson/tx.geo.json');
    var texasData = {};
    texasData.url = '../data/geojson/tx.geo.json';
    texasData.name = 'Texas'
    // console.log(texasData);
    dataLayersQueue.push(texasData);

    // console.log(dataLayersQueue);

    // Load Data.
    var defaultDataLayer;
    var first_iteration = true;

    for (var dl in dataLayersQueue) {
        // console.log(dataLayersQueue[dl]);
        var geodata = new L.GeoJSON.AJAX(dataLayersQueue[dl].url);
        // var geodata = new L.GeoJSON.AJAX(dataLayersQueue[dl].url,{style:populateGroup(this)});
        console.log(geodata);
        // var styledGeodata = populateGroup(geodata);                              // not supported type.

        // var styledGeodata = L.geoJSON(geodata, {
        //     style: function (feature) {
        //         return {color: feature.properties.color};
        //     }
        // }).bindPopup(function (layer) {
        //     return layer.feature.properties.description;
        // }).addTo(map);

        layersControl.addOverlay(geodata, dataLayersQueue[dl].name);             // WORKS.
        // layersControl.addOverlay(styledGeodata, dataLayersQueue[dl].name);          // undefined.

        if (first_iteration) {
            console.log('first_iteration');
            defaultDataLayer = geodata;                                          // WORKS.
            // defaultDataLayer = styledGeodata;                                       // undefined.
            first_iteration = false;
        }
    }

    // Load default data layer.
    defaultDataLayer.addTo(map);

    // Need to rewire this approach.
    // Add Data to Grouped Layers.
    // groupedOverlays = {
    //     'Points of Interest': {
    //         'Dallas, TX': dallas,
    //         'Fort Worth, TX': fortworth,
    //         'Austin, TX': austin
    //     },
    //     'DFW PCM Data': {
    //         '2013 RTM Density': loadDataIntoGroup(fw_2013_rtm_dens_vct),
    //         '2014 RTM Density': loadDataIntoGroup(fw_2014_all_vct),
    //         '2014 Risk Clusters Data': loadDataIntoGroup(fw_2014_risk_clusters),
    //     },
    //     'DFW Supplemental Data': {
    //         'FW Elementary School 6111': loadDataIntoGroup(fw_elem_school_6111),
    //         'FW Fire Dept 92216': loadDataIntoGroup(fw_fire_92216),
    //         'FW Health & Social Services 62': loadDataIntoGroup(fw_health_soc_srv_62),
    //         'FW Pharmacies 44611': loadDataIntoGroup(fw_pharm_44611),
    //         'FW Police 92212': loadDataIntoGroup(fw_police_92212),
    //         'FW Relevant Civic Organizations 813': loadDataIntoGroup(fw_rel_civic_org_813)
    //     },
    //     'ATX Data': {
    //         'AST Rel Civic Org 813' : loadDataIntoGroup(AST_813),
    //     },
    //     'Other Data': {
    //         'Texas': loadDataIntoGroup(texasData),
    //         'United States': loadDataIntoGroup(unitedStatesData)
    //     }
    // }
    //
    // console.log(groupedOverlays);

    // map.addLayer(fw_2014_risk_clusters);     // undefined.
    // map.addLayer(dataLayersQueue[0]);        // undefined.

    // Add legend.
    // var Legend =  new L.Control.Legend({
    //     position: 'topleft',
    //     collapsed: true,
    //     controlButton: {
    //         title: "Legend"
    //     }
    // });
    // map.addControl( Legend )
    // $(".legend-container").append( $("#legend") );
    // $(".legend-toggle").append( "<i class='legend-toggle-icon fa fa-info fa-2x' style='color: #000'></i>" );

    // console.log('map created.');
}

createMap('map');
