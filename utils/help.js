const execa = require('execa');

function getDate() {
    let date = new Date(),
        y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        h = date.getHours();

    m = m < 10 ? ('0' + m) : m
    d = d < 10 ? ('0' + d) : d
    h = h < 10 ? ('0' + h) : h

    return `${y}${m}${d}${h}`;
}

function getGitLog() {
    return execa('git', ['log', '-1', '--oneline']).then(res => {
        if (res.stdout) {
            let info = res.stdout,
                hash = info.split(' ')[0],
                msg = info.replace(`${hash} `, '')
            return `[${hash}]${msg}`
        } else {
            //无最新提交日志
            return ''
        }
    })
}

function open(path) {
    let result
    typeof path === 'string' && path.endsWith('\\') && (path = path.substr(0, path.length - 1))
    if(path) {
        result = execa('cli', ['-o', `${path}`])
    }else {
        result = execa('cli', ['-o'])
    }
    result.then(res => {
        if (res.stderr) {
            console.error(res.stderr)
            return;
        }
        console.log(res.stdout)
    })
}

function login() {
    execa('cli', ['-l']).then(res => {
        if (res.stderr) {
            console.error(res.stderr)
            return;
        }
        console.log(res.stdout)
    })
}

function preview() {
    execa('cli', ['-p', `${process.cwd()}`]).then(res => {
        if (res.stderr) {
            console.error(res.stderr)
            return;
        }
        console.log(res.stdout)
    })
}

function upload(version, desc) {
    //cli有bug，desc带空格会被截断
    desc = desc.replace(' ','')
    execa('cli', ['-u', `${version}@${process.cwd()}`, '--upload-desc', `${desc}`]).then(res => {
        if (res.stderr) {
            console.error(res.stderr)
            return;
        }
        console.log(res.stdout)
    })
}

module.exports = {
    getDate,
    getGitLog,
    open,
    login,
    preview,
    upload
}