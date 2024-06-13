import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const NFTModule = buildModule("NFTModule", (m) => {

    // const lock = m.contract("Lock", ["Atlas Map", "ATM", "https://ipfs.io/ipfs/bafkreibw5hzuboczklhvcw5srq6hrscq3xdiojkkhi622zwkivnpwjeqre?filename=Capture%20d%27%C3%A9cran%202024-06-01%20120610.png"],);
    const nft = m.contract("MyNFTCollection", ["rick", "ROLL", "https://ipfs.io/ipfs/QmeRtPZN4MwwzHAwUvwzMA4NpS1wdJ2ytUKqPxDMBtAdCC?filename=NFTMetadata.json"]);

    return { nft };
});

export default NFTModule;
