/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

'use strict';

/*
 * Yahoo MapImage Service
 * @class GoogleMapService
 */

const _ = {
    // Collection
    pick: require('lodash/pickBy'),
    identity: require('lodash/identity')
};

import {yahoo as config} from '../../config/config.json';
import utils from 'url';

export default class YahooMapService {
    get name() {
        return config.name;
    }

    /**
     * Get the map location details for the address provided in the params
     * Map Location details include: geo coordinates and map url to display
     *
     * @param {Object} params
     * @returns {{mapId: (*|string|string|string|string), data: {locationLink: *, locationText: string}}}
     */
    getMap (params) {
        let location;
        let url;
        const query = _.pick({
            appid: params.providerKey,
            imw: params.width,
            imh: params.height,
            imi: config.imi,
            radius: config.radius,
            zoom: params.zoom
        }, _.identity);

        if (isFinite(params.longitude) && isFinite(params.latitude)) {
            location = [params.latitude, params.longitude].join(',');
            query.clat = params.latitude;
            query.clon = params.longitude;
        } else {
            location = [params.line1, params.line2, params.line3].join(',');
            query.q = location;
        }

        url = utils.format({
            protocol: config.protocol,
            hostname: config.host,
            pathname: config.path,
            query: query
        });

        return {
            mapId: params.mapId,
            data: {
                locationLink: url,
                locationText: location
            }
        };
    }
}
