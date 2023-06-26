import Assets from "../../assets/assets";
import RoutesPath from "../../constants/Routes";

const navigationData = [
    {
        label: "Overview",
        icon: Assets.Home,
        path: "/"
    },
    {
        label: "Students",
        icon: Assets.Students,
        path: RoutesPath.students
    },
    {
        label: "Mentors",
        icon: Assets.Mentors,
        path: RoutesPath.mentors
    },
    {
        label: "User Role",
        icon: Assets.UserRole,
        path: RoutesPath.userRole
    },
    {
        label: "Schedules",
        icon: Assets.Schedule,
        path: RoutesPath.schedules
    },
    {
        label: "Courses",
        icon: Assets.Courses,
        path: RoutesPath.courses
    },
    {
        label: "Notifications",
        icon: Assets.Notification,
        path: RoutesPath.notifications
    },
    {
        label: "Messages",
        icon: Assets.Message,
        path: RoutesPath.messages
    },
    {
        label: "Accounts",
        icon: Assets.Account,
        path: RoutesPath.accounts
    },

]

export default navigationData