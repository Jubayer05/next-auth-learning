/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useSession, getSession, signOut } from "next-auth/react";

const index = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <div className="bg-[#0ff38c] h-screen flex items-center justify-center text-center">
        <h2 className="text-4xl ">Access Denied</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#0ff38c] h-screen flex items-center justify-center text-center">
      <div>
        <h2 className="text-4xl mb-3">Hello I am a restricted route.</h2>
        <img
          src={session.user.image}
          className="w-20 h-20 rounded-full mx-auto my-5"
          alt=""
        />
        <p>You can view this page because you are signed in.</p>
        <button
          className="bg-[green] text-white py-3 px-5 mt-3 rounded-md"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default index;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return {
    props: { session },
  };
};
