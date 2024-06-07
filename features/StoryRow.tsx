import Image, {StaticImageData} from "next/image"

export type StoryFrame = {
    image: StaticImageData,
    alt: string,
    caption: string
}

export type Story = StoryFrame[]

export type Stories = {
    [key: string]: Story
}

type StoryRowProps = {
    story: Story;
}

export default function StoryRow(props:StoryRowProps) {
    return(
        <div className="bg-gray-50 overflow-x-scroll rounded-3xl border border-gray-200 shadow-inner w-full mb-8">
            <div className="w-full flex flex-row gap-0 items-start justify-items-center mx-auto">
                {props.story.map((story, index) => (
                    <div key={index} className="flex flex-col gap-4 w-[264px] min-w-[264px] px-4 py-8 first:pl-8 first:pr-0 first:mr-4 last:pr-8 last:pl-0 last:ml-4">
                        <Image src={story.image} alt={story.alt} width={250} placeholder="blur" className="border border-gray-200 rounded-2xl" />
                        <p className="text-sm text-center">{story.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}