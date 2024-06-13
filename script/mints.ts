import hre from 'hardhat';
require('dotenv').config();

async function main() {
    if (!process.env.PRIVATE_KEY) return console.error('Please set your PRIVATE_KEY in a .env file');
    const signer = (await hre.ethers.getSigners())[0];
    const signerAddress = await signer.getAddress();
    const contractAddress = '0x1b52DEF55F2d3A5548927Fd625abe7e7e346f0D7';
    const contractABI = ['function batchMint(address[] memory recipients) public'];

    const nftContract = new hre.ethers.Contract(contractAddress, contractABI, signer);

    // Example: Batch mint to 100 addresses at a time
    const addresses: string[] = [signerAddress, signerAddress, signerAddress, signerAddress, signerAddress]; // Populate this array with your addresses
    for (let i = 0; i < addresses.length; i += 100) {
        const batch = addresses.slice(i, i + 100);
        const tx = await nftContract.batchMint(batch);
        await tx.wait();
        console.log(`Minted batch from ${i} to ${i + 100}`);
    }
}

main().catch(console.error);
