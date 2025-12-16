"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "../shared/Button";
import Dropdown from "../shared/Dropdown";
import CurrencySelector from "./CurrencySelector";
import {
  CRYPTO_CURRENCIES,
  FIAT_CURRENCIES,
  STABLECOINS,
  WALLETS,
  getExchangeRate,
  PAYTO,
} from "@/lib/mockData";

export default function ConversionForm() {
  const router = useRouter();
  const [payAmount, setPayAmount] = useState("1.00");
  const [receiveAmount, setReceiveAmount] = useState("0.00");
  const [payCurrency, setPayCurrency] = useState("ETH");
  const [receiveCurrency, setReceiveCurrency] = useState("NGN");
  const [payFrom, setPayFrom] = useState("");
  const [payTo, setPayTo] = useState("");

  const isFormValid = Number(payAmount) > 0 && payFrom !== "" && payTo !== "";

  useEffect(() => {
    const amount = parseFloat(payAmount) || 0;
    const rate = getExchangeRate(payCurrency, receiveCurrency);
    const converted = (amount * rate).toFixed(2);
    setReceiveAmount(converted);
  }, [payAmount, payCurrency, receiveCurrency]);

  const handleNext = () => {
    sessionStorage.setItem(
      "conversionData",
      JSON.stringify({
        payAmount,
        payCurrency,
        receiveAmount,
        receiveCurrency,
        payFrom,
        payTo,
      })
    );
    router.push("/crypto-to-cash/recipient-details");
  };

  return (
    <div className="w-full space-y-6">
      <div className=" space-y-6 mt-8">
        <CurrencySelector
          label="You pay"
          amount={payAmount}
          onAmountChange={setPayAmount}
          currency={payCurrency}
          onCurrencyChange={setPayCurrency}
          currencies={CRYPTO_CURRENCIES}
          showSearch={true}
        />

        <CurrencySelector
          label="You receive"
          amount={receiveAmount}
          onAmountChange={setReceiveAmount}
          currency={receiveCurrency}
          onCurrencyChange={setReceiveCurrency}
          currencies={FIAT_CURRENCIES}
          showSearch={true}
        />

        <Dropdown
          label="Pay from"
          options={WALLETS}
          value={payFrom}
          onChange={setPayFrom}
          placeholder="Select an option"
        />

        <Dropdown
          label="Pay to"
          options={PAYTO}
          value={payTo}
          onChange={setPayTo}
          placeholder="Select an option"
        />

        <Button onClick={handleNext} className="w-full" disabled={!isFormValid}>
          Convert now
        </Button>
      </div>
    </div>
  );
}
