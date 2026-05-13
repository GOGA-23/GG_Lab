"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const onBoardUser = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      return {
        success: false,
        message: "User not authenticated",
      };
    }

    const { id, firstName, lastName, emailAddresses, imageUrl } = user;

    const newUser = await db.user.upsert({
      where: { clerkId: id },
      update: {
        name:
          firstName && lastName
            ? `${firstName} ${lastName}`
            : firstName || lastName || null,
        email: emailAddresses[0].emailAddress || "",
        image: imageUrl || null,
      },
      create: {
        clerkId: id,
        name:
          firstName && lastName
            ? `${firstName} ${lastName}`
            : firstName || lastName || null,
        email: emailAddresses[0].emailAddress || "",
        image: imageUrl || null,
      },
    });

    return {
      success: true,
      message: "User onboarded successfully",
      user: newUser,
    };
  } catch (error) {
    return {
      success: false,
      message: "An error occurred while onboarding the user",
      error: error instanceof Error ? error.message : String(error),
    };
  }
};

export const getUser = async (clerkId: string) => {
  const user = await currentUser();
  if (!user) {
    return null;
  }
  try {
    const user = await db.user.findUnique({
      where: { clerkId },
      select: {
        id: true,
        clerkId: true,
        name: true,
        email: true,
        image: true,
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};
