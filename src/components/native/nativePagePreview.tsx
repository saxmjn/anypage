import { Col } from "../grid/col"
import { Row } from "../grid/row"
import { Dialog, DialogContent } from "../ui/dialog"

export const NativePagePreview = ({hookWidgets}: any) => {
    return (
        <>
        <DialogContent style={{
        width: '100vw',
        maxWidth: '100vw',
        height: "100vh",
        maxHeight: '100vh',
        border: '0'}}>
            <div style={{width: '50%', margin: '5rem auto'}}>
               <Col>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" style={{margin: '1rem 0rem'}}>
                    Anypage
                    </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
               </Col>
               <Col>
               {hookWidgets?.widgets?.length > 0 && hookWidgets?.widgets?.map((item: any, index: any) => {
                    return (
                        <Row id={index} style={{margin: '1rem 0%', width: '100%'}}>
                            <Row style={{width: '100%'}}>
                            {item?.loadComponent(false)}
                            </Row>
                        </Row>
                    )
               })}
               
               </Col>
            </div>
        </DialogContent>
        </>
    )
}