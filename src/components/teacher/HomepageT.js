import React, { useState, useEffect } from "react";
import MyMenu from "../teacher/MenuT";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  TextField,
  Typography,
  TableBody,
  TableCell,
  TableRow,
  Fab,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Link } from "react-router-dom";

import CreateClass from "./createClass";
import { WingBlank } from "antd-mobile";
import { BorderColor } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },

  root: {
    // flexGrow: 1,
    margin: "auto",
    // backgroundColor:'#E0E0E0',
  },

  paperclass: {
    padding: theme.spacing(5),
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
    marginBottom: 50,
    textAlign: "center",
    backgroundColor: "white",
    border: "2px",
    borderStyle: "solid",
    borderColor: "white",
    width: "80%",
    borderRadius: "30pt",
  },

  textField: {
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(10),
    width: "auto",
  },

  button1: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(15),
  },

  card: {
    // marginLeft: theme.spacing(10),
    marginTop: theme.spacing(6),
    width: 'auto',
    padding: theme.spacing(3),
    borderRadius: "25px",
    borderStyle: "solid",
    borderColor: "black",
  },

  classbutton: {
    width: 500,
  },

  fab: {
    position: "fixed",
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  },

  tablecell: {
    width: 'auto',
    // margin: 'auto',
    // marginTop: '500pt',
    // paddingTop: "30pt",
    // paddingBottom: "30pt",
    // paddingInline: "30pt",
    borderColor: "white",
  },
}));

export default function HomepageT() {
  const classes = useStyles();

  const [Sclass, setClass] = React.useState([]);

  const classList = ["cs_id", "cs_name", "teacher_name"];

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`/teacher/HomePage1_s/one/`);

      setClass(result.data);
      // console.log(result.data);
      // console.log(result.data[0]['cs_id']);

      // const path ={result.data['cs_id']}
    }

    fetchData();
  }, []);

  // const handleSubmit = () => {
  //   async function getCsid(){
  //   const csid = await axios.get(`/student/HomePage1_s/one/`);
  //   setCsid(csid.data);
  //   let classid = JSON.stringify(csid.data).toString();
  //   let i;
  //   for(i=0; i < classid.length; i++)
  //   {
  //   console.log(csid.data[i]['cs_id']);
  //   }
  // }
  //   getCsid();
  // }
  {
    /* 新建課程 */
  }
  const [openCreateClass, closeCreateClass] = React.useState(false);
  const onCloseCreateClass = () => {
    closeCreateClass(openCreateClass ? false : true);
  };

  return (
    <div className={classes.root}>
      <MyMenu />
      {/* 新建課程 */}
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={() => closeCreateClass(true)}
      >
        <AddIcon />
      </Fab>
      {/* {console.log(Sclass)} */}
      {/* <WingBlank></WingBlank> */}
      <Grid
        container
        direction="row"
        justify="center"
        // alignItems="center"
      >
        {/* <Grid item md={4}> */}
        {/* <Paper className={classes.photo}>photo</Paper> */}
        {/* <Typography className={classes.words}>沈大為</Typography> */}
        {/* </Grid> */}

        {/* <Grid item md={8}> */}
        {/* <TextField className={classes.textField} defaultValue='請輸入課程名稱'></TextField> */}
        {/* <Card className={classes.card}> */}
        {/* <ButtonBase
          component={Link}

          to ='/function1'
          >
            <CardActionArea>

              <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
             
              title="Contemplative Reptile"
              />
              <CardContent>
                <Typography>
                  Test
                </Typography>
              </CardContent>
            </CardActionArea> */}
        {/* <CardActions>
              <Button
              component={Link}
              to ='/function1'
              className={classes.classbutton}
              >
                <Typography>Test</Typography>
              </Button>
            </CardActions> */}
        {/* </ButtonBase> */}
        {/* </Card> */}

        {/* </Grid>   */}
        {/*         
        <Grid item xs={4}>
        <ButtonGroup 
          orientation="vertical"
          className={classes.button1}
        >
        <Button>我的課程</Button>
        <Button>個人資料管理</Button>
        </ButtonGroup>
        </Grid>   */}

        {/* <Paper>
            {Sclass.map((classs,index) => (
              <Grid key ={index}>
              {
                classList.map( (list, i) => i === 0 ?
                <Grid key={i}>
                {classs[list]}
                <Grid>
                {classs[list]}
                </Grid>
                </Grid>:
                <Grid key={i}>{classs[list]}</Grid>
                )
              }
              </Grid>
              ))
            }
          </Paper> */}
        <Grid item>
          {Sclass.map((classs, index) => (
            // <Card className={classes.card}>
            <CardActionArea
              className={classes.card}
              component={Link}
              to={`/functiont/${classs["cs_id"]}`}
            >
              {/* <CardActions> */}
              {/* {console.log(index)} */}
              {/* <Paper key = {index}> */}

              {/* <ButtonBase> */}
              {console.log(classs)}

              {/* <TableCell>{index+1}</TableCell> */}
              {classList.map((list, i) => (
                <TableCell
                  key={i}
                  component="th"
                  scope="row"
                  align="center"
                  cariant="body"
                  className={classes.tablecell}
                >
                  {classs[list]}
                </TableCell>
              ))}

              {/* </ButtonBase> */}

              {/* </Paper> */}
              {/* </CardActions> */}
            </CardActionArea>
            // </Card>
          ))}
        </Grid>
      </Grid>
      {/* 教師新建課程 */}
      <CreateClass open={openCreateClass} handleClose={onCloseCreateClass} />
    </div>
  );
}
