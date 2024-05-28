import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "UX Design | BOLT 12",
  description: "UX ideas for integrating BOLT 12 into your bitcoin lightning application."
}

export default function UxDesign(){
    return(
        <>
            <Header />

            <div className="flex flex-col gap-4 p-8 max-w-xl pt-36">
                <p>
                    Bitcoin ipsum dolor sit amet. Block reward transaction key pair SHA-256, digital signature peer-to-peer outputs mempool. Volatility stacking sats consensus public key genesis block miner nonce? Decentralized whitepaper sats address mempool to the moon full node decentralized! Sats block height, public key block height address deflationary monetary policy mining decentralized? Private key electronic cash pizza halvening.
                </p>
                <p>
                    SHA-256, fee market hodl block reward outputs roller coaster volatility wallet mempool! Price action deflationary monetary policy hyperbitcoinization sats, peer-to-peer SHA-256 key pair! Money printer go brrrrr pizza roller coaster soft fork address Satoshi Nakamoto, price action, halvening! Soft fork, fee market space citadel double-spend problem.
                </p>
                <p>
                    Pizza sats blockchain stacking sats, volatility key pair to the moon segwit. Wallet Merkle Tree genesis block, whitepaper, money printer go brrrrr outputs block reward segwit whitepaper! Outputs transaction, mining inputs mempool space citadel, price action transaction? Price action consensus mempool electronic cash I&rsquo;m in it for the tech, mining consensus digital signature? Mining, key pair, decentralized?
                </p>
                <p>
                    Private key hodl address miner soft fork pizza blockchain when lambo! Digital signature Bitcoin Improvement Proposal transaction public key money printer go brrrrr satoshis peer-to-peer. Roller coaster digital signature address SHA-256, digital signature money printer go brrrrr decentralized, segwit. Mining.
                </p>
                <p>
                    Digital signature, to the moon sats outputs peer-to-peer deflationary monetary policy cryptocurrency block reward. Satoshis SHA-256 outputs, digital signature halvening transaction freefall together when lambo blockchain? Public key cryptocurrency block reward block height volatility timestamp server, space citadel segwit.
                </p>
            </div>
        </>
    )
}