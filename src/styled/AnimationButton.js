import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const AnimationButton = styled(Button)`
  &:active {
    transition: .2s ease-out;
    transform: scale(.9);
`;