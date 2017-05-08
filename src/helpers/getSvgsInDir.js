const fs = require('fs');
const path = require('path');

const getSvgsInDir = (dir) => {
    if (!fs.existsSync(dir)) {
        return null;
    }
    return fs.readdirSync(dir)
        .map((file) => {
            const absolutePath = path.join(dir, file);
            if (fs.lstatSync(absolutePath).isDirectory()) {
                return getSvgsInDir(absolutePath);
            }
            if (!absolutePath.match(/\.svg$/)) {
                return null;
            }
            return absolutePath;
        })
        .filter(filePath => filePath !== null)
        .reduce((a, b) => a.concat(b), []);
};

module.exports = getSvgsInDir;
