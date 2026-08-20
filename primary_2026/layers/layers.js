var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_BrowardAlexAngie_1 = new ol.format.GeoJSON();
var features_BrowardAlexAngie_1 = format_BrowardAlexAngie_1.readFeatures(json_BrowardAlexAngie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BrowardAlexAngie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BrowardAlexAngie_1.addFeatures(features_BrowardAlexAngie_1);
var lyr_BrowardAlexAngie_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BrowardAlexAngie_1, 
                style: style_BrowardAlexAngie_1,
                popuplayertitle: 'Broward Alex/Angie',
                interactive: true,
    title: 'Broward Alex/Angie<br />\
    <img src="styles/legend/BrowardAlexAngie_1_0.png" /> Alex Vindman<br />\
    <img src="styles/legend/BrowardAlexAngie_1_1.png" /> Angie Nixon<br />' });
var format_BrowardOliverJared_2 = new ol.format.GeoJSON();
var features_BrowardOliverJared_2 = format_BrowardOliverJared_2.readFeatures(json_BrowardOliverJared_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BrowardOliverJared_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BrowardOliverJared_2.addFeatures(features_BrowardOliverJared_2);
var lyr_BrowardOliverJared_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BrowardOliverJared_2, 
                style: style_BrowardOliverJared_2,
                popuplayertitle: 'Broward Oliver/Jared',
                interactive: true,
    title: 'Broward Oliver/Jared<br />\
    <img src="styles/legend/BrowardOliverJared_2_0.png" /> Jared Moskowitz<br />\
    <img src="styles/legend/BrowardOliverJared_2_1.png" /> Oliver Adams Larkin<br />' });
var format_MiamiDadeAlexAngie_3 = new ol.format.GeoJSON();
var features_MiamiDadeAlexAngie_3 = format_MiamiDadeAlexAngie_3.readFeatures(json_MiamiDadeAlexAngie_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiamiDadeAlexAngie_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiamiDadeAlexAngie_3.addFeatures(features_MiamiDadeAlexAngie_3);
var lyr_MiamiDadeAlexAngie_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiamiDadeAlexAngie_3, 
                style: style_MiamiDadeAlexAngie_3,
                popuplayertitle: 'Miami Dade Alex/Angie',
                interactive: true,
    title: 'Miami Dade Alex/Angie<br />\
    <img src="styles/legend/MiamiDadeAlexAngie_3_0.png" /> Alex Vindman<br />\
    <img src="styles/legend/MiamiDadeAlexAngie_3_1.png" /> Angie Nixon<br />' });
var format_MiamiDadeOliverJared_4 = new ol.format.GeoJSON();
var features_MiamiDadeOliverJared_4 = format_MiamiDadeOliverJared_4.readFeatures(json_MiamiDadeOliverJared_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiamiDadeOliverJared_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiamiDadeOliverJared_4.addFeatures(features_MiamiDadeOliverJared_4);
var lyr_MiamiDadeOliverJared_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiamiDadeOliverJared_4, 
                style: style_MiamiDadeOliverJared_4,
                popuplayertitle: 'Miami Dade Oliver/Jared',
                interactive: true,
    title: 'Miami Dade Oliver/Jared<br />\
    <img src="styles/legend/MiamiDadeOliverJared_4_0.png" /> Jared Moskowitz<br />\
    <img src="styles/legend/MiamiDadeOliverJared_4_1.png" /> Oliver Adams Larkin<br />' });

lyr_Positron_0.setVisible(true);lyr_BrowardAlexAngie_1.setVisible(true);lyr_BrowardOliverJared_2.setVisible(true);lyr_MiamiDadeAlexAngie_3.setVisible(true);lyr_MiamiDadeOliverJared_4.setVisible(true);
var layersList = [lyr_Positron_0,lyr_BrowardAlexAngie_1,lyr_BrowardOliverJared_2,lyr_MiamiDadeAlexAngie_3,lyr_MiamiDadeOliverJared_4];
lyr_BrowardAlexAngie_1.set('fieldAliases', {'PRECINCT': 'Precinct', 'COORDINATO': 'COORDINATO', 'OLD_PRECIN': 'OLD_PRECIN', 'CHANGED': 'CHANGED', 'Angie Nixon-Alex Vindman-results-Broward_Angie Nixon': 'Nixon', 'Angie Nixon-Alex Vindman-results-Broward_Alex Vindman': 'Vindman', 'Angie Nixon-Alex Vindman-results-Broward_Winner': 'Winner', 'Angie Nixon-Alex Vindman-results-Broward_Angie Nixon %': 'Nixon %', 'Angie Nixon-Alex Vindman-results-Broward_Alex Vindman %': 'Vindman %', });
lyr_BrowardOliverJared_2.set('fieldAliases', {'PRECINCT': 'Precinct', 'COORDINATO': 'COORDINATO', 'OLD_PRECIN': 'OLD_PRECIN', 'CHANGED': 'CHANGED', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Oliver Adams Larkin': 'Larkin', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Jared Moskowitz': 'Moskowitz', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Winner': 'Winner', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Oliver Adams Larkin %': 'Larkin %', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Jared Moskowitz %': 'Moskowitz %', });
lyr_MiamiDadeAlexAngie_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'Precinct', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Alex Vindman': 'Vindman', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Angie Nixon': 'Nixon', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Winner': 'Winner', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Alex Vindman %': 'Vindman %', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Angie Nixon %': 'Nixon %', });
lyr_MiamiDadeOliverJared_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'Precinct', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Jared Moskowitz': 'Moskowitz', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Oliver Adams Larkin': 'Larkin', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Winner': 'Winner', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Jared Moskowitz %': 'Moskowitz %', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Oliver Adams Larkin %': 'Larkin %', });
lyr_BrowardAlexAngie_1.set('fieldImages', {'PRECINCT': 'TextEdit', 'COORDINATO': 'Hidden', 'OLD_PRECIN': 'Hidden', 'CHANGED': 'Hidden', 'Angie Nixon-Alex Vindman-results-Broward_Angie Nixon': 'TextEdit', 'Angie Nixon-Alex Vindman-results-Broward_Alex Vindman': 'TextEdit', 'Angie Nixon-Alex Vindman-results-Broward_Winner': 'TextEdit', 'Angie Nixon-Alex Vindman-results-Broward_Angie Nixon %': 'TextEdit', 'Angie Nixon-Alex Vindman-results-Broward_Alex Vindman %': 'TextEdit', });
lyr_BrowardOliverJared_2.set('fieldImages', {'PRECINCT': 'TextEdit', 'COORDINATO': 'Hidden', 'OLD_PRECIN': 'Hidden', 'CHANGED': 'Hidden', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Oliver Adams Larkin': 'TextEdit', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Jared Moskowitz': 'TextEdit', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Winner': 'TextEdit', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Oliver Adams Larkin %': 'TextEdit', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Jared Moskowitz %': 'TextEdit', });
lyr_MiamiDadeAlexAngie_3.set('fieldImages', {'OBJECTID': 'Hidden', 'ID': 'Range', 'GlobalID': 'Hidden', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Alex Vindman': 'Range', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Angie Nixon': 'Range', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Winner': 'TextEdit', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Alex Vindman %': 'TextEdit', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Angie Nixon %': 'TextEdit', });
lyr_MiamiDadeOliverJared_4.set('fieldImages', {'OBJECTID': 'Hidden', 'ID': 'Range', 'GlobalID': 'Hidden', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Jared Moskowitz': 'Range', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Oliver Adams Larkin': 'Range', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Winner': 'TextEdit', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Jared Moskowitz %': 'TextEdit', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Oliver Adams Larkin %': 'TextEdit', });
lyr_BrowardAlexAngie_1.set('fieldLabels', {'PRECINCT': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Broward_Angie Nixon': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Broward_Alex Vindman': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Broward_Winner': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Broward_Angie Nixon %': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Broward_Alex Vindman %': 'inline label - visible with data', });
lyr_BrowardOliverJared_2.set('fieldLabels', {'PRECINCT': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Oliver Adams Larkin': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Jared Moskowitz': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Winner': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Oliver Adams Larkin %': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Jared Moskowitz %': 'inline label - visible with data', });
lyr_MiamiDadeAlexAngie_3.set('fieldLabels', {'ID': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Alex Vindman': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Angie Nixon': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Winner': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Alex Vindman %': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Angie Nixon %': 'inline label - visible with data', });
lyr_MiamiDadeOliverJared_4.set('fieldLabels', {'ID': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Jared Moskowitz': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Oliver Adams Larkin': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Winner': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Jared Moskowitz %': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Oliver Adams Larkin %': 'inline label - visible with data', });
lyr_MiamiDadeOliverJared_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});