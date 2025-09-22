import React from "react";
export default function Card({ title, subtitle, children, action }) {
  return(
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}
