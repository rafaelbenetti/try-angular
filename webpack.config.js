const webpack = require('webpack');

const root = `${__dirname}/public`;
const dist = `${root}/dist`;

module.exports = {
    entry: `${root}/main.ts`,
    output:{
        path: dist,
        filename: `app.bundle.js`
    },
    module:{
        rules:[
            { test: /\.component.ts$/, loaders: 'angular2-template-loader'},
            { test: /\.ts$/, loaders:'awesome-typescript-loader'},
            { test: /\.html$/, loaders: 'html-loader'},
        ]
    },
    resolve:{
        extensions: ['*','.js','.ts','.html','.css']
    },
    plugins: [new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        minimize: true
    })]
};