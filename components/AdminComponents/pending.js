import { Button, Container , Grid, makeStyles, Paper, TextField, Typography} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useEffect, useState } from "react";
import firebase from '../../lib/firebase'
import Work from "./filterWork";
import compareAsc from 'date-fns/compareAsc'
import Autocomplete from "@material-ui/lab/Autocomplete";
import isValid from "date-fns/isValid";
import { getFormattedWork, getPending } from "../../lib/db";


const useStyles = makeStyles((theme) => ({
    nowork: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        margin:theme.spacing(10)
      },
    topBar: {
        [theme.breakpoints.up('sm')]: {
            marginLeft:theme.spacing(15)
        }
    },
    list: {
        marginTop:theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            marginLeft:theme.spacing(25)
        },
        width:'100%'
    },
    button: {
        marginTop:theme.spacing(3)
    }
  }))
  


export default function Pending () {

    const classes = useStyles()

    const [ tasks, setTasks ] = useState([]);
    const firestore = firebase.firestore();
    const [ faculty, setFaculty ] = useState(null);

    useEffect(() =>{ 
        async function getData() {
            const data = await getPending();
            var lst=[]
            for(const doc of data.docs){
                const currWork = await getFormattedWork(doc.data(),doc.id);
                lst.push(currWork)
            }
            setTasks(lst)
        }

        getData();
      },[])

    return (
            <Paper elevation={0} className={classes.list} >
                {tasks.map((item,index)=> {
                    return(
                        <Work work={item} index={index} />
                    )
                })
                }

                {tasks.length<1 && 
                 <div className = {classes.nowork}>
                     <Typography variant="h5">
                        No pending tasks
                     </Typography>
                </div>}
            </Paper>
    )
} 