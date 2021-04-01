import AdminLayout from '../components/adminLayout';
import AlignItemsList from '../components/listview'
import { makeStyles } from '@material-ui/core/styles';
import data from '../pages/api/mock.json';
import Filter from '../components/filter';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      display:'flex',
      float:'right',
      backgroundColor: theme.palette.background.paper,
    },
    list: {
      marginTop:'8vh',
      width: '100%',
      display:'flex',
      float:'right',
      flexDirection:'column'
    },
    inline: {
      display: 'inline',
    },
  }));
export default function Admin () {
    const classes = useStyles();
    const users = data.users;
    return (
        <div className={classes.root}>
            <AdminLayout name="Admin" AppBar/>
            <div className={classes.list}>
            <Filter />
              <AlignItemsList users={users}/>
            </div>
        </div>
    )
}