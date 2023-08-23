import { styled } from "@mui/system";
import { grey } from "@mui/material/colors"

const StyledLabel = styled('label')(
    ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.85rem;
  display: block;
  margin-bottom: 4px;
  font-weight: 400;
  color: ${theme.palette.mode === 'dark' ? grey[400] : grey[700]};
  `,
);

export default StyledLabel;