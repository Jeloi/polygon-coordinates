'use strict';

var EARTH_RADIUS = 6371.392896; // kilometers

function destinationCoordinate(coordinate, bearingDegrees, distanceKm) {
  var origLatitude = degreesToRadians(coordinate[0]);
  var origLongitude = degreesToRadians(coordinate[1]);
  var angularDistance = distanceKm/EARTH_RADIUS;
  var bearingRadians = degreesToRadians(bearingDegrees);
  var destLatitude = Math.asin(Math.sin(origLatitude)*Math.cos(angularDistance) +
    Math.cos(origLatitude)*Math.sin(angularDistance)*Math.cos(bearingRadians));
  var destLongitude = origLongitude + 
    Math.atan2(Math.sin(bearingRadians)*Math.sin(angularDistance)*Math.cos(origLatitude),
               Math.cos(angularDistance)-Math.sin(origLatitude)*Math.sin(destLatitude));
  return [radiansToDegrees(destLatitude), radiansToDegrees(destLongitude)];
}

function polygonCoordinates(centerCoordinate, numVertices, radiusKm) {
  var results = [];
  var centralAngle = 360/numVertices;
  for (var bearing = 0; bearing < 360; bearing+=centralAngle) {
    var circleCoordinate = destinationCoordinate(centerCoordinate, bearing, radiusKm);
    results.push(circleCoordinate);
  }
  return results;
}

function degreesToRadians(degrees) {
  return degrees * Math.PI/180;
}
function radiansToDegrees(radians) {
  return radians * 180/Math.PI;
}

module.exports = {
  getDestinationCoordinate: destinationCoordinate,
  polygonCoordinates: polygonCoordinates,
  degreesToRadians: degreesToRadians,
  radiansToDegrees: radiansToDegrees
};
