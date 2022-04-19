// https://github.com/worldzhao/blog/issues/5


// module.exports = {
//   presets: [
//     '@babel/typescript',
//     [
//       '@babel/env',
//       {
//         targets: {
//           browsers: [
//             "last 2 versions",
//             "IE 10"
//           ]
//         },
//         modules: false,
//       }
//     ]
//   ],
//   plugins: [
//     [
//       require.resolve('@babel/plugin-proposal-decorators'),
//       {
//         legacy: true
//       }
//     ],
//     [
//       '@babel/plugin-transform-runtime',
//       {
//         useESModules: true
//       }
//     ]
//   ]
// }

module.exports = {
  "presets": [
    '@babel/typescript',
    // "/Users/ajuan/Downloads/util-master/node_modules/father-build/node_modules/@babel/preset-typescript/lib/index.js",
    [
      '@babel/env',
      // "/Users/ajuan/Downloads/util-master/node_modules/father-build/node_modules/@babel/preset-env/lib/index.js",
      {
        "targets": {"browsers": ["last 2 versions", "IE 10"]},
      "modules": false
      }
    ]
  ],
  "plugins": [
    // ["/Users/ajuan/Downloads/util-master/node_modules/father-build/node_modules/@babel/plugin-proposal-decorators/lib/index.js", {"legacy": true}],
    [
      '@babel/plugin-transform-runtime',
      // "/Users/ajuan/Downloads/util-master/node_modules/father-build/node_modules/@babel/plugin-transform-runtime/lib/index.js",
      {
        "useESModules": true,
        // "version": "7.17.9"
      }
    ]
  ]
}


// module.exports = {
//   presets: [
//     '@babel/typescript',
//     '@babel/env',
//   ],
//   plugins: [
//     '@babel/plugin-transform-runtime',
//   ],
//   env: {
//     es: {
//       presets: [
//         [
//           '@babel/env',
//           {
//             modules: false,
//           },
//         ],
//       ],
//       plugins: [
//         [
//           '@babel/plugin-transform-runtime',
//           {
//             useESModules: true,
//           },
//         ],
//       ],
//     },
//   },
// }
