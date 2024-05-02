use anchor_lang::prelude::*;

declare_id!("7vwrU2qgvtHuWgXsSyzfH8iBzztHpKbe2gVDXz18aNUR");

#[program]
pub mod sea_counter {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
