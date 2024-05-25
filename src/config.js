export const contractAddress = "0x59b62F3fE4Fa9aA2BA79D6CE4D3f5C3ED7187b8d";
export const contractABI = [
  {
    inputs: [],
    name: "retrieve",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_imgUrl", type: "string" }],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "urlArr",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
];
