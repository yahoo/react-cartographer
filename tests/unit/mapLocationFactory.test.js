/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

/* jshint unused:vars */
/* global describe, it, expect */

'use strict';

var expect      = require('chai').expect;

describe('MapLocationFactory', function () {
    var factory = require('../../lib/mapLocationFactory');

    describe('#getMap', function() {
        it('should return the correct locationLink and locationText for Google', function () {
            var result = factory.getMap({
                provider: 'google',
                mapId: 'mapId',
                line1: 'line1',
                line2: 'line2',
                line3: 'line3',
                width: 200,
                height: 300
            });

            expect(result.data.locationText).to.equal('line1,line2,line3');
            expect(result.data.locationLink).to.equal('https://maps.googleapis.com/maps/api/staticmap' +
                '?center=line1%2Cline2%2Cline3&size=200x300&mapType=roadmap' +
                '&markers=color%3Apurple%7Clabel%3A1%7Cline1%2Cline2%2Cline3');
        });

        it('should return the correct locationLink and locationText for Google using lat/longitude', function () {
            var result = factory.getMap({
                provider: 'google',
                mapId: 'mapId',
                latitude: 2,
                longitude: 3,
                width: 200,
                height: 300
            });

            expect(result.data.locationText).to.equal('2,3');
            expect(result.data.locationLink).to.equal('https://maps.googleapis.com/maps/api/staticmap' +
                '?center=2%2C3&size=200x300&mapType=roadmap' +
                '&markers=color%3Apurple%7Clabel%3A1%7C2%2C3');
        });

        it('should return the correct locationLink and locationText for Yahoo', function () {
            var result = factory.getMap({
                provider: 'yahoo',
                mapId: 'map',
                line1: 'line1',
                line2: 'line2',
                line3: 'line3',
                providerKey: 'yahoo',
                width: 300,
                height: 500,
                zoom: 10
            });

            expect(result.mapId).to.equal('map');
            expect(result.data.locationText).to.equal('line1,line2,line3');
            expect(result.data.locationLink).to.equal('http://gws2.maps.yahoo.com/MapImage/' +
                '?appid=yahoo&imw=300&imh=500&imi=1-h-gws-2x&radius=700&zoom=10&q=line1%2Cline2%2Cline3');
        });

        it('should return the correct locationLink and locationText for Yahoo using lat/longitude', function () {
            var result = factory.getMap({
                provider: 'yahoo',
                mapId: 'map',
                latitude: 2,
                longitude: 3,
                providerKey: 'yahoo',
                width: 300,
                height: 500,
                zoom: 10
            });

            expect(result.mapId).to.equal('map');
            expect(result.data.locationText).to.equal('2,3');
            expect(result.data.locationLink).to.equal('http://gws2.maps.yahoo.com/MapImage/' +
                '?appid=yahoo&imw=300&imh=500&imi=1-h-gws-2x&radius=700&zoom=10&clat=2&clon=3');
        });

        it('should call Bing Map Service', function() {
            var result = factory.getMap({
                provider: 'bing',
                mapId: 'map',
                line1: 'line1',
                line2: 'line2',
                line3: 'line3',
                providerKey: 'key',
                width: 200,
                height: 300
            });

            expect(result.data.locationText).to.equal('line1,line2,line3');
            expect(result.data.locationLink).to.equal('https://dev.virtualearth.net/REST/V1/Imagery/Map/Road/' +
                'line1%2Cline2%2Cline3?mapSize=200%2C300&key=key');
        });

        it('should call Bing Map Service', function() {
            var result = factory.getMap({
                provider: 'bing',
                mapId: 'map',
                latitude: 2,
                longitude: 3,
                zoom: 11,
                providerKey: 'key',
                width: 200,
                height: 300
            });

            expect(result.data.locationText).to.equal('2,3');
            expect(result.data.locationLink).to.equal('https://dev.virtualearth.net/REST/V1/Imagery/Map/' +
                'Road/2%2C3%2F11?mapSize=200%2C300&key=key&pushpin=2%2C3');
        });
    });
});