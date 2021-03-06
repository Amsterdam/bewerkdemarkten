export interface Plan {
    name: string
    pages: number
}

export interface Assignment {
    class: string
    title: string
    landmarkTop: string
    landmarkBottom: string
    plaatsList: string[]
}

export interface Rows {
    rows: string[][]
}

export interface Page {
    title: string
    indelingslijstGroup: Assignment[]
}

export interface Market {
    id: number
    name: string
    phase?: string
    plan?: Plan
    municipality?: string
    stands?: number
}

// Kraam
export interface Stand {
    plaatsId: string
    branches?: string[]
    verkoopinrichting?: string[]
    properties?: string[]
    type?: "stand"
}

// Obstakel
export interface Obstacle {
    kraamA: string
    kraamB: string
    obstakel: string[]
    type?: "obstacle"
}

// Plek
export interface Lot {
    plaatsId?: string
    branches?: string[]
    verkoopinrichting?: string[]
    properties?: string[]
    kraamA?: string
    kraamB?: string
    obstakel?: string[]
    type?: "lot" | "stand" | "obstacle"
    selected?: boolean
    blockPosition?: [number, number]
    blockStart?: boolean
    blockEnd?: boolean
}

export interface Geography {
    obstakels: Obstacle[]
}

// Branches for the general Branches list
export interface Branche {
    brancheId: string
    number?: number
    description: string
    color: string
}

export interface Announcement {
    activatie: string
    wenperiode: string
    live: string
}

export interface Announcements {
    marktDetail: Announcement
    marktDetailPlaatsvoorkeuren: Announcement
    aanwezigheid: Announcement
    plaatsVoorkeuren: Announcement
}

export interface AssignedBranche {
    brancheId: string
    verplicht: boolean
    maximumPlaatsen?: number
    allocated?: number
    backGroundColor?: string
    color?: string
}

export interface Markets {
    [key: string]: Market
}

export interface MarketLayout {
    class: string
    landmarkTop: string
    landmarkBottom: string
    title: string
    lots: Lot[]
}

export interface MarketPage {
    layout: MarketLayout[]
    title: string
}

export interface MarketEventDetails {
    branches: AssignedBranche[]
    pages: MarketPage[]
}

export interface DayOfWeek {
    id: number
    name: string
    abbreviation: string

}

export const WeekDays: DayOfWeek[] = [
    {id: 0, name: "Maandag", abbreviation: "MA"},
    {id: 1, name: "Dinsdag", abbreviation: "DI"},
    {id: 2, name: "Woensdag", abbreviation: "WO"},
    {id: 3, name: "Donderdag", abbreviation: "DO"},
    {id: 4, name: "Vrijdag", abbreviation: "VR"},
    {id: 5, name: "Zaterdag", abbreviation: "ZA"},
    {id: 6, name: "Zondag", abbreviation: "ZO"}
]