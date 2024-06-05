import React, { useState } from "react";
// import { MouseEvent } from "react";

interface Props {
	items: string[];
	heading: string;
    // (item: string) => void
    onSelectItem: (item: string) => void; // like onClick
}

function ListGroup({ items, heading, onSelectItem}: Props) {
	// data or state may change over time
	// let selectedIndex = 0;
	// Hook
	const [selectedIndex, setSelectedIndex] = useState(-1);
	// arr[0] // variable (selectedIndex)
	// arr[1] // updater function
	// const [name, setName] = useState('');

	// Conditional Rendering
	// const message = items.length === 0 ? <p>No item found</p> : null;
	// const getMessage = () => {  // funcs good because of parameters
	//     return items.length === 0 ? <p>No item found</p> : null;
	// }

	// specify type of parameter
	// const handleClick = (event: MouseEvent) => console.log(event);

	// Props
	// Inputs to components -> lets you reuse components
    // Props are immutable
    // state is mutable

	// Fragment instead of Div so less items in DOM 31:40
	// No for loop in jax -> map instead
	// li key makes it so you can use each list item
	// <li key = {item.id}>  -> id for many items out there
	// {items.length === 0 ? <p>No item found</p> : null} ->
	// onClick={handleClick}  -> not calling it, just pass a reference
	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No item found</p>}
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						key={item}
						onClick={() => {
							setSelectedIndex(index);
                            onSelectItem(item);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
