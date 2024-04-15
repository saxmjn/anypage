import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  
  import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

  import { Bold, Italic, Underline, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from "lucide-react"


var styles = {
    base: { border: '0', background: 'none', padding: '0.2rem 0.2rem', focus: 'none', width: '100%'},

    hover: {
      background: "#efefef",
      padding: "1rem"
    },
}

export const WidgetTitle = ({editing = true}: any) => {
    return (
        <>
            {editing && <>
                <HoverCard style={{width: '100%'}}>
            <HoverCardTrigger style={{width: '100%'}}>
                <input style={styles.base} autofocus/>
            </HoverCardTrigger>
            <HoverCardContent style={{width: '100%', display: 'flex', justifyContent: 'start', padding: '0.2rem'}}>
            <ToggleGroup size={"sm"} type="multiple" style={{display: 'flex', justifyContent: 'start'}}>
                <ToggleGroupItem value="h1" aria-label="Toggle H1">
                    <Heading1 className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="h2" aria-label="Toggle H2">
                    <Heading2 className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="h3" aria-label="Toggle H3">
                    <Heading3 className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="h4" aria-label="Toggle H4">
                    <Heading4 className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="h5" aria-label="Toggle H5">
                    <Heading5 className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="h6" aria-label="Toggle H6">
                    <Heading6 className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                    <Underline className="h-4 w-4" />
                </ToggleGroupItem>
                </ToggleGroup>
            </HoverCardContent>
            </HoverCard>
            </>}
            {!editing && <>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    The Joke Tax Chronicles
                </h1>
            </>}
        </>
    )
}