import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
export default function TOC() {
  return (
    <>
      <IndexNavbar transparent />
      <main className="profile-page">
        <section className=" block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-cover "
            style={{
              backgroundImage: "url('/bg2.png')",
              // "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
        </section>

        <section className="relative py-16 bg-gray-300">
          <div className="px-6 mx-auto">
            {/* <div style={{ marginTop: '6rem' }}> */}
            <div
              className="relative flex flex-col min-w-0 bg-white break-words w-full mb-6 shadow-xl rounded-lg -mt-64"
              style={{ marginTop: "-16rem" }}
            >
              <div className="px-6 py-6" style={{ textAlign: "justify" }}>
                <h2 className="pt-6 pb-2 font-semibold text-3xl text-gray-700">
                  Disclaimer
                </h2>
                <p className="py-2">
                  The information contained on this website is not intended for
                  individuals or entities who are ordinarily resident in the
                  United States of America, Canada, or Switzerland nor for
                  residents of a geographic area that is subject to UN-, US-,
                  EU-, Swiss, or Canadian sanctions or embargoes, including:
                  Afghanistan, Albania, Belarus, Bosnia and Herzegovina,
                  Burundi, Central African Republic, Cote d'Ivoire, Cuba,
                  Democratic Republic of the Congo, Ethiopia, Guinea,
                  Guinea-Bissau, Iran, Iraq, Lebanon, Liberia, Libya, Myanmar
                  (Burma), North Korea, Republic of Macedonia (FYROM), Serbia,
                  Somalia, South Sudan, Sri Lanka, Sudan, Syria, Thailand,
                  Trinidad and Tobago, Tunisia, Ugand Uganda, Ukraine,
                  Venezuela, Yemen, and Zimbabwe. By entering or using the
                  website, you accept you represent and warrant that you are not
                  resident in those countries. The company reserves the right to
                  restrict the sale of the NFT token in any jurisdiction or to
                  any individuals or entities at its discretion.
                </p>
                <p className="py-2">
                  The Company provides the website and its connected services
                  "as is" and "as available," without warranty of any kind.
                  Without limiting this, we expressly disclaim all warranties,
                  whether expressed, implied or statutory, regarding the
                  website. Using applications on the blockchain is associated
                  with a high degree of technological and/or other risks.
                  Holders and/or purchaser of the NFT-Tokens and associated
                  artwork are subject to the Terms and Conditions available on
                  the website.
                </p>
                <p className="py-2">
                  The NFT-Token are non-fungible tokens representing ownership
                  of a digital artwork only. Accordingly, no information on this
                  website (or any other documents mentioned therein) is or may
                  be considered to be advice or an invitation to enter into an
                  agreement for any investment purpose. Further, as NFT-Token
                  represent artwork, nothing on this websites qualifies or is
                  intended to be an offering of securities in any jurisdiction
                  nor does it constitute an offer or an invitation to purchase
                  shares, securities or other financial product.
                </p>
                <p className="py-2">
                  Due to the artistic nature of the project, neither this
                  document nor the NFT-Token have not been registered with or
                  approved by any regulator in any jurisdiction. It remains in
                  your responsibility to assure that the purchase of the
                  NFT-Token and the associated art is in compliance with laws
                  and regulations in your jurisdiction.
                </p>
                <p className="py-2">
                  We undertake no obligation to publicly update or revise any
                  information or opinions published on the website. We reserve
                  the right to amend the information at any time without prior
                  notice.
                </p>
                <h2 className="pt-4 font-semibold text-3xl text-gray-700">
                  Terms and Conditions
                </h2>
                <p className="py-2">Mystic Game of Life</p>
                <p className="py-2">Terms of Use</p>
                <p className="py-2">Last Updated: Mar 20th 2021</p>
                <p className="py-2">
                  These Terms of Use constitute a legally binding agreement made
                  between the user ("you"), whether personally or on behalf of
                  an entity and MysticGol ("The Company";"we") concerning your
                  access to and use of the www.mysticgol.com website and the
                  smart-contract based MysticGol application ("App" or
                  "Application") as well as any other media form, media channel,
                  mobile website or mobile application, smart contracts related,
                  linked, or otherwise connected thereto (the "website", "Site"
                  and the "App").
                </p>
                <p className="py-2">
                  MysticGol is a digital abstract art collectible built on top
                  of the Binance smart chain network. The collection consists of
                  390 arrangement of active cells (the "MysticGol" or "Art")
                  that are hashed on the blockchain and are represented by a
                  non-fungible token ("NFT") each. The MysticGol smart contract
                  allows participants to purchase the NFT representing the
                  digital portraits from. The Company does not provide or intend
                  to provide a secondary market place for the NFT. MysticGol
                  will provide a directory that provides to visualize the
                  digital art work for up to 1 year after the sale ends. After
                  the sale of an NFT to you, the ownership of the NFT, and to
                  the connected Art, is transferred from the Binance smart chain
                  smart contract to the purchaser and concludes the business
                  transaction between both parties. All sales are final and no
                  refunds are offered.
                </p>
                <p className="py-2">
                  The Company is selling the Art via the NFT and is making the
                  Application available to you. Before you purchase an NFT and
                  use the UI and the Binance smart chain smart contracts,
                  however, you will need to agree to these Terms of Use and any
                  terms and conditions incorporated herein by reference
                  (collectively, these "Terms").
                </p>
                <p className="py-2">
                  PLEASE READ THESE TERMS CAREFULLY BEFORE MAKING A PURCHASE OF
                  AN NFT AND/OR USING THE APP. THESE TERMS GOVERN YOUR PURCHASE
                  of NFT AND USE OF THE APPLICATION, UNLESS THE COMPANY HAS
                  EXECUTED A SEPARATE WRITTEN AGREEMENT WITH YOU FOR THAT
                  PURPOSE. THE COMPANY IS ONLY WILLING TO MAKE THE NFT AND THE
                  APP AVAILABLE TO YOU IF YOU ACCEPT ALL OF THESE TERMS. BY
                  USING THE APPLICATION, OR ANY PART OF THEM, OR BY CLICKING "I
                  ACCEPT" BELOW OR INDICATING YOUR ACCEPTANCE IN AN ADJOINING
                  BOX, YOU ARE CONFIRMING THAT YOU FULLY UNDERSTAND AND AGREE TO
                  BE BOUND BY ALL OF THESE TERMS. IF YOU ARE ACCEPTING THESE
                  TERMS ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, YOU
                  REPRESENT THAT YOU HAVE THE LEGAL AUTHORITY TO ACCEPT THESE
                  TERMS ON THAT ENTITY'S BEHALF, IN WHICH CASE "YOU" WILL MEAN
                  THAT ENTITY. IF YOU DO NOT HAVE SUCH AUTHORITY, OR IF YOU DO
                  NOT ACCEPT ALL OF THESE TERMS, THEN WE ARE UNWILLING TO MAKE
                  THE APP, THE SMART CONTRACTS, OR THE SITE AVAILABLE TO YOU. IF
                  YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE
                  APP, THE SMART CONTRACTS, OR THE SITE.
                </p>
                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                  1. THE MYSTIC APP
                </h2>
                A. The MysticGol App is a collection of 390 unique population
                arrangment for game of life (generated from the custom algorithm
                currently hardcoded in website), each represented by a NFT.
                <p className="py-2">
                  B. The MysticGol NFTs are sold during an initial sales period
                  of up to 2 weeks (14 days) according to the price schedule
                  displayed on the website (www.mysticgol.com). All unsold seeds
                  during the initial sales period will remain purchasable after
                  the initial sales period has concluded as the sale is encoded
                  in the smart contract. The Company does not provide any
                  additional services to the user after the business transaction
                  is concluded.
                </p>
                <p className="py-2">
                  C. You can access the App via any web browser using the URL
                  mysticgol.com and an electronic Binance smart chain wallet
                  compatible with the NFTstandard on the Binance smart chain
                  network, such as the MetaMask wallet. You will not be able to
                  engage in any transactions on the App other than through
                  MetaMask, or other Binance smart chain-compatible browsers.
                </p>
                <p className="py-2">
                  D. Transactions on the App are managed and confirmed via the
                  Binance smart chain blockchain. We neither own nor control
                  MetaMask, Google Chrome, the Binance smart chain network, or
                  any other third-party site, product, or service that you might
                  access, visit, or use for the purpose of enabling you to use
                  the various features of the App. We will not be liable for the
                  acts or omissions of any such third parties, nor will we be
                  liable for any damage that you may suffer as a result of your
                  transactions or any other interaction with any such third
                  parties.
                </p>
                <p className="py-2">
                  E. You are responsible for your MetaMask wallet (and other
                  Binance smart chain wallets) and the private key to access it.
                </p>
                <p className="py-2">
                  F. The MysticGol are digital art works and serve no other
                  purpose other than that of an art work.
                </p>
                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                  2. PAYMENT
                </h2>
                <p className="py-2">
                  A. If you decide to purchase a mystic GOL from the contract,
                  any financial transactions will be conducted solely through
                  the Binance smart chain network. We have no control over these
                  payments or transactions, nor do we have the ability to
                  reverse any transactions. With that in mind, the company will
                  have no liability to you or to any third party for any claims
                  or damages that may arise as a result of any transactions that
                  you engage in via the App, or using the Smart Contracts, or
                  any other transactions that you conduct via the Binance smart
                  chain network.
                </p>
                <p className="py-2">
                  B. Binance smart chain requires the payment of a transaction
                  fee (a "Gas Fee") for every transaction that occurs on the
                  Binance smart chain network. The Gas Fee funds the network of
                  computers that run the decentralized Binance smart chain
                  network. This means that you will need to pay a Gas Fee for
                  each transaction that occurs via the App. The Gas Fee does not
                  go to us and we have no control over its pricing.
                </p>
                <p className="py-2">
                  D. All paid prices exclude any possible duties or charges. You
                  will be solely responsible to pay any and all sales, use,
                  value-added and other taxes, duties, and assessments (except
                  taxes on our net income) now or hereafter claimed or imposed
                  by any governmental authority (collectively, "Taxes")
                  associated with your use of the App (including, without
                  limitation, any Taxes that may become payable as the result of
                  your ownership of a MysticGOL. Except for income and
                  net-wealth taxes levied on The Company, you: (i) will pay or
                  reimburse us for all national, federal, state, local or other
                  taxes and assessments of any jurisdiction, including value
                  added taxes and taxes as required by international tax
                  treaties, customs or other import or export taxes, and amounts
                  levied in lieu thereof based on charges set, services
                  performed or payments made hereunder, as are now or hereafter
                  may be imposed under the authority of any national, state,
                  local or any other taxing jurisdiction; and (ii) shall not be
                  entitled to deduct the amount of any such taxes, duties or
                  assessments from payments made to us pursuant to these Terms.
                  You confirm that you are not a resident in Switzerland,
                  Canada, the United States nor are you registered for Goods and
                  services tax in Switzerland, Canada, or the United States.
                </p>
                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                  3. OWNERSHIP AND RESTRICTIONS
                </h2>
                <h2 className="pt-6 pb-2 font-semibold text-xl text-gray-700">
                  A. Ownership
                </h2>
                <ul></ul>
                <li>
                  You Own the NFT. Each MysticGol is a NFT on the Binance smart
                  chain blockchain. When you purchase a NFT, you own the
                  underlying MysticGol, the Art, completely. Ownership of the
                  NFT is mediated entirely by the Smart Contract and the Binance
                  smart chain Network: at no point may we seize, freeze, or
                  otherwise modify the ownership of any MysticGol.
                </li>
                <li>
                  Personal Use. Subject to your continued compliance with these
                  Terms, The Company grants you a worldwide, exclusive,
                  royalty-free license to use, copy, and display the purchased
                  Art, along with any extensions that you choose to create or
                  use, solely for the following purposes: (i) for your own
                  personal, non-commercial use; (ii) as part of a marketplace
                  that permits the purchase and sale of your NFT, provided that
                  the marketplace cryptographically verifies each MysticGol
                  owner's rights to display the Art for their MysticGol to
                  ensure that only the actual owner can display the Art; or
                  (iii) as part of a third party website or application that
                  permits the inclusion, involvement, or participation of your
                  MysticGol, provided that the website/application
                  cryptographically verifies each MysticGol owner's rights to
                  display the Art for their MysticGol to ensure that only the
                  actual owner can display the Art, and provided that the Art is
                  no longer visible once the owner of the MysticGol leaves the
                  website/application.
                </li>
                <li>
                  Commercial Use. Subject to your continued compliance with
                  these Terms, The Company grants you an unlimited, worldwide,
                  exclusive, license to use, copy, and display the purchased Art
                  for the purpose of creating derivative works based upon the
                  Art ("Commercial Use"). Examples of such Commercial Use would
                  e.g. be the use of the Art to produce and sell merchandise
                  products (T-Shirts etc.) displaying copies of the Art. For the
                  sake of clarity, nothing in this Section will be deemed to
                  restrict you from (i) owning or operating a marketplace that
                  permits the use and sale of MysticGol generally, provided that
                  the marketplace cryptographically verifies each MysticGol
                  owner's rights to display the Art for their MysticGol to
                  ensure that only the actual owner can display the Art; (ii)
                  owning or operating a third party website or application that
                  permits the inclusion, involvement, or participation of
                  MysticGol generally, provided that the third party website or
                  application cryptographically verifies each MysticGol owner's
                  rights to display the Art for their MysticGol to ensure that
                  only the actual owner can display the Art, and provided that
                  the Art is no longer visible once the owner of the Purchased
                  MysticGol leaves the website/application; or (iii) earning
                  revenue from any of the foregoing.
                </li>
                <h2 className="pt-6 pb-2 font-semibold text-xl text-gray-700">
                  B. Restrictions
                </h2>
                <p className="py-2">
                  By using the App and/or purchasing NFT, you confirm to not be
                  listed, or associated with any person or entity being listed,
                  on any of the US Department of Commerce's Denied Persons or
                  Entity List, the US Department of Treasury's Specially
                  Designated Nationals or Blocked Persons Lists, the US
                  Department of State's Debarred Parties List, the EU
                  Consolidated List of Persons, Groups and Entities Subject to
                  EU Financial Sanctions, or the Swiss SECO's Overall List of
                  Sanctioned Individuals, Entities and Organizations. You
                  further confirm not to be resident of, citizen of or located
                  in a geographic area that is subject to UN-, US-, EU-,
                  Canadian, Swiss embargoes. You further confirm not to be
                  resident in Switzerland, Canada, or the United States.
                </p>
                <p className="py-2">
                  You further confirm not to be resident of, citizen of or
                  located in a geographic area that is subject to UN-, US-, EU-,
                  Swiss embargoes. You confirm not to be resident in
                  Switzerland, Canada, or the United States. You confirm to not
                  be domiciled in or organized under the laws of any country,
                  whose legislation conflicts with the present purchase of NFTs
                  on the BSC blockchain or the purpose of The Company in
                  general. You agree that you may not, nor permit any third
                  party to do or attempt to do any of the foregoing without The
                  Company's express prior written consent in each case: (ii) use
                  the Art for your Purchased MysticGol to advertise, market, or
                  sell any third party product or service; (ii) use the Art for
                  your Purchased MysticGol in connection with images, videos, or
                  other forms of media that depict hatred, intolerance,
                  violence, cruelty, or anything else that could reasonably be
                  found to constitute hate speech or otherwise infringe upon the
                  rights of others; (iii) sell, distribute for commercial gain
                  (including, without limitation, giving away in the hopes of
                  eventual commercial gain), or otherwise commercialize
                  merchandise that includes, contains, or consists of the Art
                  for your Purchased MysticGol, except as expressly permitted in
                  these Terms; (iv) attempt to trademark, copyright, or
                  otherwise acquire additional intellectual property rights in
                  or to the Art for your Purchased MysticGol; or (e.g., licensed
                  intellectual property from a celebrity, athlete, or other
                  public figure), you understand and agree as follows: (v) that
                  you will not have the right to use such Third Party IP in any
                  way except as incorporated in the Art, and subject to the
                  license and restrictions contained herein; (x) that the
                  Commercial Use license in Section 3.C(ii) above will not
                  apply; (y) that, depending on the nature of the license
                  granted from the owner of the Third Party IP, The Company may
                  need to pass through additional restrictions on your ability
                  to use the Art; and (z) to the extent that The Company informs
                  you of such additional restrictions in writing (email is
                  permissible), you will be responsible for complying with all
                  such restrictions from the date that you receive the notice,
                  and that failure to do so will be deemed a breach of this
                  license. The restrictions in this Section will survive the
                  expiration or termination of these Terms.
                </p>
                <h2 className="pt-6 pb-2 font-semibold text-xl text-gray-700">
                  C. Terminations.
                </h2>
                <p className="py-2">
                  In the event of any Force Majeure Event (including a
                  pandemic), breach of these Terms, or any other event that
                  would make provision of the App or the Site commercially
                  unreasonable for Company, we may, in our discretion and
                  without liability to you, with or without prior notice,
                  suspend your access to all or a portion of the App or the
                  Site.
                </p>
                <p className="py-2">
                  We may terminate your access to the App or the Site as far as
                  technically feasible in our sole discretion, immediately and
                  without prior notice, and delete or deactivate your Account
                  and all related information and files in such account without
                  liability to you, including, for instance, in the event that
                  you breach any term of these Terms.
                </p>
                <h2 className="pt-6 pb-2 font-semibold text-xl text-gray-700">
                  D. ASSUMPTION OF RISK
                </h2>
                <p className="py-2">
                  You accept and acknowledge each of the following:
                </p>
                <p className="py-2">
                  A. There are risks associated with using cryptocurrencies,
                  including, but not limited to, the risk of hardware, software
                  and Internet connections, the risk of malicious software
                  introduction, and the risk that third parties may obtain
                  unauthorized access to information stored within your wallet.
                  You accept and acknowledge that The Company will not be
                  responsible for any communication failures, disruptions,
                  errors, distortions or delays you may experience when using
                  the Binance smart chain network, however caused.
                </p>
                <p className="py-2">
                  B. You are solely responsible for determining what, if any,
                  Taxes apply to your MysticGol-related transactions. The
                  Company is not responsible for determining the Taxes that
                  apply to your transactions on the App, the Site, or the Smart
                  Contracts.
                </p>
                <p className="py-2">
                  C. The App does not store, send, or receive MysticGol. This is
                  because MysticGol exist only by virtue of the ownership record
                  maintained on the App's supporting blockchain in the Binance
                  smart chain network. Any transfer of MysticGol occurs within
                  the supporting blockchain in the Binance smart chain network,
                  and not on the App.
                </p>
                <p className="py-2">
                  D. The prices of blockchain assets are very volatile.
                  Fluctuations in the price of other digital assets could
                  materially and adversely affect the value of your MysticGol,
                  which may also be subject to significant price volatility. We
                  cannot guarantee that any purchasers of MysticGol will not
                  lose money.
                </p>
                <p className="py-2">
                  E. Risk of loss of private key or passphrase(s): The company
                  is not responsible for your private keys, which you need in
                  order to access the NFTs. It is your sole responsibility to
                  protect your private keys. In case of lost, the company takes
                  no responsibility.
                </p>
                <p className="py-2">
                  F. The regulatory regime governing blockchain technologies,
                  cryptocurrencies, and tokens is uncertain, and new regulations
                  or policies may materially adversely affect the development of
                  the MysticGol ecosystem, and therefore the potential utility
                  or value of MysticGol.
                </p>
                <p className="py-2">
                  G. Upgrades by Binance smart chain to the Binance smart chain
                  platform, a hard fork in the Binance smart chain platform, or
                  a change in how transactions are confirmed on the Binance
                  smart chain platform may have unintended, adverse effects on
                  all blockchains using the ERC-721 standard, including the
                  MysticGol ecosystem.
                </p>
                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                  6. LIMITATION OF WARRANTY, LIABILITY AND DISCLAIMERS
                </h2>
                <p className="py-2">
                  EXCEPT AS EXPRESSLY STATED IN THESE TERMS, THE COMPANY DOES
                  NOT MAKE ANY REPRESENTATIONS OR WARRANTIES AND EXPLICITLY
                  DISCLAIMS ALL OTHER REPRESENTATIONS AND WARRANTIES, WHETHER
                  EX-PRESS, IMPLIED, WRITTEN, ORAL OR STATUTORY, INCLUDING THE
                  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
                  PARTICULAR PURPOSE, AND WARRANTIES OTHERWISE ARISING FROM A
                  COURSE OF DEALING, COURSE OF PERFORMANCE OR USAGE OF TRADE.
                </p>
                <p className="py-2">
                  To the fullest extent permitted by applicable law: (i) in no
                  event will the company or any of the subsidiaries, affiliates,
                  directors and licensors be liable for any damages, whether
                  direct, indirect, special, incidental, or consequential, of
                  any kind (including, but not limited to, where related to loss
                  of revenue, income or profits, loss of use or data, or damages
                  for business interruption) arising out of or in any way
                  related to the sale or use of the NFT the App, the Site or
                  otherwise related to these Terms, regardless of the form of
                  action, whether based in contract, tort (including, but not
                  limited to, simple negligence, whether active, passive or
                  imputed), or any other legal or equitable theory (even if the
                  party has been advised of the possibility of such damages and
                  regardless of whether such damages were foreseeable.
                </p>
                <p className="py-2">
                  A. YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR ACCESS TO AND
                  USE OF THE APP IS AT YOUR SOLE RISK, AND THAT THE APP IS
                  PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY
                  KIND, WHETHER EXPRESSED OR IMPLIED. TO THE FULLEST EXTENT
                  PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE, OUR SUBSIDIARIES,
                  AFFILIATES, AND LICENSORS MAKE NO EXPRESS WARRANTIES AND
                  HEREBY DISCLAIM ALL IMPLIED WARRANTIES REGARDING THE APP AND
                  ANY PART OF IT (INCLUDING, WITHOUT LIMITATION, THE SITE, ANY
                  SMART CONTRACT, OR ANY EXTERNAL WEBSITES), INCLUDING THE
                  IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, NON-INFRINGEMENT, CORRECTNESS, ACCURACY,
                  OR RELIABILITY. WITHOUT LIMITING THE GENERALITY OF THE
                  FOREGOING, WE, OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS DO
                  NOT REPRESENT OR WARRANT TO YOU THAT: (I) YOUR ACCESS TO OR
                  USE OF THE APP WILL MEET YOUR REQUIREMENTS, (II) YOUR ACCESS
                  TO OR USE OF THE APP WILL BE UNINTERRUPTED, TIMELY, SECURE OR
                  FREE FROM ERROR, (III) USAGE DATA PROVIDED THROUGH THE APP
                  WILL BE ACCURATE, (III) THE APP OR ANY CONTENT, SERVICES, OR
                  FEATURES MADE AVAILABLE ON OR THROUGH THE APP ARE FREE OF
                  VIRUSES OR OTHER HARMFUL COMPONENTS, OR (IV) THAT ANY DATA
                  THAT YOU DISCLOSE WHEN YOU USE THE APP WILL BE SECURE. SOME
                  JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES
                  IN CONTRACTS WITH CONSUMERS, SO SOME OR ALL OF THE ABOVE
                  EXCLUSIONS MAY NOT APPLY TO YOU.
                </p>
                <p className="py-2">
                  B. YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING
                  INFORMATION AND DEALING ONLINE OVER THE INTERNET, AND AGREE
                  THAT WE HAVE NO LIABILITY OR RESPONSIBILITY FOR ANY BREACH OF
                  SECURITY UNLESS IT IS DUE TO OUR WILFUL INTENT OR GROSS
                  NEGLIGENCE.
                </p>
                <p className="py-2">
                  C. WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSSES
                  YOU INCUR AS THE RESULT OF YOUR USE OF THE BSC NETWORK OR THE
                  METAMASK WALLET, INCLUDING BUT NOT LIMITED TO ANY LOSSES,
                  DAMAGES OR CLAIMS ARISING FROM: (i) USER ERROR, SUCH AS
                  FORGOTTEN PASSWORDS OR INCORRECTLY CONSTRUED SMART CONTRACTS
                  OR OTHER TRANSACTIONS; (ii) SERVER FAILURE OR DATA LOSS; (iii)
                  CORRUPTED WALLET FILES; OR (iv) UNAUTHORIZED ACCESS OR
                  ACTIVITIES BY THIRD PARTIES, INCLUDING BUT NOT LIMITED TO THE
                  USE OF VIRUSES, PHISHING, BRUTEFORCING OR OTHER MEANS OF
                  ATTACK AGAINST THE APP, BSC NETWORK, OR THE METAMASK
                  ELECTRONIC WALLET.
                </p>
                <p className="py-2">
                  D. MYSTIC ARE INTANGIBLE DIGITAL OBJECTS THAT EXIST ONLY BY
                  VIRTUE OF THE OWNERSHIP RECORD MAINTAINED IN THE BSC NETWORK.
                  ALL SMART CONTRACTS ARE CONDUCTED AND OCCUR ON THE
                  DECENTRALIZED LEDGER WITHIN THE BSC PLATFORM. WE HAVE NO
                  CONTROL OVER AND MAKE NO GUARANTEES OR PROMISES WITH RESPECT
                  TO SMART CONTRACTS.
                </p>
                <p className="py-2">
                  E. THE COMPANY IS NOT RESPONSIBLE FOR LOSSES DUE TO
                  BLOCKCHAINS OR ANY OTHER FEATURES OF THE BSC NETWORK OR THE
                  METAMASK ELECTRONIC WALLET, INCLUDING BUT NOT LIMITED TO LATE
                  REPORT BY DEVELOPERS OR REPRESENTATIVES (OR NO REPORT AT ALL)
                  OF ANY ISSUES WITH THE BLOCKCHAIN SUPPORTING THE BSC NETWORK,
                  INCLUDING FORKS, TECHNICAL NODE ISSUES, OR ANY OTHER ISSUES
                  HAVING FUND LOSSES AS A RESULT.
                </p>
                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                  7. INDEMNIFICATION
                </h2>
                <p className="py-2">
                  You agree that you will be responsible for your use of the App
                  or the Site and holding NFT and you agree to defend,
                  indemnify, and hold harmless The Company and its officers,
                  directors, employees, consultants, affiliates, subsidiaries
                  and agents (collectively, the "The Company Entities") from and
                  against any and all claims, liabilities, damages, losses, and
                  expenses, including reasonable attorneys' fees and costs,
                  arising out of or in any way connected with (i) your access
                  to, use of, or alleged use of the App, site or token at any
                  time; (ii) your violation of these Terms or any
                  representation, warranty, or agreements referenced herein, or
                  any applicable law or regulation; (iii) your violation of any
                  third-party right, including without limitation any
                  intellectual property right, publicity, confidentiality,
                  property or privacy right; or (iv) any disputes or issues
                  between you and any third party. The Company reserves the
                  right, at our own expense, to assume the exclusive defense and
                  control of any matter otherwise subject to indemnification by
                  you (and without limiting your indemnification obligations
                  with respect to such matter), and in such case, you agree to
                  cooperate with The Company's defense of such claim.
                </p>
                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                  8. THIRD-PARTY SITES
                </h2>
                <p className="py-2">
                  The App may include hyperlinks to other web sites or resources
                  (collectively, "External Sites"), which are provided solely as
                  a convenience to our users. We have no control over any
                  External Sites, are not monitoring their content and are
                  providing the respective links for informational purposes
                  only. You acknowledge and agree that we are not responsible
                  for the availability of any External Sites, and that we do not
                  endorse any advertising, products or other content or
                  materials on or made available from any External Sites.
                  Furthermore, you acknowledge and agree that we are not liable
                  for any loss or damage which may be incurred as a result of
                  the availability or unavailability of the External Sites, or
                  as a result of any reliance placed by you upon the
                  completeness, accuracy or existence of any advertising,
                  products or other content or materials on, or made available
                  from, any External Sites.
                </p>
                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                  9. CHANGES TO THE TERMS
                </h2>
                <p className="py-2">
                  The present Terms may change from time to time, including but
                  not limited to cases of changes in our App or Site and for any
                  other case that the company deems as appropriate to improve
                  the user experience.
                </p>
                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                  10. CHILDREN
                </h2>
                <p className="py-2">
                  You affirm that you are over the age of 13, as the App is not
                  intended for children under 13. IF YOU ARE 13 OR OLDER BUT
                  UNDER THE AGE OF 18, OR THE LEGAL AGE OF MAJORITY WHERE YOU
                  RESIDE IF THAT JURISDICTION HAS AN OLDER AGE OF MAJORITY, THEN
                  YOU AGREE TO REVIEW THESE TERMS WITH YOUR PARENT OR GUARDIAN
                  TO MAKE SURE THAT BOTH YOU AND YOUR PARENT OR GUARDIAN
                  UNDERSTAND AND AGREE TO THESE TERMS. YOU AGREE TO HAVE YOUR
                  PARENT OR GUARDIAN REVIEW AND ACCEPT THESE TERMS ON YOUR
                  BEHALF. IF YOU ARE A PARENT OR GUARDIAN AGREEING TO THE TERMS
                  FOR THE BENEFIT OF A CHILD OVER 13, THEN YOU AGREE TO AND
                  ACCEPT FULL RESPONSIBILITY FOR THAT CHILD'S USE OF THE APP,
                  INCLUDING ALL FINANCIAL CHARGES AND LEGAL LIABILITY THAT HE OR
                  SHE MAY INCUR.
                </p>
                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                  11. WAIVER OF CLASS LAWSUITES
                </h2>
                <p className="py-2">
                  ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THESE TERMS MUST
                  BE LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS OR
                  COLLECTIVE BASIS, ONLY INDIVIDUAL RELIEF IS AVAILABLE, AND
                  CLAIMS OF MORE THAN ONE CUSTOMER OR USER CANNOT BE
                  CONSOLIDATED WITH THOSE OF ANY OTHER CUSTOMER OR USER.
                </p>
                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                  12. PRIVACY POLICY
                </h2>
                <p className="py-2">
                  The Company uses electronic cookies to track the
                  acknowledgement of the terms within this site before purhase
                  of the art.
                </p>
                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                  13. GENERAL
                </h2>
                <p className="py-2">
                  If a provision of these terms is unenforceable as written, but
                  could be changed to make it enforceable, that provision should
                  be modified to the minimum extent necessary to make it
                  enforceable. Otherwise, that provision should be removed.
                </p>
                <p className="py-2">
                  You may not assign your agreement with the company. The
                  company may assign your agreement to any affiliate of the
                  company, any other company that obtains control of the
                  company, or any other company that buys assets of the company
                  related to the forum. Any attempted assignment against these
                  terms has no legal effect.
                </p>
                <p className="py-2">
                  Neither the exercise of any right under this Agreement, nor
                  waiver of any breach of this Agreement, waives any other
                  breach of this Agreement.
                </p>
                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                  14. GOVERNING LAW AND JURISDICTION
                </h2>
                <p className="py-2">
                  These Terms and all claims relating to or arising out of this
                  Agreement, or the breach thereof, whether in contract, tort or
                  otherwise, shall be governed by US and Canadian Law.
                </p>
                <h2 className="pt-6 pb-2 font-semibold text-2xl text-gray-700">
                  15. MISCELLANEOUS
                </h2>
                <p className="py-2">
                  These Terms and any policies or operating rules posted by us
                  on the Site, the App or in respect to the Site or the
                  Application constitute the entire agreement and understanding
                  between you and the Company. Our failure to exercise or
                  enforce any right or provision of these Terms shall not
                  operate as a waiver of such right or provision. These Terms
                  operate to the fullest extent permissible by law. We shall not
                  be responsible or liable for any loss, damage, delay, or
                  failure to act caused by any cause beyond our reasonable
                  control. If any provision or part of a provision of these
                  Terms is determined to be unlawful, void, and unenforceable,
                  that provision or part of the provision is deemed severable
                  these Terms and does not affect the validity and
                  enforceability of any remaining provisions. There is no joint
                  venture, partnership, employment or agency relationship
                  created between you and us as a result of these Terms or use
                  of the Site. You agree that these Terms will not be construed
                  against us by virtue of having drafted them. You hereby waive
                  any and all defenses you may have based on the electronic form
                  of these Terms of Use and the lack of signing by the parties
                  hereto to execute these Terms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
