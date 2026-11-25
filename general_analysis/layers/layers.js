var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_USSenateGeneral_1 = new ol.format.GeoJSON();
var features_USSenateGeneral_1 = format_USSenateGeneral_1.readFeatures(json_USSenateGeneral_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USSenateGeneral_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USSenateGeneral_1.addFeatures(features_USSenateGeneral_1);
var lyr_USSenateGeneral_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USSenateGeneral_1, 
                style: style_USSenateGeneral_1,
                popuplayertitle: 'US Senate General %',
                interactive: true,
    title: 'US Senate General %<br />\
    <img src="styles/legend/USSenateGeneral_1_0.png" /> 0 - 0.2<br />\
    <img src="styles/legend/USSenateGeneral_1_1.png" /> 0.2 - 0.4<br />\
    <img src="styles/legend/USSenateGeneral_1_2.png" /> 0.4 - 0.6<br />\
    <img src="styles/legend/USSenateGeneral_1_3.png" /> 0.6 - 0.8<br />\
    <img src="styles/legend/USSenateGeneral_1_4.png" /> 0.8 - 1<br />' });
var format_USSenateGeneral_2 = new ol.format.GeoJSON();
var features_USSenateGeneral_2 = format_USSenateGeneral_2.readFeatures(json_USSenateGeneral_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USSenateGeneral_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USSenateGeneral_2.addFeatures(features_USSenateGeneral_2);
var lyr_USSenateGeneral_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USSenateGeneral_2, 
                style: style_USSenateGeneral_2,
                popuplayertitle: 'US Senate General',
                interactive: true,
    title: 'US Senate General<br />\
    <img src="styles/legend/USSenateGeneral_2_0.png" /> Angie Nixon<br />\
    <img src="styles/legend/USSenateGeneral_2_1.png" /> Ashley Moody<br />' });
var format_USSenatePrimary_3 = new ol.format.GeoJSON();
var features_USSenatePrimary_3 = format_USSenatePrimary_3.readFeatures(json_USSenatePrimary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USSenatePrimary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USSenatePrimary_3.addFeatures(features_USSenatePrimary_3);
var lyr_USSenatePrimary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USSenatePrimary_3, 
                style: style_USSenatePrimary_3,
                popuplayertitle: 'US Senate Primary %',
                interactive: true,
    title: 'US Senate Primary %<br />\
    <img src="styles/legend/USSenatePrimary_3_0.png" /> 0 - 0.2<br />\
    <img src="styles/legend/USSenatePrimary_3_1.png" /> 0.2 - 0.4<br />\
    <img src="styles/legend/USSenatePrimary_3_2.png" /> 0.4 - 0.6<br />\
    <img src="styles/legend/USSenatePrimary_3_3.png" /> 0.6 - 0.8<br />\
    <img src="styles/legend/USSenatePrimary_3_4.png" /> 0.8 - 1<br />' });
var format_USSenatePrimary_4 = new ol.format.GeoJSON();
var features_USSenatePrimary_4 = format_USSenatePrimary_4.readFeatures(json_USSenatePrimary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USSenatePrimary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USSenatePrimary_4.addFeatures(features_USSenatePrimary_4);
var lyr_USSenatePrimary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USSenatePrimary_4, 
                style: style_USSenatePrimary_4,
                popuplayertitle: 'US Senate Primary',
                interactive: true,
    title: 'US Senate Primary<br />\
    <img src="styles/legend/USSenatePrimary_4_0.png" /> Alex Vindman<br />\
    <img src="styles/legend/USSenatePrimary_4_1.png" /> Angie Nixon<br />' });
var format_miami_dade_renter_data_filtered_5 = new ol.format.GeoJSON();
var features_miami_dade_renter_data_filtered_5 = format_miami_dade_renter_data_filtered_5.readFeatures(json_miami_dade_renter_data_filtered_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_miami_dade_renter_data_filtered_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_miami_dade_renter_data_filtered_5.addFeatures(features_miami_dade_renter_data_filtered_5);
var lyr_miami_dade_renter_data_filtered_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_miami_dade_renter_data_filtered_5, 
                style: style_miami_dade_renter_data_filtered_5,
                popuplayertitle: 'miami_dade_renter_data_filtered',
                interactive: true,
    title: 'miami_dade_renter_data_filtered<br />\
    <img src="styles/legend/miami_dade_renter_data_filtered_5_0.png" /> 0 - 0.2<br />\
    <img src="styles/legend/miami_dade_renter_data_filtered_5_1.png" /> 0.2 - 0.4<br />\
    <img src="styles/legend/miami_dade_renter_data_filtered_5_2.png" /> 0.4 - 0.6<br />\
    <img src="styles/legend/miami_dade_renter_data_filtered_5_3.png" /> 0.6 - 0.8<br />\
    <img src="styles/legend/miami_dade_renter_data_filtered_5_4.png" /> 0.8 - 1<br />' });
var format_FLStateHouseDistricts2022H000H8013shp_6 = new ol.format.GeoJSON();
var features_FLStateHouseDistricts2022H000H8013shp_6 = format_FLStateHouseDistricts2022H000H8013shp_6.readFeatures(json_FLStateHouseDistricts2022H000H8013shp_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FLStateHouseDistricts2022H000H8013shp_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FLStateHouseDistricts2022H000H8013shp_6.addFeatures(features_FLStateHouseDistricts2022H000H8013shp_6);
var lyr_FLStateHouseDistricts2022H000H8013shp_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FLStateHouseDistricts2022H000H8013shp_6, 
                style: style_FLStateHouseDistricts2022H000H8013shp_6,
                popuplayertitle: 'FL State House Districts 2022 — H000H8013.shp',
                interactive: true,
                title: '<img src="styles/legend/FLStateHouseDistricts2022H000H8013shp_6.png" /> FL State House Districts 2022 — H000H8013.shp'
            });
var format_CommissionDistrict_gdb_6151358954043891792CommissionDistrictshp_7 = new ol.format.GeoJSON();
var features_CommissionDistrict_gdb_6151358954043891792CommissionDistrictshp_7 = format_CommissionDistrict_gdb_6151358954043891792CommissionDistrictshp_7.readFeatures(json_CommissionDistrict_gdb_6151358954043891792CommissionDistrictshp_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommissionDistrict_gdb_6151358954043891792CommissionDistrictshp_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommissionDistrict_gdb_6151358954043891792CommissionDistrictshp_7.addFeatures(features_CommissionDistrict_gdb_6151358954043891792CommissionDistrictshp_7);
var lyr_CommissionDistrict_gdb_6151358954043891792CommissionDistrictshp_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommissionDistrict_gdb_6151358954043891792CommissionDistrictshp_7, 
                style: style_CommissionDistrict_gdb_6151358954043891792CommissionDistrictshp_7,
                popuplayertitle: 'CommissionDistrict_gdb_6151358954043891792 — CommissionDistrict.shp',
                interactive: true,
                title: '<img src="styles/legend/CommissionDistrict_gdb_6151358954043891792CommissionDistrictshp_7.png" /> CommissionDistrict_gdb_6151358954043891792 — CommissionDistrict.shp'
            });
var format_SchoolBoardDistrict_gdb_2864880642687542528SchoolBoardDistrictshp_8 = new ol.format.GeoJSON();
var features_SchoolBoardDistrict_gdb_2864880642687542528SchoolBoardDistrictshp_8 = format_SchoolBoardDistrict_gdb_2864880642687542528SchoolBoardDistrictshp_8.readFeatures(json_SchoolBoardDistrict_gdb_2864880642687542528SchoolBoardDistrictshp_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SchoolBoardDistrict_gdb_2864880642687542528SchoolBoardDistrictshp_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchoolBoardDistrict_gdb_2864880642687542528SchoolBoardDistrictshp_8.addFeatures(features_SchoolBoardDistrict_gdb_2864880642687542528SchoolBoardDistrictshp_8);
var lyr_SchoolBoardDistrict_gdb_2864880642687542528SchoolBoardDistrictshp_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SchoolBoardDistrict_gdb_2864880642687542528SchoolBoardDistrictshp_8, 
                style: style_SchoolBoardDistrict_gdb_2864880642687542528SchoolBoardDistrictshp_8,
                popuplayertitle: 'SchoolBoardDistrict_gdb_-2864880642687542528 — SchoolBoardDistrict.shp',
                interactive: true,
                title: '<img src="styles/legend/SchoolBoardDistrict_gdb_2864880642687542528SchoolBoardDistrictshp_8.png" /> SchoolBoardDistrict_gdb_-2864880642687542528 — SchoolBoardDistrict.shp'
            });
var format_MiamiCityCommissionDistricts2026Commission_Districtsshp_9 = new ol.format.GeoJSON();
var features_MiamiCityCommissionDistricts2026Commission_Districtsshp_9 = format_MiamiCityCommissionDistricts2026Commission_Districtsshp_9.readFeatures(json_MiamiCityCommissionDistricts2026Commission_Districtsshp_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiamiCityCommissionDistricts2026Commission_Districtsshp_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiamiCityCommissionDistricts2026Commission_Districtsshp_9.addFeatures(features_MiamiCityCommissionDistricts2026Commission_Districtsshp_9);
var lyr_MiamiCityCommissionDistricts2026Commission_Districtsshp_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiamiCityCommissionDistricts2026Commission_Districtsshp_9, 
                style: style_MiamiCityCommissionDistricts2026Commission_Districtsshp_9,
                popuplayertitle: 'Miami City Commission Districts 2026 — Commission_Districts.shp',
                interactive: true,
                title: '<img src="styles/legend/MiamiCityCommissionDistricts2026Commission_Districtsshp_9.png" /> Miami City Commission Districts 2026 — Commission_Districts.shp'
            });
var format_Amendment3_10 = new ol.format.GeoJSON();
var features_Amendment3_10 = format_Amendment3_10.readFeatures(json_Amendment3_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Amendment3_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amendment3_10.addFeatures(features_Amendment3_10);
var lyr_Amendment3_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Amendment3_10, 
                style: style_Amendment3_10,
                popuplayertitle: 'Amendment 3 %',
                interactive: true,
    title: 'Amendment 3 %<br />\
    <img src="styles/legend/Amendment3_10_0.png" /> 0 - 0.2<br />\
    <img src="styles/legend/Amendment3_10_1.png" /> 0.2 - 0.4<br />\
    <img src="styles/legend/Amendment3_10_2.png" /> 0.4 - 0.6<br />\
    <img src="styles/legend/Amendment3_10_3.png" /> 0.6 - 0.8<br />\
    <img src="styles/legend/Amendment3_10_4.png" /> 0.8 - 1<br />' });
var format_Amendment3YesNo_11 = new ol.format.GeoJSON();
var features_Amendment3YesNo_11 = format_Amendment3YesNo_11.readFeatures(json_Amendment3YesNo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Amendment3YesNo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amendment3YesNo_11.addFeatures(features_Amendment3YesNo_11);
var lyr_Amendment3YesNo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Amendment3YesNo_11, 
                style: style_Amendment3YesNo_11,
                popuplayertitle: 'Amendment 3 - Yes/No',
                interactive: true,
    title: 'Amendment 3 - Yes/No<br />\
    <img src="styles/legend/Amendment3YesNo_11_0.png" /> false<br />\
    <img src="styles/legend/Amendment3YesNo_11_1.png" /> true<br />' });

lyr_ESRIGraylight_0.setVisible(true);lyr_USSenateGeneral_1.setVisible(false);lyr_USSenateGeneral_2.setVisible(true);lyr_USSenatePrimary_3.setVisible(false);lyr_USSenatePrimary_4.setVisible(true);lyr_miami_dade_renter_data_filtered_5.setVisible(false);lyr_FLStateHouseDistricts2022H000H8013shp_6.setVisible(false);lyr_CommissionDistrict_gdb_6151358954043891792CommissionDistrictshp_7.setVisible(false);lyr_SchoolBoardDistrict_gdb_2864880642687542528SchoolBoardDistrictshp_8.setVisible(false);lyr_MiamiCityCommissionDistricts2026Commission_Districtsshp_9.setVisible(true);lyr_Amendment3_10.setVisible(false);lyr_Amendment3YesNo_11.setVisible(false);
var layersList = [lyr_ESRIGraylight_0,lyr_USSenateGeneral_1,lyr_USSenateGeneral_2,lyr_USSenatePrimary_3,lyr_USSenatePrimary_4,lyr_miami_dade_renter_data_filtered_5,lyr_FLStateHouseDistricts2022H000H8013shp_6,lyr_CommissionDistrict_gdb_6151358954043891792CommissionDistrictshp_7,lyr_SchoolBoardDistrict_gdb_2864880642687542528SchoolBoardDistrictshp_8,lyr_MiamiCityCommissionDistricts2026Commission_Districtsshp_9,lyr_Amendment3_10,lyr_Amendment3YesNo_11];
lyr_USSenateGeneral_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'United States Senator-results-Miami-Dade_Angie Nixon': 'Nixon', 'United States Senator-results-Miami-Dade_Ashley Moody': 'Moody', 'United States Senator-results-Miami-Dade_Neil J. Gillespie': 'United States Senator-results-Miami-Dade_Neil J. Gillespie', 'United States Senator-results-Miami-Dade_Winner': 'Winner', 'United States Senator-results-Miami-Dade_Angie Nixon %': 'Nixon %', 'United States Senator-results-Miami-Dade_Ashley Moody %': 'Moody %', 'United States Senator-results-Miami-Dade_Neil J. Gillespie %': 'United States Senator-results-Miami-Dade_Neil J. Gillespie %', });
lyr_USSenateGeneral_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'United States Senator-results-Miami-Dade_Angie Nixon': 'Nixon', 'United States Senator-results-Miami-Dade_Ashley Moody': 'Moody', 'United States Senator-results-Miami-Dade_Neil J. Gillespie': 'United States Senator-results-Miami-Dade_Neil J. Gillespie', 'United States Senator-results-Miami-Dade_Winner': 'Winner', 'United States Senator-results-Miami-Dade_Angie Nixon %': 'Nixon %', 'United States Senator-results-Miami-Dade_Ashley Moody %': 'Moody %', 'United States Senator-results-Miami-Dade_Neil J. Gillespie %': 'United States Senator-results-Miami-Dade_Neil J. Gillespie %', });
lyr_USSenatePrimary_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'DEM United States Senator-results-Miami-Dade_Alex Vindman': 'Vindman', 'DEM United States Senator-results-Miami-Dade_Angie Nixon': 'Nixon', 'DEM United States Senator-results-Miami-Dade_Winner': 'Winner', 'DEM United States Senator-results-Miami-Dade_Alex Vindman %': 'Vindman %', 'DEM United States Senator-results-Miami-Dade_Angie Nixon %': 'Nixon %', });
lyr_USSenatePrimary_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'DEM United States Senator-results-Miami-Dade_Alex Vindman': 'Vindman', 'DEM United States Senator-results-Miami-Dade_Angie Nixon': 'Nixon', 'DEM United States Senator-results-Miami-Dade_Winner': 'Winner', 'DEM United States Senator-results-Miami-Dade_Alex Vindman %': 'Vindman %', 'DEM United States Senator-results-Miami-Dade_Angie Nixon %': 'Nixon %', });
lyr_miami_dade_renter_data_filtered_5.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'GEOIDFQ': 'Census Block', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ACSDT5Y2024.B25003-Data_Geographic Area Name': 'ACSDT5Y2024.B25003-Data_Geographic Area Name', 'ACSDT5Y2024.B25003-Data_Total': 'ACSDT5Y2024.B25003-Data_Total', 'ACSDT5Y2024.B25003-Data_Margin of Error!!Total:': 'ACSDT5Y2024.B25003-Data_Margin of Error!!Total:', 'ACSDT5Y2024.B25003-Data_Owner Occupied': 'ACSDT5Y2024.B25003-Data_Owner Occupied', 'ACSDT5Y2024.B25003-Data_Margin of Error!!Total:!!Owner occupied': 'ACSDT5Y2024.B25003-Data_Margin of Error!!Total:!!Owner occupied', 'ACSDT5Y2024.B25003-Data_Renter Occupied': 'ACSDT5Y2024.B25003-Data_Renter Occupied', 'ACSDT5Y2024.B25003-Data_Margin of Error!!Total:!!Renter occupied': 'ACSDT5Y2024.B25003-Data_Margin of Error!!Total:!!Renter occupied', 'ACSDT5Y2024.B25003-Data_% Owned': 'ACSDT5Y2024.B25003-Data_% Owned', 'ACSDT5Y2024.B25003-Data_% Rented': 'Renter %', });
lyr_FLStateHouseDistricts2022H000H8013shp_6.set('fieldAliases', {'LONGNAME': 'LONGNAME', 'SHORTNAME': 'SHORTNAME', 'DISTRICT': 'DISTRICT', 'COLOR': 'COLOR', 'TOTAL': 'TOTAL', 'TARGET_DEV': 'TARGET_DEV', 'TARGET_DEV_1': 'TARGET_DEV_1', 'SRWVAP': 'SRWVAP', 'SRWVAP_P': 'SRWVAP_P', 'NHBVAP': 'NHBVAP', 'NHBVAP_P': 'NHBVAP_P', 'HBVAP': 'HBVAP', 'HBVAP_P': 'HBVAP_P', 'HXBVAP': 'HXBVAP', 'HXBVAP_P': 'HXBVAP_P', 'OTHVAP': 'OTHVAP', 'OTHVAP_P': 'OTHVAP_P', 'BVAP': 'BVAP', 'BVAP_P': 'BVAP_P', 'HVAP': 'HVAP', 'HVAP_P': 'HVAP_P', });
lyr_CommissionDistrict_gdb_6151358954043891792CommissionDistrictshp_7.set('fieldAliases', {'ID': 'ID', 'COMMNAME': 'COMMNAME', 'GlobalID': 'GlobalID', });
lyr_SchoolBoardDistrict_gdb_2864880642687542528SchoolBoardDistrictshp_8.set('fieldAliases', {'ID': 'ID', 'BRDMBR': 'BRDMBR', 'GlobalID': 'GlobalID', });
lyr_MiamiCityCommissionDistricts2026Commission_Districtsshp_9.set('fieldAliases', {'FID': 'FID', 'COMDISTID': 'COMDISTID', 'COMNAME': 'COMNAME', 'ADDRESS': 'ADDRESS', 'PHONE': 'PHONE', 'EMAIL': 'EMAIL', 'WEBSITE': 'WEBSITE', 'SHAPE_STAr': 'SHAPE_STAr', 'SHAPE_STLe': 'SHAPE_STLe', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Amendment3_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_No': 'No', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Yes': 'Yes', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Winner': 'Winner', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_No %': 'No %', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Yes %': 'Yes %', });
lyr_Amendment3YesNo_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_No': 'No', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Yes': 'Yes', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Winner': 'Winner', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_No %': 'No %', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Yes %': 'Yes %', });
lyr_USSenateGeneral_1.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'Range', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'United States Senator-results-Miami-Dade_Angie Nixon': 'Range', 'United States Senator-results-Miami-Dade_Ashley Moody': 'Range', 'United States Senator-results-Miami-Dade_Neil J. Gillespie': 'Range', 'United States Senator-results-Miami-Dade_Winner': 'TextEdit', 'United States Senator-results-Miami-Dade_Angie Nixon %': 'TextEdit', 'United States Senator-results-Miami-Dade_Ashley Moody %': 'TextEdit', 'United States Senator-results-Miami-Dade_Neil J. Gillespie %': 'TextEdit', });
lyr_USSenateGeneral_2.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'Range', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'United States Senator-results-Miami-Dade_Angie Nixon': 'Range', 'United States Senator-results-Miami-Dade_Ashley Moody': 'Range', 'United States Senator-results-Miami-Dade_Neil J. Gillespie': 'Range', 'United States Senator-results-Miami-Dade_Winner': 'TextEdit', 'United States Senator-results-Miami-Dade_Angie Nixon %': 'TextEdit', 'United States Senator-results-Miami-Dade_Ashley Moody %': 'TextEdit', 'United States Senator-results-Miami-Dade_Neil J. Gillespie %': 'TextEdit', });
lyr_USSenatePrimary_3.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'Range', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'DEM United States Senator-results-Miami-Dade_Alex Vindman': 'Range', 'DEM United States Senator-results-Miami-Dade_Angie Nixon': 'Range', 'DEM United States Senator-results-Miami-Dade_Winner': 'TextEdit', 'DEM United States Senator-results-Miami-Dade_Alex Vindman %': 'TextEdit', 'DEM United States Senator-results-Miami-Dade_Angie Nixon %': 'TextEdit', });
lyr_USSenatePrimary_4.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'Range', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'DEM United States Senator-results-Miami-Dade_Alex Vindman': 'Range', 'DEM United States Senator-results-Miami-Dade_Angie Nixon': 'Range', 'DEM United States Senator-results-Miami-Dade_Winner': 'TextEdit', 'DEM United States Senator-results-Miami-Dade_Alex Vindman %': 'TextEdit', 'DEM United States Senator-results-Miami-Dade_Angie Nixon %': 'TextEdit', });
lyr_miami_dade_renter_data_filtered_5.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'BLKGRPCE': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'ACSDT5Y2024.B25003-Data_Geographic Area Name': 'TextEdit', 'ACSDT5Y2024.B25003-Data_Total': 'Range', 'ACSDT5Y2024.B25003-Data_Margin of Error!!Total:': 'Range', 'ACSDT5Y2024.B25003-Data_Owner Occupied': 'Range', 'ACSDT5Y2024.B25003-Data_Margin of Error!!Total:!!Owner occupied': 'Range', 'ACSDT5Y2024.B25003-Data_Renter Occupied': 'Range', 'ACSDT5Y2024.B25003-Data_Margin of Error!!Total:!!Renter occupied': 'Range', 'ACSDT5Y2024.B25003-Data_% Owned': 'TextEdit', 'ACSDT5Y2024.B25003-Data_% Rented': 'TextEdit', });
lyr_FLStateHouseDistricts2022H000H8013shp_6.set('fieldImages', {'LONGNAME': 'TextEdit', 'SHORTNAME': 'TextEdit', 'DISTRICT': 'Range', 'COLOR': 'TextEdit', 'TOTAL': 'TextEdit', 'TARGET_DEV': 'TextEdit', 'TARGET_DEV_1': 'TextEdit', 'SRWVAP': 'TextEdit', 'SRWVAP_P': 'TextEdit', 'NHBVAP': 'TextEdit', 'NHBVAP_P': 'TextEdit', 'HBVAP': 'TextEdit', 'HBVAP_P': 'TextEdit', 'HXBVAP': 'TextEdit', 'HXBVAP_P': 'TextEdit', 'OTHVAP': 'TextEdit', 'OTHVAP_P': 'TextEdit', 'BVAP': 'TextEdit', 'BVAP_P': 'TextEdit', 'HVAP': 'TextEdit', 'HVAP_P': 'TextEdit', });
lyr_CommissionDistrict_gdb_6151358954043891792CommissionDistrictshp_7.set('fieldImages', {'ID': '', 'COMMNAME': '', 'GlobalID': '', });
lyr_SchoolBoardDistrict_gdb_2864880642687542528SchoolBoardDistrictshp_8.set('fieldImages', {'ID': 'TextEdit', 'BRDMBR': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_MiamiCityCommissionDistricts2026Commission_Districtsshp_9.set('fieldImages', {'FID': 'Range', 'COMDISTID': 'Range', 'COMNAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'PHONE': 'TextEdit', 'EMAIL': 'TextEdit', 'WEBSITE': 'TextEdit', 'SHAPE_STAr': 'TextEdit', 'SHAPE_STLe': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Amendment3_10.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'Range', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_No': 'TextEdit', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Yes': 'TextEdit', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Winner': 'TextEdit', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_No %': 'TextEdit', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Yes %': 'TextEdit', });
lyr_Amendment3YesNo_11.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'Range', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_No': 'TextEdit', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Yes': 'TextEdit', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Winner': 'TextEdit', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_No %': 'TextEdit', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Yes %': 'TextEdit', });
lyr_USSenateGeneral_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'GlobalID': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'United States Senator-results-Miami-Dade_Angie Nixon': 'hidden field', 'United States Senator-results-Miami-Dade_Ashley Moody': 'hidden field', 'United States Senator-results-Miami-Dade_Neil J. Gillespie': 'hidden field', 'United States Senator-results-Miami-Dade_Winner': 'hidden field', 'United States Senator-results-Miami-Dade_Angie Nixon %': 'inline label - always visible', 'United States Senator-results-Miami-Dade_Ashley Moody %': 'inline label - always visible', 'United States Senator-results-Miami-Dade_Neil J. Gillespie %': 'hidden field', });
lyr_USSenateGeneral_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'ID': 'hidden field', 'GlobalID': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'United States Senator-results-Miami-Dade_Angie Nixon': 'inline label - always visible', 'United States Senator-results-Miami-Dade_Ashley Moody': 'inline label - always visible', 'United States Senator-results-Miami-Dade_Neil J. Gillespie': 'hidden field', 'United States Senator-results-Miami-Dade_Winner': 'inline label - always visible', 'United States Senator-results-Miami-Dade_Angie Nixon %': 'hidden field', 'United States Senator-results-Miami-Dade_Ashley Moody %': 'hidden field', 'United States Senator-results-Miami-Dade_Neil J. Gillespie %': 'hidden field', });
lyr_USSenatePrimary_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'ID': 'hidden field', 'GlobalID': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'DEM United States Senator-results-Miami-Dade_Alex Vindman': 'hidden field', 'DEM United States Senator-results-Miami-Dade_Angie Nixon': 'hidden field', 'DEM United States Senator-results-Miami-Dade_Winner': 'hidden field', 'DEM United States Senator-results-Miami-Dade_Alex Vindman %': 'inline label - always visible', 'DEM United States Senator-results-Miami-Dade_Angie Nixon %': 'inline label - always visible', });
lyr_USSenatePrimary_4.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'ID': 'hidden field', 'GlobalID': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'DEM United States Senator-results-Miami-Dade_Alex Vindman': 'inline label - always visible', 'DEM United States Senator-results-Miami-Dade_Angie Nixon': 'inline label - always visible', 'DEM United States Senator-results-Miami-Dade_Winner': 'inline label - always visible', 'DEM United States Senator-results-Miami-Dade_Alex Vindman %': 'hidden field', 'DEM United States Senator-results-Miami-Dade_Angie Nixon %': 'hidden field', });
lyr_miami_dade_renter_data_filtered_5.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOID': 'hidden field', 'GEOIDFQ': 'inline label - always visible', 'NAMELSAD': 'hidden field', 'MTFCC': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'ACSDT5Y2024.B25003-Data_Geographic Area Name': 'hidden field', 'ACSDT5Y2024.B25003-Data_Total': 'hidden field', 'ACSDT5Y2024.B25003-Data_Margin of Error!!Total:': 'hidden field', 'ACSDT5Y2024.B25003-Data_Owner Occupied': 'hidden field', 'ACSDT5Y2024.B25003-Data_Margin of Error!!Total:!!Owner occupied': 'hidden field', 'ACSDT5Y2024.B25003-Data_Renter Occupied': 'hidden field', 'ACSDT5Y2024.B25003-Data_Margin of Error!!Total:!!Renter occupied': 'hidden field', 'ACSDT5Y2024.B25003-Data_% Owned': 'hidden field', 'ACSDT5Y2024.B25003-Data_% Rented': 'inline label - always visible', });
lyr_FLStateHouseDistricts2022H000H8013shp_6.set('fieldLabels', {'LONGNAME': 'hidden field', 'SHORTNAME': 'hidden field', 'DISTRICT': 'inline label - always visible', 'COLOR': 'hidden field', 'TOTAL': 'hidden field', 'TARGET_DEV': 'hidden field', 'TARGET_DEV_1': 'hidden field', 'SRWVAP': 'hidden field', 'SRWVAP_P': 'hidden field', 'NHBVAP': 'hidden field', 'NHBVAP_P': 'hidden field', 'HBVAP': 'hidden field', 'HBVAP_P': 'hidden field', 'HXBVAP': 'hidden field', 'HXBVAP_P': 'hidden field', 'OTHVAP': 'hidden field', 'OTHVAP_P': 'hidden field', 'BVAP': 'hidden field', 'BVAP_P': 'hidden field', 'HVAP': 'hidden field', 'HVAP_P': 'hidden field', });
lyr_CommissionDistrict_gdb_6151358954043891792CommissionDistrictshp_7.set('fieldLabels', {'ID': 'inline label - always visible', 'COMMNAME': 'inline label - always visible', 'GlobalID': 'hidden field', });
lyr_SchoolBoardDistrict_gdb_2864880642687542528SchoolBoardDistrictshp_8.set('fieldLabels', {'ID': 'inline label - always visible', 'BRDMBR': 'inline label - always visible', 'GlobalID': 'hidden field', });
lyr_MiamiCityCommissionDistricts2026Commission_Districtsshp_9.set('fieldLabels', {'FID': 'hidden field', 'COMDISTID': 'inline label - always visible', 'COMNAME': 'inline label - always visible', 'ADDRESS': 'hidden field', 'PHONE': 'hidden field', 'EMAIL': 'hidden field', 'WEBSITE': 'hidden field', 'SHAPE_STAr': 'hidden field', 'SHAPE_STLe': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', });
lyr_Amendment3_10.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'inline label - always visible', 'GlobalID': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_No': 'inline label - always visible', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Yes': 'inline label - always visible', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Winner': 'inline label - always visible', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_No %': 'inline label - always visible', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Yes %': 'inline label - always visible', });
lyr_Amendment3YesNo_11.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'inline label - always visible', 'GlobalID': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_No': 'inline label - always visible', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Yes': 'inline label - always visible', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Winner': 'inline label - always visible', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_No %': 'inline label - always visible', 'ConsAmdt3 Increased Homestead Exemption-results-Miami-Dade_Yes %': 'inline label - always visible', });
lyr_Amendment3YesNo_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});