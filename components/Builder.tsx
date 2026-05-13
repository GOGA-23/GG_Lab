import { getUser } from "@/lib/auth/actions";
import HomeSections from "./HomeSections";

interface BuilderProps {
    userId: string | undefined;
    isAuthenticated: boolean;
}

async function Builder({
    userId,
    isAuthenticated,
}: BuilderProps) {
    const userData = await getUser(userId || "");

    return (
        <HomeSections
            userName={userData?.name || undefined}
            isAuthenticated={isAuthenticated}
        />
    );
};

export default Builder;


