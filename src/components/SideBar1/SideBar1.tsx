import { MouseEvent, useRef, useState } from 'react'
import './sidebar1.css'
import React from 'react';

function SideBar1() {

  const sidebarRef = useRef<HTMLDivElement>(null)
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState<string | number>('16rem')

  const startResizing = React.useCallback((mouseDownEvent: MouseEvent<HTMLDivElement>) => {
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing) {
        if (sidebarRef.current) {
          setSidebarWidth(
            mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left
          );
        }
      }
    },
    [isResizing]
  );

  React.useEffect(() => {
    //@ts-ignore
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
    //@ts-ignore
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div className='navBarWrapper' ref={sidebarRef} style={{ width: sidebarWidth }} onMouseDown={(e) => e.preventDefault()}>
      <nav className='navbar'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Nothing</li>
        </ul>
      </nav>
      <div className={`app-sidebar-resizer ${isResizing ? 'app-sidebar-resizer-drag' : ''}`} onMouseDown={startResizing} />
    </div>
  )
}

export default SideBar1
