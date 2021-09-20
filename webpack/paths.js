const basepaths = {
    src: "../src",
    dest: "../docs",
};

module.exports = {
    basepaths: basepaths,
    js: {
        src: basepaths.src + "/js",
    },
    css: {
        src: basepaths.src + "/scss",
    },
    img: {
        src: basepaths.src + "/img",
        dest: "img",
    },
    html: {
        src: basepaths.src + "/views",
    },
};
