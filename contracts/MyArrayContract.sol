pragma solidity 0.4.24;

contract MyArrayContract {

  struct Parent {
    bool active;
    uint256[] children;
  }

  mapping(uint256 => Parent) public parents;

  constructor(uint256 _elements) public {
    for(uint i = 0; i < _elements; i++) {
      parents[i].active = true;
      for(uint j = 1; j <= _elements; j++) {
        parents[i].children.push(j);
      }
    }
  }

  function getValueAt(uint256 _parent, uint256 _child) public view returns (uint256) {
    return parents[_parent].children[_child];
  }

  function getChildren(uint256 _parent) public view returns (uint256[]) {
    return parents[_parent].children;
  }

  function getActiveStatus(uint256 _parent) public view returns (bool) {
    return parents[_parent].active;
  }

  function deleteParent(uint256 _parent) public {
    delete parents[_parent];
  }
}