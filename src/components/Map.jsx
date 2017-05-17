/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
import React from 'react';
import PropTypes from 'prop-types'
import MapLocationFactory from '../lib/mapLocationFactory';

// Factory
const factory = new MapLocationFactory();

export default class Map extends React.Component {
    getLocation () {
        return factory.getMap({
            providerKey: this.props.providerKey,
            provider: this.props.provider,
            mapId: this.props.mapId,
            line1: this.props.addressLine1,
            line2: [this.props.city, this.props.state].join(','),
            line3: this.props.country,
            longitude: this.props.longitude,
            latitude: this.props.latitude,
            height: this.props.height,
            width: this.props.width,
            zoom: this.props.zoom
        });
    }

    render () {
        const location = this.getLocation();
        let locationText;
        let locationLink;
        let style;

        if (!location.data || !location.data.locationLink) {
            return null;
        }

        locationText = location.data.locationText;
        locationLink = location.data.locationLink;
        style = {
            width: this.props.width,
            height: this.props.height
        };

        if (this.props.useBackgroundImageStyle) {
            style = {
                width: '100%',
                height: this.props.height,
                background: `url(${locationLink}) no-repeat`
            };
        }

        return (
            <div style={style} className="cartographer-container">
                {
                    !this.props.useBackgroundImageStyle ?
                    <img src={locationLink} alt={locationText} title={locationText} /> : null
                }
            </div>
        );
    }
};

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
    useBackgroundImageStyle: PropTypes.bool
};

Map.defaultProps = {
    provider: 'yahoo',
    mapId: 'map',
    height: 270,
    width: 580,
    zoom: 10,
    useBackgroundImageStyle: false
};