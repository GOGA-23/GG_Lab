import Builder from "@/components/Builder";
import Navbar from "@/components/Navbar";
import YourProjects from "@/components/YourProjects";
import { currentUser, auth } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  const { isAuthenticated } = await auth();

  return (
    <main>
      <Navbar isAuthenticated={isAuthenticated} />
      <Builder userId={user?.id} isAuthenticated={isAuthenticated} />
      {isAuthenticated && <YourProjects />}
    </main>
  );
}
