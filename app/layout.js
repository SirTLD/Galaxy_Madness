import '../styles/globals.css';
import React from 'react';
import PropTypes from 'prop-types';

const RootLayout = ({ children }) => (
    <html lang="en">
        <head>
            <link rel="preconnect" href="https://stijndv.com" />
            <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
        </head>
        <body>{children}</body>
    </html>
);

RootLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default RootLayout;
