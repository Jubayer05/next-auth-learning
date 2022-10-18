/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="bg-[salmon] h-screen flex items-center justify-center text-center">
        <div>
          <p>Signed in as {session.user.email}</p>
          <img
            src={session.user.image}
            className="w-20 h-20 rounded-full mx-auto my-5"
            alt=""
          />
          <button
            className="bg-[green] text-white py-3 px-5 mt-3 rounded-md"
            onClick={() => signOut()}
          >
            Sign out
          </button>
          <button className="ml-4 bg-[darkblue] text-white py-3 px-5 mt-3 rounded-md">
            <Link href="/restricted">
              <a>Go protected route</a>
            </Link>
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[salmon] h-screen flex items-center justify-center text-center">
      <div>
        <p>
          You are Not signed in <br />
        </p>
        <button className="bg-[blue] text-white py-3 px-5 mt-3 rounded-md">
          <Link href="/login">
            <a>Login</a>
          </Link>
        </button>
        <button className="ml-4 bg-[darkblue] text-white py-3 px-5 mt-3 rounded-md">
          <Link href="/restricted">
            <a>Go protected route</a>
          </Link>
        </button>
      </div>
    </div>
  );
}
