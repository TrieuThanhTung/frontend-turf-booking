import { Typography, Box } from "@mui/material";

type Props = {
  title: string;
  subtitle: string;
}

const Header: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={"primary"}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={"primary"}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;