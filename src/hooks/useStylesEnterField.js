import {makeStyles} from "@material-ui/core/styles";

export const useStylesEnterField = makeStyles({
    button: {
        background: 'inherit',
        border: '2px solid #61DAFB',
        borderRadius: 3,
        color: '#61DAFB',
        height: '100%',
        padding: '0 30px',
    },
    display_line: {
        marginTop: '30px',
        display: 'grid',
        gridTemplateColumns: '5fr 1fr',
        gridGap: '10px',
        width: '100%',
        alignItems: 'center',
    }
});