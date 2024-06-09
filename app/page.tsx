import Image from "next/image"
import React from "react"
import Header from "@/components/Header";
import UserProfile from "@/features/UserProfile";
import type {UserProfileProps} from "@/features/UserProfile";
import projectsData from "@/data/projects.json"
import GlobeAltIcon from "@heroicons/react/24/solid/GlobeAltIcon";
import CommandLineIcon from "@heroicons/react/24/solid/CommandLineIcon";
import spacescape from "@/public/spacescape.png";
import blueprint from "@/public/blueprint.jpg";
import curve from "@/public/curve.svg";
import bolt12HeroTextShadow from "@/public/hero/bolt-12-hero-text-shadow.png";
import bolt12HeroImage from "@/public/hero/bolt-12-hero-image.png";
import bolt12HeroText from "@/public/hero/bolt-12-hero-text.png";
import bolt12HeroLogo from "@/public/hero/bolt-12-hero-logo.png";
import alice from "@/public/users/alice@2x.png"
import brijesh from "@/public/users/brijesh@2x.png"
import charlotte from "@/public/users/charlotte@2x.png"
import danh from "@/public/users/danh@2x.png"
import elaheh from "@/public/users/elaheh@2x.png"
import lnd from "@/public/nodes/lnd.png"
import cln from "@/public/nodes/cln.png"
import eclair from "@/public/nodes/eclair.png"
import ldk from "@/public/nodes/ldk.png"
import Link from "next/link";

export default function Home() {
  const nodes = [
    {
      path: lnd,
      name: "LND",
      description:
        "While LND does not support BOLT 12 at this moment, you can run LNDK along-side your LND to bhegin trying out BOLT 12.",
      anchor: "lnd"
    },
    {
      path: cln,
      name: "Core Lightning",
      description:
        "To use BOLT 12 with Core Lightning, you will need to run Core LN with the `--enable-experimental-features` or `--enable-experimental-offers` flag.",
      anchor: "cln"
    },
    {
      path: eclair,
      name: "Eclair",
      description:
        "With your Eclair node, you can use the `payoffer` RPC command to pay an offer, or the Tip Jar plugin to generate an offer.",
      anchor: "eclair"
    },
    {
      path: ldk,
      name: "Lightning Dev Kit",
      description:
        "LDK has methods to create offers and pay offers.",
      anchor: "ldk"
    },
  ];

  const userProfiles:UserProfileProps[] = [
    {
      userName: "Alice",
      featureName: "Reusable Payment Requests",
      imageSrc:  alice,
      description:  "Now that I can slap a QR code on our tip jar, my band can seamlessly receive tips in bitcoin! No more creating a new QR code for every virtual fan who wants to tip us after a moon colony gig, and no more losing 75% of potential tippers due to the long wait for BOLT11 invoices.",
      link:  "/ux-design/#reusable-payment-requests"
    },
    {
      userName: "Brijesh",
      featureName: "Receiver Privacy",
      imageSrc:  brijesh,
      description:  "As a shadowy super coder contributing to Bitcoin Core, I needed a way to accept donations that preserves anonymity while compartmentalizing my 784 digital identities. With BOLT12’s route blinding, I can now accept payments discreetly and securely!",
      link:  "/ux-design/#receiver-privacy"
    },
    {
      userName: "Charlotte",
      featureName: "Social Integration",
      imageSrc:  charlotte,
      description:  "I’m a content creator on Nostr who has always wanted a self-custodial way to accept zaps for my VR artwork. By publishing my bitcoin wallet’s payment code to my Nostr profile, I can receive zaps directly, without custodians or middlemen. Viva la BOLT12!",
      link:  "/ux-design/#social-integration"
    },
    {
      userName: "Danh",
      featureName: "Auto-withdrawals",
      imageSrc:  danh,
      description:  "After hearing some cyborgs talk about bitcoin on XNBC Squawk Cube, I decided to buy in. Later, I learned that it's better to self-custody bitcoin rather than trust exchanges. So, I set my exchange account to automatically deposit bitcoin into a self-custodial wallet using BOLT12 offers.",
      link:  "/ux-design/#auto-withdrawals"
    },
    {
      userName: "Elaheh",
      featureName: "Censorship Resistance",
      imageSrc:  elaheh,
      description:  "As an activist living under an authoritarian robot regime, I needed a way to accept donations without payment services blocking my IP address. With onion messaging, my IP address remains hidden, ensuring I can receive support securely. Smash the autonomous patriarchy!",
      link:  "/ux-design/#censorship-resistance"
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
      <main className="flex min-h-screen flex-col items-center">
        {/* Hero */}
        <div className="min-h-screen flex items-center justify-center flex-col gap-20 lg:gap-16 p-4 py-12 lg:px-12 lg:pt-24 relative z-40 bg-white w-full">
          {/* Source: https://www.figma.com/file/6Fffpw0We8W3F5XnJfmdJ1/Bolt12.org?type=design&node-id=855%3A3620&mode=design&t=0LbwOMnp5HdPPCRR-1 */}
          <div className="relative w-full max-w-[1372px] h-0 pb-[52%]">
            <h1 className="sr-only">Welcome to BOLT 12</h1>
            <p className="sr-only">This is how we bitcoin in the future!</p>
            <Image
              src={bolt12HeroTextShadow}
              alt=""
              className="w-[36%] max-w-[492px] absolute bottom-0 right-0 animate-hero-text-float"
            />
            <Image
              src={bolt12HeroImage}
              alt="A futuristic city among the stars"
              className="w-[90%] max-w-[1228px] absolute top-0 right-0 animate-hero-image-float"
            />
            <Image
              src={bolt12HeroText}
              alt=""
              className="w-[36%] max-w-[492px] absolute bottom-0 right-0 animate-hero-text-float"
            />
            <Image
              src={bolt12HeroLogo}
              alt=""
              className="w-[46%] max-w-[643px] absolute top-0 left-0 animate-hero-logo-float"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-12 p-24 mx-auto max-w-4xl">
          <div className="flex flex-col gap-4">
            <h2 className="text-center mx-auto text-5xl">What is BOLT 12?</h2>
            <p className="text-lg">
              BOLT 12 is a proposed upgrade to the Lightning network. For users, it can enable things like reusable payment requests, increased receiver privacy, and increased censorship resistance.
            </p>
          </div>
        </div>

        {/* User Stories */}

        <div className="flex flex-col items-center text-center gap-8 text-xl md:text-2xl lg:text-4xl w-full justify-center max-w-lg">
            <h2 className="">
              Ever wondered what it&rsquo;s like to live in the futuristic utopia of BOLT 12?
            </h2>
            <p className="font-display text-b12-purple">
              Let&rsquo;s take a look!
            </p>
          </div>

        <div className="flex flex-col items-center w-full py-24 gap-20 p-8 lg:gap-32 relative z-40 bg-white">
          {userProfiles.map((profile, index) => (
            <UserProfile key={index} {...profile} config={index % 2 === 0 ? "even" : "odd"} />
          ))}
        </div>

        {/* How to Integrate */}
        <div className="flex flex-col gap-8 justify-between items-center w-full h-auto relative ">
          <div className="absolute w-full h-full bg-img-clip">
            <Image src={blueprint} placeholder="blur" alt="" className="fixed z-[30] w-full h-full top-0 left-0 object-cover" />
          </div>
          <Image src={curve} alt="" className="w-full h-auto relative z-[30] translate-y-[-2px]" />
          <div className="flex flex-col gap-12 p-6 justify-center z-30">
            <div className="flex md:flex-row md:justify-between items-center flex-col gap-6">
              <h2 className="text-b12-yellow text-3xl md:text-4xl font-headings p-6 bg-b12-teal w-full flex items-center justify-center rounded-tl-[24px] rounded-tr-[48px] rounded-br-[8px] rounded-bl-[48px] md:rounded-tl-[48px] md:rounded-tr-[96px] md:rounded-br-[8px] md:rounded-bl-[96px] md:w-auto md:px-10">
                How to Integrate BOLT12
              </h2>
              <a href="/developers" className="bg-[#FFF963] flex items-center justify-center rounded-tl-[96px] rounded-tr-[48px] rounded-br-[96px] rounded-bl-[24px] text-b12-red font-display text-2xl p-4 drop-shadow-hard-purple">
                Developer Docs
              </a>
            </div>

            <div className="gap-12 grid grid-cols-1 lg:grid-cols-2 justify-items-center">
              {nodes.map(({ path, name, description, anchor }, index) => (
                <Link
                  href={"/developers#" + anchor}
                  key={index}
                  className="gap-4 p-4 sm:p-6 items-start w-full bg-white rounded-tl-[48px] rounded-tr-[8px] rounded-br-[48px] rounded-bl-[24px] md:rounded-tl-[96px] md:rounded-tr-[8px] md:rounded-br-[96px] md:rounded-bl-[48px] drop-shadow-hard-purple max-w-[420px] md:max-w-2xl flex flex-col md:flex-row hover:scale-105 transition-transform"
                >
                  <Image
                    src={path}
                    placeholder="blur"
                    alt=""
                    width={124}
                    height={124}
                    className=""
                  />
                  <div className="flex flex-col gap-4">
                    <h3 className="font-headings text-4xl text-b12-purple grow-1">{name}</h3>
                    <p className="grow-1">{description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <Image src={curve} alt="" className="w-full h-auto relative z-30 translate-y-[2px] transform scale-x-[-1] rotate-180" />
        </div>

        {/* Projects - BOLT 12 in Actions */}
        <div className="w-full flex flex-col gap-12 py-16 items-center justify-center relative z-40 bg-white">
          <h2 className="font-headings text-b12-purple text-center mx-auto text-5xl">
            Now let’s see BOLT 12 <span className="font-display block text-6xl">in action!</span>
          </h2>
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
        <div className="w-full relative z-40 pb-12" id="get-involved">
          <div className="absolute w-full h-full bg-img-clip">
            <Image src={spacescape} placeholder="blur" alt="" width={1718} height={890} className="fixed top-0 left-0 w-full h-full object-cover z-20" />
          </div>
          <Image src={curve} alt="" className="w-full h-auto relative z-30 translate-y-[-2px] mb-12" />
          <div className="flex flex-col items-center gap-10 p-6 z-40 relative">
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
