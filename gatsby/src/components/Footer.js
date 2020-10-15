import React from "react";
import Nav from "./Nav";

export default function Footer() {
  return (
    <footer>
      <p>&copy; Slick's Slices {new Date().getFullYear()}</p>
    </footer>
  );
}
