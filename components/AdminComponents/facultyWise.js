import { Button, Container , Grid, makeStyles, Paper, TextField, Typography} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useEffect, useState } from "react";
import firebase from '../../lib/firebase'
import Work from "./filterWork";
import compareAsc from 'date-fns/compareAsc'
import Autocomplete from "@material-ui/lab/Autocomplete";
import isValid from "date-fns/isValid";


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
        marginTop:theme.spacing(1)
    }
  }))
  


export default function FacultyWise () {

    const classes = useStyles()

    const [ from, setFrom ] = useState(new Date())
    const [ toDate, setToDate ] = useState(new Date());
    const [ tasks, setTasks ] = useState([]);
    const [ users, setUsers ] = useState([]);
    const firestore = firebase.firestore();
    const [ faculty, setFaculty ] = useState(null);

    useEffect(() =>{ 
        firestore
          .collection('users')
          .get()
          .then((response) => {
            var lst =[]
            response.forEach((use) =>{
            lst.push(use.data());
            })
            setUsers(lst);
          })
      },[])

    const onGet = () =>{
        if(isValid(toDate) && isValid(from) && faculty!=null && faculty.uid!=undefined){
            firestore
            .collection('work')
            .where('createdAt','<=',toDate)
            .where('createdAt','>=',from)
            .where('assigned.uid','==',faculty.uid)
            .get()
            .then((response) => {
                var lst =[]
                response.forEach((work) =>{
                lst.push(work.data());
                })
                setTasks(lst);
            });
        }
      }

    return (
        <>
            <Paper elevation={0} className={classes.topBar}>
            <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}  >
                    <KeyboardDatePicker
                        disableToolbar
                        inputVariant="outlined"
                        fullWidth
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker"
                        label="From"
                        value={from}
                        onChange={(date)=>setFrom(date)}
                        KeyboardButtonProps={{
                        'aria-label': 'change date',
                        }}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                    <KeyboardDatePicker
                        disableToolbar
                        inputVariant="outlined"
                        fullWidth
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="To"
                        value={toDate}
                        onChange={(date)=>setToDate(date)}
                        KeyboardButtonProps={{
                        'aria-label': 'change date',
                        }}
                    />
                    </Grid>
                        {users&&
                     <Grid item  xs={12} sm={6}>
                        <Autocomplete
                            id="user"
                            required
                            fullWidth
                            options={users}
                            getOptionLabel={(option) => option.first_name+ " " +option.last_name+" ("+option.cid+")"}
                            onChange={(event, value) =>setFaculty(value)}
                            renderInput={(params) => <TextField {...params} label="Select User" variant="outlined" />}
                            />
                    </Grid>}
                    <Grid item xs ={12} sm={6}>
                        <Button
                            onClick={()=>onGet()}
                            className={classes.button}
                            variant="contained"
                            fullWidth>
                                Get Report
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
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
                        No task for the selected user 
                     </Typography>
                </div>}
            </Paper>
        </>
    )
} 