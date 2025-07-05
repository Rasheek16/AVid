"use server";

import { Client, currentUser } from "@clerk/nextjs/server";
import { use } from "react";
import { client } from "@/lib/prisma";
import { User } from "lucide-react";
export const onAuthenticateUser = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      // Redirect to sign-in page if user is not authenticated
      return { status: 403 };
    }

    const userExist = await client.user.findUnique({
      where: {
        clerkid: user.id,
      },
      include: {
        workspace: {
          where: {
            User: {
              clerkid: user.id,
            },
          },
        },
      },
    });

    if (userExist) {
      return {
        status: 200,
        user: userExist,
      };
    }
    const newUser = await client.user.create({
      data: {
        firstname: user.firstName,
        lastname: user.lastName,
        image: user.imageUrl,
        clerkid: user.id,
        email: user.emailAddresses[0].emailAddress,
        studio: {
          create: {},
        },
        subscription: {
          create: {},
        },
        workspace: {
          create: {
            name: `${user.firstName}'s Workspace`,
            type: "PERSONAL",
          },
        },
      },
      include: {
        workspace: {
          User: {
            clerid: user.id,
          },
        },
      },
      subscription: {
        select: {
          plan: true,
        },
      },
    });
    if (newUser) {
      return {
        status: 201,
        user: newUser,
      };
    }

    return { status: 400 };
  } catch (error) {
    return { status: 500 };
  }
};
