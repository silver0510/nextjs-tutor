import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Ooooop...</h1>
      <h2>That page canot be found</h2>
      <p>
        Go back to the <Link href="/">Home page</Link>
      </p>
    </div>
  );
};

export default NotFound;
