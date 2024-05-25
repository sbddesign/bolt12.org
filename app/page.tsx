"use client";
import Image from "next/image"
import {Inter, Pacifico} from "next/font/google"
import {MenuIcon} from "@bitcoin-design/bitcoin-icons-react/filled"
import React from "react"
import Header from "@/components/Header";

const inter = Inter({subsets: ["latin"]})
const pacifico = Pacifico({subsets: ["latin"], weight: '400'})

export default function Home() {
    const nodeImagePaths = [
      {
        path: "/nodes/lnd.png",
        description:
          "Bitcoin ipsum dolor sit amet. Inputs hashrate hard fork digital signature UTXO timestamp server genesis block consensus! Hashrate transaction digital signature cryptocurrency double-spend problem nonce consensus!",
      },
      {
        path: "/nodes/cln.png",
        description:
          "Bitcoin ipsum dolor sit amet. Inputs hashrate hard fork digital signature UTXO timestamp server genesis block consensus! Hashrate transaction digital signature cryptocurrency double-spend problem nonce consensus!",
      },
      {
        path: "/nodes/eclair.png",
        description:
          "Bitcoin ipsum dolor sit amet. Inputs hashrate hard fork digital signature UTXO timestamp server genesis block consensus! Hashrate transaction digital signature cryptocurrency double-spend problem nonce consensus!",
      },
      {
        path: "/nodes/ldk.png",
        description:
          "Bitcoin ipsum dolor sit amet. Inputs hashrate hard fork digital signature UTXO timestamp server genesis block consensus! Hashrate transaction digital signature cryptocurrency double-spend problem nonce consensus!",
      },
    ];

  return (
    <>
      <Header shy />
      <main className="flex min-h-screen flex-col items-center pt-20">
        <div className="md:h-screen flex items-center justify-center flex-col gap-8 p-4 py-12 lg:px-12">
          {/* Source: https://www.figma.com/file/6Fffpw0We8W3F5XnJfmdJ1/Bolt12.org?type=design&node-id=855%3A3620&mode=design&t=0LbwOMnp5HdPPCRR-1 */}
          <div className="relative w-full max-w-[1372px] h-0 pb-[52%]">
            <Image src={"/hero/bolt-12-hero-text-shadow.png"} alt="" width={1372} height={723} className="w-full max-w-[1372px] absolute top-0 left-0 animate-hero-text-float" />
            <Image src={"/hero/bolt-12-hero-image.png"} alt="" width={1372} height={723} className="w-full max-w-[1372px] absolute top-0 left-0 animate-hero-image-float" />
            <Image src={"/hero/bolt-12-hero-text.png"} alt="" width={1372} height={723} className="w-full max-w-[1372px] absolute top-0 left-0 animate-hero-text-float" />
            <Image src={"/hero/bolt-12-hero-logo.png"} alt="" width={1372} height={723} className="w-full max-w-[1372px] absolute top-0 left-0 animate-hero-logo-float" />
          </div>
          
          <div className="flex flex-col items-center text-center  text-xl md:text-2xl lg:text-4xl w-full md:w-2/3 lg:w-1/2 justify-center">
            <span className="text-[#685588] font-headings font-regular">
              Ever wondered what it’s like to live in the futuristic utopia of
              BOLT 12?
            </span>
            <span className="text-[#685588] font-display">Let’s take a look!</span>
          </div>
        </div>
        {/* User Stories */}
        <div className="flex flex-col items-center w-full mt-24 gap-20">
          <div className="flex flex-col md:flex-row justify-start items-center w-full gap-20">
            <img src="/users/alice.svg" alt="Alice" className="w-1/3" />
            <div className="flex flex-col gap-4 w-2/5">
              <h2 className="text-4xl text-[#6D4FA6]">
                Reusable Payment Requests
              </h2>
              <span>
                Now that I can just slap my QR code on my tip jar, my band finally
                can finally receive tips in bitcoin! Gone are the days of making a
                new QR code for every fan that wants to tip us after gig, and
                watching 75% of them lose interest after they saw how long it took
                us to make BOLT11 invoices.
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-end items-center w-full gap-20">
            <div className="flex flex-col gap-4 w-2/5">
              <h2 className="text-4xl text-[#FFA100]">Receiver Privacy</h2>
              <span>
                As a shadowy super coder that makes contributions to Bitcoin Core,
                I needed a way to accept donations for my work in a way that helps
                me preserve my anonymity and separate my various digital
                identities. BOLT 12’s route blinding helps me accept payments on
                the down-low!
              </span>
            </div>
            <img src="/users/brijesh.svg" alt="Brijesh" className="w-1/3" />
          </div>
          <div className="flex flex-col md:flex-row justify-start items-center w-full gap-20">
            <img src="/users/charlotte.svg" alt="Charlotte" className="w-1/3" />
            <div className="flex flex-col gap-4 w-2/5">
              <h2 className="text-4xl text-[#FA4FAA]">Social Integrations</h2>
              <span>
                As a content creator on Nostr, I needed a way to accept zaps on my
                artwork that was self-custodial. I was able to easily publish my
                bitcoin wallet’s payment code to my Nostr profile and receive zaps
                without any custodians or middle-men. BOLT 12 is a great way to
                support the arts!
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-end items-center w-full gap-20">
            <div className="flex flex-col gap-4 w-2/5">
              <h2 className="text-4xl text-[#00C4D5]">Auto-withdrawals</h2>
              <span>
                I heard some guys talking about bitcoin on XNBC Squawk Cube, so I
                decided to buy it. Then I learned that I shouldn’t trust exchanges
                and it’s better to self-custody bitcoin. So, I setup my exchange
                account to auto-deposit my bitcoin to my self-custodial wallet
                using my BOLT 12 offer.
              </span>
            </div>
            <img src="/users/danh.svg" alt="Danh" className="w-1/3" />
          </div>
          <div className="flex flex-col md:flex-row justify-start items-center w-full gap-20">
            <img src="/users/elaheh.svg" alt="Elaheh" className="w-1/3" />
            <div className="flex flex-col gap-4 w-2/5">
              <h2 className="text-4xl text-[#2ACA4D]">Social Integrations</h2>
              <span>
                I needed a way to accept donations for my work as an activist
                living under an authoritarian regime. The problem is that many
                payment services would block me based on my IP address. Now, with
                onion messaging, nobody needs to know my IP address. Fight the
                patriarchy!
              </span>
            </div>
          </div>
        </div>

        {/* How to Integrate */}
        <div className="flex flex-col justify-between items-center bg-[url('/blueprint.jpg')] bg-cover w-full pb-24">
          <div className="flex flex-col gap-20 w-10/12 mt-12 justify-center">
            <div className="flex justify-between">
              <div className="bg-[#37869F] w-[454px] h-[87px] flex items-center justify-center rounded-tl-[48px] rounded-tr-[96px] rounded-br-[8px] rounded-bl-[96px]">
                <span className="text-[#FFF963] text-4xl font-headings">
                  How to Integrate BOLT12
                </span>
              </div>
              <div className="bg-[#FFF963] flex items-center justify-center w-[193px] h-[74px] rounded-tl-[96px] rounded-tr-[48px] rounded-br-[96px] rounded-bl-[24px] drop-shadow-lg">
                <span className="text-[#FF2E00]">Read the Spec</span>
              </div>
            </div>
            <div className="gap-20 grid grid-cols-1 md:grid-cols-2 justify-items-center">
              {nodeImagePaths.map(({ path, description }, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 items-center w-[500px] h-[180px] bg-white  rounded-tl-[96px] rounded-tr-[8px] rounded-br-[96px] rounded-bl-[48px]"
                >
                  <Image
                    src={path}
                    alt={`Node ${index}`}
                    width={124}
                    height={124}
                  />
                  <span>{description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="get-involved">
          TODO: Replace this with the footer in Brandon's PR
        </div>
      </main>
    </>
  );
}
