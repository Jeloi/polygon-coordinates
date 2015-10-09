# polygon-coordinates

Generate coordinates for equilateral polygons around a center point.

## Example

```js
var centerCoordinate = [40.727093, -73.97864];
var hexagon = PolygonCoordinates.polygonCoordinates(centerCoordinate, 6, 1);
console.log(hexagon)
/* [ [ 40.73608566148679, -73.97864 ],
  [ 40.73158887501089, -73.9683627060913 ],
  [ 40.72259621361338, -73.96836409475593 ],
  [ 40.71810033851322, -73.97864 ],
  [ 40.72259621361338, -73.98891590524406 ],
  [ 40.73158887501089, -73.98891729390868 ] ] */

```
A destinationCoordinate function is also exposed.
```js
var pointA = [40.727093, -73.97864];
var destinationCoord = PolygonCoordinates.destinationCoordinate(pointA, 90, 1);
// Result is a point 1km away from pointA, with a 90 degree bearing.
```

## Installation

`npm install polygon-coordinates`

## Tests

`npm test`
