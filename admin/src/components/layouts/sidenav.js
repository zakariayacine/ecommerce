import React from 'react'
import '../../style/sidenav.css';
function Sidenav() {
  return (
    <div>
      <div className="sidenav">
        <a href="/">Products list</a>
        <a href="/inovice">Orders list</a>
      </div>
    </div>
  );
}
export default Sidenav;
