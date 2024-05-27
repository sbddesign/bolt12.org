"use client";
import Image from "next/image"
import React from "react"
import Header from "@/components/Header";
import UserProfile from "@/features/UserProfile";
import type {UserProfileProps} from "@/features/UserProfile";
import projectsData from "@/data/projects.json"
import GlobeAltIcon from "@heroicons/react/24/solid/GlobeAltIcon";
import CommandLineIcon from "@heroicons/react/24/solid/CommandLineIcon";
import spacescape from "@/public/spacescape.png";
import curve from "@/public/curve.svg";

export default function Home() {
  const nodes = [
    {
      path: "/nodes/lnd.png",
      name: "LND",
      description:
        "Bitcoin ipsum dolor sit amet. Inputs hashrate hard fork digital signature UTXO timestamp server genesis block consensus! Hashrate transaction digital signature cryptocurrency double-spend problem nonce consensus!",
    },
    {
      path: "/nodes/cln.png",
      name: "Core Lightning",
      description:
        "Bitcoin ipsum dolor sit amet. Inputs hashrate hard fork digital signature UTXO timestamp server genesis block consensus! Hashrate transaction digital signature cryptocurrency double-spend problem nonce consensus!",
    },
    {
      path: "/nodes/eclair.png",
      name: "Eclair",
      description:
        "Bitcoin ipsum dolor sit amet. Inputs hashrate hard fork digital signature UTXO timestamp server genesis block consensus! Hashrate transaction digital signature cryptocurrency double-spend problem nonce consensus!",
    },
    {
      path: "/nodes/ldk.png",
      name: "LNDK",
      description:
        "Bitcoin ipsum dolor sit amet. Inputs hashrate hard fork digital signature UTXO timestamp server genesis block consensus! Hashrate transaction digital signature cryptocurrency double-spend problem nonce consensus!",
    },
  ];

  const userProfiles:UserProfileProps[] = [
    {
      userName: "Alice",
      featureName: "Reusable Payment Requests",
      imageSrc:  "/users/alice@2x.png",
      description:  "Now that I can slap a QR code on our tip jar, my band can seamlessly receive tips in bitcoin! No more creating a new QR code for every virtual fan who wants to tip us after a moon colony gig, and no more losing 75% of potential tippers due to the long wait for BOLT11 invoices.",
      link:  "/ux-design/#reusable-payment-requests"
    },
    {
      userName: "Brijesh",
      featureName: "Receiver Privacy",
      imageSrc:  "/users/brijesh@2x.png",
      description:  "As a shadowy super coder contributing to Bitcoin Core, I needed a way to accept donations that preserves anonymity while compartmentalizing my 784 digital identities. With BOLT12’s route blinding, I can now accept payments discreetly and securely!",
      link:  "/ux-design/#receiver-privacy"
    },
    {
      userName: "Charlotte",
      featureName: "Social Integration",
      imageSrc:  "/users/charlotte@2x.png",
      description:  "I’m a content creator on Nostr who has always wanted a self-custodial way to accept zaps for my VR artwork. By publishing my bitcoin wallet’s payment code to my Nostr profile, I can receive zaps directly, without custodians or middlemen. Viva la BOLT12!",
      link:  "/ux-design/#social-integration"
    },
    {
      userName: "Danh",
      featureName: "Auto-withdrawals",
      imageSrc:  "/users/danh@2x.png",
      description:  "After hearing some cyborgs talk about bitcoin on XNBC Squawk Cube, I decided to buy in. Later, I learned that it's better to self-custody bitcoin rather than trust exchanges. So, I set my exchange account to automatically deposit bitcoin into a self-custodial wallet using BOLT12 offers.",
      link:  "/ux-design/#auto-withdrawals"
    },
    {
      userName: "Elaheh",
      featureName: "Censorship Resistance",
      imageSrc:  "/users/elaheh@2x.png",
      description:  "As an activist living under an authoritarian robot regime, I needed a way to accept donations without payment services blocking my IP address. With onion messaging, my IP address remains hidden, ensuring I can receive support securely. Smash the autonomous patriarchy!",
      link:  "/ux-design/#"
    }
  ]

  type project = {
    name: string,
    description: string,
    image: string,
    website?: string,
    code?: string
  }

  const projects:project[] = projectsData

  return (
    <>
      <Header shy />
      <main className="flex min-h-screen flex-col items-center pt-20">
        <div className="md:h-screen flex items-center justify-center flex-col gap-8 p-4 py-12 lg:px-12">
          {/* Source: https://www.figma.com/file/6Fffpw0We8W3F5XnJfmdJ1/Bolt12.org?type=design&node-id=855%3A3620&mode=design&t=0LbwOMnp5HdPPCRR-1 */}
          <div className="relative w-full max-w-[1372px] h-0 pb-[52%]">
            <Image
              src={"/hero/bolt-12-hero-text-shadow.png"}
              alt=""
              width={1372}
              height={723}
              className="w-full max-w-[1372px] absolute top-0 left-0 animate-hero-text-float"
            />
            <Image
              src={"/hero/bolt-12-hero-image.png"}
              alt=""
              width={1372}
              height={723}
              className="w-full max-w-[1372px] absolute top-0 left-0 animate-hero-image-float"
            />
            <Image
              src={"/hero/bolt-12-hero-text.png"}
              alt=""
              width={1372}
              height={723}
              className="w-full max-w-[1372px] absolute top-0 left-0 animate-hero-text-float"
            />
            <Image
              src={"/hero/bolt-12-hero-logo.png"}
              alt=""
              width={1372}
              height={723}
              className="w-full max-w-[1372px] absolute top-0 left-0 animate-hero-logo-float"
            />
          </div>
          <div className="flex flex-col items-center text-center  text-xl md:text-2xl lg:text-4xl w-full md:w-2/3 lg:w-1/2 justify-center">
            <span className="text-[#685588] font-headings font-regular">
              Ever wondered what it&rsquo;s like to live in the futuristic utopia of
              BOLT 12?
            </span>
            <span className="text-[#685588] font-display">
              Let&rsquo;s take a look!
            </span>
          </div>
        </div>

        {/* User Stories */}
        <div className="flex flex-col items-center w-full my-24 gap-20 p-8 lg:gap-32">
          {userProfiles.map((profile, index) => (
            <UserProfile key={index} {...profile} config={index % 2 === 0 ? "even" : "odd"} />
          ))}
        </div>

        {/* How to Integrate */}
        <div className="flex flex-col justify-between items-center bg-[url('/blueprint.jpg')] bg-cover w-full ">
          
        <Image src={curve} alt="" className="w-full h-auto relative z-50 translate-y-[-2px] mb-12" />
          <div className="flex flex-col gap-12 p-6 justify-center">
            <div className="flex md:flex-row md:justify-between items-center flex-col gap-6">
              <h2 className="text-b12-yellow text-3xl md:text-4xl font-headings p-6 bg-b12-teal w-full flex items-center justify-center rounded-tl-[24px] rounded-tr-[48px] rounded-br-[8px] rounded-bl-[48px] md:rounded-tl-[48px] md:rounded-tr-[96px] md:rounded-br-[8px] md:rounded-bl-[96px]">
                How to Integrate BOLT12
              </h2>
              <a href="https://github.com/lightning/bolts/pull/798" className="bg-[#FFF963] flex items-center justify-center rounded-tl-[96px] rounded-tr-[48px] rounded-br-[96px] rounded-bl-[24px] text-b12-red font-display text-2xl p-4 drop-shadow-hard-purple">
                Read the Spec
              </a>
            </div>

            <div className="gap-20 grid grid-cols-1 md:grid-cols-2 justify-items-center">
              {nodes.map(({ path, name, description }, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-4 p-4 items-start md:w-[500px] w-full h-full md:h-[180px] bg-white rounded-tl-[48px] rounded-tr-[8px] rounded-br-[48px] rounded-bl-[24px] md:rounded-tl-[96px] md:rounded-tr-[8px] md:rounded-br-[96px] md:rounded-bl-[48px] drop-shadow-hard-purple"
                >
                  <Image
                    src={path}
                    alt={`Node ${index}`}
                    width={124}
                    height={124}
                  />
                  <h3 className="font-headings text-4xl text-b12-purple">{name}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
          <Image src={curve} alt="" className="w-full h-auto relative z-50 translate-y-[2px] transform scale-x-[-1] rotate-180" />
        </div>

        {/* Projects - BOLT 12 in Actions */}
        <div className="w-full flex flex-col gap-12 py-16 items-center justify-center">
          <p className="font-headings text-b12-purple text-center mx-auto text-5xl">
            Now let’s see BOLT 12 <span className="font-display block text-6xl">in action!</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-x-12 gap-y-16 max-w-7xl">
            {projects.map((project, index) => (
              <>
                <div className="flex flex-col gap-9 w-full min-w-[200px] max-w-[420px] basis-1" key={index}>
                  <Image src={"/" + project.image} alt="" width={148} height={148} className="rounded-tl-[48px] rounded-tr-[24px] rounded-br-[48px] rounded-bl-[24px] drop-shadow-hard-purple" />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-b12-purple text-4xl font-headings">{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="flex flex-row gap-4">
                      {project.website ?
                        <a href={project.website} className="flex flex-row-reverse items-center justify-center gap-1 text-b12-teal font-medium">
                          Website <GlobeAltIcon className="h-6 w-6" />
                        </a>
                      : ""}

                      {project.code ?
                        <a href={project.code} className="flex flex-row-reverse items-center justify-center gap-1 text-b12-teal font-medium">
                          Code <CommandLineIcon className="h-6 w-6" />
                        </a>
                      : ""}
                    </div>
                  </div> 
                </div>
              </>
            ))}
          </div>
        </div>
        
        {/* Get Involved - Footer */}
        <div className="w-full relative pb-12" id="get-involved">
          
          <Image src={spacescape} placeholder="blur" alt="" width={1718} height={890} className="absolute top-0 left-0 w-full h-full object-cover" />
          <Image src={curve} alt="" className="w-full h-auto relative z-50 translate-y-[-2px] mb-12" />
          <div className="flex flex-col items-center gap-10 p-6">
            <div className="flex flex-col items-center gap-10 bg-white relative z-50 max-w-lg p-8 rounded-tl-[24px] rounded-tr-[48px] rounded-br-[24px] rounded-bl-[48px] lg:rounded-tl-[48px] lg:rounded-tr-[96px] lg:rounded-br-[48px] lg:rounded-bl-[96px] lg:p-16 drop-shadow-2xl">
              <h2 className="text-[#685588] font-display text-4xl md:text-6xl">
                Get Involved
              </h2>
              <span>
                Interested in pushing the standard forward or learning how to adopt?
                Here’s where the action happens:
              </span>
              <div className="flex flex-col gap-4 md:flex-row w-full">
                <a
                  href="https://discord.gg/Ay7UMqZu4m"
                  className="bg-[#37869F] shadow-footer px-6 py-4 flex items-center justify-center rounded-tl-[96px] rounded-tr-[48px] rounded-br-[96px] rounded-bl-[24px] w-full"
                >
                  <span className="text-[#FFF963] text-2xl font-display">
                    Discord
                  </span>
                </a>
                <a
                  href="https://github.com/lightning/bolts/pull/798"
                  className="bg-[#37869F] shadow-footer px-6 py-4 flex items-center justify-center rounded-tl-[96px] rounded-tr-[48px] rounded-br-[96px] rounded-bl-[24px] w-full"
                >
                  <span className="text-[#FFF963] text-2xl font-display">
                    Github PR
                  </span>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </>
  );
}
