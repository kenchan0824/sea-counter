# sea_counter
# Built with Seahorse v0.2.0

from seahorse.prelude import *

declare_id('6BDKKbngHZyRXDT9igsPSc5mJoivtLAsdHiyt41kfh72')

class Counter(Account):
    owner: Pubkey
    count: u16

@instruction
def init_counter(owner: Signer, counter: Empty[Counter]):
    counter = counter.init(
        payer = owner,
        seeds = ["counter", owner]
    )
    counter.owner = owner.key()
    counter.count = 0