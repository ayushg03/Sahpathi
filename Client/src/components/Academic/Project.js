import React, { Component } from "react";
import BasicLayout from "../UserInterface/BasicCompPadding/BasicLayout"
import Card from "../Card/Card1";
import classes from "./GeneralPage.module.css";
import classes1 from "../About/Aboutus.module.css";
import axios from 'axios';
import BookLoader from "../GlobalComponents/Loader";
import GeneralModal from "../GlobalComponents/GeneralModal/GeneralModal";
import CardP from "../Card/CardP";
import { Link } from "react-router-dom";


var arrayy;

// Used to display the subject cards
class Project extends Component {
  // used to initialize the arrayy var using the link of the page(using react router)
  constructor(props) {
    super(props);
    // arrayy = window.location.pathname.split("/");
    // console.log(arrayy);

    // State of this page
    this.state = {
      Notes: [],
      isLoaded: false,
      title: "",
    };
  }

  // executes when the screen is displayed
  componentDidMount() {
    this.getNotes();
  }

  // get the data of all subjects in the selected field
  getNotes = () => {
    return new Promise(async (resolve, reject) => {
      
    //    const sem=arrayy[3];
        const response=await axios.get(`/api/projects`);
        
        console.log(response);
        if(response.data!=[]){
          let allArticals =response.data;
        this.setState(
          {
            Notes: allArticals,
          },
          () => {
            this.setState({
              isLoaded: true,
            });
          }
        );
      } else {
        this.setState(
          {
            Notes:[],
          },
          () => {
            this.setState({
              isLoaded: true,
            });
          }
        );
      }
      
  })}


  // make capital first letter of a word
  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // to render the UI
  render() {
    return (
      <BasicLayout>
        <div className={classes.headercontent}>
      Projects
        </div>
        <div className={classes.GeneralRow1}>
          {this.state.isLoaded ? (
            this.state.Notes != "" ? (
              // maps all the data one by one to the Card component to display nicely to user
              this.state.Notes.map((variable, index) => {
                return (
                    <>
                  <CardP
                    title={variable.title}
                    desc={variable.desc}
                    author={variable.author}
                    link={variable.link}
                    key={index}
                  />
                  </>
                );
              })
            ) : (
              <div >Projects will be uploaded soon!</div>
            )
          ) : (
            // <GeneralModal>
            //   <BookLoader/>
            // </GeneralModal>
            <div/>
            
          )}
        </div>
        <h1>...</h1>
      <div className={classes1.row1}>
      <div><h3 className={classes1.headerText1}>Add your projects here.</h3>
      </div>
      <Link to="/project/add" className={classes1.show}>Add now</Link>
      </div>
      
      </BasicLayout>
    );
  }
}

export default Project;
