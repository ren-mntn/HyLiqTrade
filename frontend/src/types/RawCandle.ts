export interface RawCandle {
    "T": number,
    "c": string, // close
    "h": string, // high
    "i": string, // interval timeFrame
    "l": string, // low
    "n": number, // number of trades
    "o": string, // open
    "s": string, // symbol coin
    "t": number, // timestamp
    "v": string  // volume
}