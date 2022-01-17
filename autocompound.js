import { ethers } from 'ethers';
import dotenv from 'dotenv';
dotenv.config();

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.aurora.dev`);
const signer = new ethers.Wallet(process.env.auroraPrivateKey, provider);

// Define ABI's
const erc20Abi = ["function balanceOf(address) view returns (uint)"];
const poolAbi = ["function harvest(uint256 pid,address to)"];
const stakingAbi = ["function enter(uint256 _triAmount)"];

// Define Contract Addresses
const triToken= `0xFa94348467f64D5A457F75F8bc40495D33c65aBB`;
const xtriToken = `0x802119e4e253D5C19aA06A5d567C5a41596D6803`; // staking token
const triPool = `0x3838956710bcc9D122Dd23863a0549ca8D5675D6`; // TRI-USDT
const triStaking = `0x802119e4e253d5c19aa06a5d567c5a41596d6803`;
const poolID = 4; // TRI-USDT

// Print Balances
const xtri = new ethers.Contract(xtriToken, erc20Abi, provider);
const tri = new ethers.Contract(triToken, erc20Abi, provider);
let xtriBalance = await xtri.balanceOf(process.env.auroraAddress);
console.log('$xTRI: ',ethers.utils.formatEther(xtriBalance.toString()));
let triBalance = await tri.balanceOf(process.env.auroraAddress);
console.log('$TRI: ',ethers.utils.formatEther(triBalance.toString()));

// Harvest TRI Rewards
const pool = new ethers.Contract(triPool, poolAbi, provider);
const signedpool = pool.connect(signer);
const harvestTX = await signedpool.harvest(poolID, process.env.auroraAddress);
console.log(`harvestTX: ${harvestTX.hash}`);
await new Promise(r => setTimeout(r, 2000));

// Check They Arrived
triBalance = await tri.balanceOf(process.env.auroraAddress);
console.log('$TRI: ',ethers.utils.formatEther(triBalance.toString()));
await new Promise(r => setTimeout(r, 2000));

// Stake TRI for xTRI
const staking = new ethers.Contract(triStaking, stakingAbi, provider);
const signedStaking = staking.connect(signer);
const stakingTX = await signedStaking.enter(triBalance);
console.log(`stakingTX: ${stakingTX.hash}`);
await new Promise(r => setTimeout(r, 2000));

// Print Balances Again
triBalance = await tri.balanceOf(process.env.auroraAddress);
console.log('$TRI: ',ethers.utils.formatEther(triBalance.toString()));
xtriBalance = await xtri.balanceOf(process.env.auroraAddress);
console.log('$xTRI: ',ethers.utils.formatEther(xtriBalance.toString()));
