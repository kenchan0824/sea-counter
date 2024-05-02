# Seahorse Counter

**Solana program** (smart contract) has a very unique programming model. A **counter program** is an example simple enough to demonstrate how **data storage** is handled on Solana. Meanwhile using **Seahorse** framework is the most elegant way to write Solana programs.

## Seahorse Setup

Follow this [blog](https://blog.learnseahorse.com/blog/localinstall) to install Seahorse, your installations sequence will be `Rust > Solana > Anchor > Seahorse`. 

> [!NOTE]
> Beware some old materials refer to the `seahorse-lang` package, which has been abandoned. If you have a Seahorse version 0.2.7, it's very likely you installed the wrong package. Install `seahorse-dev` instead. 

The most stable software combination as of writing is as follows:

- Rustc 1.77.2
- Solana 1.18.12
- Anchor 0.29.0
- Seahorse 0.2.0

## How to Use Seahorse

> [!IMPORTANT]
> You can think Seahorse as a code generator, it parses the **Python** syntax and generate **Anchor** codes, abstracting away the most boilerplate codes as possible.

1. Create a Solana wallet account with `solana-keygen new` if you haven't done so. Your private key is located at `~/.config/solana/id.json`

2. Initialize your project folder with `seahorse init <program_name>`

3. Go to the project folder and build the Anchor sources with `anchor build`. It takes several minutes but only required to do once.

4. You may start writing your Seahorse program in `programs_py/<program_name>.py`

5. Run `anchor keys list` to find the correct program ID. Make sure the one found in `Anchor.toml` and that enclosed in the `declare_id()` statement are in sync.

6. Compile your Seahorse program into Anchor with `seahorse build`. You can also get the IDL under `target/idl/`

7. With the IDL, you can now start writing the Mocha test cases in `tests/<program_name>.ts`. Autocomplete is supported.

8. Run `anchor test` to deploy the Anchor program to `localnet` and run the test script at the same time.

9. Every time you modify the Seahorse program, changes are not synchronized to Anchor codes automatically. You may create a Node script in `package.json` to streamline the tasks.

---
#AwesomeSolana 