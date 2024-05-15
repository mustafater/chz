import { createThirdwebClient , defineChain,  getContract } from "thirdweb";
const CLIENT_ID =process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;
 
export const client = createThirdwebClient({
  clientId: CLIENT_ID as string,
});

export const chain=defineChain(88882)	;

const contractAddress="0x03177dad0d44df73a291e2E965CFdDB7d43e9a04";

const contractABI= [
  {
    "type": "constructor",
    "name": "",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "create",
    "inputs": [
      {
        "type": "string",
        "name": "title",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "comment",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "deleteMessage",
    "inputs": [
      {
        "type": "string",
        "name": "title",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getMessage",
    "inputs": [
      {
        "type": "uint256",
        "name": "number",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "",
        "components": [
          {
            "type": "string",
            "name": "title",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "comment",
            "internalType": "string"
          }
        ],
        "internalType": "struct MyContract.message"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getMessageAll",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "string",
            "name": "title",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "comment",
            "internalType": "string"
          }
        ],
        "internalType": "struct MyContract.message[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "index",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "messages",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "title",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "comment",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "update",
    "inputs": [
      {
        "type": "string",
        "name": "title",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "comment",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  }
] as const;


export const CONTRACT = getContract({
  client:client,
  address: contractAddress,
  chain: chain,
  abi:contractABI,
});