import hre from 'hardhat';
require('dotenv').config();

async function main() {
    if (!process.env.PRIVATE_KEY) return console.error('Please set your PRIVATE_KEY in a .env file');
    const signer = (await hre.ethers.getSigners())[0];
    const signerAddress = await signer.getAddress();
    const contractAddress = '0x1b52DEF55F2d3A5548927Fd625abe7e7e346f0D7';
    const contractABI = await hre.artifacts.readArtifact('MyNFTCollection').then((artifact) => artifact.abi);

    const nftContract = new hre.ethers.Contract(contractAddress, contractABI, signer);
    nftContract.tokenURI(1).then((uri) => {
        console.log('Token URI:', uri);
    });
}

main().catch(console.error);
