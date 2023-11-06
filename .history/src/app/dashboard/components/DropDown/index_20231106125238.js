import React from "react";

export default function index() {
  return (
    <select
      className={styles.dropDown}
      value={formData.type}
      onChange={handleChange}
      name="type"
    >
      <option defaultChecked>Tags</option>
      <option>Type Face</option>
      <option>Stack</option>
    </select>
  );
}
