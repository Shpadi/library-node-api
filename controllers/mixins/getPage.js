exports.getPage = (res, path) => {
    let filePath = __dirname.split('/');
    filePath.pop()
    filePath.pop()
    filePath = filePath.join('/') + '/pages'
    res.sendFile(filePath + path)
}
