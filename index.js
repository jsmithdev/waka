import 'dotenv/config.js'

import fs from 'fs'
import path from 'path'

import {
    getLocalPath,
    getTimestamp,
} from './util/util.js'

import {
    getStats,
    getClient,
} from './API/Wakatime.js'


const PATH = getLocalPath(import.meta.url);


(async function (){

    const stats = await getStats( )

    fs.writeFile( 
        path.resolve(`${PATH}/stats/stat_${getTimestamp()}.json`), 
        JSON.stringify( stats, null, '\t' ),
        console.log,
    )
})();
