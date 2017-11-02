// Maptile Providers Module.
var Maptiles = (function() {
    // console.log('maptile-providers.js module called.')
    // requires L from 'leaflet'.

    var providers = []
    var layers = {}

    // Provider: Stamen.
    // No key required.

    var tonerUrl = 'http://{S}tile.stamen.com/toner/{Z}/{X}/{Y}.png';
    var tonerUrl_clean = tonerUrl.replace(/({[A-Z]})/g, s => s.toLowerCase());
    var basemap_toner = L.tileLayer(tonerUrl_clean,
        {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
            minZoom: 0,
            maxZoom: 20,
            name: 'Stamen Toner',
            subdomains: ['', 'a.', 'b.', 'c.', 'd.'],
            type: 'png'
        });

    var tonerLiteUrl = 'http://{S}tile.stamen.com/toner-lite/{Z}/{X}/{Y}.png';
    var tonerLiteUrl_clean = tonerLiteUrl.replace(/({[A-Z]})/g, s => s.toLowerCase());
    var basemap_tonerLite = L.tileLayer(tonerLiteUrl_clean,
        {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
            minZoom: 0,
            maxZoom: 20,
            name: 'Stamen Toner Lite',
            subdomains: ['', 'a.', 'b.', 'c.', 'd.'],
            type: 'png'
        });

    var terrainUrl = 'http://{S}tile.stamen.com/terrain/{Z}/{X}/{Y}.png';
    var terrainUrl_clean = terrainUrl.replace(/({[A-Z]})/g, s => s.toLowerCase());
    var basemap_terrain = L.tileLayer(terrainUrl_clean,
        {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
            minZoom: 0,
            maxZoom: 20,
            name: 'Stamen Terrain',
            subdomains: ['', 'a.', 'b.', 'c.', 'd.'],
            type: 'png'
        });

    var watercolorUrl = 'http://{S}tile.stamen.com/watercolor/{Z}/{X}/{Y}.png';
    var watercolorUrl_clean = watercolorUrl.replace(/({[A-Z]})/g, s => s.toLowerCase());
    var basemap_watercolor = L.tileLayer(watercolorUrl_clean,
        {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>',
            minZoom: 0,
            maxZoom: 20,
            name: 'Stamen Watercolor',
            subdomains: ['', 'a.', 'b.', 'c.', 'd.'],
            type: 'png'
        });

    // Provider: Open Street Maps
    // No key required.

    var osm_defaultUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osm_defaultUrl_clean = osm_defaultUrl.replace(/({[A-Z]})/g, s => s.toLowerCase());
    var basemap_osm_default = L.tileLayer(osm_defaultUrl_clean,
        {
            attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            minZoom: 0,
            maxZoom: 17,
            name: 'OSM - Default',
            type: 'png'
        });

    var osm_topoUrl = 'http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
    var osm_topoUrl_clean = osm_topoUrl.replace(/({[A-Z]})/g, s => s.toLowerCase());
    var basemap_osm_topo = L.tileLayer(osm_topoUrl_clean,
        {
            attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
            minZoom: 0,
            maxZoom: 17,
            name: 'OSM - OpenTopo',
            type: 'png'
        });

    var osm_mapnikUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osm_mapnikUrl_clean = osm_mapnikUrl.replace(/({[A-Z]})/g, s => s.toLowerCase());
    var basemap_osm_mapnik = L.tileLayer(osm_mapnikUrl_clean,
        {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            minZoom: 0,
            maxZoom: 19,
            name: 'OSM - Mapnik',
            type: 'png'
        });

    var osm_bwUrl = 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png';
    var osm_bwUrl_clean = osm_bwUrl.replace(/({[A-Z]})/g, s => s.toLowerCase());
    var basemap_osm_bw = L.tileLayer(osm_bwUrl_clean,
        {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            minZoom: 0,
            maxZoom: 18,
            name: 'OSM - Mapnik B&W',
            type: 'png'
        });

    // Provider: Thunder Forrest
    var tf_api_key = 'XYZXYZXYZ'

    var tf_transportUrl = 'http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey={apikey}';
    var tf_transportUrl_clean = tf_transportUrl.replace(/({[A-Z]})/g, s => s.toLowerCase());
    var basemap_tf_transport = L.tileLayer(tf_transportUrl_clean,
        {
            apikey: tf_api_key,
            attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            minZoom: 0,
            maxZoom: 19,
            name: 'TF - Transport',
            type: 'png'
        });

    var tf_transportDarkUrl = 'http://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey={apikey}';
    var tf_transportDarkUrl_clean = tf_transportDarkUrl.replace(/({[A-Z]})/g, s => s.toLowerCase());
    var basemap_tf_transport_dark = L.tileLayer(tf_transportUrl_clean,
        {
            apikey: tf_api_key,
            attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            minZoom: 0,
            maxZoom: 19,
            name: 'TF - Transport Dark',
            type: 'png'
        });

    // Provider: Mapbox
    var mapbox_api_key = 'XYZXYZXYZ'
    var mapbox_project_id = 'XYZXYZXYZ'

    var mapbox_Url = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
    var mapbox_Url_clean = mapbox_Url.replace(/({[A-Z]})/g, s => s.toLowerCase());
    var basemap_mapbox = L.tileLayer(mapbox_Url_clean,
        {
            accessToken: mapbox_api_key,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: mapbox_project_id,
            minZoom: 0,
            maxZoom: 18,
            name: 'Mapbox',
            type: 'png'
        });


    providers.push(basemap_osm_default)
    providers.push(basemap_osm_topo)
    providers.push(basemap_osm_mapnik);
    providers.push(basemap_osm_bw);
    providers.push(basemap_toner);
    providers.push(basemap_tonerLite);
    providers.push(basemap_terrain);
    providers.push(basemap_watercolor);
    // providers.push(basemap_tf_transport);
    // providers.push(basemap_tf_transport_dark);
    // providers.push(basemap_mapbox);

    // for (var p in providers) {
    //     // console.log(providers[p])
    //     // console.log(providers[p].options.name)
    //     var layer = providers[p]
    //     var layerName = providers[p].options.name
    //     layers[ layerName ] = layer
    // }

    // providers.keys(p).forEach(function (k) {
    //   console.log(k, p[k]);
    // });

    for (var k in providers) {
        if (providers.hasOwnProperty(k)) {
            // console.log(k, providers[k]);
            var layer = providers[k]
            var layerName = providers[k].options.name
            layers[ layerName ] = layer
        }
    }

    return {
        providers: providers,
        layers: layers
    };
})();
