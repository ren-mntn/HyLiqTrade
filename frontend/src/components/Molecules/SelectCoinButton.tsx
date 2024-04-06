import React from "react";
import { useAtom, useAtomValue } from "jotai";

import {
  activePositionCoinsAtom,
  coinAtom,
  historicalTradedCoinsAtom,
} from "../atoms/atoms";
import ToggleButton from "../atoms/ToggleButton";

const SelectCoinButton = () => {
  const historicalTradedCoins = useAtomValue(historicalTradedCoinsAtom);
  const activePositionCoins = useAtomValue(activePositionCoinsAtom);
  const [selectedCoin, setCoin] = useAtom(coinAtom);

  return (
    <div className="px-14 overflow-x-auto whitespace-nowrap">
      {historicalTradedCoins.map((coin) => (
        <ToggleButton
          key={coin}
          label={coin}
          isActive={selectedCoin === coin}
          isHighlighted={activePositionCoins.includes(coin)}
          onClick={() => setCoin(coin)}
        />
      ))}
    </div>
  );
};

export default React.memo(SelectCoinButton);
