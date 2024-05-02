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

1. Initialize your project folder with `seahorse init <project_name>`

2. Build the Anchor sources with `anchor build`. It takes several minutes but only required to do once.

---
#AwesomeSolana 