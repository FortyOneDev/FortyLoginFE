const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const ruleForTypeScript = {
    test: /\.tsx?$/,
    use: [
        {
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                        '@babel/preset-react',
                        { 
                            runtime: 'automatic'
                        }
                    ],
                    '@babel/preset-typescript',
                ]
            }
        },
        'ts-loader'
    ],
    exclude: /node_modules/,
};

const ruleForStyles =     {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
};

const rules = [ ruleForTypeScript, ruleForStyles ];

module.exports = (env, argv) => {
    const { mode } = argv;
    const isProduction = mode === 'production';

    return {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: isProduction 
            ? '[name].[contenthash].js'
            : 'main.js'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            alias: {
                'react': 'react',
            }
        },
        plugins: [
          new HtmlWebpackPlugin({ template: 'public/index.html' })  
        ],
        module: {
            rules
        },
        devServer: {
            open: true,
            port: 3000,
            //overlay: true,
            compress: true
        },
        //devtool: 'source-map'
    }
};
module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader', // Inyecta estilos CSS en el DOM
            'css-loader',   // Traduce CSS a módulos CommonJS
            'sass-loader'   // Compila Sass a CSS
          ]
        }
      ]
    }
  };