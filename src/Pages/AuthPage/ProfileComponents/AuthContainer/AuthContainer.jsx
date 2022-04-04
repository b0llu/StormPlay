import "./AuthContainer.css";

export const AuthContainer = ({ children }) => {
  return (
    <section>
      <main className="main-content">
        {children}
      </main>
    </section>
  );
};
