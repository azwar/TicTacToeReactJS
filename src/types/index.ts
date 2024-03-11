export interface ItemProps {
    value: string;
    boardSize?: number;
    onClick: () => void;
}

export interface ScoreBoardProps {
    team: string;
    score: number;
}
