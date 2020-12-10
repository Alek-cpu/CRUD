import {makeStyles} from "@material-ui/core/styles";

export const useStylesMainPage = makeStyles({
    root: {
        marginTop: '15px'
    },
    line: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column-reverse',
        fontSize: '2rem',
        cursor: 'pointer',
    },

    inputBorder: {
        border: '1px solid none',
        color: 'white',
    },
    timeMessage: {
        width: '110px',
        padding: '0 5px',
        fontSize: '12px',
        color: '#696969',
    },

    timeLocation: {
        display: 'flex',
        width: 'inherit',
        alignItems: 'center',
    }
});