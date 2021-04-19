import { Button, Container , Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useEffect, useState } from "react";
import firebase from '../../lib/firebase'
import Work from "./filterWork";
import compareAsc from 'date-fns/compareAsc'
import isValid from "date-fns/isValid";
import { getByFaculty, getFormattedWork } from "../../lib/db";


const useStyles = makeStyles((theme) => ({
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
    },
    nowork: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        margin:theme.spacing(10)
      },
  }))
  


export default function DateWise () {

    const classes = useStyles()

    const [ from, setFrom ] = useState(new Date())
    const [ toDate, setToDate ] = useState(new Date());
    const [ tasks, setTasks ] = useState([]);


    const onGet = async () => {
        if(isValid(toDate) && isValid(from)){
            const data = await getByFaculty(toDate, from)
            var lst = []
            for(const doc of data.docs){
                const currWork = await getFormattedWork(doc.data());
                lst.push(currWork)
            }
            setTasks(lst)
        }
      }

    return (
        <>
            <Paper elevation={0} className={classes.topBar}>
            <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}  >
                    <KeyboardDatePicker
                        disableToolbar
                        inputVariant="outlined"
                        fullWidth
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker"
                        label="From"
                        error={!isValid(from)}
                        value={from}
                        onChange={(date)=>setFrom(date)}
                        KeyboardButtonProps={{
                        'aria-label': 'change date',
                        }}
                    />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                    <KeyboardDatePicker
                        disableToolbar
                        inputVariant="outlined"
                        fullWidth
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="To"
                        error={!isValid(toDate)}
                        value={toDate}
                        onChange={(date)=>setToDate(date)}
                        KeyboardButtonProps={{
                        'aria-label': 'change date',
                        }}
                    />
                    </Grid>
                    <Grid item xs ={12} sm={4}>
                        <Button
                            className={classes.button}
                            variant="contained"
                            onClick={()=>onGet()}
                            fullWidth>
                                Get Report
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={0} className={classes.list} >
                {tasks.map((item,index)=> {
                    return(
                        <Work key={index+item.id} work={item} index={index} />
                    )
                })
                }
                 {tasks.length<1 && 
                 <div className = {classes.nowork}>
                     <Typography variant="h5">
                        No Task in the date Limit 
                     </Typography>
                </div>}
            </Paper>
        </>
    )
} 