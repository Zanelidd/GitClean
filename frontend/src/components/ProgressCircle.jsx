import { Box, CircularProgress, Typography } from "@mui/material";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "secondary",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          Catégorie 4 - A
        </Typography>
      </Box>
    </Box>
  );
}
export default function ProgressCircle() {
  return (
    <CircularProgressWithLabel
      className="circular-progress"
      variant="determinate"
      value={55}
      size={200}
    />
  );
}
