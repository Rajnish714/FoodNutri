const esbuild = require("esbuild");
(async () => {
    await esbuild.build({
        entryPoints: ['./src/main.ts'],
        bundle: true,
        platform: 'node',
        target: ['node18.16.0'],
        outdir: "./dist",
        sourcemap: false,
        minify: true,
        treeShaking: true,
        minifyWhitespace: true,
    })
})()
