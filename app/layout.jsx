import NavBar from "@/components/NavBar";
import Provider from "@/components/Provider";
import "@/styles/globals.css";

export const metadata = {
  title: "Share 'O' Prompt",
  description: "Discover and Share AI Prompts",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <NavBar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
