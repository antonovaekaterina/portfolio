module.exports = api => {
    api.cache(false);

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        node: 'current',
                    },
                },
            ],
        ],
        plugins: [['@babel/plugin-proposal-class-properties', {loose: false}]],
        assumptions: {
            setPublicClassFields: false,
        },
    };
};
