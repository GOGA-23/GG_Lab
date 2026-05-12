import Builder from "@/components/Builder";
import Navbar from "@/components/Navbar";
import YourProjects from "@/components/YourProjects";
import { currentUser, auth } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  const { isAuthenticated } =
    await auth();

  const safeUser = user
    ? {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      imageUrl: user.imageUrl,
      email:
        user.emailAddresses?.[0]
          ?.emailAddress,
    }
    : null;


  return (
    <main>
      <Navbar isAuthenticated={isAuthenticated} />
      <Builder user={safeUser} isAuthenticated={isAuthenticated} />
      {isAuthenticated && <YourProjects />}
    </main>
  );
}
