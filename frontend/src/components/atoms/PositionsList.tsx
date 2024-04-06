import React from "react";
import "./PositionsList.css"; // CSSファイルをインポート
import { useAtom, useAtomValue } from "jotai";
import { coinAtom, userPositionsAtom } from "./atoms";
import RenderHighlightWrapper from "./RenderHighlightWrapper";

const PositionsList = () => {
  const positions = useAtomValue(userPositionsAtom);
  const [selectedCoin, setCoin] = useAtom(coinAtom);

  return (
    <RenderHighlightWrapper>
      <div className="positions-container">
        <table className="positions-table">
          <thead>
            <tr>
              <th>Coin</th>
              <th>Size</th>
              <th>Price</th>
              <th>Leverage</th>
              <th>PnL</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((position) => {
              const pnlClass = position.pnl < 0 ? "negative" : "positive";
              const sizeClass = position.size < 0 ? "negative" : "positive";
              const rowClass =
                position.coin === selectedCoin ? "selected-row" : ""; // 選択されたコインと一致する場合にクラスを追加
              return (
                <tr key={position.coin} className={rowClass}>
                  <td>
                    <button
                      className="coin-button"
                      onClick={() => setCoin(position.coin)}
                    >
                      {position.coin}
                    </button>
                  </td>
                  <td className={sizeClass}>{position.size}</td>
                  <td>${position.price}</td>
                  <td>{position.leverage}</td>
                  <td className={pnlClass}>${position.pnl}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </RenderHighlightWrapper>
  );
};
export default React.memo(PositionsList);
