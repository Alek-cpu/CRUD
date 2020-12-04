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
        cursor: 'pointer',
        fontSize: '2rem',
    },

    inputBorder: {
        border: '1px solid none',
        color: 'white',
    },
    timeMessage: {
        fontSize: '12px',
        color: '#696969',
        width: '110px',
        padding: '0 5px',
    },

    timeLocation: {
        display: 'flex',
        width: 'inherit',
        alignItems: 'center',
    }
});