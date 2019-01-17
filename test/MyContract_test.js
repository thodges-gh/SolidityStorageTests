let MyContract = artifacts.require("MyContract");

contract("MyContract", () => {
  let mc;
  const ELEMENTS = 5;

  beforeEach(async () => {
	mc = await MyContract.new(ELEMENTS);
  });

  describe("storage", () => {
    it("remains after parent deletion", async () => {
		// Verify storage is as we expect it
		for (let i = 0; i < ELEMENTS; i++) {
			assert.equal(await mc.getActiveStatus(i), true);
			for (let j = 0; j < ELEMENTS; j++) {
				assert.equal(await mc.getValueAt(i, j), j);
			}
		}
		// Delete all the parent elements
		for (let i = 0; i < ELEMENTS; i++) {
			await mc.deleteParent(i);
		}
		// Data remains in the child mappings
		for (let i = 0; i < ELEMENTS; i++) {
			assert.equal(await mc.getActiveStatus(i), false);
			for (let j = 0; j < ELEMENTS; j++) {
				assert.equal(await mc.getValueAt(i, j), j);
			}
		}
    });
  });
});