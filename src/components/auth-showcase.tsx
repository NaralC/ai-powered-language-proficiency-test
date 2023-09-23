import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@chakra-ui/react";
import { api } from "@/utils/api";

type Props = {};

const AuthShowcase: React.FC<Props> = ({}) => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div>
      <p>
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <Button
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </Button>
    </div>
  );
};

export default AuthShowcase;
