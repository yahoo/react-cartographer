/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

'use strict';

/*
 * Bing MapImage Service
 * @class BingMapService
 */

const _ = {
    // Collection
    pick: require('lodash/pickBy'),
    identity: require('lodash/identity')
};

import {bing as config} from '../../config/config.json';
import utils from 'url';

export default class BingMapService {
    get name() {
        return config.name;
    }

    /**
     * Get the map location details for the address provided in the params
     *
     * @param {Object} params
     * @returns {{mapId: (*|string|string|string|string), data: {locationLink: *, locationText: string}}}
     */
    getMap (params) {
        let locationText;
        let location;
        let pushpin;
        let url;

        if (isFinite(params.longitude) && isFinite(params.latitude)) {
            pushpin = location = locationText = [params.latitude, params.longitude].join(',');
            if (isFinite(params.zoom)) {
                location = [location, params.zoom].join('/');
            }
        } else {
            location = locationText = [params.line1, params.line2, params.line3].join(',');
        }

        url = utils.format({
            protocol: config.protocol,
            hostname: config.host,
            pathname: config.path + encodeURIComponent(location),
            query: _.pick({
                mapSize: [params.width, params.height].join(','),
                key: params.providerKey,
                pushpin: pushpin
            }, _.identity)
        });

        return {
            mapId: params.mapId,
            data: {
                locationLink: url,
                locationText: locationText
            }
        };
    }
}
