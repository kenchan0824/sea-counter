# Seahorse Counter

**Solana program** (smart contract) has a very unique programming model. The **Counter program** is one of the simplest examples to demonstrate how a Solana program handles **data storage**. And **Seahorse** is the most elegant framework for writing Solana programs.

## Seahorse Setup

Follow this [blog](https://blog.learnseahorse.com/blog/localinstall) to install Seahorse, your installations sequence will be `Rust > Solana > Anchor > Seahorse`. 

> [!NOTE]
> Beware some old materials would refer to the `seahorse-lang` package. This is the repository from the original Seahorse creator but has been abandoned, install `seahorse-dev` instead. 

The most stable software combination as of writing is as follows:

- Rustc 1.77.2
- Solana 1.18.12
- Anchor 0.29.0
- Seahorse 0.2.0

## How to Use Seahorse

> [!IMPORTANT]
> You may think Seahorse as a code generator, it passes **Python** syntax and generate the **Anchor** codes, abstracting away the most boilerplate codes as possible.

1. Create a Solana wallet account with `solana-keygen new` if you haven't done so. Your private key is located at `~/.config/solana/id.json`

2. Initialize your project folder with `seahorse init <program_name>`

3. Go to the project folder and build the Anchor sources with `anchor build`. It takes several minutes but only required to do once.

4. You may start writing your Seahorse program in `programs_py/<program_name>.py`

5. Synchronize the program ID found in `Anchor.toml` with that enclosed in the `declare_id()` statement.

6. Compile your Seahorse program into Anchor with `seahorse build`. You can also get the IDL under `target/idl/`

7. With the IDL, you can now start writing the Mocha test cases in `tests/<program_name>.ts`. Autocomplete is supported.

8. Run `anchor test` to deploy the Anchor program to `localnet` and run the test script at the same time.

9. Every time you modify the Seahorse program, changes are not synchronized to the Anchor codes automatically. You may create a Node script in `package.json` to streamline the tasks.  

---
#AwesomeSolana 