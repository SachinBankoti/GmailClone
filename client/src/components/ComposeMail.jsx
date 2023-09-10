import React, { useState } from "react";
import {
  Dialog,
  Box,
  Typography,
  InputBase,
  TextField,
  styled,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const dailogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};
const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#f2f6fc",
  "& > p": {
    fontSize: 14,
    fontWeight: 500,
  },
});
const RecipientsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "& > div": {
    fontSize: 14,
    borderButton: "1px solid #F5F5F5",
    marginTop: 10,
  },
});
const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
});
const SendButton = styled(Button)({
  background: "#0B57D0",
  color: "#fff",
  fontWeight: 500,
  textTransform: "none",
  borderRadius: 18,
  width: 100,
});
const ComposeMail = ({ openDialog, setOpenDialog }) => {
    const[data,setData] = useState({});

  const config = {
    Host: "smtp.elasticemail.com",
    Username: "sachingmailclone123@yopmail.com",
    Password: "602F567B69B9F43A022151F575CB1CEDAF95",
    Port: 2525,
  };

  const closeComposeMail = (e) => {
    e.preventDefault();
    setOpenDialog(false);
  };
  const sendMail = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "sachinbankoti16@gmail.com",
        Subject: data.subject,
        Body: data.body,
      }).then((message) => alert(message));
    }
    setOpenDialog(false);
  };

  const onValueChange =(e)=>{
    // console.log({...data, [e.target.name]: e.target.value});
    setData({...data, [e.target.name]: e.target.value});
    console.log(data);
  }
  return (
    <Dialog open={openDialog} PaperProps={{ sx: dailogStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <CloseIcon fontSize="small" onClick={(e) => closeComposeMail(e)} />
      </Header>
      <RecipientsWrapper>
        <InputBase placeholder="Recipients" name="to" onChange={(e)=> onValueChange(e)}/>
        <InputBase placeholder="Subject" name="subject" onChange={(e)=> onValueChange(e)}/>
      </RecipientsWrapper>
      <TextField
        multiline
        rows={20}
        sx={{ "& .MuiOutlinedInput-notchedOutlined": { border: "none" } }}
        onChange={(e)=> onValueChange(e)}
        name="body"
      />
      <Footer>
        <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
        <DeleteOutlineOutlinedIcon onClick={() => setOpenDialog(false)} />
      </Footer>
    </Dialog>
  );
};

export default ComposeMail;
