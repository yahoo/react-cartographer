/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
import React from 'react';
import PropTypes from 'prop-types'
import MapLocationFactory from '../lib/mapLocationFactory';

// Factory
const factory = new MapLocationFactory();

export default function Map (props) {
    const location = factory.getMap({
        providerKey: props.providerKey,
        provider: props.provider,
        mapId: props.mapId,
        line1: props.addressLine1,
        line2: [props.city, props.state].join(','),
        line3: props.country,
        longitude: props.longitude,
        latitude: props.latitude,
        height: props.height,
        width: props.width,
        zoom: props.zoom,
        withoutMarker: props.withoutMarker
    });
    let locationText;
    let locationLink;
    let style;

    if (!location.data || !location.data.locationLink) {
        return null;
    }

    locationText = location.data.locationText;
    locationLink = location.data.locationLink;
    style = {
        width: props.width,
        height: props.height
    };

    if (props.useBackgroundImageStyle) {
        style = {
            width: '100%',
            height: props.height,
            background: `url(${locationLink}) no-repeat`
        };
    }

    return (
        <div style={style} className="cartographer-container">
            {
                !props.useBackgroundImageStyle ?
                <img src={locationLink} alt={locationText} title={locationText} /> : null
            }
        </div>
    );
}

Map.propTypes = {
    providerKey: PropTypes.string.isRequired,
    provider: PropTypes.oneOf(['yahoo', 'google', 'bing']),
    mapId: PropTypes.string.isRequired,
    addressLine1: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
    longitude: PropTypes.number,
    latitude: PropTypes.number,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    zoom: PropTypes.number,
    useBackgroundImageStyle: PropTypes.bool,
    withoutMarker: PropTypes.bool
};

Map.defaultProps = {
    provider: 'yahoo',
    mapId: 'map',
    height: 270,
    width: 580,
    zoom: 10,
    useBackgroundImageStyle: false,
    withoutMarker: false
};