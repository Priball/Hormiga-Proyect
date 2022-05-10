// SPDX-License-Identifier: MIT
// pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

struct Listing
{
  address owner;
  bool is_active;
  uint token_id;
  uint price;
}

contract Marketplace {
  using SafeMath for uint256;

  uint public listing_count = 0;
  mapping (uint => Listing) public listings;
  ERC721 token_contract = ERC721(0x0000000000000000000000000000000000000000);

  function addListing(uint token_id, uint price) public
  {
    listings[listing_count] = Listing(msg.sender, true, token_id, price);
    listing_count = listing_count.add(1);
    token_contract.transferFrom(msg.sender, address(this), token_id);
  }

  function removeListing(uint listing_id) public
  {
    require(listings[listing_id].owner == msg.sender, "Must be owner");
    require(listings[listing_id].is_active, "Must be active");
    listings[listing_id].is_active = false;
    token_contract.transferFrom(address(this), msg.sender, listings[listing_id].token_id);
  }

  function buy(uint listing_id) public payable
  {
    require(listings[listing_id].is_active, "Must be active");
    require(listings[listing_id].price == msg.value, "Must pay the price");
    listings[listing_id].is_active = false;
    token_contract.transferFrom(address(this), msg.sender, listings[listing_id].token_id);
    (bool sent, bytes memory data) = address(listings[listing_id].owner).call{value: msg.value}("");
    data;
    require(sent, "Failed to send Ether");
  }

  function getActiveListings(uint index) public view returns(uint)
  {
    uint j;
    for(uint i=0; i<listing_count; i++)
    {
      if(listings[i].is_active)
      {
        if(index == j)
        {
          return i;
        }
        j+=1;
      }
    }
    return 0;
  }

  function getListingsByOwner(address owner, uint index) public view returns(uint)
  {
    uint j;
    for(uint i=0; i<listing_count; i++)
    {
      if(listings[i].is_active && listings[i].owner == owner)
      {
        if(index == j)
        {
          return i;
        }
        j+=1;
      }
    }
    return 0;
  }

  function getListingsByOwnerCount(address owner) public view returns(uint)
  {
    uint result;
    for(uint i=0; i<listing_count; i++)
    {
      if(listings[i].is_active && listings[i].owner == owner)
      {
        result+=1;
      }
    }
    return result;
  }

  function getActiveListingsCount() public view returns(uint)
  {
    uint result;
    for(uint i=0; i<listing_count; i++)
    {
      if(listings[i].is_active)
      {
        result+=1;
      }
    }
    return result;
  }
}