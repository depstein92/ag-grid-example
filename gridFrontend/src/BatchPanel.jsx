import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '500px',   
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  description: {
    fontSize: '30px',
    fontFamily: 'arial',
    textAlign: 'center',
    marginTop: '35px'
  },
  title: {
    fontSize: '40px',
    width: '100%',
    textAlign: 'center'      
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    height: '250px',
    justifyContent: 'space-evenly',
    flexDirection: 'column'
  },
  formTitle: {
      fontSize: '20px'
  },
  inputs : {
     height: '30px',
     fontSize: '20px' 
  }
}));

const BatchPanel = () => {
    const classes = useStyles();
    
    const [formState, setFormState] = useState({
        batchNumber: 0,
        batchName: ''
    });

    const [formError, setFormError] = useState({
        batchNumberError: {
            isError: false,
            errorDescription: ''
        },
        batchNameError: {
            isError: false,
            errorDescription: ''
        }
    });

    const handleBatchNumber = (e) => {
        const number = e.target.value;
        if(number > 500){
            setFormError({
                batchNumberError: {
                    isError: true,
                    errorDescription: 'Number cannot be over 500'
                }
            })
        } else{
            setFormState({ ...formState, batchNumber: number });
        }
    }

    return(
        <Container className={classes.root}>
            <div className={classes.title}>BatchCreator</div>
            <div className={classes.description}>
            This is a small app that takes a number of profile records
            and stores therm in a SQLite database. You can create batches of
            profile records by line numbers. The point of the app is to demonstrate
            knowledge of ag-record. 
            </div>
            <form action="" className={classes.form}>
                <label className={classes.formTitle}>
                    Number of Rows to be Inserted into Database
                </label>
                <input className={classes.inputs} type="text" placeholder="Number of batchs" />
                <input className={classes.inputs} type="text" placeholder="Batch Name" />
                <Button 
                    variant="contained" 
                    size="medium" 
                    color="primary"
                >
                    Primary
                </Button>
            </form>
        </Container>
    )
}

export default BatchPanel;