'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
  } from "@/components/ui/dialog"

export function NativeWidgetModal({children, hookWidget}: any) {
  return (
    <Dialog>
    <DialogTrigger>{children}</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pick an element</DialogTitle>
        <DialogDescription>
          Add elements like images, forms, text to your page
        </DialogDescription>
      </DialogHeader>
  </DialogContent>
</Dialog>
  )
}
