import type { FC } from "react";

import type { SlotSymbolProps } from "../../model/props";

const SlotSymbol: FC<SlotSymbolProps> = ({ symbol, sizeSlot }) => {
	return (
		<div
			className="flex justify-center items-center text-[4rem]"
			style={{ height: sizeSlot, width: sizeSlot }}
		>
			{symbol}
		</div>
	);
};

export default SlotSymbol;
