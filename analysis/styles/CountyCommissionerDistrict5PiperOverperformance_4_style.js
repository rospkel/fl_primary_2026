var size = 0;
var placement = 'point';

var style_CountyCommissionerDistrict5PiperOverperformance_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("County Commissioner District 5-results-Miami-Dade_Rob Piper %");
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
    if (value >= 0.088235 && value <= 0.157290) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,25,28,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 0.157290 && value <= 0.226345) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(245,144,83,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 0.226345 && value <= 0.295400) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,223,153,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 0.295400 && value <= 0.364455) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(221,241,180,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 0.364455 && value <= 0.433510) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(145,203,168,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 0.433510 && value <= 0.560440) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(43,131,186,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    };

    return style;
};
