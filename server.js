const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const app = express()
const port = process.env.port || 3000;
const environment = process.env.npm_lifecycle_event; 


// Routes -- START
app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Routes -- END


// Webpack Development Middleware -- START
if(environment === "dev"){

   let compiler = webpack(webpackConfig);

   app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true, publicPath: webpackConfig.output.publicPath, stats:    { colors: true }
   }));

   app.use(require('webpack-hot-middleware')(compiler));
}

// Webpack Development Middleware -- END

app.use(express.static(path.resolve(__dirname,'dist')));

app.listen(port, () => { console.log(`App is listening on port ${port}`) });