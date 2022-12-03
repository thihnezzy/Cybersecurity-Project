import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    maxHeight: '600px',
    '& a':{
        textDecoration:  'none',
        color: 'black',
        fontWeight: 'bold'
    },
},
  media: {
    height: 400,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));