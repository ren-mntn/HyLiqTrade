import { atom } from 'jotai'
import { TradeHistory } from '../../types/TradeHistory';
import { UserPosition } from '../../types/UserPositions';
import { TargetMarkPoint } from '../../types/TargetMarkPoint';
import { RawCandle } from '../../types/RawCandle';
import config from '../../config';
import { MarginSummary } from '../../types/MarginSummary';

export const rawChartDataAtom = atom<RawCandle[]>([])
export const formattedChartDataAtom = atom<number[][]>([])
export const tradeHistoryAtom = atom<TradeHistory>({ uid: "", positions: [], coinList: [] })
export const coinAtom = atom<string>("BTC")
export const historicalTradedCoinsAtom = atom<string[]>([])
export const activePositionCoinsAtom = atom<string[]>([])
export const timeFrameAtom = atom<number>(15)
export const selectedUserIdAtom = atom<string>(config.myId)
export const UserIdsAtom = atom<string[]>([])
export const TargetMarkPointListAtom = atom<TargetMarkPoint[]>([])
export const userPositionsAtom = atom<UserPosition[]>([])
export const positionChangesAtom = atom<{ timestamp: string; openPositionSize: number; pnl: number }[]>([])
export const chartLabelsAtom = atom<string[]>([])
export const isLoadingAtom = atom<boolean>(false)
export const userSummaryAtom = atom<MarginSummary>({ accountValue: "", totalMarginUsed: "", totalNtlPos: "", totalRawUsd: "" })
