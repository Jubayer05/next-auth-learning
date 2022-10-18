/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Login = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { data: session } = useSession();
  const [userData, setUserData] = useState([]);

  const handleLogin = () => {};

  const handleCreateAccount = () => {};

  return (
    <div
      className="py-14"
      style={{ backgroundImage: "linear-gradient(30deg,#62d7e1, #b933dc)" }}
    >
      <div className="flex justify-center items-center min-h-screen	">
        <div className="">
          {session ? (
            <div>
              <h3 className="text-center text-xl font-bold">
                Welcome, {session.user.email}
              </h3>
              <img
                src={session.user.image}
                className="w-20 h-20 rounded-full mx-auto my-5"
                alt=""
              />
              <button className="ml-4 bg-[#e1ab15] text-white py-3 px-5 mt-3 rounded-md">
                <Link href="/restricted">
                  <a>Go protected route</a>
                </Link>
              </button>
            </div>
          ) : (
            <div>
              <h3 className="text-center text-xl font-bold">
                You are not signed in.
              </h3>
            </div>
          )}

          <div
            className="bg-white  w-72 sm:w-96 p-9 rounded-md"
            style={{ marginTop: "30px" }}
          >
            <h3 className="text-center text-xl font-bold">Login</h3>

            <p className="pt-4 text-xs font-bold text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 ">
              Email
            </p>
            <div
              className="flex items-end pb-2 border-b-2	mt-1"
              style={{ borderBottomColor: "#c6c6c6" }}
            >
              <Icon
                icon="clarity:email-line"
                className="text-xl text-gray-400"
              />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border-0 outline-0 block w-full ml-2 text-sm text-input"
                size="large"
                placeholder="Your Email"
                type="email"
              />
            </div>

            <p className="pt-4 text-xs font-bold text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 ">
              Password
            </p>
            <div className="flex items-end pb-2 border-b-2	mt-1">
              <Icon icon="bx:lock-alt" className="text-xl text-gray-400" />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="border-0 outline-0 block w-full ml-2 text-sm text-input"
                size="large"
                placeholder="Enter password"
                type="password"
              />
            </div>

            {haveAccount && (
              <>
                <p className="pt-4 text-xs font-bold text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 ">
                  {" "}
                  Confirm Password
                </p>
                <div className="flex items-end pb-2 border-b-2	mt-1">
                  <Icon icon="bx:lock-alt" className="text-xl text-gray-400" />
                  <input
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="border-0 outline-0 block w-full ml-2 text-sm text-input"
                    size="large"
                    placeholder="Retype password"
                    type="password"
                  />
                </div>
              </>
            )}

            {!haveAccount && (
              <p className="text-right text-xs mt-1 font-semibold text-input">
                <span className="cursor-pointer hover:underline">
                  forgot password
                </span>
              </p>
            )}

            <div>
              <button
                className="w-full border-0 text-white p-2 rounded-full block mt-5"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #64d2db, #e63df6)",
                }}
                onClick={haveAccount ? handleCreateAccount : handleLogin}
              >
                {haveAccount ? "Create Account" : "Login"}
              </button>
            </div>

            <p className="text-xs font-semibold text-input text-center mt-9">
              or sign up using
            </p>

            <div className="flex justify-center items-center mt-4">
              <Icon
                onClick={signIn}
                icon="akar-icons:github-fill"
                className="m-1 cursor-pointer text-4xl"
                style={{ color: "#171515 " }}
              />

              <Icon
                onClick={signIn}
                icon="akar-icons:google-contained-fill"
                className="m-1 cursor-pointer text-4xl"
                style={{ color: "#d95447" }}
              />
            </div>

            <p className="text-center mt-9">
              {haveAccount ? (
                <span>Already have an account?</span>
              ) : (
                <span>Don&apos;t have an account?</span>
              )}
            </p>
            <p className="text-center uppercase font-semibold text-xs mt-1 text-input">
              {haveAccount ? (
                <span
                  className="cursor-pointer hover:underline"
                  onClick={() => setHaveAccount(!haveAccount)}
                >
                  sign in
                </span>
              ) : (
                <span
                  className="cursor-pointer hover:underline"
                  onClick={() => setHaveAccount(!haveAccount)}
                >
                  sign up
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
