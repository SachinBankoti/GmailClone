import React, { useState } from "react";
import { Box, Button, List, ListItem, styled } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { SIDEBAR_DATA } from "../config/Side.config";
import ComposeMail from "./ComposeMail";

const ComposeButton = styled(Button)({
    backgroundColor: "#C2E7FF",
    color: "#001D35",
    padding: 15,
    borderRadius: 16,
    textTransform: "none",
  });
  const Container = styled(Box)({
    padding: 8,
    "& > ul": {
      padding: "10px 0 0 5px",
      fontSize: 14,
      fontWeight: 500,
      cursor: "pointer",
    },
    "& > ul >li > svg": {
      marginRight: 20,
    },
  });
const SideContent = () => {
  const [openDialog, setOpenDialog] = useState(false);
  
  const onComposeClick = () => {
    setOpenDialog(true);
  };
  return (
    <Container>
      <ComposeButton onClick={()=>onComposeClick()}>
        <CreateOutlinedIcon /> Compose
      </ComposeButton>
      <List>
        {SIDEBAR_DATA.map((data) => {
          return (
            <ListItem>
              <data.icon fontSize="small" />
              {data.title}
            </ListItem>
          );
        })}
      </List>
      <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Container>
  );
};

export default SideContent;
