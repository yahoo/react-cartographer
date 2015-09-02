/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

/* jshint unused:vars */
/* global describe, it, expect */

'use strict';

import {expect} from 'chai';
import GoogleMapService from '../../src/lib/googleMap';

describe('GoogleMapService', () => {
    const service = new GoogleMapService();

    it('#name is "google"', () => {
        expect(service.name).to.equal('google');
    });

    describe('#read', () => {
        it('should return the correct locationLink and locationText', () => {
            const result = service.getMap({
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