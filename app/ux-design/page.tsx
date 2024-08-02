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
            caption: "He turns on the extra privacy option, which adds 2 blinded paths with 2 hops each to the BOLT 12 offer."
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
            caption: "Now her fans can send her zaps via BOLT 12 over Nostr."
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
            caption: "Dan goes into the withdrawal options for his exchange account, and chooses a recurring withdrawal. Exchange asks him for a bitcoin address or a BOLT 12 offer."
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

            <div className="flex flex-col gap-8 p-8 pt-36 mx-auto max-w-6xl">
                <h1 className="font-bold">User Stories</h1>
                <section className="py-12 border-b border-t border-gray-200 flex flex-col gap-6">
                    <h2 id="reusable-payment-requests">Reusable Payment Requests</h2>
                    <blockquote>
                        <p>
                            Now that I can slap a QR code on our tip jar, my band can seamlessly receive tips in bitcoin! No more creating a new QR code for every virtual fan who wants to tip us after a moon colony gig, and no more losing 75% of potential tippers due to the long wait for BOLT 11 invoices.
                        </p>
                    </blockquote>
                    <p>
                        In this scenario, Alice just needs a payment identifier that doesn&rsquo;t need to be changed or refreshed after each use. Her wallet creates an offer for her. She can then use the share tray and send it to a printer, then affix the printed QR code next to her band, in the same way that one might put a CashApp QR code on their tip jar.
                    </p>
                    <StoryRow story={stories.alice} />
                </section>
                <section className="py-12 border-b border-gray-200 flex flex-col gap-6">
                    <h2 id="receiver-privacy">Receiver Privacy</h2>
                    <blockquote>
                        <p>
                        As a shadowy super coder contributing to Bitcoin Core, I needed a way to accept donations that preserves anonymity while compartmentalizing my 784 digital identities. With BOLT 12’s route blinding, I can now accept payments discreetly and securely!
                        </p>
                    </blockquote>
                    <p>
                        In this scenario, the user needs some extra privacy. By using route blinding, which could be provided as an optional service by the LSP, the user can publish the offer into the world without revealing their node&rsquo;s pubkey. In theory, the user could create different offers for different sectors of their life, maintaing privacy and separation between these sectors.
                    </p>
                    <StoryRow story={stories.brijesh} />
                </section>
                <section className="py-12 border-b border-gray-200 flex flex-col gap-6">
                    <h2 id="social-integration">Social Integration</h2>
                    <blockquote>
                        <p>
                        I’m a content creator on Nostr who has always wanted a self-custodial way to accept zaps for my VR artwork. By publishing my bitcoin wallet’s payment code to my Nostr profile, I can receive zaps directly, without custodians or middlemen. Viva la BOLT 12!
                        </p>
                    </blockquote>
                    <p>
                        In this scenario, the user wants to receive self-custodial zaps on Nostr. While the current zaps implementation uses LNURL, there is not reason it could not be done with a BOLT 12 offer as well. For example, a BOLT 12 could be included in a `kind: 0` metadata note, AKA <em>the user&rsquo;s profile</em>. From there, Nostr clients aware of BOLT 12 could attempt to pay using the offer instead of the LNURL data in Charlotte&rsquo;s profile.
                    </p>
                    <StoryRow story={stories.charlotte} />
                </section>
                <section className="py-12 border-b border-gray-200 flex flex-col gap-6">
                    <h2 id="auto-withdrawals">Auto-withdrawals</h2>
                    <blockquote>
                        <p>
                        After hearing some cyborgs talk about bitcoin on XNBC Squawk Cube, I decided to buy in. Later, I learned that it&rsquo;s better to self-custody bitcoin rather than trust exchanges. So, I set my exchange account to automatically deposit bitcoin into a self-custodial wallet using BOLT 12 offers.
                        </p>
                    </blockquote>
                    <p>
                        Services such as <a href="https://www.swanbitcoin.com/" target="_blank">Swan</a> allow you to setup automated recurring withdrawals of your bitcoin balance to your own wallet. Currently, this is implemented with a static on-chain address or an xPub. Imagine an exchange adding BOLT 12 offers to the list of accepted formats. Then users could have their balance auto-withdrawn to their own wallet, instantly spendable on lightning and without the onchain fees.
                    </p>
                    <StoryRow story={stories.danh} />
                </section>
                <section className="py-12 border-b-0 border-gray-200 flex flex-col gap-6">
                    <h2 id="censorship-resistance">Censorship Resistance</h2>
                    <blockquote>
                        <p>
                            As an activist living under an authoritarian robot regime, I needed a way to accept donations without payment services blocking my IP address. With onion messaging, my IP address remains hidden, ensuring I can receive support securely. Smash the autonomous patriarchy!
                        </p>
                    </blockquote>
                    <p>
                        Bitcoin payment schemes that rely on HTTP can be censored. One advantage of BOLT 12 offers is that they do not rely on web servers or HTTP requests. Instead, they use onion messaging. Furthermore, the offer can use a <a href="https://github.com/bitcoin/bips/pull/1551" target="_blank">BIP 353 payment identifier</a>, which looks like an email address and is easy to remember and share.
                    </p>
                    <StoryRow story={stories.elaheh} />
                </section>
            </div>
        </>
    )
}