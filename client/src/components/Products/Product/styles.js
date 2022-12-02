import { makeStyles } from "@material-ui/core/styles";
import { Translate } from "@material-ui/icons";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        maxHeight: '600px'
    },

    media:{
        height: 350,
        maxWidth: '100%',
        paddingTop: '10%',
    },

    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));