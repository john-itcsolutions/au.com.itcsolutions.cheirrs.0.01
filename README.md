## Complete Enterprise DApp for Community Housing in Australia, Housing Associations in UK, and, eventually, for your Real Estate Agency, for general Conveyancing needs and for multi-networked Enterprise trading on smart contracts.

# au.com.itcsolutions.cheirrs

Hi, 

This repo has morphed into CHEIRRS, a community housing dApp still aiming to include the Chubba Morris dApp, for Real Estate Agents, eventually, beside CHEIRRS.

CHEIRRS stands for Community Housing Enterprise Information Recording and Reporting System. We also have plans to develop our 'The General' dApp, a multi-networked System of private intra- & inter-Enterprise accounting, with smart-contract-enabled trading and supply, alongside 'convey-IT', our proposed Land Title Registration dApp for Solicitors, Conveyancers, Agents, Developers, Financial Institutions, Buyers and Sellers. 

There is a public repository at https://github.com/john-itcsolutions/cheirrs, to which the Front End in this repository (au.com.itcsolutions.cheirrs) is designed to connect.

See the following figure:

<img src="./kubernetesinstallation-09-06-2021-1-with-proxy.png">

It is a Kubernetes-based repo, designed for intallation of a juju charms kubernetes system, with Blockchain-Database Server ('smart-web' charm), and also includes a KubeFlow/TensorFlow model for development of Machine Learning Workflows on a separate local virtual 'cloud' controller. The 2 controllers ('house', and 'uk8s') represent a very powerful basis upon which to build a multi-tenancy and multi-networked installation fully connected to the Elastos System of Blockchains for Distributed Identities (DID-SideChain), Main information recording (Main-Chain), Token exchange and storage (Token-SideChain) and the Ethereum Sidechain (ETH-SideChain) for Smart Contract Operations.

On that repo you will find the 'smart-web' server, which provides access for requests from this cheirrs Front End to the PostgreSQL 'haus' database, via JavaScript calls to gRPC protocol buffers (yet to be) included in au.com.itcsolutions.cheirrs, but ready now, and implemented in python3.

The 'haus' database incorporates the cheirrs, cheirrs_oseer, a_horse and other schema (for other dApps) for the database to store, compute/process and report on data. The database backup files are private, and not made available in the public repository.

The a_horse schema is our company's own supervising schema for overseeing all operations at the topmost level, including the billing and accounting for customer enterprises.

The cheirrs_oseer schema is responsible for overseeing Business Processes on the cheirrs schema. A similar approach is employed for the convey-IT and The General packages, with a user-level schema, and a supervising schema to programmatically oversee the user-level Business Processes.

The smart-web server simultaneously provides a way of recording relevant auditable information and smart contract data on the relevant Elastos Blockchains in between writing to and reading data from 'haus'. Blockchain sections of all transactions occur first in the sequence of requests sent from the Front End dApp to the smart-web server (via gRPC protocols), with PostgreSQL database requests occurring secondarily, in order to ensure integrity of the data. This is because the Blockchains are immutable and serve as the ultimate sources of Truth about transaction input and result. The PostgreSQL calls are meant to write the 'bulk' transaction data to the centralised 'haus' Enterprise Relational Database (eventually situated in a public Cloud), rather than storing excessive amounts of data on Blockchains, which would be more expensive.

Currently (April 2021) the Elastos Trinity Tech Team are developing an entirely revised method and structure for coding of Ionic front ends for Elastos. Advice on migration, so that our repo may use the new 'Elastos Essentials' Structure, will be available when the expected first stable release is available around July, 2021.

The old Trinity-CLI will be discontinued in favour of using the native Ionic development/debugging/deployment process lifecycle instead of the old Trinity-CLI Toolchain. In addition Cordova Plugins will be accessed directly, rather than being wrapped inside Trinity methods and structures.

There will be built-in interfaces to the entire range of the Elastos Ecosystem including Carrier, Hive, Wallet, DID etc. All will be included in the single 'Elastos Essentials' package.

Our au.com.itcsolutions.cheirrs module would be downloadable from the Google Playstore in production, but also during development you need to be able to sign in and obtain DID's. The "container" for these modules for the developer, will be within 'Elastos Essentials'.

There will also be a means of development for the iOS operating system, and a means of installation most likely not involving the Apple Store.

Naturally the system will run on Ubuntu Linux Desktops for development.

In production, clients will be able to connect on supported Mobile Devices (Android and, eventually, iOS) and all Desktop browser based systems.

...

au.com.itcsolutions.cheirrs is an Ionic dApp. As such you will need to install openjdk etc (Java), some development packages, npm and node version 12:
```
# Base requirements 
sudo apt -y install openjdk-8-jdk build-essential curl dirmngr apt-transport-https lsb-release ca-certificates
# Install NodeJS 12 instead of 8 or 10
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt -y install nodejs
```

as well as installing Ionic with:

`sudo npm i -g @ionic/cli`

`git clone https://github.com/john-itcsolutions/au.com.itcsolutions.cheirrs.0.01.git`

`cd au*`

In this project root directory:

`ionic serve`

Then have a look and see!

In src/assets/manifest.json you will find the place to 'whitelist' the necessary web addresses for your customers. Only addresses listed here can be accessed by your dApp, so this is where banks, your own central database, etc are listed. Any sites not in this list may not be accessed. The system of ultra-secure access involves the translating of normal web-addresses to an internally computed remapping of site addresses onto elastos 'nodes' (with temporary unique id's), with these nodes allowing access to the original ip address with no exposed web sockets. Elastos isolates itself.

Further instructions will become available as Elastos Essentials is developed.

Access Ionic documentation for further information on developing in Ionic.

https://ionicframework.com/docs

Keep in touch with 'Elastos Essentials' news at:

https://elastos.info/the-new-elastos-essentials/

and other associated Blogs on that site.

Keep in touch with 'Elastos.Essentials' development on github, at:

## https://github.com/elastos/Elastos.Essentials



