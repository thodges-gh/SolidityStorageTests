let MyArrayContract = artifacts.require("MyArrayContract");

contract("MyArrayContract", () => {
  let mc;
  const ELEMENTS = 5;

  beforeEach(async () => {
	  mc = await MyArrayContract.new(ELEMENTS);
  });

  describe("array in mapping", () => {
    it("is deleted after parent mapping deletion", async () => {
      // Verify storage is as we expect it
      for (let i = 0; i < ELEMENTS; i++) {
        assert.equal(await mc.getActiveStatus(i), true);
        for (let j = 0; j < ELEMENTS; j++) {
          assert.equal(await mc.getValueAt(i, j), j + 1);
        }
      }
      // Delete all the parent elements
      for (let i = 0; i < ELEMENTS; i++) {
      	await mc.deleteParent(i);
      }
      // Data is deleted in the child mappings
      for (let i = 0; i < ELEMENTS; i++) {
        assert.equal(await mc.getActiveStatus(i), false);
        assert.equal(await mc.getChildren(i), 0)
      }
    });
  });
});