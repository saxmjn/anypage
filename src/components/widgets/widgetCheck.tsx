import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "../ui/checkbox"

export const WidgetCheck = () => {
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}} className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
            <Checkbox/>
        </div>
    )
}