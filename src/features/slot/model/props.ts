export interface SlotReelProps {
	symbolColumn: number[];
	positionIndex: number;
	slotColumn: number;

	spinning: boolean;
	symbols: string[];

	sizeSlot: number;
}

export interface SlotSymbolProps {
	symbol: string;

	className?: string;
}

export interface UseSymbolsDrumProps {
	symbolColumn: number[];
	spinning: boolean;
	symbols: string[];
}
