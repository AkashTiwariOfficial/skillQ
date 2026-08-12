import React from "react";
import {
  Show,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/react";
import toast from "react-hot-toast";

export default function HomePage() {
  return (
    <div>
      <div>
        <h1 className="text-7xl bg-red-400">Welcome to the app</h1>
        <button className="btn btn-warning" onClick={() => toast.error("This is a success toast")}>click me</button>
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <SignOutButton />
          <UserButton />
        </Show>
      </div>
    </div>
  );
}
