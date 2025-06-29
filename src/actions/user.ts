"use server";

import { currentUser } from "@clerk/nextjs/server";
import { use } from "react";

export const onAuthenticateUser = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      // Redirect to sign-in page if user is not authenticated
      return { status: 403 };
    }

    // const exisitingUser = await db.user.findUnique({
    //   where: {
    //     clerkId: user.id,
    //   },
    // });
  } catch (error) {}
};
