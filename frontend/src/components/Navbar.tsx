import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link href="/" className="text-lg font-bold">LinguaCheck</Link>
      <div>
        {session ? (
          <>
            <span className="mr-4">{session.user?.name}</span>
            <button onClick={() => signOut()} className="bg-red-500 px-3 py-1 rounded">Logout</button>
          </>
        ) : (
          <Link href="/login" className="bg-green-500 px-3 py-1 rounded">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
