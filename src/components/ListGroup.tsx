import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

function ListGroup() {
  const items: string[] = ["banana", "Apple", "Strawberry"];
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>List</h1>
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
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
