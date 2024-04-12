import {
    Delete,
    Copy,
    Asterisk
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Switch } from "../ui/switch"
import { Row } from "../grid/row"
  
  export function NativeWidgetControl({children, hookWidgets, widget, indexOfWidget}: any) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="p-1 m-1">{children}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem >
              <Row>
              <Row style={{hrAlign:'left'}}>
                <Asterisk className="mr-2 h-4 w-4" />
                <span>Required</span>
              </Row>
              <Switch onClick={() => {hookWidgets?.toggleRequiredWidget(indexOfWidget)}} checked={widget?.data?.required}></Switch>
              </Row>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {hookWidgets?.removeWidget(indexOfWidget)}}>
              <Delete className="mr-2 h-4 w-4" />
              <span>Delete</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy className="mr-2 h-4 w-4" />
              <span>Duplicate</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  