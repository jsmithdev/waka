import { fileURLToPath } from 'url';
import { dirname } from 'path';

export function getTimestamp(){
    return new Date()
        .toLocaleString()
        .replace(/\//g, '-')
        .replace(/ /g, '-')
}

export function getLocalPath(meta){

    const __filename = fileURLToPath(meta)

    return dirname(__filename)
}