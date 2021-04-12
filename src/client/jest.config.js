module.exports = {
    verbose: true,
    transform : {
        "^.+\\.js$": "babel-jest",
        "^.+\\.jsx$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
    }
};