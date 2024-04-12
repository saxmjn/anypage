import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from "@/components/ui/select"

import { dataWidgetsArr } from "@/data/index";

export const NativeWidgetSelect = ({hookWidgets}: any) => {
    return (
         <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    {dataWidgetsArr?.map(item => {
      return <SelectItem value={item.value} onChange={() => {console.log('hello')}}><text onClick={() => {console.log('hello')}}>{item.title}</text></SelectItem>
    })}
  </SelectContent>
</Select>
    )
}