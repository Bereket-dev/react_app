import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  selectedItem: (item: string) => void;
}

function ListGroup({ items, heading, selectedItem }: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No items found!</p>}
        {items.map((item, index) => (
          <li
            key={item}
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              selectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
