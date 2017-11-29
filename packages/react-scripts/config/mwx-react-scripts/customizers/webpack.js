module.exports = {
    plugins: [
        function () {
            this.plugin('done', (stats) => {
                if (stats.compilation.errors && stats.compilation.errors.length) {
                    console.log(stats.compilation.errors)
                    process.exit(1)
                }
            })
        },

    ],
};