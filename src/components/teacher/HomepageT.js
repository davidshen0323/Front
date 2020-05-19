import React, {useEffect} from "react";
import MyMenu from "../teacher/MenuOT";
import { makeStyles } from "@material-ui/core/styles";
import {Typography, Fab, Grid} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";
import CreateClass from "./createClass";

import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import MenuBookIcon from '@material-ui/icons/MenuBook';

// core components
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";

const useStyles = makeStyles((theme) => ({
  div: {
    height:'100hv',
    background: 'linear-gradient(0deg,#ffffff  0%,#fff8e5 30%,#fff2d1 50%,  #ffe1c4 100%)',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(5),
    right: theme.spacing(5),
    backgroundColor:'#582707'
  },

  gridbox:{
    margin:theme.spacing(0),
  },

  grid: {
    padding: "0 15px !important"
  },
  cardTitle: {
    color: "#777",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: 'Microsoft JhengHei',
    fontWeight: 'bold',
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
     color: "#999",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleWhite: {
    color: "#FFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: 'Microsoft JhengHei',
    fontWeight: 'bold',
    fontSize:20,
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#999",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  Cardtext: {
    fontFamily: 'Microsoft JhengHei',
    fontWeight: 'bold',
  },
}));

export default function HomepageT() {
  const classes = useStyles();
  const [Sclass, setClass] = React.useState([]);
  const [openCreateClass, closeCreateClass] = React.useState(false);
  
  const onCloseCreateClass = () => {
    closeCreateClass(openCreateClass ? false : true);
  };

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`/teacher/HomePage1_s/one/`);
      setClass(result.data);
    }

    fetchData();
  }, []);

  

  return (
    <div className={classes.div}>
      <MyMenu />
      {/* 新建課程 */}
      <Fab
        style={{color:'#ffffff'}} aria-label="add" className={classes.fab}
        onClick={() => closeCreateClass(true)}
      >
        <AddIcon />
      </Fab>    
      {/* {console.log(Sclass)} */}
      {/* <WingBlank></WingBlank> */}


      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.gridbox}
       >
         
         {Sclass.map((classs, index) => (
        <Grid item xs={12} sm={12} md={4} className={classes.grid}>
          <Card>
            <CardActionArea component={Link}
              to={`/functiont/${classs["cs_id"]}`}>
            <CardHeader color="warning" >
            <h1 className={classes.cardTitleWhite}>
              {index % 2 === 0 ? <MenuBookIcon style={{ fontSize: 30 }} /> : <ImportContactsIcon style={{ fontSize: 30 }} />}
              {classs["cs_name"]}
            </h1>
            </CardHeader>

            <CardBody>
              <h2 className={classes.cardTitle}>{classs["cs_id"]}</h2>
              {/* <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p> */}
              <h3 className={classes.cardTitle}>{classs["teacher_name"]}</h3>
            </CardBody>

            {/* <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter> */}
            </CardActionArea>
          </Card>
        </Grid>
        ))}
        </Grid>



      {/* 教師新建課程 */}
      <CreateClass open={openCreateClass} handleClose={onCloseCreateClass} />
    </div>
  );
}
