/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

'use strict';

import React, { Component } from 'react';
import MapLocationFactory from '../lib/mapLocationFactory';

// Factory
const factory = new MapLocationFactory();

export default class Map extends Component {
    static propTypes = {
        providerKey: React.PropTypes.string.isRequired,
        provider: React.PropTypes.oneOf(['yahoo', 'google', 'bing']),
        mapId: React.PropTypes.string.isRequired,
        addressLine1: React.PropTypes.string,
        city: React.PropTypes.string,
        state: React.PropTypes.string,
        country: React.PropTypes.string,
        longitude: React.PropTypes.number,
        latitude: React.PropTypes.number,
        height: React.PropTypes.number.isRequired,
        width: React.PropTypes.number.isRequired,
        zoom: React.PropTypes.number,
        useBackgroundImageStyle: React.PropTypes.bool
    }

    static defaultProps = {
        provider: 'yahoo',
        mapId: 'map',
        height: 270,
        width: 580,
        zoom: 10,
        useBackgroundImageStyle: false
    }

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