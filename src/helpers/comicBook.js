const readFile = (file) => {
    return new Promise((resolve, reject) => {
        window.loadArchiveFormats(['rar', 'zip', 'tar'], function () {
            window.archiveOpenFile(file, '', function (archive, err) {
                if (err) reject(err)
                resolve(archive)
            })
        })
    })
}

const getImages = async function (archive) {
    return await archive.entries.filter((file) => {
        if (file.name.endsWith('jpg') || file.name.endsWith('jpeg') || file.name.endsWith('png')) {
            return file
        }
    })
}

const getFileMimeType = function (file_name) {
    file_name = file_name.toLowerCase();
    if (file_name.endsWith('.jpeg') || file_name.endsWith('.jpg')) {
        return 'image/jpeg';
    } else if (file_name.endsWith('.png')) {
        return 'image/png';
    } else if (file_name.endsWith('.bmp')) {
        return 'image/bmp';
    } else if (file_name.endsWith('.webp')) {
        return 'image/webp';
    } else if (file_name.endsWith('.gif')) {
        return 'image/gif';
    } else {
        return 'image/jpeg';
    }
}

const getImage = (image) => {
    return new Promise((resolve, reject) => {
        image.readData((data, err) => {
            if (err) reject(err)

            let blob = new Blob([data], {
                type: getFileMimeType(image.name)
            })
            let url = URL.createObjectURL(blob)
            resolve(url)
        })
    })
}


export default {
    readFile,
    getImages,
    getImage
}