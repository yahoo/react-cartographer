/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

'use strict';

import BingMapService from './bingMap';
import GoogleMapService from './googleMap';
import YahooMapService from './yahooMap';

const bingService   = new BingMapService();
const yahooService  = new YahooMapService();
const googleService = new GoogleMapService();

/**
 * Call the mapLocation service to obtain location details for
 * the address provided
 *
 * @param {object} context
 * @param {object} params
 * @param {function} done
 */

export default class MapLocationFactory {
    getMap (params) {
        const PROVIDER = params.provider;

        if (PROVIDER === 'google') {
            return googleService.getMap(params);
        } else if (PROVIDER === 'bing') {
            return bingService.getMap(params);
        }

        return yahooService.getMap(params);
    }
}