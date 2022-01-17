# Auto Compounding Script For Trisolaris on Aurora (Near Protocol)

Disclaimer: Note this is unaudited code for educational purposes and is not production ready for financial transactions

## Setup

This is setup to harvest rewards from the TRI-USDT pool on Trisolaris which is a fork of Sushiswap I believe and then stake the TRI tokens for xTRI tokens. To claim rewards from a different pool you'll need to change the pool contract address and the pool ID in the main autocompound.js script.

There is a full tutorial showing how to find these variables here:  https://jamesbachini.com/automate-yield-farming/

Note that you'll need to edit the .env file to add credentials in the form of an Ethereum address and private key. You can use this script to generate one if required:
https://github.com/jamesbachini/Ethers-Vanity-Address

```
git clone https://github.com/jamesbachini/Aurora-Trisolaris-Auto-Compound-Script
cd Aurora-Trisolaris-Auto-Compound-Script
npm install
mv example.env .env
node autocompound.js
```

## Additional Information

- My Github Repo: https://github.com/jamesbachini
- Blockchain Developer Tutorials: https://jamesbachini.com
- YouTube Channel: https://www.youtube.com/c/JamesBachini
- Twitter: https://twitter.com/james_bachini

- Trisolaris: https://www.trisolaris.io
- Docs: https://trisolaris-labs.github.io/docs/
- Contracts: https://github.com/trisolaris-labs/trisolaris_core/tree/main/contracts/rewards

Disclaimer: Note this is unaudited code for educational purposes and is not production ready for financial transactions