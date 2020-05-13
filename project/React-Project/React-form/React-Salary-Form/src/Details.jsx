import React from "react";
import "./styles.css";

export default function Details(props) {
  const { value, remove, edit } = props;

  return (
    <tr>
      <td>#</td>
      <td>{value.name}</td>
      <td>{value.age}</td>
      <td>{value.address}</td>
      <td>{value.department}</td>
      <td>{value.salary}</td>
      <td>
        <button
          style={{ margin: 10 }}
          className="btn btn-primary"
          onClick={() => remove(value.id)}
        >
          delete
        </button>
        <button className="btn btn-primary" onClick={() => edit(value)}>
          edit
        </button>
      </td>
    </tr>
  );
}
