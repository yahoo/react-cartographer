<img src="https://avatars2.githubusercontent.com/u/6412038?v=3&s=200" alt="react logo" title="react" align="right" width="64" height="64" />

react-cartographer 
=========

[![npm version](https://badge.fury.io/js/react-cartographer.svg)](http://badge.fury.io/js/react-cartographer)
[![Build Status](https://travis-ci.org/yahoo/react-cartographer.svg?branch=master)](https://travis-ci.org/yahoo/react-cartographer)
[![Dependency Status](https://david-dm.org/yahoo/react-cartographer.svg)](https://david-dm.org/yahoo/react-cartographer)
[![devDependency Status](https://david-dm.org/yahoo/react-cartographer/dev-status.svg)](https://david-dm.org/yahoo/react-cartographer#info=devDependencies)
[![Coverage Status](https://coveralls.io/repos/yahoo/react-cartographer/badge.svg)](https://coveralls.io/r/yahoo/react-cartographer)


Generic component for displaying maps using (Yahoo, Google or Bing) as provider.

```bash
$ npm install --save react-cartographer
```

## Links
* [Google Map Documentation](https://developers.google.com/maps/documentation/staticmaps/)
* [Yahoo Map Documenation](https://developer.yahoo.com/maps/)
* [Bing Map Documentation](https://msdn.microsoft.com/en-us/library/ff701724.aspx)

## Features
* Map Image for location provided (address, city, state, country) or (latitude and longitude)
* Latitude and Longitude override (address, city, state, country)
* Flexible image size, simply provide height & width
* Static zoom ability
* Updated for React 0.13
* Ability to use Yahoo / Google / Bing as a provider
* Marker Pins

## Usage
```js
var MapComponent    = require('react-cartographer/components/Map.jsx');
```

Map of Yahoo Location using google
```js
<MapComponent
    provider='google'
    providerKey='{your app key}'
    mapId='map'
    addressLine1='701 First Avenue'
    city='Sunnyvale'
    state='CA'
    country='United States'
    zoom={15}
    height={270}
    width={580}
    />
```
Map of Apple Location using yahoo
```js
<MapComponent
    provider='yahoo'
    providerKey='{your app id}'
    mapId='map'
    addressLine1='1 Infinite Loop'
    city='Cupertino'
    state='CA'
    country='United States'
    zoom={15}
    height={270}
    width={580}
    />
```
Map of Apple Location using bing
```js
<MapComponent
    provider='bing'
    providerKey='{your app id}'
    mapId='map'
    addressLine1='1 Infinite Loop'
    city='Cupertino'
    state='CA'
    country='United States'
    zoom={15}
    height={270}
    width={580}
    />
```
Map of Yahoo Location using google (latitude, longitude)
```js
<MapComponent
    provider='google'
    providerKey='{your app key}'
    mapId='map'
    latitude={51.477222}
    longitude={0}
    zoom={15}
    height={270}
    width={580}
    />
```
Map of Apple Location using yahoo (latitude, longitude)
```js
<MapComponent
    provider='yahoo'
    providerKey='{your app id}'
    mapId='map'
    latitude={51.477222}
    longitude={0}
    zoom={15}
    height={270}
    width={580}
    />
```
Map of Apple Location using bing (latitude, longitude)
```js        
<MapComponent
    provider='bing'
    providerKey='{your app id}'
    mapId='map'
    latitude={51.477222}
    longitude={0}
    zoom={15}
    height={270}
    width={580}
    />
```

## Development
```sh
// clone the repository
$ git clone https://github.com/yahoo/react-cartographer.git

$ cd react-cartographer

// install the dependencies
$ npm install

// run the tests
$ npm run test

// runs demo example
// localhost:8080
$ npm run start
```

### Top-Level Props
---
| Props |  Description |  Default Value |
| --- | --- |--- |
| providerKey | provider key supplied by the provider (Yahoo, Google, or Bing) | Highly suggested for tracking purposes, Yahoo and Google allow for no provider key, but will limit daily requests, Bing requires a provider key  |
| provider | provider (Yahoo / Google / Bing) | yahoo |
| mapId | Map ID to differentiate from other maps | map |
| addressLine1 | address of location (street name and street number) |  |
| city | city |  |
| state | state |  |
| country | country |  |
| latitude | latitude | Latitude location |
| longitude | longitude | Longitude location |
| height | height of map |  270px |
| width | width of map | 580px | 
| zoom | zoom level of the map location |  10 |

## License

This software is free to use under the Yahoo Inc. BSD license.
See the [LICENSE file][] for license text and copyright information.

[LICENSE file]: https://github.com/yahoo/react-cartographer/blob/master/LICENSE.md