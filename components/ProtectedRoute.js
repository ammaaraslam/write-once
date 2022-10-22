import { useRouter } from "next/router";
import { useAuthenticationStatus } from "@nhost/nextjs";

export default function ProtectedRoute(Component) {
  return function AuthProtected(props) {
    const router = useRouter();
    const { isLoading, isAuthenticated } = useAuthenticationStatus();

    if (!isAuthenticated) {
      router.push("/");
      return null;
    }

    return <Component {...props} />;
  };
}
