import { WidgetDatePicker } from "@/components/widgets/widgetDatepicker";
import { WidgetAlert } from "@/components/widgets/widgetAlert";
import { WidgetInput } from "@/components/widgets/widgetInput";
import { WidgetTextarea } from "@/components/widgets/widgetTextarea";
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
    Text,
    TextCursor,
    Type,
    Mail,
    Phone,
    Image,
    Play,
    AudioLines,
    Paperclip,
    ListCollapse,
    Circle,
    ChevronDown,
    MessageCircleWarning,
    ToggleLeft,
    SquareCheck
  } from "lucide-react";
import { WidgetRadioSelect } from "@/components/widgets/widgetRadioSelect";
import { WidgetSelect } from "@/components/widgets/widgetSelect";
import { WidgetSwitch } from "@/components/widgets/widgetSwitch";
import { WidgetCheck } from "@/components/widgets/widgetCheck";
import { WidgetTitle } from "@/components/widgets/widgetTitle";


export const dataWidgets: any = {
    'title': {
        title: 'Title',
        value: 'title',
        decription: '',
        image: '',
        data: {
            required: false,
        },
        loadComponent: () => {
            return (
                <><WidgetTitle/></>
            )
        },
        loadIcon: () => {
            return (<Type className="mr-2 h-4 w-4" />)
        }
    },
    'alert': {
        title: 'Alert',
        value: 'alert',
        decription: '',
        image: '',
        data: {
            required: false,
        },
        loadComponent: () => {
            return (
                <WidgetAlert/>
            )
        },
        loadIcon: () => {
            return (<MessageCircleWarning className="mr-2 h-4 w-4" />)
        }
    },
    'accordian': {
        title: 'Accordian',
        value: 'accordian',
        decription: '',
        image: '',
        data: {
            required: false,
        },
        loadComponent: () => {
            return (
                <></>
            )
        },
        loadIcon: () => {
            return (<ListCollapse className="mr-2 h-4 w-4" />)
        }
    },
    'shortanswer': {
        title: 'Short Answer',
        value: 'shortanswer',
        decription: '',
        image: '',
        data: {
            required: false,
        },
        loadComponent: () => {
            return (
                <WidgetInput/>
            )
        },
        loadIcon: () => {
            return (<TextCursor className="mr-2 h-4 w-4" />)
        }
    },
    'longanswer': {
        title: 'Long Answer',
        value: 'longanswer',
        decription: '',
        image: '',
        data: {
            required: false,
        },
        loadComponent: () => {
            return (
                <WidgetTextarea/>
            )
        },
        loadIcon: () => {
            return (<Text className="mr-2 h-4 w-4" />)
        }
    },
    'switch': {
        title: 'Switch',
        value: 'switch',
        decription: '',
        image: '',
        data: {
            required: false,
        },
        loadComponent: () => {
            return (
                <WidgetSwitch/>
            )
        },
        loadIcon: () => {
            return (<ToggleLeft className="mr-2 h-4 w-4" />)
        }
    },
    'check': {
        title: 'Check',
        value: 'check',
        decription: '',
        image: '',
        data: {
            required: false,
        },
        loadComponent: () => {
            return (
                <WidgetCheck/>
            )
        },
        loadIcon: () => {
            return (<SquareCheck className="mr-2 h-4 w-4" />)
        }
    },
    'dropselect': {
        title: 'Drop Select',
        value: 'dropselect',
        decription: '',
        image: '',
        data: {
            required: false,
        },
        loadComponent: () => {
            return (
                <WidgetSelect/>
            )
        },
        loadIcon: () => {
            return (<ChevronDown className="mr-2 h-4 w-4" />)
        }
    },
    'radioselect': {
        title: 'Radio Select',
        value: 'radioselect',
        decription: '',
        image: '',
        data: {
            required: false,
        },
        loadComponent: () => {
            return (
                <WidgetRadioSelect/>
            )
        },
        loadIcon: () => {
            return (<Circle className="mr-2 h-4 w-4" />)
        }
    },
    'number': {
        title: 'Number',
        value: 'number',
        decription: '',
        image: '',
        data: {
            required: false,
        },
        loadComponent: () => {
            return (
                <></>
            )
        },
        loadIcon: () => {
            return (<Phone className="mr-2 h-4 w-4" ></Phone>)
        }
    },
    'email': {
        title: 'Email',
        value: 'email',
        decription: '',
        image: '',
        data: {
            required: false,
        },
        loadComponent: () => {
            return (
                <></>
            )
        },
        loadIcon: () => {
            return (<Mail className="mr-2 h-4 w-4" />)
        }
    },
    'date': {
        title: 'Calendar',
        value: 'date',
        decription: '',
        image: '',
        data: {
            required: false,
        },
        loadComponent: () => {
            return (
                <WidgetDatePicker></WidgetDatePicker>
            )
        },
        loadIcon: () => {
            return (<Calendar className="mr-2 h-4 w-4" />)
        }
    },
    'image': {
        title: 'Image',
        value: 'image',
        decription: '',
        image: '',
        data: {
            required: false,
        },
        loadComponent: () => {
            return (
                <></>
            )
        },
        loadIcon: () => {
            return (<Image className="mr-2 h-4 w-4" />)
        }
    },
    'video': {
        title: 'Video',
        value: 'video',
        decription: '',
        image: '',
        data: {
            required: false,
        },
        loadComponent: () => {
            return (
                <></>
            )
        },
        loadIcon: () => {
            return (<Play className="mr-2 h-4 w-4" />)
        }
    },
    'audio': {
        title: 'Audio',
        value: 'audio',
        decription: '',
        image: '',
        data: {
            required: false,
        },
        loadComponent: () => {
            return (
                <></>
            )
        },
        loadIcon: () => {
            return (<AudioLines className="mr-2 h-4 w-4" />)
        }
    },
    'fileupload': {
        title: 'File Upload',
        value: 'fileupload',
        decription: '',
        image: '',
        data: {
            required: false,
        },
        loadComponent: () => {
            return (
                <></>
            )
        },
        loadIcon: () => {
            return (<Paperclip className="mr-2 h-4 w-4" />)
        }
    }
}

export const dataWidgetsArr = Object.keys(dataWidgets).map((key: string) => dataWidgets[key]);