import Sidebar from "./component/Sidebar/sidebar";
import React from "react";
import './globals.css'
import Header from "./component/Header/header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">
        <div className="container">
          <Header/>
          <Sidebar />
          <main className="mainContent">{children}</main>
        </div>
      </body>
    </html>
  );
}

