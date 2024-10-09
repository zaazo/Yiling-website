"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = "30px",
  ry = "30px",
  ...props
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <div
      style={{
        position: "relative",
        isolation: "isolate",
        overflow: "hidden",
        borderRadius: `${rx} ${ry}`,
      }}
      {...props}
      className={cn("p-[1px] bg-slate-800", props.className)}
    >
      <div
        style={{
          position: "absolute",
          inset: "0px",
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        <svg
          preserveAspectRatio="none"
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            inset: "0px",
          }}
          viewBox="0 0 300 300"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "white" }} />
              <stop offset="100%" style={{ stopColor: "white" }} />
            </linearGradient>
          </defs>
          <path
            d="M 0 0 L 300 0 L 300 300 L 0 300 Z"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
          >
            <animate
              attributeName="d"
              dur={`${duration}ms`}
              repeatCount="indefinite"
              values="
              M 0 0 L 300 0 L 300 300 L 0 300 Z;
              M 0 50 L 250 0 L 300 250 L 50 300 Z;
              M 0 100 L 200 0 L 300 200 L 100 300 Z;
              M 0 150 L 150 0 L 300 150 L 150 300 Z;
              M 0 200 L 100 0 L 300 100 L 200 300 Z;
              M 0 250 L 50 0 L 300 50 L 250 300 Z;
              M 0 300 L 0 0 L 300 0 L 300 300 Z;
            "
            />
          </path>
        </svg>
      </div>

      <div className="relative bg-slate-900 h-full w-full rounded-[calc(30px-1px)]">
        {children}
      </div>
    </div>
  );
};