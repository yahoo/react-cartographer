/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

'use strict';

/*
 * Google MapImage Service
 * @class GoogleMapService
 */

const _ = {
    // Collection
    pick: require('lodash/pickBy'),
    identity: require('lodash/identity')
};

import {google as config} from '../../config/config.json';
import utils from 'url';

export default class GoogleMapService {
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
        let location;
        let url;

        if (isFinite(params.longitude) && isFinite(params.latitude)) {
            location = [params.latitude, params.longitude].join(',');
        } else {
            location = [params.line1, params.line2, params.line3].join(',');
        }

        url = utils.format({
            protocol: config.protocol,
            hostname: config.host,
            pathname: config.path,
            query: _.pick({
                center: location,
                size: [params.width, params.height].join('x'),
                mapType: config.mapType,
                markers: params.withoutMarker ? undefined : [config.markerColor, config.markerLabel, location].join('|'),
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
}
