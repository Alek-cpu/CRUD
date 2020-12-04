import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

export const AnimateRotate = styled(CloseIcon)`
  &:hover {
    transition: 0.6s ease-out;
    transform: rotate(360deg);
  }`;