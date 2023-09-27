import { StarBorder } from "@mui/icons-material";
import { Box, Typography, Checkbox, styled } from "@mui/material";

const Wrapper = styled(Box)({
  padding: "0 0 0 10px",
  background: "#f2f6fc",
  display: "flex",
  alignItems: "center",
  "& > div": {
    display: "flex",
    width: "100%",
    "& > p": {
      fontSize: 14,
    },
  },
});
const Indicator = styled(Typography)`
  font-size: 12px !important;
  background: #ddd;
  color: #222;
  border-radius: 4px;
  margin-right: 6px;
  padding: 0 4px;
`;
const Date = styled(Typography)({
  marginLeft: "auto",
  marginRight: "12px",
  fontSize: "12px",
  color: "#5F6368",
});
const Email = ({ email, selectedEmails }) => {
  return (
    <Wrapper>
      <Checkbox size="small" checked={selectedEmails.includes(email._id)} />
      <StarBorder fontSize="small" style={{ marginRight: 10 }} />
      <Box>
        <Typography style={{ width: 200, overflow: "hidden" }}>
          {email.name}
        </Typography>
        <Indicator>Indox</Indicator>
        <Typography>
          {email.subject}
          {email.body && "-"}
          {email.body}
        </Typography>
        <Date>
          {new window.Date(email.date).getDate()}
          {new window.Date(email.date).toLocaleString("default", {
            month: "long",
          })}
        </Date>
      </Box>
    </Wrapper>
  );
};

export default Email;
