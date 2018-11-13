import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class WrapperDocument extends Document
{
    static getInitialProps({ renderPage })
    {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render()
    {
        return (
            <html lang="en">
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Head>
                    <script type="text/javascript" src="/static/js/echarts.min.js" />
                    <script type="text/javascript" src="/static/js/echarts-gl.min.js" />
                    <script type="text/javascript" src="/static/js/world.js" />
                    {/* <sctipt type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=ZUONbpqGBsYGXNIYHicvbAbM" /> */}
                    {/* <script type="text/javascript" src="/static/js/bmap.min.js" /> */}
                    {this.props.styleTags}
                    {/* <sctipt type="text/javascript" src="/static/js/baiduMapApi.js" /> */}
                    {/* <script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/extension/bmap.min.js" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
