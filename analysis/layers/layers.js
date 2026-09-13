ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-9049532.522614, 2883689.625308, -8748653.952500, 3019279.218337]);
var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_TurnoutMiamiDade_1 = new ol.format.GeoJSON();
var features_TurnoutMiamiDade_1 = format_TurnoutMiamiDade_1.readFeatures(json_TurnoutMiamiDade_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TurnoutMiamiDade_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TurnoutMiamiDade_1.addFeatures(features_TurnoutMiamiDade_1);
var lyr_TurnoutMiamiDade_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TurnoutMiamiDade_1, 
                style: style_TurnoutMiamiDade_1,
                popuplayertitle: 'Turnout Miami Dade',
                interactive: true,
    title: 'Turnout Miami Dade<br />\
    <img src="styles/legend/TurnoutMiamiDade_1_0.png" /> 0 - 0.17<br />\
    <img src="styles/legend/TurnoutMiamiDade_1_1.png" /> 0.17 - 0.33<br />\
    <img src="styles/legend/TurnoutMiamiDade_1_2.png" /> 0.33 - 0.5<br />\
    <img src="styles/legend/TurnoutMiamiDade_1_3.png" /> 0.5 - 0.67<br />\
    <img src="styles/legend/TurnoutMiamiDade_1_4.png" /> 0.67 - 0.83<br />\
    <img src="styles/legend/TurnoutMiamiDade_1_5.png" /> 0.83 - 1<br />' });
var format_StateRepDist109BushIII_2 = new ol.format.GeoJSON();
var features_StateRepDist109BushIII_2 = format_StateRepDist109BushIII_2.readFeatures(json_StateRepDist109BushIII_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateRepDist109BushIII_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateRepDist109BushIII_2.addFeatures(features_StateRepDist109BushIII_2);
var lyr_StateRepDist109BushIII_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateRepDist109BushIII_2, 
                style: style_StateRepDist109BushIII_2,
                popuplayertitle: 'State Rep Dist 109 - Bush III %',
                interactive: true,
    title: 'State Rep Dist 109 - Bush III %<br />\
    <img src="styles/legend/StateRepDist109BushIII_2_0.png" /> 0 - 0.17<br />\
    <img src="styles/legend/StateRepDist109BushIII_2_1.png" /> 0.17 - 0.33<br />\
    <img src="styles/legend/StateRepDist109BushIII_2_2.png" /> 0.33 - 0.5<br />\
    <img src="styles/legend/StateRepDist109BushIII_2_3.png" /> 0.5 - 0.67<br />\
    <img src="styles/legend/StateRepDist109BushIII_2_4.png" /> 0.67 - 0.83<br />\
    <img src="styles/legend/StateRepDist109BushIII_2_5.png" /> 0.83 - 0.1<br />' });
var format_StateRepDist108Escarment_3 = new ol.format.GeoJSON();
var features_StateRepDist108Escarment_3 = format_StateRepDist108Escarment_3.readFeatures(json_StateRepDist108Escarment_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateRepDist108Escarment_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateRepDist108Escarment_3.addFeatures(features_StateRepDist108Escarment_3);
var lyr_StateRepDist108Escarment_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateRepDist108Escarment_3, 
                style: style_StateRepDist108Escarment_3,
                popuplayertitle: 'State Rep Dist 108 - Escarment %',
                interactive: true,
    title: 'State Rep Dist 108 - Escarment %<br />\
    <img src="styles/legend/StateRepDist108Escarment_3_0.png" /> 0 - 0.17<br />\
    <img src="styles/legend/StateRepDist108Escarment_3_1.png" /> 0.17 - 0.33<br />\
    <img src="styles/legend/StateRepDist108Escarment_3_2.png" /> 0.33 - 0.5<br />\
    <img src="styles/legend/StateRepDist108Escarment_3_3.png" /> 0.5 - 0.67<br />\
    <img src="styles/legend/StateRepDist108Escarment_3_4.png" /> 0.67 - 0.87<br />\
    <img src="styles/legend/StateRepDist108Escarment_3_5.png" /> 0.87 - 1<br />' });
var format_CountyCommissionerDistrict5PiperOverperformance_4 = new ol.format.GeoJSON();
var features_CountyCommissionerDistrict5PiperOverperformance_4 = format_CountyCommissionerDistrict5PiperOverperformance_4.readFeatures(json_CountyCommissionerDistrict5PiperOverperformance_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountyCommissionerDistrict5PiperOverperformance_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyCommissionerDistrict5PiperOverperformance_4.addFeatures(features_CountyCommissionerDistrict5PiperOverperformance_4);
var lyr_CountyCommissionerDistrict5PiperOverperformance_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountyCommissionerDistrict5PiperOverperformance_4, 
                style: style_CountyCommissionerDistrict5PiperOverperformance_4,
                popuplayertitle: 'County Commissioner District 5 -Piper Overperformance ',
                interactive: true,
    title: 'County Commissioner District 5 -Piper Overperformance <br />\
    <img src="styles/legend/CountyCommissionerDistrict5PiperOverperformance_4_0.png" /> 0.088 - 0.157<br />\
    <img src="styles/legend/CountyCommissionerDistrict5PiperOverperformance_4_1.png" /> 0.157 - 0.226<br />\
    <img src="styles/legend/CountyCommissionerDistrict5PiperOverperformance_4_2.png" /> 0.226 - 0.295<br />\
    <img src="styles/legend/CountyCommissionerDistrict5PiperOverperformance_4_3.png" /> 0.295 - 0.364<br />\
    <img src="styles/legend/CountyCommissionerDistrict5PiperOverperformance_4_4.png" /> 0.364 - 0.434<br />\
    <img src="styles/legend/CountyCommissionerDistrict5PiperOverperformance_4_5.png" /> 0.434 - 0.56<br />' });
var format_2026SenatePrimaryMiamiDadeNixon_5 = new ol.format.GeoJSON();
var features_2026SenatePrimaryMiamiDadeNixon_5 = format_2026SenatePrimaryMiamiDadeNixon_5.readFeatures(json_2026SenatePrimaryMiamiDadeNixon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2026SenatePrimaryMiamiDadeNixon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2026SenatePrimaryMiamiDadeNixon_5.addFeatures(features_2026SenatePrimaryMiamiDadeNixon_5);
var lyr_2026SenatePrimaryMiamiDadeNixon_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2026SenatePrimaryMiamiDadeNixon_5, 
                style: style_2026SenatePrimaryMiamiDadeNixon_5,
                popuplayertitle: '2026 Senate Primary Miami Dade - Nixon %',
                interactive: true,
    title: '2026 Senate Primary Miami Dade - Nixon %<br />\
    <img src="styles/legend/2026SenatePrimaryMiamiDadeNixon_5_0.png" /> 0 - 0.17<br />\
    <img src="styles/legend/2026SenatePrimaryMiamiDadeNixon_5_1.png" /> 0.17 - 0.33<br />\
    <img src="styles/legend/2026SenatePrimaryMiamiDadeNixon_5_2.png" /> 0.33 - 0.5<br />\
    <img src="styles/legend/2026SenatePrimaryMiamiDadeNixon_5_3.png" /> 0.5 - 0.67<br />\
    <img src="styles/legend/2026SenatePrimaryMiamiDadeNixon_5_4.png" /> 0.67 - 0.83<br />\
    <img src="styles/legend/2026SenatePrimaryMiamiDadeNixon_5_5.png" /> 0.83 - 1<br />' });
var format_2024PresidentMiamiDadeHarris_6 = new ol.format.GeoJSON();
var features_2024PresidentMiamiDadeHarris_6 = format_2024PresidentMiamiDadeHarris_6.readFeatures(json_2024PresidentMiamiDadeHarris_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024PresidentMiamiDadeHarris_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024PresidentMiamiDadeHarris_6.addFeatures(features_2024PresidentMiamiDadeHarris_6);
var lyr_2024PresidentMiamiDadeHarris_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024PresidentMiamiDadeHarris_6, 
                style: style_2024PresidentMiamiDadeHarris_6,
                popuplayertitle: '2024 President Miami Dade - Harris %',
                interactive: true,
    title: '2024 President Miami Dade - Harris %<br />\
    <img src="styles/legend/2024PresidentMiamiDadeHarris_6_0.png" /> 0 - 0.17<br />\
    <img src="styles/legend/2024PresidentMiamiDadeHarris_6_1.png" /> 0.17 - 0.33<br />\
    <img src="styles/legend/2024PresidentMiamiDadeHarris_6_2.png" /> 0.33 - 0.5<br />\
    <img src="styles/legend/2024PresidentMiamiDadeHarris_6_3.png" /> 0.5 - 0.67<br />\
    <img src="styles/legend/2024PresidentMiamiDadeHarris_6_4.png" /> 0.67 - 0.83<br />\
    <img src="styles/legend/2024PresidentMiamiDadeHarris_6_5.png" /> 0.83 - 1<br />' });
var format_FLStateSenateDistricts2022_7 = new ol.format.GeoJSON();
var features_FLStateSenateDistricts2022_7 = format_FLStateSenateDistricts2022_7.readFeatures(json_FLStateSenateDistricts2022_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FLStateSenateDistricts2022_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FLStateSenateDistricts2022_7.addFeatures(features_FLStateSenateDistricts2022_7);
var lyr_FLStateSenateDistricts2022_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FLStateSenateDistricts2022_7, 
                style: style_FLStateSenateDistricts2022_7,
                popuplayertitle: 'FL State Senate Districts 2022',
                interactive: true,
                title: '<img src="styles/legend/FLStateSenateDistricts2022_7.png" /> FL State Senate Districts 2022'
            });
var format_FLStateHouseDistricts2022_8 = new ol.format.GeoJSON();
var features_FLStateHouseDistricts2022_8 = format_FLStateHouseDistricts2022_8.readFeatures(json_FLStateHouseDistricts2022_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FLStateHouseDistricts2022_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FLStateHouseDistricts2022_8.addFeatures(features_FLStateHouseDistricts2022_8);
var lyr_FLStateHouseDistricts2022_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FLStateHouseDistricts2022_8, 
                style: style_FLStateHouseDistricts2022_8,
                popuplayertitle: 'FL State House Districts 2022',
                interactive: true,
                title: '<img src="styles/legend/FLStateHouseDistricts2022_8.png" /> FL State House Districts 2022'
            });
var format_FLCongressionalDistricts2026_9 = new ol.format.GeoJSON();
var features_FLCongressionalDistricts2026_9 = format_FLCongressionalDistricts2026_9.readFeatures(json_FLCongressionalDistricts2026_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FLCongressionalDistricts2026_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FLCongressionalDistricts2026_9.addFeatures(features_FLCongressionalDistricts2026_9);
var lyr_FLCongressionalDistricts2026_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FLCongressionalDistricts2026_9, 
                style: style_FLCongressionalDistricts2026_9,
                popuplayertitle: 'FL Congressional Districts 2026',
                interactive: true,
                title: '<img src="styles/legend/FLCongressionalDistricts2026_9.png" /> FL Congressional Districts 2026'
            });
var format_MiamiDadeCountyCommissionDistricts_10 = new ol.format.GeoJSON();
var features_MiamiDadeCountyCommissionDistricts_10 = format_MiamiDadeCountyCommissionDistricts_10.readFeatures(json_MiamiDadeCountyCommissionDistricts_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiamiDadeCountyCommissionDistricts_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiamiDadeCountyCommissionDistricts_10.addFeatures(features_MiamiDadeCountyCommissionDistricts_10);
var lyr_MiamiDadeCountyCommissionDistricts_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiamiDadeCountyCommissionDistricts_10, 
                style: style_MiamiDadeCountyCommissionDistricts_10,
                popuplayertitle: 'Miami Dade County Commission Districts',
                interactive: true,
                title: '<img src="styles/legend/MiamiDadeCountyCommissionDistricts_10.png" /> Miami Dade County Commission Districts'
            });
var format_MunicipalitiesMiamiDade2026_11 = new ol.format.GeoJSON();
var features_MunicipalitiesMiamiDade2026_11 = format_MunicipalitiesMiamiDade2026_11.readFeatures(json_MunicipalitiesMiamiDade2026_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipalitiesMiamiDade2026_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalitiesMiamiDade2026_11.addFeatures(features_MunicipalitiesMiamiDade2026_11);
var lyr_MunicipalitiesMiamiDade2026_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalitiesMiamiDade2026_11, 
                style: style_MunicipalitiesMiamiDade2026_11,
                popuplayertitle: 'Municipalities Miami Dade 2026',
                interactive: true,
                title: '<img src="styles/legend/MunicipalitiesMiamiDade2026_11.png" /> Municipalities Miami Dade 2026'
            });
var format_MiamiCityCommissionDistricts2026_12 = new ol.format.GeoJSON();
var features_MiamiCityCommissionDistricts2026_12 = format_MiamiCityCommissionDistricts2026_12.readFeatures(json_MiamiCityCommissionDistricts2026_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiamiCityCommissionDistricts2026_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiamiCityCommissionDistricts2026_12.addFeatures(features_MiamiCityCommissionDistricts2026_12);
var lyr_MiamiCityCommissionDistricts2026_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiamiCityCommissionDistricts2026_12, 
                style: style_MiamiCityCommissionDistricts2026_12,
                popuplayertitle: 'Miami City Commission Districts 2026',
                interactive: true,
                title: '<img src="styles/legend/MiamiCityCommissionDistricts2026_12.png" /> Miami City Commission Districts 2026'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_TurnoutMiamiDade_1.setVisible(false);lyr_StateRepDist109BushIII_2.setVisible(false);lyr_StateRepDist108Escarment_3.setVisible(false);lyr_CountyCommissionerDistrict5PiperOverperformance_4.setVisible(false);lyr_2026SenatePrimaryMiamiDadeNixon_5.setVisible(false);lyr_2024PresidentMiamiDadeHarris_6.setVisible(false);lyr_FLStateSenateDistricts2022_7.setVisible(false);lyr_FLStateHouseDistricts2022_8.setVisible(false);lyr_FLCongressionalDistricts2026_9.setVisible(false);lyr_MiamiDadeCountyCommissionDistricts_10.setVisible(false);lyr_MunicipalitiesMiamiDade2026_11.setVisible(false);lyr_MiamiCityCommissionDistricts2026_12.setVisible(false);
var layersList = [lyr_ESRIGraylight_0,lyr_TurnoutMiamiDade_1,lyr_StateRepDist109BushIII_2,lyr_StateRepDist108Escarment_3,lyr_CountyCommissionerDistrict5PiperOverperformance_4,lyr_2026SenatePrimaryMiamiDadeNixon_5,lyr_2024PresidentMiamiDadeHarris_6,lyr_FLStateSenateDistricts2022_7,lyr_FLStateHouseDistricts2022_8,lyr_FLCongressionalDistricts2026_9,lyr_MiamiDadeCountyCommissionDistricts_10,lyr_MunicipalitiesMiamiDade2026_11,lyr_MiamiCityCommissionDistricts2026_12];
lyr_TurnoutMiamiDade_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'Precinct', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Dem Turnout': 'Dem Turnout', 'Rep Turnout': 'Rep Turnout', '% Dem': '% Dem', '% Rep': '% Rep', });
lyr_StateRepDist109BushIII_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'Precinct', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Dem State Representative Dist 109-results-Miami-Dade_Broadway Harewood': 'Harewood', 'Dem State Representative Dist 109-results-Miami-Dade_James Bush III': 'Bush III', 'Dem State Representative Dist 109-results-Miami-Dade_John H. Taylor Jr.': 'Taylor Jr', 'Dem State Representative Dist 109-results-Miami-Dade_Satin Fye': 'Fye', 'Dem State Representative Dist 109-results-Miami-Dade_Winner': 'Winner', 'Dem State Representative Dist 109-results-Miami-Dade_Broadway Harewood %': 'Harewood %', 'Dem State Representative Dist 109-results-Miami-Dade_James Bush III %': 'Bush III %', 'Dem State Representative Dist 109-results-Miami-Dade_John H. Taylor Jr. %': 'Taylor Jr %', 'Dem State Representative Dist 109-results-Miami-Dade_Satin Fye %': 'Fye %', });
lyr_StateRepDist108Escarment_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'Precinct', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Dem State Representative Dist 108-results-Miami-Dade_Daphne Campbell': 'Campbell', 'Dem State Representative Dist 108-results-Miami-Dade_Dinah J. Escarment': 'Escarment', 'Dem State Representative Dist 108-results-Miami-Dade_Peter Walsh': 'Walsh', 'Dem State Representative Dist 108-results-Miami-Dade_Winner': 'Winner', 'Dem State Representative Dist 108-results-Miami-Dade_Daphne Campbell %': 'Campbell %', 'Dem State Representative Dist 108-results-Miami-Dade_Dinah J. Escarment %': 'Escarment %', 'Dem State Representative Dist 108-results-Miami-Dade_Peter Walsh %': 'Walsh %', });
lyr_CountyCommissionerDistrict5PiperOverperformance_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'County Commissioner District 5-results-Miami-Dade_Joe Sanchez': 'County Commissioner District 5-results-Miami-Dade_Joe Sanchez', 'County Commissioner District 5-results-Miami-Dade_Rob Piper': 'County Commissioner District 5-results-Miami-Dade_Rob Piper', 'County Commissioner District 5-results-Miami-Dade_Vicki L. Lopez': 'County Commissioner District 5-results-Miami-Dade_Vicki L. Lopez', 'County Commissioner District 5-results-Miami-Dade_Winner': 'County Commissioner District 5-results-Miami-Dade_Winner', 'County Commissioner District 5-results-Miami-Dade_Joe Sanchez %': 'County Commissioner District 5-results-Miami-Dade_Joe Sanchez %', 'County Commissioner District 5-results-Miami-Dade_Rob Piper %': 'County Commissioner District 5-results-Miami-Dade_Rob Piper %', 'County Commissioner District 5-results-Miami-Dade_Vicki L. Lopez %': 'County Commissioner District 5-results-Miami-Dade_Vicki L. Lopez %', });
lyr_2026SenatePrimaryMiamiDadeNixon_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'Precinct', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'DEM United States Senator-results-Miami-Dade_Alex Vindman': 'Vindman', 'DEM United States Senator-results-Miami-Dade_Angie Nixon': 'Nixon', 'DEM United States Senator-results-Miami-Dade_Winner': 'Winner', 'DEM United States Senator-results-Miami-Dade_Alex Vindman %': 'Vindman %', 'DEM United States Senator-results-Miami-Dade_Angie Nixon %': 'Nixon %', });
lyr_2024PresidentMiamiDadeHarris_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'Precinct', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'President and Vice President-results-Miami-Dade_Chase Oliver': 'President and Vice President-results-Miami-Dade_Chase Oliver', 'President and Vice President-results-Miami-Dade_Claudia De la Cruz': 'President and Vice President-results-Miami-Dade_Claudia De la Cruz', 'President and Vice President-results-Miami-Dade_Donald J. Trump': 'Trump', 'President and Vice President-results-Miami-Dade_Jill Stein': 'President and Vice President-results-Miami-Dade_Jill Stein', 'President and Vice President-results-Miami-Dade_Kamala D. Harris': 'Harris', 'President and Vice President-results-Miami-Dade_Peter Sonski': 'President and Vice President-results-Miami-Dade_Peter Sonski', 'President and Vice President-results-Miami-Dade_Randall Terry': 'President and Vice President-results-Miami-Dade_Randall Terry', 'President and Vice President-results-Miami-Dade_Winner': 'Winner', 'President and Vice President-results-Miami-Dade_Chase Oliver %': 'President and Vice President-results-Miami-Dade_Chase Oliver %', 'President and Vice President-results-Miami-Dade_Claudia De la Cruz %': 'President and Vice President-results-Miami-Dade_Claudia De la Cruz %', 'President and Vice President-results-Miami-Dade_Donald J. Trump %': 'Trump %', 'President and Vice President-results-Miami-Dade_Jill Stein %': 'President and Vice President-results-Miami-Dade_Jill Stein %', 'President and Vice President-results-Miami-Dade_Kamala D. Harris %': 'Harris %', 'President and Vice President-results-Miami-Dade_Peter Sonski %': 'President and Vice President-results-Miami-Dade_Peter Sonski %', 'President and Vice President-results-Miami-Dade_Randall Terry %': 'President and Vice President-results-Miami-Dade_Randall Terry %', });
lyr_FLStateSenateDistricts2022_7.set('fieldAliases', {'LONGNAME': 'LONGNAME', 'SHORTNAME': 'SHORTNAME', 'DISTRICT': 'DISTRICT', 'COLOR': 'COLOR', 'TOTAL': 'TOTAL', 'TARGET_DEV': 'TARGET_DEV', 'TARGET_DEV_1': 'TARGET_DEV_1', 'SRWVAP': 'SRWVAP', 'SRWVAP_P': 'SRWVAP_P', 'NHBVAP': 'NHBVAP', 'NHBVAP_P': 'NHBVAP_P', 'HBVAP': 'HBVAP', 'HBVAP_P': 'HBVAP_P', 'HXBVAP': 'HXBVAP', 'HXBVAP_P': 'HXBVAP_P', 'OTHVAP': 'OTHVAP', 'OTHVAP_P': 'OTHVAP_P', 'BVAP': 'BVAP', 'BVAP_P': 'BVAP_P', 'HVAP': 'HVAP', 'HVAP_P': 'HVAP_P', });
lyr_FLStateHouseDistricts2022_8.set('fieldAliases', {'LONGNAME': 'LONGNAME', 'SHORTNAME': 'SHORTNAME', 'DISTRICT': 'DISTRICT', 'COLOR': 'COLOR', 'TOTAL': 'TOTAL', 'TARGET_DEV': 'TARGET_DEV', 'TARGET_DEV_1': 'TARGET_DEV_1', 'SRWVAP': 'SRWVAP', 'SRWVAP_P': 'SRWVAP_P', 'NHBVAP': 'NHBVAP', 'NHBVAP_P': 'NHBVAP_P', 'HBVAP': 'HBVAP', 'HBVAP_P': 'HBVAP_P', 'HXBVAP': 'HXBVAP', 'HXBVAP_P': 'HXBVAP_P', 'OTHVAP': 'OTHVAP', 'OTHVAP_P': 'OTHVAP_P', 'BVAP': 'BVAP', 'BVAP_P': 'BVAP_P', 'HVAP': 'HVAP', 'HVAP_P': 'HVAP_P', });
lyr_FLCongressionalDistricts2026_9.set('fieldAliases', {'LONGNAME': 'LONGNAME', 'SHORTNAME': 'SHORTNAME', 'DISTRICT': 'DISTRICT', 'COLOR': 'COLOR', 'TOTAL': 'TOTAL', 'TARGET_DEV': 'TARGET_DEV', });
lyr_MiamiDadeCountyCommissionDistricts_10.set('fieldAliases', {'ID': 'ID', 'COMMNAME': 'COMMNAME', 'GlobalID': 'GlobalID', });
lyr_MunicipalitiesMiamiDade2026_11.set('fieldAliases', {'MUNICUID': 'MUNICUID', 'MUNICID': 'MUNICID', 'NAME': 'NAME', 'FIPSCODE': 'FIPSCODE', 'CREATEDBY': 'CREATEDBY', 'CREATEDDAT': 'CREATEDDAT', 'MODIFIEDBY': 'MODIFIEDBY', 'MODIFIEDDA': 'MODIFIEDDA', 'GlobalID': 'GlobalID', });
lyr_MiamiCityCommissionDistricts2026_12.set('fieldAliases', {'FID': 'FID', 'COMDISTID': 'COMDISTID', 'COMNAME': 'COMNAME', 'ADDRESS': 'ADDRESS', 'PHONE': 'PHONE', 'EMAIL': 'EMAIL', 'WEBSITE': 'WEBSITE', 'SHAPE_STAr': 'SHAPE_STAr', 'SHAPE_STLe': 'SHAPE_STLe', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_TurnoutMiamiDade_1.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'Range', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'Dem Turnout': 'Range', 'Rep Turnout': 'Range', '% Dem': 'TextEdit', '% Rep': 'TextEdit', });
lyr_StateRepDist109BushIII_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'ID': 'Range', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'Dem State Representative Dist 109-results-Miami-Dade_Broadway Harewood': 'Range', 'Dem State Representative Dist 109-results-Miami-Dade_James Bush III': 'Range', 'Dem State Representative Dist 109-results-Miami-Dade_John H. Taylor Jr.': 'Range', 'Dem State Representative Dist 109-results-Miami-Dade_Satin Fye': 'Range', 'Dem State Representative Dist 109-results-Miami-Dade_Winner': 'TextEdit', 'Dem State Representative Dist 109-results-Miami-Dade_Broadway Harewood %': 'TextEdit', 'Dem State Representative Dist 109-results-Miami-Dade_James Bush III %': 'TextEdit', 'Dem State Representative Dist 109-results-Miami-Dade_John H. Taylor Jr. %': 'TextEdit', 'Dem State Representative Dist 109-results-Miami-Dade_Satin Fye %': 'TextEdit', });
lyr_StateRepDist108Escarment_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'ID': 'Range', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'Dem State Representative Dist 108-results-Miami-Dade_Daphne Campbell': 'Range', 'Dem State Representative Dist 108-results-Miami-Dade_Dinah J. Escarment': 'Range', 'Dem State Representative Dist 108-results-Miami-Dade_Peter Walsh': 'Range', 'Dem State Representative Dist 108-results-Miami-Dade_Winner': 'TextEdit', 'Dem State Representative Dist 108-results-Miami-Dade_Daphne Campbell %': 'TextEdit', 'Dem State Representative Dist 108-results-Miami-Dade_Dinah J. Escarment %': 'TextEdit', 'Dem State Representative Dist 108-results-Miami-Dade_Peter Walsh %': 'TextEdit', });
lyr_CountyCommissionerDistrict5PiperOverperformance_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'ID': 'Range', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'County Commissioner District 5-results-Miami-Dade_Joe Sanchez': 'Range', 'County Commissioner District 5-results-Miami-Dade_Rob Piper': 'Range', 'County Commissioner District 5-results-Miami-Dade_Vicki L. Lopez': 'Range', 'County Commissioner District 5-results-Miami-Dade_Winner': 'TextEdit', 'County Commissioner District 5-results-Miami-Dade_Joe Sanchez %': 'TextEdit', 'County Commissioner District 5-results-Miami-Dade_Rob Piper %': 'TextEdit', 'County Commissioner District 5-results-Miami-Dade_Vicki L. Lopez %': 'TextEdit', });
lyr_2026SenatePrimaryMiamiDadeNixon_5.set('fieldImages', {'OBJECTID': 'Hidden', 'ID': 'Range', 'GlobalID': 'Hidden', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', 'DEM United States Senator-results-Miami-Dade_Alex Vindman': 'Range', 'DEM United States Senator-results-Miami-Dade_Angie Nixon': 'Range', 'DEM United States Senator-results-Miami-Dade_Winner': 'TextEdit', 'DEM United States Senator-results-Miami-Dade_Alex Vindman %': 'TextEdit', 'DEM United States Senator-results-Miami-Dade_Angie Nixon %': 'TextEdit', });
lyr_2024PresidentMiamiDadeHarris_6.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'Range', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'President and Vice President-results-Miami-Dade_Chase Oliver': 'Range', 'President and Vice President-results-Miami-Dade_Claudia De la Cruz': 'Range', 'President and Vice President-results-Miami-Dade_Donald J. Trump': 'Range', 'President and Vice President-results-Miami-Dade_Jill Stein': 'Range', 'President and Vice President-results-Miami-Dade_Kamala D. Harris': 'Range', 'President and Vice President-results-Miami-Dade_Peter Sonski': 'Range', 'President and Vice President-results-Miami-Dade_Randall Terry': 'Range', 'President and Vice President-results-Miami-Dade_Winner': 'TextEdit', 'President and Vice President-results-Miami-Dade_Chase Oliver %': 'TextEdit', 'President and Vice President-results-Miami-Dade_Claudia De la Cruz %': 'TextEdit', 'President and Vice President-results-Miami-Dade_Donald J. Trump %': 'TextEdit', 'President and Vice President-results-Miami-Dade_Jill Stein %': 'TextEdit', 'President and Vice President-results-Miami-Dade_Kamala D. Harris %': 'TextEdit', 'President and Vice President-results-Miami-Dade_Peter Sonski %': 'TextEdit', 'President and Vice President-results-Miami-Dade_Randall Terry %': 'TextEdit', });
lyr_FLStateSenateDistricts2022_7.set('fieldImages', {'LONGNAME': 'TextEdit', 'SHORTNAME': 'TextEdit', 'DISTRICT': 'Range', 'COLOR': 'TextEdit', 'TOTAL': 'TextEdit', 'TARGET_DEV': 'TextEdit', 'TARGET_DEV_1': 'TextEdit', 'SRWVAP': 'TextEdit', 'SRWVAP_P': 'TextEdit', 'NHBVAP': 'TextEdit', 'NHBVAP_P': 'TextEdit', 'HBVAP': 'TextEdit', 'HBVAP_P': 'TextEdit', 'HXBVAP': 'TextEdit', 'HXBVAP_P': 'TextEdit', 'OTHVAP': 'TextEdit', 'OTHVAP_P': 'TextEdit', 'BVAP': 'TextEdit', 'BVAP_P': 'TextEdit', 'HVAP': 'TextEdit', 'HVAP_P': 'TextEdit', });
lyr_FLStateHouseDistricts2022_8.set('fieldImages', {'LONGNAME': 'TextEdit', 'SHORTNAME': 'TextEdit', 'DISTRICT': 'Range', 'COLOR': 'TextEdit', 'TOTAL': 'TextEdit', 'TARGET_DEV': 'TextEdit', 'TARGET_DEV_1': 'TextEdit', 'SRWVAP': 'TextEdit', 'SRWVAP_P': 'TextEdit', 'NHBVAP': 'TextEdit', 'NHBVAP_P': 'TextEdit', 'HBVAP': 'TextEdit', 'HBVAP_P': 'TextEdit', 'HXBVAP': 'TextEdit', 'HXBVAP_P': 'TextEdit', 'OTHVAP': 'TextEdit', 'OTHVAP_P': 'TextEdit', 'BVAP': 'TextEdit', 'BVAP_P': 'TextEdit', 'HVAP': 'TextEdit', 'HVAP_P': 'TextEdit', });
lyr_FLCongressionalDistricts2026_9.set('fieldImages', {'LONGNAME': 'TextEdit', 'SHORTNAME': 'TextEdit', 'DISTRICT': 'Range', 'COLOR': 'TextEdit', 'TOTAL': 'TextEdit', 'TARGET_DEV': 'TextEdit', });
lyr_MiamiDadeCountyCommissionDistricts_10.set('fieldImages', {'ID': '', 'COMMNAME': '', 'GlobalID': '', });
lyr_MunicipalitiesMiamiDade2026_11.set('fieldImages', {'MUNICUID': 'TextEdit', 'MUNICID': 'TextEdit', 'NAME': 'TextEdit', 'FIPSCODE': 'TextEdit', 'CREATEDBY': 'TextEdit', 'CREATEDDAT': 'DateTime', 'MODIFIEDBY': 'TextEdit', 'MODIFIEDDA': 'DateTime', 'GlobalID': 'TextEdit', });
lyr_MiamiCityCommissionDistricts2026_12.set('fieldImages', {'FID': 'Range', 'COMDISTID': 'Range', 'COMNAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'PHONE': 'TextEdit', 'EMAIL': 'TextEdit', 'WEBSITE': 'TextEdit', 'SHAPE_STAr': 'TextEdit', 'SHAPE_STLe': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_TurnoutMiamiDade_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'inline label - always visible', 'GlobalID': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'Dem Turnout': 'inline label - always visible', 'Rep Turnout': 'inline label - always visible', '% Dem': 'inline label - always visible', '% Rep': 'inline label - always visible', });
lyr_StateRepDist109BushIII_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'ID': 'inline label - always visible', 'GlobalID': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'Dem State Representative Dist 109-results-Miami-Dade_Broadway Harewood': 'inline label - always visible', 'Dem State Representative Dist 109-results-Miami-Dade_James Bush III': 'inline label - always visible', 'Dem State Representative Dist 109-results-Miami-Dade_John H. Taylor Jr.': 'inline label - always visible', 'Dem State Representative Dist 109-results-Miami-Dade_Satin Fye': 'inline label - always visible', 'Dem State Representative Dist 109-results-Miami-Dade_Winner': 'inline label - always visible', 'Dem State Representative Dist 109-results-Miami-Dade_Broadway Harewood %': 'inline label - always visible', 'Dem State Representative Dist 109-results-Miami-Dade_James Bush III %': 'inline label - always visible', 'Dem State Representative Dist 109-results-Miami-Dade_John H. Taylor Jr. %': 'inline label - always visible', 'Dem State Representative Dist 109-results-Miami-Dade_Satin Fye %': 'inline label - always visible', });
lyr_StateRepDist108Escarment_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'ID': 'inline label - always visible', 'GlobalID': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'Dem State Representative Dist 108-results-Miami-Dade_Daphne Campbell': 'inline label - always visible', 'Dem State Representative Dist 108-results-Miami-Dade_Dinah J. Escarment': 'inline label - always visible', 'Dem State Representative Dist 108-results-Miami-Dade_Peter Walsh': 'inline label - always visible', 'Dem State Representative Dist 108-results-Miami-Dade_Winner': 'inline label - always visible', 'Dem State Representative Dist 108-results-Miami-Dade_Daphne Campbell %': 'inline label - always visible', 'Dem State Representative Dist 108-results-Miami-Dade_Dinah J. Escarment %': 'inline label - always visible', 'Dem State Representative Dist 108-results-Miami-Dade_Peter Walsh %': 'inline label - always visible', });
lyr_CountyCommissionerDistrict5PiperOverperformance_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'hidden field', 'ID': 'inline label - always visible', 'GlobalID': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'County Commissioner District 5-results-Miami-Dade_Joe Sanchez': 'inline label - always visible', 'County Commissioner District 5-results-Miami-Dade_Rob Piper': 'inline label - always visible', 'County Commissioner District 5-results-Miami-Dade_Vicki L. Lopez': 'inline label - always visible', 'County Commissioner District 5-results-Miami-Dade_Winner': 'inline label - always visible', 'County Commissioner District 5-results-Miami-Dade_Joe Sanchez %': 'inline label - always visible', 'County Commissioner District 5-results-Miami-Dade_Rob Piper %': 'inline label - always visible', 'County Commissioner District 5-results-Miami-Dade_Vicki L. Lopez %': 'inline label - always visible', });
lyr_2026SenatePrimaryMiamiDadeNixon_5.set('fieldLabels', {'ID': 'inline label - always visible', 'DEM United States Senator-results-Miami-Dade_Alex Vindman': 'inline label - always visible', 'DEM United States Senator-results-Miami-Dade_Angie Nixon': 'inline label - always visible', 'DEM United States Senator-results-Miami-Dade_Winner': 'inline label - always visible', 'DEM United States Senator-results-Miami-Dade_Alex Vindman %': 'inline label - always visible', 'DEM United States Senator-results-Miami-Dade_Angie Nixon %': 'inline label - always visible', });
lyr_2024PresidentMiamiDadeHarris_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'inline label - always visible', 'GlobalID': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'President and Vice President-results-Miami-Dade_Chase Oliver': 'hidden field', 'President and Vice President-results-Miami-Dade_Claudia De la Cruz': 'hidden field', 'President and Vice President-results-Miami-Dade_Donald J. Trump': 'inline label - always visible', 'President and Vice President-results-Miami-Dade_Jill Stein': 'hidden field', 'President and Vice President-results-Miami-Dade_Kamala D. Harris': 'inline label - always visible', 'President and Vice President-results-Miami-Dade_Peter Sonski': 'hidden field', 'President and Vice President-results-Miami-Dade_Randall Terry': 'hidden field', 'President and Vice President-results-Miami-Dade_Winner': 'inline label - always visible', 'President and Vice President-results-Miami-Dade_Chase Oliver %': 'hidden field', 'President and Vice President-results-Miami-Dade_Claudia De la Cruz %': 'hidden field', 'President and Vice President-results-Miami-Dade_Donald J. Trump %': 'inline label - always visible', 'President and Vice President-results-Miami-Dade_Jill Stein %': 'hidden field', 'President and Vice President-results-Miami-Dade_Kamala D. Harris %': 'inline label - always visible', 'President and Vice President-results-Miami-Dade_Peter Sonski %': 'hidden field', 'President and Vice President-results-Miami-Dade_Randall Terry %': 'hidden field', });
lyr_FLStateSenateDistricts2022_7.set('fieldLabels', {'LONGNAME': 'inline label - always visible', 'SHORTNAME': 'hidden field', 'DISTRICT': 'inline label - always visible', 'COLOR': 'hidden field', 'TOTAL': 'hidden field', 'TARGET_DEV': 'hidden field', 'TARGET_DEV_1': 'hidden field', 'SRWVAP': 'hidden field', 'SRWVAP_P': 'hidden field', 'NHBVAP': 'hidden field', 'NHBVAP_P': 'hidden field', 'HBVAP': 'hidden field', 'HBVAP_P': 'hidden field', 'HXBVAP': 'hidden field', 'HXBVAP_P': 'hidden field', 'OTHVAP': 'hidden field', 'OTHVAP_P': 'hidden field', 'BVAP': 'hidden field', 'BVAP_P': 'hidden field', 'HVAP': 'hidden field', 'HVAP_P': 'hidden field', });
lyr_FLStateHouseDistricts2022_8.set('fieldLabels', {'LONGNAME': 'inline label - always visible', 'SHORTNAME': 'hidden field', 'DISTRICT': 'inline label - always visible', 'COLOR': 'hidden field', 'TOTAL': 'hidden field', 'TARGET_DEV': 'hidden field', 'TARGET_DEV_1': 'hidden field', 'SRWVAP': 'hidden field', 'SRWVAP_P': 'hidden field', 'NHBVAP': 'hidden field', 'NHBVAP_P': 'hidden field', 'HBVAP': 'hidden field', 'HBVAP_P': 'hidden field', 'HXBVAP': 'hidden field', 'HXBVAP_P': 'hidden field', 'OTHVAP': 'hidden field', 'OTHVAP_P': 'hidden field', 'BVAP': 'hidden field', 'BVAP_P': 'hidden field', 'HVAP': 'hidden field', 'HVAP_P': 'hidden field', });
lyr_FLCongressionalDistricts2026_9.set('fieldLabels', {'LONGNAME': 'inline label - always visible', 'SHORTNAME': 'hidden field', 'DISTRICT': 'inline label - always visible', 'COLOR': 'hidden field', 'TOTAL': 'hidden field', 'TARGET_DEV': 'hidden field', });
lyr_MiamiDadeCountyCommissionDistricts_10.set('fieldLabels', {'ID': 'inline label - always visible', 'COMMNAME': 'inline label - always visible', 'GlobalID': 'hidden field', });
lyr_MunicipalitiesMiamiDade2026_11.set('fieldLabels', {'MUNICUID': 'hidden field', 'MUNICID': 'hidden field', 'NAME': 'inline label - always visible', 'FIPSCODE': 'hidden field', 'CREATEDBY': 'hidden field', 'CREATEDDAT': 'hidden field', 'MODIFIEDBY': 'hidden field', 'MODIFIEDDA': 'hidden field', 'GlobalID': 'hidden field', });
lyr_MiamiCityCommissionDistricts2026_12.set('fieldLabels', {'FID': 'hidden field', 'COMDISTID': 'inline label - always visible', 'COMNAME': 'inline label - always visible', 'ADDRESS': 'hidden field', 'PHONE': 'hidden field', 'EMAIL': 'hidden field', 'WEBSITE': 'hidden field', 'SHAPE_STAr': 'hidden field', 'SHAPE_STLe': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', });
lyr_MiamiCityCommissionDistricts2026_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});