//SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

contract SimpleStorage {
    string imgUrl;

    // mapping(string => string) public nameToimgUrl;

    string[] public urlArr;

    function store(string memory _imgUrl) public virtual {
        urlArr.push(_imgUrl);
    }

    function retrieve() public view returns (string memory) {
        return imgUrl;
    }
}
