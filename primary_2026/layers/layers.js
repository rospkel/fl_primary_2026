var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_RepDist27MiamiDade_1 = new ol.format.GeoJSON();
var features_RepDist27MiamiDade_1 = format_RepDist27MiamiDade_1.readFeatures(json_RepDist27MiamiDade_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RepDist27MiamiDade_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RepDist27MiamiDade_1.addFeatures(features_RepDist27MiamiDade_1);
var lyr_RepDist27MiamiDade_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RepDist27MiamiDade_1, 
                style: style_RepDist27MiamiDade_1,
                popuplayertitle: 'Rep Dist 27 Miami Dade',
                interactive: true,
    title: 'Rep Dist 27 Miami Dade<br />\
    <img src="styles/legend/RepDist27MiamiDade_1_0.png" /> Eliott Rodriguez<br />\
    <img src="styles/legend/RepDist27MiamiDade_1_1.png" /> Robin Peguero<br />' });
var format_RepDist25MiamiDade_2 = new ol.format.GeoJSON();
var features_RepDist25MiamiDade_2 = format_RepDist25MiamiDade_2.readFeatures(json_RepDist25MiamiDade_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RepDist25MiamiDade_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RepDist25MiamiDade_2.addFeatures(features_RepDist25MiamiDade_2);
var lyr_RepDist25MiamiDade_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RepDist25MiamiDade_2, 
                style: style_RepDist25MiamiDade_2,
                popuplayertitle: 'Rep Dist 25 Miami Dade',
                interactive: true,
    title: 'Rep Dist 25 Miami Dade<br />\
    <img src="styles/legend/RepDist25MiamiDade_2_0.png" /> Jared Moskowitz<br />\
    <img src="styles/legend/RepDist25MiamiDade_2_1.png" /> Oliver Adams Larkin<br />' });
var format_RepDist25Broward_3 = new ol.format.GeoJSON();
var features_RepDist25Broward_3 = format_RepDist25Broward_3.readFeatures(json_RepDist25Broward_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RepDist25Broward_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RepDist25Broward_3.addFeatures(features_RepDist25Broward_3);
var lyr_RepDist25Broward_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RepDist25Broward_3, 
                style: style_RepDist25Broward_3,
                popuplayertitle: 'Rep Dist 25 Broward',
                interactive: true,
    title: 'Rep Dist 25 Broward<br />\
    <img src="styles/legend/RepDist25Broward_3_0.png" /> Jared Moskowitz<br />\
    <img src="styles/legend/RepDist25Broward_3_1.png" /> Oliver Adams Larkin<br />' });
var format_RepDist24MiamiDade_4 = new ol.format.GeoJSON();
var features_RepDist24MiamiDade_4 = format_RepDist24MiamiDade_4.readFeatures(json_RepDist24MiamiDade_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RepDist24MiamiDade_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RepDist24MiamiDade_4.addFeatures(features_RepDist24MiamiDade_4);
var lyr_RepDist24MiamiDade_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RepDist24MiamiDade_4, 
                style: style_RepDist24MiamiDade_4,
                popuplayertitle: 'Rep Dist 24 Miami Dade',
                interactive: true,
    title: 'Rep Dist 24 Miami Dade<br />\
    <img src="styles/legend/RepDist24MiamiDade_4_0.png" /> Jean Monestime<br />\
    <img src="styles/legend/RepDist24MiamiDade_4_1.png" /> Kendrick Meek<br />\
    <img src="styles/legend/RepDist24MiamiDade_4_2.png" /> Oliver G. Gilbert III<br />\
    <img src="styles/legend/RepDist24MiamiDade_4_3.png" /> Rudolph Moise<br />\
    <img src="styles/legend/RepDist24MiamiDade_4_4.png" /> Shevrin "Shev" Jones<br />' });
var format_RepDist24Broward_5 = new ol.format.GeoJSON();
var features_RepDist24Broward_5 = format_RepDist24Broward_5.readFeatures(json_RepDist24Broward_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RepDist24Broward_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RepDist24Broward_5.addFeatures(features_RepDist24Broward_5);
var lyr_RepDist24Broward_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RepDist24Broward_5, 
                style: style_RepDist24Broward_5,
                popuplayertitle: 'Rep Dist 24 Broward',
                interactive: true,
    title: 'Rep Dist 24 Broward<br />\
    <img src="styles/legend/RepDist24Broward_5_0.png" /> Marshall L. Davis Sr.<br />\
    <img src="styles/legend/RepDist24Broward_5_1.png" /> Oliver G. Gilbert III<br />\
    <img src="styles/legend/RepDist24Broward_5_2.png" /> Shevrin "Shev" Jones<br />' });
var format_RepDist20Broward_6 = new ol.format.GeoJSON();
var features_RepDist20Broward_6 = format_RepDist20Broward_6.readFeatures(json_RepDist20Broward_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RepDist20Broward_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RepDist20Broward_6.addFeatures(features_RepDist20Broward_6);
var lyr_RepDist20Broward_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RepDist20Broward_6, 
                style: style_RepDist20Broward_6,
                popuplayertitle: 'Rep Dist 20 Broward',
                interactive: true,
    title: 'Rep Dist 20 Broward<br />\
    <img src="styles/legend/RepDist20Broward_6_0.png" /> Dale V.C. Holness<br />\
    <img src="styles/legend/RepDist20Broward_6_1.png" /> Debbie Wasserman Schultz<br />\
    <img src="styles/legend/RepDist20Broward_6_2.png" /> Elijah Manley<br />\
    <img src="styles/legend/RepDist20Broward_6_3.png" /> Luther "UncleLuke" Campbell<br />' });
var format_SenateMiamiDade_7 = new ol.format.GeoJSON();
var features_SenateMiamiDade_7 = format_SenateMiamiDade_7.readFeatures(json_SenateMiamiDade_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SenateMiamiDade_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SenateMiamiDade_7.addFeatures(features_SenateMiamiDade_7);
var lyr_SenateMiamiDade_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SenateMiamiDade_7, 
                style: style_SenateMiamiDade_7,
                popuplayertitle: 'Senate Miami Dade',
                interactive: true,
    title: 'Senate Miami Dade<br />\
    <img src="styles/legend/SenateMiamiDade_7_0.png" /> Alex Vindman<br />\
    <img src="styles/legend/SenateMiamiDade_7_1.png" /> Angie Nixon<br />' });
var format_SenateBroward_8 = new ol.format.GeoJSON();
var features_SenateBroward_8 = format_SenateBroward_8.readFeatures(json_SenateBroward_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SenateBroward_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SenateBroward_8.addFeatures(features_SenateBroward_8);
var lyr_SenateBroward_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SenateBroward_8, 
                style: style_SenateBroward_8,
                popuplayertitle: 'Senate Broward',
                interactive: true,
    title: 'Senate Broward<br />\
    <img src="styles/legend/SenateBroward_8_0.png" /> Alex Vindman<br />\
    <img src="styles/legend/SenateBroward_8_1.png" /> Angie Nixon<br />' });

lyr_Positron_0.setVisible(true);lyr_RepDist27MiamiDade_1.setVisible(false);lyr_RepDist25MiamiDade_2.setVisible(false);lyr_RepDist25Broward_3.setVisible(false);lyr_RepDist24MiamiDade_4.setVisible(false);lyr_RepDist24Broward_5.setVisible(false);lyr_RepDist20Broward_6.setVisible(false);lyr_SenateMiamiDade_7.setVisible(false);lyr_SenateBroward_8.setVisible(false);
var layersList = [lyr_Positron_0,lyr_RepDist27MiamiDade_1,lyr_RepDist25MiamiDade_2,lyr_RepDist25Broward_3,lyr_RepDist24MiamiDade_4,lyr_RepDist24Broward_5,lyr_RepDist20Broward_6,lyr_SenateMiamiDade_7,lyr_SenateBroward_8];
lyr_RepDist27MiamiDade_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'Precinct', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Dem Representative Congress Dist 27-results-Miami-Dade_Eliott Rodriguez': 'Rodriguez', 'Dem Representative Congress Dist 27-results-Miami-Dade_Robin Peguero': 'Peguero', 'Dem Representative Congress Dist 27-results-Miami-Dade_Winner': 'Winner', 'Dem Representative Congress Dist 27-results-Miami-Dade_Eliott Rodriguez %': 'Rodriguez %', 'Dem Representative Congress Dist 27-results-Miami-Dade_Robin Peguero %': 'Peguero %', });
lyr_RepDist25MiamiDade_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'Precinct', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Jared Moskowitz': 'Moskowitz', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Oliver Adams Larkin': 'Larkin', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Winner': 'Winner', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Jared Moskowitz %': 'Moskowitz %', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Oliver Adams Larkin %': 'Larkin %', });
lyr_RepDist25Broward_3.set('fieldAliases', {'PRECINCT': 'Precinct', 'COORDINATO': 'COORDINATO', 'OLD_PRECIN': 'OLD_PRECIN', 'CHANGED': 'CHANGED', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Oliver Adams Larkin': 'Larkin', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Jared Moskowitz': 'Moskowitz', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Winner': 'Winner', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Oliver Adams Larkin %': 'Larkin %', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Jared Moskowitz %': 'Moskowitz %', });
lyr_RepDist24MiamiDade_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'Precinct', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Dem Representative Congress Dist 24-results-Miami-Dade_Jean Monestime': 'Monestime', 'Dem Representative Congress Dist 24-results-Miami-Dade_Kendrick Meek': 'Meek', 'Dem Representative Congress Dist 24-results-Miami-Dade_Marshall L. Davis Sr.': 'Davis', 'Dem Representative Congress Dist 24-results-Miami-Dade_Oliver G. Gilbert III': 'Gilbert', 'Dem Representative Congress Dist 24-results-Miami-Dade_Roderick Vereen': 'Vereen', 'Dem Representative Congress Dist 24-results-Miami-Dade_Rudolph Moise': 'Moise', 'Dem Representative Congress Dist 24-results-Miami-Dade_Shevrin "Shev" Jones': 'Jones', 'Dem Representative Congress Dist 24-results-Miami-Dade_Winner': 'Winner', 'Dem Representative Congress Dist 24-results-Miami-Dade_Jean Monestime %': 'Moenstime %', 'Dem Representative Congress Dist 24-results-Miami-Dade_Kendrick Meek %': 'Meek %', 'Dem Representative Congress Dist 24-results-Miami-Dade_Marshall L. Davis Sr. %': 'Davis %', 'Dem Representative Congress Dist 24-results-Miami-Dade_Oliver G. Gilbert III %': 'Gilbert %', 'Dem Representative Congress Dist 24-results-Miami-Dade_Roderick Vereen %': 'Vereen %', 'Dem Representative Congress Dist 24-results-Miami-Dade_Rudolph Moise %': 'Moise %', 'Dem Representative Congress Dist 24-results-Miami-Dade_Shevrin "Shev" Jones %': 'Jones %', });
lyr_RepDist24Broward_5.set('fieldAliases', {'PRECINCT': 'Precinct', 'COORDINATO': 'COORDINATO', 'OLD_PRECIN': 'OLD_PRECIN', 'CHANGED': 'CHANGED', 'Representative in Congress, District 24-results-Broward_Marshall L. Davis Sr.': 'Davis', 'Representative in Congress, District 24-results-Broward_Oliver G. Gilbert III': 'Gilbert', 'Representative in Congress, District 24-results-Broward_Shevrin "Shev" Jones': 'Jones', 'Representative in Congress, District 24-results-Broward_Kendrick Meek': 'Meek', 'Representative in Congress, District 24-results-Broward_Rudolph Moise': 'Moise', 'Representative in Congress, District 24-results-Broward_Jean Monestime': 'Monestime', 'Representative in Congress, District 24-results-Broward_Roderick Vereen': 'Vereen', 'Representative in Congress, District 24-results-Broward_Winner': 'Winner', 'Representative in Congress, District 24-results-Broward_Marshall L. Davis Sr. %': 'Davis %', 'Representative in Congress, District 24-results-Broward_Oliver G. Gilbert III %': 'Gilbert %', 'Representative in Congress, District 24-results-Broward_Shevrin "Shev" Jones %': 'Jones %', 'Representative in Congress, District 24-results-Broward_Kendrick Meek %': 'Meek %', 'Representative in Congress, District 24-results-Broward_Rudolph Moise %': 'Moise %', 'Representative in Congress, District 24-results-Broward_Jean Monestime %': 'Monestime %', 'Representative in Congress, District 24-results-Broward_Roderick Vereen %': 'Vereen %', });
lyr_RepDist20Broward_6.set('fieldAliases', {'PRECINCT': 'Precinct', 'COORDINATO': 'COORDINATO', 'OLD_PRECIN': 'OLD_PRECIN', 'CHANGED': 'CHANGED', 'Representative in Congress, District 20-results-Broward_Luther "UncleLuke" Campbell': 'Campbell', 'Representative in Congress, District 20-results-Broward_Sheila Cherfilus-McCormick': 'Cherfilus-McCormick', 'Representative in Congress, District 20-results-Broward_Dale V.C. Holness': 'Holness', 'Representative in Congress, District 20-results-Broward_Elijah Manley': 'Manley', 'Representative in Congress, District 20-results-Broward_Debbie Wasserman Schultz': 'Wasserman-Schulz', 'Representative in Congress, District 20-results-Broward_Winner': 'Winner', 'Representative in Congress, District 20-results-Broward_Luther "UncleLuke" Campbell %': 'Campbell %', 'Representative in Congress, District 20-results-Broward_Sheila Cherfilus-McCormick %': 'Cherfilus-McCormick %', 'Representative in Congress, District 20-results-Broward_Dale V.C. Holness %': 'Holness %', 'Representative in Congress, District 20-results-Broward_Elijah Manley %': 'Manley %', 'Representative in Congress, District 20-results-Broward_Debbie Wasserman Schultz %': 'Wasserman-Schulz %', });
lyr_SenateMiamiDade_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'Precinct', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Alex Vindman': 'Vindman', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Angie Nixon': 'Nixon', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Winner': 'Winner', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Alex Vindman %': 'Vindman %', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Angie Nixon %': 'Nixon %', });
lyr_SenateBroward_8.set('fieldAliases', {'PRECINCT': 'Precinct', 'COORDINATO': 'COORDINATO', 'OLD_PRECIN': 'OLD_PRECIN', 'CHANGED': 'CHANGED', 'Angie Nixon-Alex Vindman-results-Broward_Angie Nixon': 'Nixon', 'Angie Nixon-Alex Vindman-results-Broward_Alex Vindman': 'Vindman', 'Angie Nixon-Alex Vindman-results-Broward_Winner': 'Winner', 'Angie Nixon-Alex Vindman-results-Broward_Angie Nixon %': 'Nixon %', 'Angie Nixon-Alex Vindman-results-Broward_Alex Vindman %': 'Vindman %', });
lyr_RepDist27MiamiDade_1.set('fieldImages', {'OBJECTID': 'Hidden', 'ID': 'Range', 'GlobalID': 'Hidden', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', 'Dem Representative Congress Dist 27-results-Miami-Dade_Eliott Rodriguez': 'TextEdit', 'Dem Representative Congress Dist 27-results-Miami-Dade_Robin Peguero': 'TextEdit', 'Dem Representative Congress Dist 27-results-Miami-Dade_Winner': 'TextEdit', 'Dem Representative Congress Dist 27-results-Miami-Dade_Eliott Rodriguez %': 'TextEdit', 'Dem Representative Congress Dist 27-results-Miami-Dade_Robin Peguero %': 'TextEdit', });
lyr_RepDist25MiamiDade_2.set('fieldImages', {'OBJECTID': 'Hidden', 'ID': 'Range', 'GlobalID': 'Hidden', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Jared Moskowitz': 'Range', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Oliver Adams Larkin': 'Range', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Winner': 'TextEdit', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Jared Moskowitz %': 'TextEdit', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Oliver Adams Larkin %': 'TextEdit', });
lyr_RepDist25Broward_3.set('fieldImages', {'PRECINCT': 'TextEdit', 'COORDINATO': 'Hidden', 'OLD_PRECIN': 'Hidden', 'CHANGED': 'Hidden', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Oliver Adams Larkin': 'TextEdit', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Jared Moskowitz': 'TextEdit', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Winner': 'TextEdit', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Oliver Adams Larkin %': 'TextEdit', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Jared Moskowitz %': 'TextEdit', });
lyr_RepDist24MiamiDade_4.set('fieldImages', {'OBJECTID': 'Hidden', 'ID': 'Range', 'GlobalID': 'Hidden', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', 'Dem Representative Congress Dist 24-results-Miami-Dade_Jean Monestime': 'TextEdit', 'Dem Representative Congress Dist 24-results-Miami-Dade_Kendrick Meek': 'TextEdit', 'Dem Representative Congress Dist 24-results-Miami-Dade_Marshall L. Davis Sr.': 'TextEdit', 'Dem Representative Congress Dist 24-results-Miami-Dade_Oliver G. Gilbert III': 'TextEdit', 'Dem Representative Congress Dist 24-results-Miami-Dade_Roderick Vereen': 'TextEdit', 'Dem Representative Congress Dist 24-results-Miami-Dade_Rudolph Moise': 'TextEdit', 'Dem Representative Congress Dist 24-results-Miami-Dade_Shevrin "Shev" Jones': 'TextEdit', 'Dem Representative Congress Dist 24-results-Miami-Dade_Winner': 'TextEdit', 'Dem Representative Congress Dist 24-results-Miami-Dade_Jean Monestime %': 'TextEdit', 'Dem Representative Congress Dist 24-results-Miami-Dade_Kendrick Meek %': 'TextEdit', 'Dem Representative Congress Dist 24-results-Miami-Dade_Marshall L. Davis Sr. %': 'TextEdit', 'Dem Representative Congress Dist 24-results-Miami-Dade_Oliver G. Gilbert III %': 'TextEdit', 'Dem Representative Congress Dist 24-results-Miami-Dade_Roderick Vereen %': 'TextEdit', 'Dem Representative Congress Dist 24-results-Miami-Dade_Rudolph Moise %': 'TextEdit', 'Dem Representative Congress Dist 24-results-Miami-Dade_Shevrin "Shev" Jones %': 'TextEdit', });
lyr_RepDist24Broward_5.set('fieldImages', {'PRECINCT': 'TextEdit', 'COORDINATO': 'Hidden', 'OLD_PRECIN': 'Hidden', 'CHANGED': 'Hidden', 'Representative in Congress, District 24-results-Broward_Marshall L. Davis Sr.': 'TextEdit', 'Representative in Congress, District 24-results-Broward_Oliver G. Gilbert III': 'TextEdit', 'Representative in Congress, District 24-results-Broward_Shevrin "Shev" Jones': 'TextEdit', 'Representative in Congress, District 24-results-Broward_Kendrick Meek': 'TextEdit', 'Representative in Congress, District 24-results-Broward_Rudolph Moise': 'TextEdit', 'Representative in Congress, District 24-results-Broward_Jean Monestime': 'TextEdit', 'Representative in Congress, District 24-results-Broward_Roderick Vereen': 'TextEdit', 'Representative in Congress, District 24-results-Broward_Winner': 'TextEdit', 'Representative in Congress, District 24-results-Broward_Marshall L. Davis Sr. %': 'TextEdit', 'Representative in Congress, District 24-results-Broward_Oliver G. Gilbert III %': 'TextEdit', 'Representative in Congress, District 24-results-Broward_Shevrin "Shev" Jones %': 'TextEdit', 'Representative in Congress, District 24-results-Broward_Kendrick Meek %': 'TextEdit', 'Representative in Congress, District 24-results-Broward_Rudolph Moise %': 'TextEdit', 'Representative in Congress, District 24-results-Broward_Jean Monestime %': 'TextEdit', 'Representative in Congress, District 24-results-Broward_Roderick Vereen %': 'TextEdit', });
lyr_RepDist20Broward_6.set('fieldImages', {'PRECINCT': 'TextEdit', 'COORDINATO': 'Hidden', 'OLD_PRECIN': 'Hidden', 'CHANGED': 'Hidden', 'Representative in Congress, District 20-results-Broward_Luther "UncleLuke" Campbell': 'TextEdit', 'Representative in Congress, District 20-results-Broward_Sheila Cherfilus-McCormick': 'TextEdit', 'Representative in Congress, District 20-results-Broward_Dale V.C. Holness': 'TextEdit', 'Representative in Congress, District 20-results-Broward_Elijah Manley': 'TextEdit', 'Representative in Congress, District 20-results-Broward_Debbie Wasserman Schultz': 'TextEdit', 'Representative in Congress, District 20-results-Broward_Winner': 'TextEdit', 'Representative in Congress, District 20-results-Broward_Luther "UncleLuke" Campbell %': 'TextEdit', 'Representative in Congress, District 20-results-Broward_Sheila Cherfilus-McCormick %': 'TextEdit', 'Representative in Congress, District 20-results-Broward_Dale V.C. Holness %': 'TextEdit', 'Representative in Congress, District 20-results-Broward_Elijah Manley %': 'TextEdit', 'Representative in Congress, District 20-results-Broward_Debbie Wasserman Schultz %': 'TextEdit', });
lyr_SenateMiamiDade_7.set('fieldImages', {'OBJECTID': 'Hidden', 'ID': 'Range', 'GlobalID': 'Hidden', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Alex Vindman': 'Range', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Angie Nixon': 'Range', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Winner': 'TextEdit', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Alex Vindman %': 'TextEdit', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Angie Nixon %': 'TextEdit', });
lyr_SenateBroward_8.set('fieldImages', {'PRECINCT': 'TextEdit', 'COORDINATO': 'Hidden', 'OLD_PRECIN': 'Hidden', 'CHANGED': 'Hidden', 'Angie Nixon-Alex Vindman-results-Broward_Angie Nixon': 'TextEdit', 'Angie Nixon-Alex Vindman-results-Broward_Alex Vindman': 'TextEdit', 'Angie Nixon-Alex Vindman-results-Broward_Winner': 'TextEdit', 'Angie Nixon-Alex Vindman-results-Broward_Angie Nixon %': 'TextEdit', 'Angie Nixon-Alex Vindman-results-Broward_Alex Vindman %': 'TextEdit', });
lyr_RepDist27MiamiDade_1.set('fieldLabels', {'ID': 'inline label - visible with data', 'Dem Representative Congress Dist 27-results-Miami-Dade_Eliott Rodriguez': 'inline label - visible with data', 'Dem Representative Congress Dist 27-results-Miami-Dade_Robin Peguero': 'inline label - visible with data', 'Dem Representative Congress Dist 27-results-Miami-Dade_Winner': 'inline label - visible with data', 'Dem Representative Congress Dist 27-results-Miami-Dade_Eliott Rodriguez %': 'inline label - visible with data', 'Dem Representative Congress Dist 27-results-Miami-Dade_Robin Peguero %': 'inline label - visible with data', });
lyr_RepDist25MiamiDade_2.set('fieldLabels', {'ID': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Jared Moskowitz': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Oliver Adams Larkin': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Winner': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Jared Moskowitz %': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Miami-Dade_Oliver Adams Larkin %': 'inline label - visible with data', });
lyr_RepDist25Broward_3.set('fieldLabels', {'PRECINCT': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Oliver Adams Larkin': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Jared Moskowitz': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Winner': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Oliver Adams Larkin %': 'inline label - visible with data', 'Oliver Adams Larkin-Jared Moskowitz-results-Broward_Jared Moskowitz %': 'inline label - visible with data', });
lyr_RepDist24MiamiDade_4.set('fieldLabels', {'ID': 'inline label - visible with data', 'Dem Representative Congress Dist 24-results-Miami-Dade_Jean Monestime': 'inline label - visible with data', 'Dem Representative Congress Dist 24-results-Miami-Dade_Kendrick Meek': 'inline label - visible with data', 'Dem Representative Congress Dist 24-results-Miami-Dade_Marshall L. Davis Sr.': 'inline label - visible with data', 'Dem Representative Congress Dist 24-results-Miami-Dade_Oliver G. Gilbert III': 'inline label - visible with data', 'Dem Representative Congress Dist 24-results-Miami-Dade_Roderick Vereen': 'inline label - visible with data', 'Dem Representative Congress Dist 24-results-Miami-Dade_Rudolph Moise': 'inline label - visible with data', 'Dem Representative Congress Dist 24-results-Miami-Dade_Shevrin "Shev" Jones': 'inline label - visible with data', 'Dem Representative Congress Dist 24-results-Miami-Dade_Winner': 'inline label - visible with data', 'Dem Representative Congress Dist 24-results-Miami-Dade_Jean Monestime %': 'inline label - visible with data', 'Dem Representative Congress Dist 24-results-Miami-Dade_Kendrick Meek %': 'inline label - visible with data', 'Dem Representative Congress Dist 24-results-Miami-Dade_Marshall L. Davis Sr. %': 'inline label - visible with data', 'Dem Representative Congress Dist 24-results-Miami-Dade_Oliver G. Gilbert III %': 'inline label - visible with data', 'Dem Representative Congress Dist 24-results-Miami-Dade_Roderick Vereen %': 'inline label - visible with data', 'Dem Representative Congress Dist 24-results-Miami-Dade_Rudolph Moise %': 'inline label - visible with data', 'Dem Representative Congress Dist 24-results-Miami-Dade_Shevrin "Shev" Jones %': 'inline label - visible with data', });
lyr_RepDist24Broward_5.set('fieldLabels', {'PRECINCT': 'inline label - visible with data', 'Representative in Congress, District 24-results-Broward_Marshall L. Davis Sr.': 'inline label - visible with data', 'Representative in Congress, District 24-results-Broward_Oliver G. Gilbert III': 'inline label - visible with data', 'Representative in Congress, District 24-results-Broward_Shevrin "Shev" Jones': 'inline label - visible with data', 'Representative in Congress, District 24-results-Broward_Kendrick Meek': 'inline label - visible with data', 'Representative in Congress, District 24-results-Broward_Rudolph Moise': 'inline label - visible with data', 'Representative in Congress, District 24-results-Broward_Jean Monestime': 'inline label - visible with data', 'Representative in Congress, District 24-results-Broward_Roderick Vereen': 'inline label - visible with data', 'Representative in Congress, District 24-results-Broward_Winner': 'inline label - visible with data', 'Representative in Congress, District 24-results-Broward_Marshall L. Davis Sr. %': 'inline label - visible with data', 'Representative in Congress, District 24-results-Broward_Oliver G. Gilbert III %': 'inline label - visible with data', 'Representative in Congress, District 24-results-Broward_Shevrin "Shev" Jones %': 'inline label - visible with data', 'Representative in Congress, District 24-results-Broward_Kendrick Meek %': 'inline label - visible with data', 'Representative in Congress, District 24-results-Broward_Rudolph Moise %': 'inline label - visible with data', 'Representative in Congress, District 24-results-Broward_Jean Monestime %': 'inline label - visible with data', 'Representative in Congress, District 24-results-Broward_Roderick Vereen %': 'inline label - visible with data', });
lyr_RepDist20Broward_6.set('fieldLabels', {'PRECINCT': 'inline label - visible with data', 'Representative in Congress, District 20-results-Broward_Luther "UncleLuke" Campbell': 'inline label - visible with data', 'Representative in Congress, District 20-results-Broward_Sheila Cherfilus-McCormick': 'inline label - visible with data', 'Representative in Congress, District 20-results-Broward_Dale V.C. Holness': 'inline label - visible with data', 'Representative in Congress, District 20-results-Broward_Elijah Manley': 'inline label - visible with data', 'Representative in Congress, District 20-results-Broward_Debbie Wasserman Schultz': 'inline label - visible with data', 'Representative in Congress, District 20-results-Broward_Winner': 'inline label - visible with data', 'Representative in Congress, District 20-results-Broward_Luther "UncleLuke" Campbell %': 'inline label - visible with data', 'Representative in Congress, District 20-results-Broward_Sheila Cherfilus-McCormick %': 'inline label - visible with data', 'Representative in Congress, District 20-results-Broward_Dale V.C. Holness %': 'inline label - visible with data', 'Representative in Congress, District 20-results-Broward_Elijah Manley %': 'inline label - visible with data', 'Representative in Congress, District 20-results-Broward_Debbie Wasserman Schultz %': 'inline label - visible with data', });
lyr_SenateMiamiDade_7.set('fieldLabels', {'ID': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Alex Vindman': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Angie Nixon': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Winner': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Alex Vindman %': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Miami-Dade_Angie Nixon %': 'inline label - visible with data', });
lyr_SenateBroward_8.set('fieldLabels', {'PRECINCT': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Broward_Angie Nixon': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Broward_Alex Vindman': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Broward_Winner': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Broward_Angie Nixon %': 'inline label - visible with data', 'Angie Nixon-Alex Vindman-results-Broward_Alex Vindman %': 'inline label - visible with data', });
lyr_SenateBroward_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});