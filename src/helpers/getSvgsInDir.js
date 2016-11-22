import fs from 'fs';
import path from 'path';

export default function getSvgsInDir (dir) {
    if (!fs.existsSync(dir)) {
        return null;
    }

    return fs.readdirSync(dir).map((file) => {
        const absolutePath = path.join(dir, file);

        if (fs.lstatSync(absolutePath).isDirectory()) {
            return getSvgsInDir(dir, file);
        }

        if (!absolutePath.match(/\.svg$/)) {
            return null;
        }

        return absolutePath;
    }).filter(filePath => filePath !== null);
}
