/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

/* jshint unused:vars */
/* global describe, it, expect */

'use strict';

var expect      = require('chai').expect;

describe('GoogleMapService', function () {
    var service = require('../../lib/googleMap');

    it('#name is "google"', function() {
        expect(service.name).to.equal('google');
    });

    describe('#read', function() {
        it('should return the correct locationLink and locationText', function () {
            var result = service.getMap({
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
    });
});