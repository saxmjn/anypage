'use client'
import useWidgets from "@/hooks/index";
import { NativeWidgetCommand } from "@/components/native/nativeWidgetCommand";
import { Trash, GripVertical, Menu } from "lucide-react"
import { Row } from "./../components/grid/row";
import { Col } from "@/components/grid/col";
import { Icon } from "@/components/ui/icon";
import { NativeWidgetControl } from "@/components/native/nativeWidgetControl";
import { NativePageControl } from "@/components/native/nativePageControl";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { NativePagePreview } from "@/components/native/nativePagePreview";
import { Button } from "@/components/ui/button";


export default function Home() {

  const hookWidgets = useWidgets();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div style={{width: '50%', height: 'fit-content'}}></div>
      <div style={{width: '50%'}}>
        <Col>
          <Row style={{margin: '1rem 0rem', width: '100%'}}>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Anypage
            </h4>
            <Row style={{width: '40%', hrAlign: 'end'}}>
              <NativeWidgetCommand hookWidgets={hookWidgets}/>
              <div className="m-2">
                <Dialog >
                  <DialogTrigger>
                    <Button variant="outline">Preview</Button>
                  </DialogTrigger>
                  <NativePagePreview hookWidgets={hookWidgets} />
                </Dialog>
              </div>
              <NativePageControl><Menu className="h-4 w-4"/></NativePageControl>
            </Row>
          </Row>
          <Col style={{margin: '1rem 0rem 2rem 0rem'}}>
            <p>The form builder that works like a doc.</p>
            <p>Just press command J to start and add widgets to the form</p>
          </Col>
        </Col>
        <Col>
          {hookWidgets?.widgets?.length > 0 && hookWidgets?.widgets?.map((item: any, index: any) => {
            return (
              <Row id={index} style={{margin: '1rem -2% 1rem -10%', width: '130%'}}>
                <Row style={{width: '10%'}}>
                  <Icon onClick={() => {hookWidgets?.removeWidget(index)}}><Trash  className="h-5 w-5"/></Icon>
                  <NativeWidgetControl hookWidgets={hookWidgets} widget={item} indexOfWidget={index}>
                    <GripVertical className="h-5 w-5"/>
                  </NativeWidgetControl>
                </Row>
                <Row style={{width: '100%'}}>
                  {item?.loadComponent()}
                </Row>
                <Row style={{width: '20%'}} className={'cursor-pointer'} >
                  {(item?.value != 'title' && hookWidgets?.widgets[index-1]?.value!='title') && <p className="text-sm text-muted-foreground m-2" onClick={() => {hookWidgets?.addTitle(index)}}>
                  Add Title{" "}
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌥</span>T
                  </kbd>
                </p>}
                </Row>
              </Row>
            )
          })}
        </Col>
      </div>
    </main>
  );
}
