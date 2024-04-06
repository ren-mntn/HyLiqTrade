import { Position } from "./Position";

export interface TradeHistory {
    uid: string;
    positions: Position[];
    coinList: string[];
}