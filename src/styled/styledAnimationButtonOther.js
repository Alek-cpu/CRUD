import styled from "styled-components";
import {Button} from "@material-ui/core";

export const StyledAnimationButtonOther = styled(Button)`
  margin: 30px 0 30px 0;
  color: white;
  text-decoration: none;
  text-transform: none;
  border: 3px solid #3f51b5;

  &:active {
    transition: .2s ease-out;
    transform: scale(.9);
  }

  &:hover {
    background: #282c34;
    color: #61dafb;
    -webkit-box-shadow: 2px -1px 32px 0px rgba(97, 218, 251, 1);
    -moz-box-shadow: 2px -1px 32px 0px rgba(97, 218, 251, 1);
    box-shadow: 2px -1px 32px 0px rgba(97, 218, 251, 1);
    border: 3px solid #61dafb;

    img {
      transform: scale(.9);
      color: #61dafb;
    }
  }
`;