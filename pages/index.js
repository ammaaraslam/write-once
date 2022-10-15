import { useState } from "react";
import Layout from "../components/Layout";
import SignUpModal from "../components/SignUpModal";
import { useSignOut, useAuthenticated } from "@nhost/react";

export default function Home() {
  const [signUp, setSignUp] = useState(false);
  const { signOut } = useSignOut();
  const isAuthenticated = useAuthenticated();

  return (
    <Layout title="WriteOnce" onlyMeta={true}>
      <div className="w-full h-full min-h-screen z-10">
        hello <button onClick={() => setSignUp(true)}>click</button>
        {isAuthenticated && <button onClick={() => signOut()}>signout</button>}
      </div>
      <SignUpModal opened={signUp} onClose={() => setSignUp(false)} />
    </Layout>
  );
}
