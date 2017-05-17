/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Map from './src/components/Map';

ReactDOM.render(
    <div>
        Example of using a Google Map (Location: 1600 Amphitheatre Parkway, Mountain View CA United States)
        <Map    provider='google'
                mapId='googleLocation'
                addressLine1='1600 Amphitheatre Parkway'
                city='Mountain View'
                state='CA'
                country='United States'
                zoom={15}
                height={270}
                width={580}
        />
        <br />

        Example of using a Google Map (Latitude: 51.477222, Longitude: 0)
        <Map    provider='google'
                mapId='googleLocation'
                latitude={51.477222}
                longitude={0}
                zoom={15}
                height={270}
                width={580} />
        <br />

        Example of using a Yahoo Map (Location: 701 First Avenue, Sunnyvale CA United States)
        <Map
            provider='yahoo'
            mapId='yahooLocation'
            addressLine1='701 First Avenue'
            city='Sunnyvale'
            state='CA'
            country='United States'
            zoom={15}
            height={270}
            width={580}
        />
        <br />

        Example of using a Yahoo Map (Latitude: 51.477222, Longitude: 0)
        <Map
            provider='yahoo'
            mapId='yahooLocation'
            latitude={51.477222}
            longitude={0}
            zoom={15}
            height={270}
            width={580}
        />
        <br />

        Example of using a Bing Map (Location: One Microsoft Way, Redmond WA United States)
        <Map
            provider='bing'
            providerKey='AkcOTa579AYlvB3OsS4N5OpCPsxG2rUiVQibQEwneylAPIuyhAim3paIGLZp7ukc'
            mapId='bing'
            addressLine1='One Microsoft Way'
            city='Redmond'
            state='WA'
            country='United States'
            zoom={15}
            height={270}
            width={580}
        />
        <br />

        Example of using a Bing Map (Latitude: 51.477222, Longitude: 0)
        <Map
            provider='bing'
            providerKey='AkcOTa579AYlvB3OsS4N5OpCPsxG2rUiVQibQEwneylAPIuyhAim3paIGLZp7ukc'
            mapId='bing'
            latitude={51.477222}
            longitude={0}
            zoom={15}
            height={270}
            width={580}
        />
        <br />

        Example of using a Bing Map as a background image (Latitude: 51.477222, Longitude: 0)
        <Map
            provider='bing'
            providerKey='AkcOTa579AYlvB3OsS4N5OpCPsxG2rUiVQibQEwneylAPIuyhAim3paIGLZp7ukc'
            mapId='bing'
            latitude={51.477222}
            longitude={0}
            zoom={15}
            height={270}
            useBackgroundImageStyle={true}
        />
        <br />
    </div>,
    document.getElementById('content'));
