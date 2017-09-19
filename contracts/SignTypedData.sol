pragma solidity ^0.4.4;

contract SignTypedData {
	function doHash(string message) constant returns (bytes32) {
	  return keccak256(
	    keccak256('string message'),
	    keccak256(message)
    );
	}

	function checkSignature(string message, bytes32 r, bytes32 s, uint8 v) constant returns (address) {
	  var hash = doHash(message);
    return ecrecover(hash, v, r, s);
	}
}
