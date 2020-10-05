import pkg from 'wakatime'

const { WakaTime } = pkg

/**
 * Get a pre configured client 
 */
export function getClient(){
    return new WakaTime( process.env.API_KEY)
}

/**
 * Get stats of user
 * @param {Object} client - Optional; pre configured client 
 * @param {*} range - Optional; range to pull; defaults to last 7 days
 */
export function getStats(client = getClient(), range = 'last_7_days'){
    return client.stats( range )
}
