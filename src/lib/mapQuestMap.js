/**
 * Copyright 2014, Yahoo! Inc.
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

import {mapQuest as config} from '../../config/config.json';
import utils from 'url';

export default class MapQuestService {
    /**
     * Get the map location details for the address provided in the params
     *
     * @param {Object} params
     * @returns {{mapId: (*|string|string|string|string), data: {locationLink: *, locationText: string}}}
     */
    getMap (params) {
        var location = [params.line1, params.line2, params.line3].join(',');
        var url = utils.format({
            protocol: config.protocol,
            hostname: config.host,
            pathname: config.path,
            query: _.pick({
                key: params.providerKey,
                size: [params.width, params.height].join(','),
                type: config.mapType,
                showicon: config.icon,
                location: location
            }, _.identity)
        });

        return {
            mapId: params.mapId,
            data: {
                locationLink: url,
                locationText: location
            }
        }
    }
}
