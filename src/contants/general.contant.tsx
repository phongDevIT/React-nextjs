import {
    IconBuilding,
    IconDashboard,
    IconMessage,
    IconPerson,
    IconProfile,
} from "@/components/icon";
import IconMassageSizebar from "@/components/icon/IconMessageSizebar";
import IconStar from "@/components/icon/IconStar";
import { TSidebarLink } from "@/types/general.type";

export const sidebarLink: TSidebarLink[] = [
    {
        title: "Dashboard",
        icon: <IconDashboard />,
        path: "/",
    },
    {
        title: "Property",
        icon: <IconBuilding />,
        path: "/property",
    },
    {
        title: "Agent",
        icon: <IconPerson />,
        path: "/agent",
    },
    {
        title: "Review",
        icon: <IconStar />,
        path: "/review",
    },
    {
        title: "Message",
        icon: <IconMassageSizebar />,
        path: "/message",
    },
    {
        title: "Profile",
        icon: <IconProfile />,
        path: "/profile",
    },
];
