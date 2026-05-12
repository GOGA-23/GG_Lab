import HomeSections from "./HomeSections";



interface BuilderProps {
    user: {
        id: string;
        firstName: string | null;
        lastName: string | null;
        imageUrl: string;
        email?: string;
    } | null;

    isAuthenticated: boolean;
}

const Builder = ({
    user,
    isAuthenticated,
}: BuilderProps) => {
    return (
        <HomeSections
            user={user}
            isAuthenticated={isAuthenticated}
        />
    );
};

export default Builder;


