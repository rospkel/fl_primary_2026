var size = 0;
var placement = 'point';

var style_StateRepDist108Escarment_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Dem State Representative Dist 108-results-Miami-Dade_Dinah J. Escarment %");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 0.170000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,25,28,0.502)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 0.170000 && value <= 0.330000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(245,144,83,0.502)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 0.330000 && value <= 0.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,223,153,0.502)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 0.500000 && value <= 0.670000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(221,241,180,0.502)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 0.670000 && value <= 0.870000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(145,203,168,0.502)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 0.870000 && value <= 1.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(43,131,186,0.502)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    };

    return style;
};
