// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract SimpleStorage {
    uint256 public favoriteNumber = 5;
    bool favoriteBool = true;
    string favoriteString = "string";
    int256 favoriteInt = -5;

    address favoriteAddr = 0xD27b710E4d0e6177a459b206bc7c45Fff980295f;
    bytes32 favoriteBytes = "cat";

    struct People {
        uint256 favNum;
        string name;
    }

    People[] public people;
    mapping(string => uint256) public nameToFavoriteNumber;

    function store(uint256 _favoriteNum) public {
        favoriteNumber = _favoriteNum;
    }

    // view 可以显示contract的state
    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    // memory: Data will only be stored during the execution of the function
    // storage: Data will existed even after the function executed
    function addPerson(string memory _name, uint256 _favriteNum) public {
        people.push(People(_favriteNum, _name));
        nameToFavoriteNumber[_name] = _favriteNum;
    }
}
