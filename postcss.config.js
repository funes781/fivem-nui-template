export default {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' ? {
            'postcss-obfuscator': {
                enable: true,
                length: 8,
                srcPath: "src",
                desPath: "dist",
                extensions: ['.html', '.ts', '.tsx', '.js', '.jsx'],
            }
        } : {})
    },
}
