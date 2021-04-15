import { makeStyles } from '@material-ui/core/styles';
import React, { useState , useEffect, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { useSnackbar } from 'notistack'
import AlignItemsList from '../listview'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import firebase from '../../lib/firebase'
import Fuse from 'fuse.js'
import Button from '@material-ui/core/Button'
import { getFields, getSkills } from '../../lib/db'


const useStyles = makeStyles((theme) => ({
  text: {
    width:'25vh'
  },
  root: {
    marginTop:'6vh',
    flexGrow: 1,
    // [theme.breakpoints.up('sm')]:{
    //   [theme.breakpoints.down('md')]: {
    //     paddingLeft: '20vh',
    //   }
    // },
    paddingBottom:'10vh',
    display:'flex',
    flexDirection:'column',
  },
  paper: {
    height: '100%',
    // marginLeft:'4vh',
  },
  control: {
    padding: theme.spacing(2),
  },
  form:{
    paddingTop:'7vh',
    paddingRight:'7vh'
  },
  button1: {
    marginTop: '3vh',
    width:'90%'
  },
  button: {
    marginTop: '3vh',
  },
  box:{
    padding: '10vh',
    paddingTop: '25vh'
  },
  list: {
    [theme.breakpoints.up('sm')]: {
      display:'flex',
      marginLeft:'9vh'
    },
    alignItems: 'center',
    width:'98%',
    marginTop:'3vh'
  }
}));


export default function Filter() {
  const classes = useStyles();
  // const [ cid, setCid ] = useState('');
  const [ skills, setSkills]  = useState([]); 
  const [ fields, setFields ] = useState([]);
  const [ foe, setFoe ] = useState('---Select---');
  const [ filtered , setFiltered ] = useState([]);
  const [ skill, setSkill ] = useState('---Select---');
  const [ users, setUsers ] = useState([]);
  const [ sp, setSp ] = useState(0);
  const [ fp, setFp ] = useState(0);
  const [ years, setYears ] = useState(null)
  const [ spError, setSpError ] = useState('');
  const [ fpError, setFpError ] = useState('') 
  const [ skillError, setSkillError] = useState('');
  const [ fieldError , setFieldError] = useState('');
  const firestore = firebase.firestore();
  const { enqueueSnackbar } = useSnackbar();

  const getFID = () => {
    try{
      return fields.find(element => element.name===foe).id || ''
    }
    catch(e){
      console.log(e)
    }
  }

  const getSID = () => {
    try{
      return skills.find(element => element.name===skill).id || ''
    }
    catch(e) {
      console.log(e)
    }
  }

  const foeFilter = (data) => {
    const fid = getFID();
  
      const fuse = new Fuse(data,{
        includeScore:true,
        useExtendedSearch: true,
        keys: [`${fid}.points`]
      })
      return fuse.search(`=${fp}`);
  }

  const skillFilter = (data) => {

    const sid = getSID();
    
        const sfuse  =new Fuse(data,{
          includeScore:true,
          useExtendedSearch: true,
          keys: [`${sid}.points`]
        })
    
        return sfuse.search(`=${sp}`);

  }

  const yearFilter = (data) => {

    const sfuse  =new Fuse(data,{
      includeScore:true,
      useExtendedSearch: true,
      keys: [`years`]
    })

    console.log(sfuse.search(`=${years}`))

    return sfuse.search(`=${years}`);


  }

  const handleGet = () => {
    setFpError(fp>-1 && fp<6 ?'': 'Valid points(0-5)')
    setSpError(sp>-1 && sp<6 ?'': 'Valid points(0-5)')
    let final = []
    if(skill!='---Select---' ){
      if(foe!='---Select---'){
        if(years!=null){
          final = yearFilter(skillFilter(foeFilter(users)))
        }else{
          final = skillFilter(foeFilter(users))
        }
      }else{
        setFiltered(skillFilter(users));
      } 
    }else if(foe!='---Select---'){
        if(years!=null){
          final = yearFilter(foeFilter(users))
        }else{
          final = foeFilter(users)
        }
      }
    else if(years!=null){
      final = yearFilter(users);
    }
    else{
      enqueueSnackbar("Select a category to filter", {variant:'error'})
      return;
    }


    if(final ===undefined || final.length<1){
      enqueueSnackbar("No users Found")
    }else{
      setFiltered(final)
    }

    
  
  }

  const getData = useCallback(async() => {
    getFields()
      .then((response)=>{
        var lst =[]
        response.forEach((dat) =>{
            lst.push({
              id:dat.id,
            ...dat.data()
          })
        })
        setFields(lst)
      })
      getSkills()
        .then((response) => {
          var lst=[]
          response.forEach((dat)=> {
            lst.push({
              id:dat.id,
              ...dat.data()
            })
          })
          setSkills(lst)
        })

  })


  useEffect(() =>{ 
    firestore
      .collection('users')
      .get()
      .then((response) => {
        var lst =[]
        response.forEach((user) =>{
          lst.push(user.data());
        })
        setUsers(lst)
      })
     getData();
  },[])

  const handleFieldChange = (event) => {
    setFoe(event.target.value);
  };

  const handleSkillChange = (event) => {
    setSkill(event.target.value);
  };


  return (
    <div >
      <Grid container className={classes.root} spacing={2} >
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4}>
            {[0, 1].map((value,index) => (
                <Grid key={value} item>
                  <Paper className={classes.paper} > 
                  {index==0?(
                    <Container component="main" maxWidth="sm"   className={classes.root}>
                    <CssBaseline />
                    <Box className={classes.form}>
                        <Typography component="h1" variant="h5" >
                          Filter
                        </Typography>
                        <Box
                        component="form"
                        className={classes.button}
                        noValidate
                        sx={{
                            width: '100%', // Fix IE11 issue.
                            mt: 3,
                        }}
                        >
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                              <TextField
                                select
                                fullWidth
                                label="Select a Field"
                                value={foe}
                                onChange={handleFieldChange}
                                error={fieldError!=''}
                                helperText={fieldError}
                                variant="outlined"
                              >
                                <MenuItem key={'12'} value={'---Select---'}>
                                    {'---Select---'}
                                  </MenuItem>
                                {fields.map((option) => (
                                  <MenuItem key={option.id} value={option.name}>
                                    {option.name}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="experience"
                                label="Years of Experience"
                                helperText="Enter the number of years"
                                value={years}
                                error={years<0}
                                helperText={years>=0?"":"Invalid "}
                                onChange={(Event)=>setYears(Event.target.value)} 
                                id="exp"
                                type="number"
                                variant="outlined"
                            />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                select
                                fullWidth
                                label="Select a Skill"
                                value={skill}
                                onChange={handleSkillChange}
                                error={skillError!=''}
                                helperText={skillError}
                                variant="outlined"
                              >
                                <MenuItem key={'0a2'} value={'---Select---'}>
                                    {'---Select---'}
                                  </MenuItem>
                                {skills.map((option) => (
                                  <MenuItem key={option.id} value={option.name}>
                                    {option.name}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </Grid>
                        </Grid>
                        </Box>
                    </Box>
                    </Container>
                  )
                :
                ( 
                <Container component="main" maxWidth="sm" className={classes.root} >
                <CssBaseline />
                <Box className={classes.form}>
                    {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <AccountCircleIcon />
                    </Avatar> */}
                    <Typography component="h1" variant="h5" >
                      Parameters
                    </Typography>
                    <Box
                    className={classes.button}
                    component="form"
                    noValidate
                    sx={{
                        width: '100%', // Fix IE11 issue.
                        mt: 3,
                    }}
                    >
                    <Grid container spacing={5}>
                        {/* <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="cid"
                            label="College ID"
                            name="cid"
                            autoComplete="cid"
                            variant="outlined"
                        />
                        </Grid> */}
                        <Grid item xs={12}>
                        <TextField
                            // className={classes.text}
                            required
                            fullWidth
                            type="number"
                            value={fp}
                            error={fpError!=''}
                            helperText={fpError}
                            onChange={(Event)=>setFp(Event.target.value)}
                            // inputProps={{ min: "0", max: "5", step: "0.5" }}
                            name="foesp"
                            label="Field of expertise (Skill Points)"
                            id="foesp"
                            variant="outlined"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            // className={classes.text}
                            required
                            fullWidth
                            type="number"
                            value={sp}
                            error={spError!=''}
                            helperText={spError}
                            onChange={(Event)=>setSp(Event.target.value)}
                            // inputProps={{ min: "0", max: "5", step: "0.5" }}
                            name="skillsp"
                            label="Skill Set (Skill Points)"
                            id="skillsp"
                            variant="outlined"
                        />
                        </Grid>
                    </Grid>
                    </Box>
                </Box>
                  <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        className={classes.button1}
                        onClick={ handleGet}
                      >
                        Get
                      </Button>
                </Container>)}
                </Paper>
              </Grid>))}
         </Grid>
       </Grid>
     </Grid>
     <div className={classes.list}>
     {filtered.length>0 && <AlignItemsList users={filtered}/>}
     </div>
     </div>
  );
}
