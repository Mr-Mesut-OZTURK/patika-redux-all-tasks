/* eslint-disable react-refresh/only-export-components */
import { ReactElement } from 'react'
import BillGates from './bill-gates/BillGates'
import Covid19Tracker from './covid19-tracker/Covid19Tracker'
import FindCard from './find-card/FindCard'
import MarkdownPreview from './markdown-previewer/MarkdownPreview'
import Notes from './notes/Notes'
import TextGenerator from './text-generator/TextGenerator'
import TurkishChecker from './turkish-checker/TurkishChecker'
import TypingSpeed from './typing-speed/TypingSpeed'
import Weather from './weather/Weather'



export {
    BillGates,
    Covid19Tracker,
    FindCard,
    MarkdownPreview,
    Notes,
    TextGenerator,
    TurkishChecker,
    TypingSpeed,
    Weather
}

interface AppsInterface {
    id: string,
    name: string,
    imageUrl: string,
    desc: string,
    path: string,
    element: ReactElement,
}

const apps: Array<AppsInterface> = [
    {
        id: "1",
        name: "bill-gates",
        imageUrl: "src/assets/tasks/bill-gates.png",
        desc: "Lorem ipsum doler sit amet",
        path: "bill-gates",
        element: <BillGates />
    },
    {
        id: "2",
        name: "covid19-tracker",
        imageUrl: "src/assets/tasks/covid19-tracker.png",
        desc: "Lorem ipsum doler sit amet",
        path: "covid19-tracker",
        element: <Covid19Tracker />
    },
    {
        id: "3",
        name: "find-card",
        imageUrl: "src/assets/tasks/find-card.png",
        desc: "Lorem ipsum doler sit amet",
        path: "find-card",
        element: <FindCard />
    },
    {
        id: "4",
        name: "markdown-preview",
        imageUrl: "src/assets/tasks/markdown-preview.png",
        desc: "Lorem ipsum doler sit amet",
        path: "markdown-preview",
        element: <MarkdownPreview />
    },
    {
        id: "5",
        name: "notes",
        imageUrl: "src/assets/tasks/notes.png",
        desc: "Lorem ipsum doler sit amet",
        path: "notes",
        element: <Notes />
    },
    {
        id: "6",
        name: "text-generator",
        imageUrl: "src/assets/tasks/text-generator.png",
        desc: "Lorem ipsum doler sit amet",
        path: "text-generator",
        element: <TextGenerator />
    },
    {
        id: "7",
        name: "turkish-checker",
        imageUrl: "src/assets/tasks/turkish-checker.png",
        desc: "Lorem ipsum doler sit amet",
        path: "turkish-checker",
        element: <TurkishChecker />
    },
    {
        id: "8",
        name: "typing-speed",
        imageUrl: "src/assets/tasks/typing-speed.png",
        desc: "Lorem ipsum doler sit amet",
        path: "typing-speed",
        element: <TypingSpeed />
    },
    {
        id: "9",
        name: "weather",
        imageUrl: "src/assets/tasks/weather.png",
        desc: "Lorem ipsum doler sit amet",
        path: "weather",
        element: <Weather />
    },
]

export default apps