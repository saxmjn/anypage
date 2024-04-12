
interface Props {
    children: any;
    style?: any;
    onClick?: any;
    id?: any;
    className?: any;
}

export const Row = ({children, className, style, onClick, id}: Props) => {
    return (
        <div id={id} onClick={onClick} className={className} style={{display: 'flex',
        justifyContent: style?.hrAlign ? style?.hrAlign : 'space-between',
        alignItems: style?.vrAlign ? style?.vrAlign : 'center',
        width: style?.width ? style?.width : '100%',
        margin: style?.margin ? style?.margin : ''}}>{children}</div>
    )
}