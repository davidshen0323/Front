import React, {useEffect} from "react";
import MyMenu from "../teacher/MenuOT";
import { makeStyles } from "@material-ui/core/styles";
import {TableCell, Fab, Grid} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";
import CreateClass from "./createClass";

const useStyles = makeStyles((theme) => ({
  div: {
    height:'100hv',
    background: 'linear-gradient(0deg,#ffffff  0%,#fff8e5 30%,#fff2d1 50%,  #ffe1c4 100%)',
  },
  
  paperclass: {
    padding: theme.spacing(5),
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'center',
    backgroundColor: 'white',
    border: '2px',
    borderStyle: 'solid',
    borderColor: 'white',
    width: '80%',
    borderRadius: '30pt',
  },

  
  card: {
    //marginLeft: theme.spacing(10),
    // marginTop: theme.spacing(3),
    maxWidth: '80%',
    margin: theme.spacing(3),
    width: 'auto',
    padding: theme.spacing(3),
    borderRadius: "25px",
    borderStyle: "solid",
    borderColor: "black",
    border:1,
  },
 
  classbutton: {
    width: 500,
  },

  fab: {
    position: 'fixed',
    bottom: theme.spacing(5),
    right: theme.spacing(5),
    backgroundColor:'#582707'
  },


  cardaction: {
    maxWidth: 600,
  },
  tablecell: {
    width: '200pt',
  margin: 'auto',
  // marginTop: '500pt',
  // paddingTop: "30pt",
  // paddingBottom: "30pt",
  // paddingInline: "30pt",
  borderColor: "white",
  fontFamily: 'Microsoft JhengHei',
  fontWeight: 'bold',
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
        justify="center"
       >
          {Sclass.map((classs, index) => (
            // <Card className={classes.card}>
            <CardActionArea
              className={classes.card}
              component={Link}
              to={`/functiont/${classs["cs_id"]}`}
            >
              {console.log(classs)}
              {classList.map((list, i) => (
                <TableCell
                  key={i}
                  component="th"
                  scope="row"
                  align="center"
                  variant="body"
                  className={classes.tablecell}
                >
                  {classs[list]}
                </TableCell>
              ))}

            </CardActionArea>
          ))}
      </Grid>
      {/* 教師新建課程 */}
      <CreateClass open={openCreateClass} handleClose={onCloseCreateClass} />
    </div>
  );
}
