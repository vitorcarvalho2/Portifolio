import { Button } from "@mui/material";
import { Colors } from "../utils/colors";

const buttonStyle = {
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "medium",
  "&:hover": {
    backgroundColor: Colors.hoverColor,
  },
};
const MyButton = ({ text, onClick }) => {
  return (
    <Button sx={buttonStyle} onClick={onClick}>
      {text}
    </Button>
  );
};
export default MyButton;
