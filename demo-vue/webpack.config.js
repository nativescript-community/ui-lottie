const WebpackTemplate = require('nativescript-akylas-webpack-template');
const { resolve } = require('path');

module.exports = env => {
    const platform = env && ((env.android && 'android') || (env.ios && 'ios'));
    const appComponents = [];

    const projectRoot = __dirname;
    const {
        development = false,
        // uglify,
        production, // --env.production
        // sourceMap, // --env.sourceMap
        devlog, // --env.loglevel
        adhoc // --env.adhoc
    } = env;
    if (adhoc) {
        env = Object.assign({}, env, {
            production: true,
            sourceMap: true,
            uglify: true
        });
    }
    let aliases = {
        vue: 'nativescript-vue',
        // 'nativescript-vue': 'nativescript-akylas-vue'
    };

    if (!!development) {
        const srcFullPath = resolve(projectRoot, '..', 'src');
        aliases = Object.assign(aliases, {
            '#': srcFullPath,
            '@akylas/nativescript-lottie$': '#/@akylas/nativescript-lottie.' + platform
        });
    }

    const config = WebpackTemplate(env, {
        projectRoot,
        appComponents,
        snapshotPlugin: {
            useLibs: true,
            targetArchs: ['arm', 'arm64', 'ia32']
        },
        alias: aliases,
        definePlugin: {
            PRODUCTION: !!production,
            LOG_LEVEL: !!devlog ? '"full"' : '""',
            TEST_LOGS: adhoc || !production
        }
    });

    return config;
};
