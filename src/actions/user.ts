"use server";

import { currentUser } from "@clerk/nextjs/server";

export const onAuthenticateUser = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      // Redirect to sign-in page if user is not authenticated
      throw new Error("User not found");
    }
  } catch (error) {}
};
