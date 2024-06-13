import hre from 'hardhat';
require('dotenv').config();

async function main() {
    if (!process.env.PRIVATE_KEY) return console.error('Please set your PRIVATE_KEY in a .env file');
    const signer = (await hre.ethers.getSigners())[0];
    const contractAddress = '0xdDf0931e0612B2B814cf95EBdf1d1af88C439012';
    const contractABI = await hre.artifacts.readArtifact('MyNFTCollection').then((artifact) => artifact.abi);

    const nftContract = new hre.ethers.Contract(contractAddress, contractABI, signer);
    nftContract.setTokenURI("https://ipfs.io/ipfs/QmeRtPZN4MwwzHAwUvwzMA4NpS1wdJ2ytUKqPxDMBtAdCC?filename=NFTMetadata.json").then((uri) => {
        console.log('Token URI:', uri);
    });
}

main().catch(console.error);
