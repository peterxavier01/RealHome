import { Suspense } from "react";

import { LoginForm } from "../_components/LoginForm";

const LoginPage = () => {
  return (
    <main className="py-24 wrapper">
      <Suspense
        fallback={
          <div className="loader border-primary flex items-center justify-center" />
        }
      >
        <LoginForm />;
      </Suspense>
    </main>
  );
};

export default LoginPage;
