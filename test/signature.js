var SignTypedData = artifacts.require("./SignTypedData.sol");

contract('SignTypedData', function() {
  it("should confirm signature", function() {
    let r = '0x49e75d475d767de7fcc67f521e0d86590723d872e6111e51c393e8c1e2f21d03'
    let s = '0x2dfaf5833af158915f035db6af4f37bf2d5d29781cd81f28a44c5cb4b9d24153'
    let v = 27
    let message = 'Hi, Alice!'

    return SignTypedData.deployed().then(function(instance) {
      return instance.checkSignature(message, r, s, v)
    }).then(function(address) {
      assert.equal(address, '0x29c76e6ad8f28bb1004902578fb108c507be341b', 'Address is not recovered correctly');
    });
  });
});
