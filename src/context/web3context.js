import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

export const Web3Context = createContext();

const Web3Provider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        // Create a new Web3Provider using window.ethereum
        const web3Provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(web3Provider);

        // Get the signer
        const signer = await web3Provider.getSigner();
        setSigner(signer);

        // Request accounts
        const accounts = await web3Provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
      } else {
        console.error("MetaMask not found");
      }
    };
    init();
  }, []);

  return (
    <Web3Context.Provider value={{ provider, signer, account }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Provider;
