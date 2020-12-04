import styled from "styled-components";
import {TextField} from "@material-ui/core";

export const StyledTextField = styled(TextField)`
        
  label {
    color: #61DAFB;
  }

  label:focus {
    color: #61DAFB;
  }

  .MuiOutlinedInput-root {
    color: #61DAFB;

    fieldset {
      border-color: #61DAFB;
      color: #61DAFB;
    }

    &:hover fieldset {
      border-color: yellow;
      color: #61DAFB;
    }

    &.Mui-focused fieldset {
      border-color: #61DAFB;
      color: #61DAFB;
    }
  }
`;