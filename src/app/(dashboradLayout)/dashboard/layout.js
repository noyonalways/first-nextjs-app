"use client";

import Sidebar from "@/components/shared/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <main>
      <div className="flex space-x-4">
        <aside className="basis-[20%]">
          <Sidebar />
        </aside>
        {children}
      </div>
    </main>
  );
}
