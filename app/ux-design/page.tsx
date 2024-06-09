import Header from "@/components/Header";
import { Metadata } from "next";
import type {Stories } from "@/features/StoryRow";
import StoryRow from "@/features/StoryRow";
import alice from "@/public/ux/alice/MeetAlice.png";
import aliceAppStore from "@/public/ux/alice/AppStore.png";
import aliceOnboarding from "@/public/ux/alice/Onboarding.png";
import alicePaymentCode from "@/public/ux/alice/PaymentCode.png";
import aliceSharing from "@/public/ux/alice/ShareTray.png";
import aliceTipSign from "@/public/ux/alice/TipSign.png";
import brijesh from "@/public/ux/brijesh/MeetBrijesh.png";
import brijeshPayCodes from "@/public/ux/brijesh/PayCodes.png";
import brijeshNewPayCode from "@/public/ux/brijesh/NewPayCode.png";
import brijeshNewPayCodePrivate from "@/public/ux/brijesh/NewPayCodePrivate.png";
import brijeshPaymentCode from "@/public/ux/brijesh/PaymentCode.png";
import brijeshBobWebsite from "@/public/ux/brijesh/BobWebsite.png";
import charlotte from "@/public/ux/charlotte/MeetCharlotte.png";
import charlotteAppStore from "@/public/ux/charlotte/AppStore.png";
import charlottePaymentCode from "@/public/ux/charlotte/PaymentCode.png";
import charlotteShareTray from "@/public/ux/charlotte/ShareTray.png";
import charlotteNostrPrompt from "@/public/ux/charlotte/NostrPrompt.png";
import charlotteNostrProfile from "@/public/ux/charlotte/NostrProfile.png";
import danh from "@/public/ux/danh/MeetDanh.png";
import danhBTCExchange from "@/public/ux/danh/BTCExchange.png";
import danhPaymentCode from "@/public/ux/danh/PaymentCode.png";
import danhSharing from "@/public/ux/danh/ShareTray.png";
import danhBTCExchangeOffer from "@/public/ux/danh/BTCExchangeOffer.png";
import danhTextMessages from "@/public/ux/danh/TextMessages.png";
import elaheh from "@/public/ux/elaheh/MeetElaheh.png";
import elahehNewUserName from "@/public/ux/elaheh/NewUserName.png";
import elahehNewUserNameFilled from "@/public/ux/elaheh/NewUserNameFilled.png";
import elahehPaymentCode from "@/public/ux/elaheh/PaymentCode.png";
import elahehSocialPost from "@/public/ux/elaheh/SocialPost.png";
import placeholder from "@/public/ux/Placeholder.png";

export const metadata:Metadata = {
  title: "UX Design | BOLT 12",
  description: "UX ideas for integrating BOLT 12 into your bitcoin lightning application."
}

const stories:Stories = {
    alice: [
        {
            image: alice,
            alt: "Alice playing a keyboard",
            caption: "Alice is a musician and wants a way to receive tips from the audience when her band is playing live shows."
        },
        {
            image: aliceAppStore,
            alt: "Bitcoin wallet in an app store",
            caption: "Alice downloads a bitcoin wallet from the app store."
        },
        {
            image: aliceOnboarding,
            alt: "Wallet Onboarding Flow",
            caption: "Alice onboards to the wallet."
        },
        {
            image: alicePaymentCode,
            alt: "A UI where Alice can retrieve her payment code, a BIP21 URI with a BOLT 12 offer.",
            caption: "Alices retrieves her payment code, which is a BIP21 URI with a BOLT 12 offer."
        },
        {
            image: aliceSharing,
            alt: "UI of opening the share tray on iOS",
            caption: "Once she has her payment code, she can share it with her audience."
        },
        {
            image: aliceTipSign,
            alt: "A tip sign with a QR code of Alice's BOLT 12 offer",
            caption: "Alice slaps this payment code (Offer QR) on a sign at her band’s merch booth and in front of the mic so audience can tip them directly."
        }
    ],
    brijesh: [
        {
            image: brijesh,
            alt: "Brijesh in his secret trenchcoat",
            caption: "Brijesh, known as Bob on Github, is a pseudonymous bitcoin FOSS dev and wants a way that people can support his work as privately as possible with BTC."
        },
        {
            image: brijeshPayCodes,
            alt: "UI displaying all of Brijesh's BOLT 12 offers",
            caption: "Bob likes to separate out pay codes for different sectors of his life."
        },
        {
            image: brijeshNewPayCode,
            alt: "UI to make a new pay code (offer)",
            caption: "Bob goes to create a new pay code specifically for bitcoin dev donations."
        },
        {
            image: brijeshNewPayCodePrivate,
            alt: "Ui to give the offer extra privacy features",
            caption: "He turns on the extra privacy option, which adds 2 blinded paths with 2 hops each to the BOLT12 offer."
        },
        {
            image: brijeshPaymentCode,
            alt: "UI displaying the newly created offer",
            caption: "Brijesh retrieves his payment code, which is a BIP21 URI with a BOLT 12 offer."
        },
        {
            image: brijeshBobWebsite,
            alt: "Brijesh's website, where he displays his offer under the pseudonymous name Bob",
            caption: "A supporter goes to tip him on his website. They can tap a link to a BIP21 URI, scan the offer QR code, etc."
        },
    ],
    charlotte: [
        {
            image: charlotte,
            alt: "",
            caption: "Charlotte is a content creator who is very active on Nostr and wants a way that her audience and fans can tip her directly from a Nostr client."
        },
        {
            image: charlotteAppStore,
            alt: "",
            caption: "Charlotte downloads a bitcoin wallet and gets setup."
        },
        {
            image: charlottePaymentCode,
            alt: "",
            caption: "The wallet generates a payment code for her during onboarding. It notifies her that she can add this to her Nostr profile. She taps yes for this."
        },
        {
            image: charlotteShareTray,
            alt: "",
            caption: "Wallet opens share tray (or similar menu) and she chooses her fave Nostr client from the list of apps."
        },
        {
            image: charlotteNostrPrompt,
            alt: "",
            caption: "Switches over to the Nostr client --- client asks what she wants to do with the offer, she chooses “add to profile”."
        },
        {
            image: charlotteNostrProfile,
            alt: "",
            caption: "Now her fans can send her zaps via BOLT12 over Nostr."
        }
    ],
    danh: [
        {
            image: danh,
            alt: "",
            caption: "Dan likes to invest, and he DCAs bitcoin everyday with a recurring buy on an exchange. He wants a way to sweep his BTC off the exchange automatically once a week."
        },
        {
            image: danhBTCExchange,
            alt: "",
            caption: "Dan goes into the withdrawal options for his exchange account, and chooses a recurring withdrawal. Exchange asks him for a bitcoin address or a BOLT12 offer."
        },
        {
            image: danhPaymentCode,
            alt: "",
            caption: "Dan goes to his bitcoin wallet..."
        },
        {
            image: danhSharing,
            alt: "",
            caption: "...copies the offer..."
        },
        {
            image: danhBTCExchangeOffer,
            alt: "",
            caption: "...and pastes it into the exchange’s form. Then, he receives his payouts automatically once a week via async payments."
        },
        {
            image: danhTextMessages,
            alt: "",
            caption: "OR, in a world where async payments doesn’t exist yet, Dan receives a text from his exchange once a week asking him if he’d like to withdraw funds. He taps a link inside, which opens his bitcoin wallet, and then the exchange sends the payment."
        },
    ],
    elaheh: [
        {
            image: elaheh,
            alt: "",
            caption: "Elaheh is an activist living under an authoritarian regime. She needs a way to accept donations to her cause in a way that is private, not censorable, and can easily be shared on social media or by word of mouth."
        },
        {
            image: elahehNewUserName,
            alt: "",
            caption: "Elaheh tries out her wallet's new username feature."
        },
        {
            image: elahehNewUserNameFilled,
            alt: "",
            caption: "She chooses a username. It looks just like an email address and is easy to remember."
        },
        {
            image: elahehPaymentCode,
            alt: "",
            caption: "Confirmation that the username is created. She can now copy+paste it, or simply tell people."
        },
        {
            image: elahehSocialPost,
            alt: "",
            caption: "It's now easy for social influencers like Charlotte to spread Elaheh's donation address with the world!"
        },
    ]
}

export default function UxDesign(){
    return(
        <>
            <Header />

            <div className="flex flex-col gap-8 p-8 pt-36 mx-auto">
                <h1 className="font-bold">User Stories</h1>
                <section className="py-12 border-b border-t border-gray-200 flex flex-col gap-6">
                    <h2 id="reusable-payment-requests">Reusable Payment Requests</h2>
                    <p>
                        Bitcoin ipsum dolor sit amet. Mempool, public key cryptocurrency address, Bitcoin Improvement Proposal proof-of-work nonce, sats! Sats, public key private key wallet hashrate sats block height wallet timestamp server. Hashrate transaction mempool mining inputs whitepaper, bitcoin.
                    </p>
                    <StoryRow story={stories.alice} />
                </section>
                <section className="py-12 border-b border-gray-200 flex flex-col gap-6">
                    <h2 id="receiver-privacy">Receiver Privacy</h2>
                    <p>
                        Bitcoin ipsum dolor sit amet. Mempool, public key cryptocurrency address, Bitcoin Improvement Proposal proof-of-work nonce, sats! Sats, public key private key wallet hashrate sats block height wallet timestamp server. Hashrate transaction mempool mining inputs whitepaper, bitcoin.
                    </p>
                    <StoryRow story={stories.brijesh} />
                </section>
                <section className="py-12 border-b border-gray-200 flex flex-col gap-6">
                    <h2 id="social-integration">Social Integration</h2>
                    <p>
                        Bitcoin ipsum dolor sit amet. Mempool, public key cryptocurrency address, Bitcoin Improvement Proposal proof-of-work nonce, sats! Sats, public key private key wallet hashrate sats block height wallet timestamp server. Hashrate transaction mempool mining inputs whitepaper, bitcoin.
                    </p>
                    <StoryRow story={stories.charlotte} />
                </section>
                <section className="py-12 border-b border-gray-200 flex flex-col gap-6">
                    <h2 id="auto-withdrawals">Auto-withdrawals</h2>
                    <p>
                        Bitcoin ipsum dolor sit amet. Mempool, public key cryptocurrency address, Bitcoin Improvement Proposal proof-of-work nonce, sats! Sats, public key private key wallet hashrate sats block height wallet timestamp server. Hashrate transaction mempool mining inputs whitepaper, bitcoin.
                    </p>
                    <StoryRow story={stories.danh} />
                </section>
                <section className="py-12 border-b-0 border-gray-200 flex flex-col gap-6">
                    <h2 id="censorship-resistance">Censorship Resistance</h2>
                    <p>
                        Bitcoin ipsum dolor sit amet. Mempool, public key cryptocurrency address, Bitcoin Improvement Proposal proof-of-work nonce, sats! Sats, public key private key wallet hashrate sats block height wallet timestamp server. Hashrate transaction mempool mining inputs whitepaper, bitcoin.
                    </p>
                    <StoryRow story={stories.elaheh} />
                </section>
            </div>
        </>
    )
}