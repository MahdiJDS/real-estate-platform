export type NavItem = {
    label: string;
    href: string;
    auth?: boolean;
};

const NAVIGATION: NavItem[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "My Properties",
        href: "/properties/my-properties",
        auth: true,
    },
];

export function getNavigation(
    isAuthenticated: boolean
): NavItem[] {
    return NAVIGATION.filter((item) => {

        const requiresAuth = item.auth === true;

        if (!requiresAuth) {
            return true;
        }

        if (!isAuthenticated) {
            return false;
        }

        return true;
    });
}