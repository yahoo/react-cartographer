/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

'use strict';

/*
 * Google MapImage Service
 * @class GoogleMapService
 */

var _ = {
    // Collection
    pick: require('lodash/object/pick'),
    identity: require('lodash/utility/identity')
};

var config  = require('../config/config.json').google;
var utils   = require('url');

module.exports = {
    name: config.name,

    /**
     * Get the map location details for the address provided in the params
     *
     * @param {Object} params
     * @returns {{mapId: (*|string|string|string|string), data: {locationLink: *, locationText: string}}}
     */
    getMap: function(params) {
        var location;

        if (isFinite(params.longitude) && isFinite(params.latitude)) {
            location = [params.latitude, params.longitude].join(',');
        } else {
            location = [params.line1, params.line2, params.line3].join(',');
        }

        var url = utils.format({
            protocol: config.protocol,
            hostname: config.host,
            pathname: config.path,
            query: _.pick({
                center: location,
                size: [params.width, params.height].join('x'),
                mapType: config.mapType,
                markers: [config.markerColor, config.markerLabel, location].join('|'),
                zoom: params.zoom,
                key: params.providerKey
            }, _.identity)
        });

        return {
            mapId: params.mapId,
            data: {
                locationLink: url,
                locationText: location
            }
        };
    }
};