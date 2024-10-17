import { Suspense } from "react";

import { SignupForm } from "../_components/SignupForm";

const SignupPage = () => {
  return (
    <main className="py-24 wrapper">
      <Suspense
        fallback={
          <div className="loader border-primary flex items-center justify-center" />
        }
      >
        <SignupForm />;
      </Suspense>
    </main>
  );
};

export default SignupPage;
