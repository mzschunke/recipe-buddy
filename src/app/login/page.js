"use client";

import { useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession({ required: true });
  console.log(session);
  if (session)
    return (
      <div>
        <p>Logged in as {session.user.name}</p>
      </div>
    );
  //   else return <p>Not logged in</p>;
}
