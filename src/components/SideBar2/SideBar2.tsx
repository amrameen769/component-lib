/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import React from 'react';
import './sidebar2.css'
import { FC, useRef, useState } from 'react'


const SideBar2: FC = () => {
    const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);

  const startResizing = React.useCallback((mouseDownEvent: any) => {
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback(
    (mouseMoveEvent: any) => {
      if (isResizing) {
        setSidebarWidth(
            //@ts-ignore
          mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left
        );
      }
    },
    [isResizing]
  );

  React.useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);
    return (
        <div className="app-container">
            <div
                ref={sidebarRef}
                className="app-sidebar"
                style={{ width: sidebarWidth }}
                onMouseDown={(e) => e.preventDefault()}
            >
                <div className="app-sidebar-content" />
                <div className="app-sidebar-resizer" onMouseDown={startResizing} />
            </div>
            <div className="app-frame" />
        </div>
    );
}

export default SideBar2