import styled from "styled-components";

import {TextField} from "@material-ui/core";

const turquoise = '#61DAFB';

export const StyledTextField = styled(TextField)`
        
  label {
    color: turquoise;
  }

  label:focus {
    color: turquoise;
  }

  .MuiOutlinedInput-root {
    color: turquoise;

    fieldset {
      border-color: turquoise;
      color: turquoise;
    }

    &:hover fieldset {
      border-color: yellow;
      color: turquoise;
    }

    &.Mui-focused fieldset {
      border-color: turquoise;
      color: turquoise;
    }
  }
`;