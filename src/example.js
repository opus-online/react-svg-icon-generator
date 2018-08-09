const svgGenerator = require('./index.js');

const defaultConfig = {
    svgDir: './icons/',
    template: './template/icon.nunjucks',
    destination: './res/index.tsx'
};

const splitConfig = {
    svgDir: './icons/',
    mode: 'split',
    iconTemplate: './template/split-icons.nunjucks',
    template: './template/split-icon.nunjucks',
    destination: './res/Icon.tsx',
    iconDestination: './res/icons/'
};

svgGenerator(splitConfig);
