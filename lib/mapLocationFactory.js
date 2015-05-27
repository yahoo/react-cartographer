/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

'use strict';

var yahooService    = require('./yahooMap');
var googleService   = require('./googleMap');
var bingService     = require('./bingMap');

/**
 * Call the mapLocation service to obtain location details for
 * the address provided
 *
 * @param {object} context
 * @param {object} params
 * @param {function} done
 */
module.exports = {
    getMap: function(params) {
        var PROVIDER = params.provider;

        if (PROVIDER === 'google') {
            return googleService.getMap(params);
        } else if (PROVIDER === 'bing') {
            return bingService.getMap(params);
        }

        return yahooService.getMap(params);
    }
};