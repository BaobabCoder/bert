Package.describe({
    name: 'baobabcoder:bert',
    version: '2.1.4',
    summary: 'A fork of the client side, multi-style alerts system for Meteor initially made by The Meteor Chef.',
    git: 'http://github.com/BaobabCoder/bert',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.2');

    api.use([
        'ecmascript',
        'templating',
        'session',
        'jquery',
        'fourseven:scss@4.5.4'
    ], 'client');

    api.addFiles([
        'templates/bert-alert.html',
        'templates/bert-alert.js',
        'templates/body.html',
        'stylesheets/colors.scss',
        'stylesheets/flexbox.scss',
        'stylesheets/bert.scss',
        'bert.js',
    ], 'client');

    api.export('Bert');
});

Package.onTest(function(api) {
    api.use(['tinytest', 'session', 'jquery']);
    api.use('baobabcoder:bert');
    api.addFiles('tests/client.js', 'client');
});