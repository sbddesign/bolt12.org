import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Developer Docs | BOLT 12",
    description: "Developer docs for integrating BOLT 12 into your bitcoin lightning application."
}

export default function DeveloperDocs(){
    return(
        <>
            <Header />

            <main className="w-full mx-auto p-8 pt-24 md:pt-36">
                <article className="mx-auto max-w-6xl flex flex-col gap-8">
                    <h1 className="font-headings text-5xl">Developer Docs</h1>

                    <h2 id="cln">Core Lightning</h2>

                    <p>
                        To use BOLT 12 with Core Lightning, you will need to run Core LN with the `--enable-experimental-features` or `--enable-experimental-offers` flag.
                    </p>
                    
                    <p><a href="https://docs.corelightning.org/docs/configuration#experimental-options" target="_blank">This page from the Core Lightning docs</a> explains the feature flags a little more.</p>

                    <hr />

                    <h2 id="eclair">Eclair</h2>

                    <p>With your Eclair node, you can use the `payoffer` RPC command to pay an offer or the Tip Jar plugin to generate an offer. You can find some more details in the <a href="https://github.com/ACINQ/eclair/blob/master/docs/release-notes/eclair-v0.10.0.md" target="_blank">Eclair v0.10.0 Release notes</a>.</p>

                    <hr />

                    <h2 id="ldk">Lightning Dev Kit</h2>

                    <p>LDK lets you create and pay offers. You can learn more about these methods in <a href="https://lightningdevkit.org/blog/bolt12-has-arrived/" target="_blank">this blog post</a>.</p>

                    <hr />

                    <h2 id="lnd">LND</h2>

                    <p>
                        While LND does not support BOLT 12 at this moment, you can <a href="https://github.com/lndk-org/lndk" target="_blank">run LNDK along-side your LND node</a> to begin trying out BOLT 12.
                    </p>
                </article>
            </main>
        </>
    )
}
