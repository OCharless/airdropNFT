// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFTCollection is ERC721, Ownable {
    string private _commonURI;
    uint256 private _tokenCounter;

    constructor(
        string memory name,
        string memory symbol,
        string memory commonURI
    ) Ownable(msg.sender) ERC721(name, symbol) {
        _commonURI = commonURI;
        _tokenCounter = 0;
    }

    function batchMint(address[] memory recipients) public onlyOwner {
        for (uint256 i = 0; i < recipients.length; i++) {
            _tokenCounter++;
            _mint(recipients[i], _tokenCounter);
        }
    }

    function setCommonURI(string memory newURI) public onlyOwner {
        _commonURI = newURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return _commonURI;
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        require(
            ownerOf(tokenId) != address(0),
            "ERC721Metadata: URI query for nonexistent token"
        );
        return _commonURI;
    }

    function totalSupply() public view returns (uint256) {
        return _tokenCounter;
    }
}
