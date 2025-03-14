const {merge} = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const packageJson=require('../package.json');
const commonConfig =require('./webpack.common');


const prodConfig={
    mode:'production',
    output:{
        filename:'[name].bundle.js',
        publicPath:'/marketing/latest/'
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'marketing',
            filename:'remoteEntry.js',
            exposes:{
                './MarketingApp':'./src/bootstrap'
            },
            shared:packageJson.dependencies
        })
    ]
}

module.exports=merge(commonConfig,prodConfig);