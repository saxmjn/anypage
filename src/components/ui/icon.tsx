import { Button } from "@/components/ui/button"

export const Icon = ({children, onClick}: any) => {
    return (
        <Button onClick={onClick} variant="outline" size="icon" className="mr-1 p-1">{children}</Button>
    )
}