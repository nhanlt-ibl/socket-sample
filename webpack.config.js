const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')

module.exports={
    entry:{
        server:'./src/server.ts'
    },
    output:{
        path:__dirname+'/dist',
        filename:'[name].js'
    },
    resolve:{
        extensions:['.ts','.js','.json']
    },
    module:{
        rules:[
            {
                test:/\.(ts|js)?$/,
                loader:'ts-loader'
            }
        ]
    },
    externals:[nodeExternals()]

}