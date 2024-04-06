import { AssetPosition } from "./AssetPosition";
import { MarginSummary } from "./MarginSummary";

export interface Positions {
    assetPositions: AssetPosition[];
    crossMaintenanceMarginUsed: string;
    crossMarginSummary: MarginSummary;
    marginSummary: MarginSummary;
    time: number;
    withdrawable: string;
}