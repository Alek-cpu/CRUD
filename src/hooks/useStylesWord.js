import {makeStyles} from "@material-ui/core/styles";

export const useStylesWord = makeStyles({
    line: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    column: {
        display: 'flex',
        flexDirection: 'column-reverse',
        cursor: 'pointer',
        fontSize: '2rem',
    },
})