import {makeStyles} from "@material-ui/core/styles";

export const useStylesEnterField = makeStyles({
    button: {
        height: '100%',
        padding: '0 30px',
        border: '2px solid #61DAFB',
        borderRadius: 3,
        color: '#61DAFB',
        background: 'inherit',
    },
    display_line: {
        display: 'grid',
        gridTemplateColumns: '5fr 1fr',
        gridGap: '10px',
        width: '100%',
        marginTop: '30px',
        alignItems: 'center',
    }
});