var path = require("path");

module.exports = {
    mode: "development",
    entry: "/src/index.js",
    output: {},
    devServer: {
        contentBase: path.join(__dirname, "dist"), /* outputのpathで指定したディレクトリと同じにする必要がある */
        inline: true /* ソースコードの変更による自動更新 */
    }
}