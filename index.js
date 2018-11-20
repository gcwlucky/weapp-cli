const helper = require('./utils/help.js');

function upload(argv) {
    let version = argv['v'] ? argv['v'] : helper.getDate();

    if (argv['d']) {
        helper.upload(version, argv['d'])
    } else {
        helper.getGitLog().then(desc => {
            helper.upload(version, desc)
        })
    }
}

function open(argv) {
    helper.open(argv['p'])
}

function login() {
    helper.login()
}

function preview() {
    helper.preview()
}

module.exports = {
    upload,
    open,
    login,
    preview
}



