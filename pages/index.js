import { useState } from "react";
import Layout from "../components/Layout";
import SignUpModal from "../components/SignUpModal";

export default function Home() {
  const [signUp, setSignUp] = useState(false);
  return (
    <Layout title="WriteOnce" onlyMeta={true}>
      <div className="w-full h-full min-h-screen z-10">
        hello <button onClick={() => setSignUp(true)}>click</button>
      </div>
      <SignUpModal opened={signUp} onClose={() => setSignUp(false)} />
    </Layout>
  );
}
