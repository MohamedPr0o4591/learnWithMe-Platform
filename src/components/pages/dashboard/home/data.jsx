import {
  AccessTimeFilled,
  Assignment,
  MenuBook,
  Task,
  TipsAndUpdates,
} from "@mui/icons-material";

export const naviOptions = [
  {
    title: "جدول الطالب",
    path: "/dashboard/student_timetable",
    icon: <AccessTimeFilled />,
  },
  {
    title: "الدروس",
    path: "/dashboard/courses",
    icon: <MenuBook />,
  },
  {
    title: "المهام المطلوبه",
    path: "/dashboard/tasks",
    icon: <Task />,
  },
  {
    title: "توسع/تعلم اكتر",
    path: "/dashboard/classroom",
    icon: <TipsAndUpdates />,
  },
  {
    title: "الامتحانات",
    path: "/dashboard/exams",
    icon: <Assignment />,
  },
];
