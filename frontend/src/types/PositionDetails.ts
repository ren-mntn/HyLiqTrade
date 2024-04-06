import { CumFunding } from "./CumFunding";
import { Leverage } from "./Levarage";

export interface PositionDetails {
    coin: string;
    cumFunding: CumFunding;
    entryPx: string;
    leverage: Leverage;
    liquidationPx: null | string;
    marginUsed: string;
    maxLeverage: number;
    positionValue: string;
    returnOnEquity: string;
    szi: string;
    unrealizedPnl: string;
}