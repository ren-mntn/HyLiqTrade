import { Positions } from "./Positions";
import { TradeHistory } from "./TradeHistory";

export interface TradeApiResponse {
    uid: string;
    tradeHistory: TradeHistory;
    positions: Positions;
}