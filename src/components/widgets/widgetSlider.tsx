import { Slider } from "@/components/ui/slider"


export const WidgetSlider = () => {
    return (
        <>
            <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className="w-[100%]"
        />
        </>
    )
}