import * as anchor from "@coral-xyz/anchor";
import { Program, web3 } from "@coral-xyz/anchor";
import { SeaCounter } from "../target/types/sea_counter";
const assert = require("assert"); 

describe("Seahorse Counter Program", () => {

  const provider = anchor.AnchorProvider.env()
  anchor.setProvider(provider);

  const program = anchor.workspace.SeaCounter as Program<SeaCounter>;
  const owner = provider.wallet.publicKey;
  const [counterPK, bump] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from("counter"), owner.toBuffer()],
    program.programId
  )

  it("counter account is initialized properly", async () => {
    await program.methods.initCounter()
      .accounts({
        owner,
        counter: counterPK
      })
      .rpc();

    const counter = await program.account.counter.fetch(counterPK);
    assert.ok(counter.owner.toBase58() === owner.toBase58());
    assert.ok(counter.count === 0);
  });

  it("increase() should increase counter by 1", async () => {
    let counter = await program.account.counter.fetch(counterPK);
    const initCount = counter.count

    await program.methods.increase()
      .accounts({
        owner,
        counter: counterPK
      })
      .rpc();

    counter = await program.account.counter.fetch(counterPK);
    assert.ok(counter.count === initCount+1);
  });

  it("increase() should only handle owner's counter", async () => {
    const hacker = web3.Keypair.generate();
    let passed = false;

    try {
      await program.methods.increase()
      .accounts({
        owner : hacker.publicKey,
        counter: counterPK
      })
      .signers([hacker])
      .rpc();

      passed = true;
    } catch {}
    
    return assert.ok(!passed);
  });

});
