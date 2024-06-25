{
  /** @type {import('next').NextConfig} */
  
  module.exports = {
    transpilePackages: ["@repo/ui", "@repo/shared-utils", "@repo/global-assets"],
    webpack(config) {
      const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /url$/,
            use: 'raw-loader',
          },
          {
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  memo: true,
                  dimensions: false,
                  svgoConfig: {
                    multipass: true,
                    plugins: [
                      'removeDimensions',
                      'removeOffCanvasPaths',
                      'reusePaths',
                      'removeElementsByAttr',
                      'removeStyleElement',
                      'removeScriptElement',
                      'prefixIds',
                      'cleanupIDs',
                      {
                        name: 'cleanupNumericValues',
                        params: {
                          floatPrecision: 1,
                        },
                      },
                      {
                        name: 'convertPathData',
                        params: {
                          floatPrecision: 1,
                        },
                      },
                      {
                        name: 'convertTransform',
                        params: {
                          floatPrecision: 1,
                        },
                      },
                      {
                        name: 'cleanupListOfValues',
                        params: {
                          floatPrecision: 1,
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      });

      // Modify the file loader rule to ignore *.svg, since we have it handled now.
      fileLoaderRule.exclude = /\.svg$/i;

      return config;
    },
    // ...other config
  };
}