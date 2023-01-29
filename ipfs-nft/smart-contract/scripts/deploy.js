const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const metadataURL = "ipfs://QmZmc2FuK9VPDAxfC6bHxFPXPsxfLmnxdRjQ2LuNjerz8D/";

  const lw3PunksContract = await ethers.getContractFactory('LW3Punks');
  const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL);
  await deployedLW3PunksContract.deployed();

  console.log("LW3Punks Contract Address:", deployedLW3PunksContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  