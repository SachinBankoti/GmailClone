import PhotoIcon from "@mui/icons-material/Photo";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import LabelImportantIcon from "@mui/icons-material/LabelImportant";
// import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

export const SIDEBAR_DATA = [
  {
    name: "inbox",
    title: "Inbox",
    icon: PhotoIcon,
  },
  {
    name: "starred",
    title: "Starred",
    icon: StarBorderOutlinedIcon,
  },
  {
    name: "sent",
    title: "Sent",
    icon: SendOutlinedIcon,
  },
  {
    name: "drafts",
    title: "Drafts",
    icon: InsertDriveFileOutlinedIcon,
  },
  {
    name: "bin",
    title: "Bin",
    icon: DeleteOutlinedIcon,
  },
  {
    name: "allmails",
    title: "Allmail",
    icon: MailOutlineOutlinedIcon,
  },

  // {
  //   name: "starred",
  //   title: "Starred",
  //   icon: StarBorderOutlinedIcon,
  // },
  // {
  //   name: "snoozed",
  //   title: "Snoozed",
  //   icon: AccessTimeIcon,
  // },
  // {
  //   name: "important",
  //   title: "Important",
  //   icon: LabelImportantIcon,
  // },
];
