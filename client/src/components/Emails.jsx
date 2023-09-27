import React, { useEffect,useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url";
import { Box, Checkbox, List } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import Email from "./Email";

const Emails = () => {
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [refreshScreen ,setRefreshScreen] = useState(false);

  const { openDrawer } = useOutletContext();
  const { type } = useParams();

  const getEmailsService = useApi(API_URLS.getEmailFromType);
  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
  useEffect(() => {
    getEmailsService.call({}, type);
  }, [type,refreshScreen]);

  const deleteSelectedEmails =(e)=>{
    if(type === 'bin'){

    }else{
      moveEmailsToBinService.call(selectedEmails);
    }
    setRefreshScreen(prevState => !prevState)
  }
  const selectAllEmails =(e)=>{
    if (e.target.checked) {
    const emails = getEmailsService?.response?.map(email => email._id);
    setSelectedEmails(emails);
    } else{
      setSelectedEmails([]);
    }
  }
  return (
    <Box
      style={
        openDrawer
          ? { marginLeft: 250, width: "calc(100% - 250px)" }
          : { width: "100%" }
      }
    >
      <Box
        style={{
          padding: "20px 10px 0 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox size="small" onChange={(e)=> selectAllEmails(e)} />
        <DeleteOutline onClick = {(e)=> deleteSelectedEmails(e)}/>
      </Box>
      <List>
        {getEmailsService?.response?.map((email) => (
          <Email key={email._id} email={email} selectedEmails= {selectedEmails} />
        ))}
      </List>
    </Box>
  );
};

export default Emails;
