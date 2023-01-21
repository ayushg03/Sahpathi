import React, { Component } from "react";
import BasicLayout from "../UserInterface/BasicCompPadding/BasicLayout"
import Card from "../Card/Card";
import classes from "./GeneralPage.module.css";
import axios from 'axios';


var arrayy;







// Used to display the subject cards
class Subject extends Component {
  // used to initialize the arrayy var using the link of the page(using react router)
  constructor(props) {
    super(props);
    arrayy = window.location.pathname.split("/");
    console.log(arrayy);

    // State of this page
    this.state = {
      subjects: [],
      isLoaded: false,
      title: "",
    };
  }

  // executes when the screen is displayed
  componentDidMount() {
    this.getSubjects();
  }

  // get the data of all subjects in the selected field
  getSubjects = () => {
    return new Promise(async (resolve, reject) => {
       const branch=arrayy[2].toUpperCase();
       const sem=arrayy[3];
        const response=await axios.get(`/api/getSub/${branch}/${sem}`);
        
        console.log(response.data);
        if(response.data!=[]){
          let allArticals =response.data;
        this.setState(
          {
            subjects: allArticals,
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
            subjects:[],
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
          {arrayy[2].toUpperCase()} /{" "}
          {arrayy[3].toUpperCase()} / Select Subject
        </div>
        <div className={classes.GeneralRow}>
          {this.state.isLoaded ? (
            this.state.subjects != "" ? (
              // maps all the data one by one to the Card component to display nicely to user
              this.state.subjects.map((variable, index) => {
                return (
                  <Card
                    varr={variable}
                    // propp={this.props}
                    subject={variable}
                    branch={arrayy[2].toUpperCase()}
                    sem={arrayy[3].toUpperCase()}
                    key={index}
                  />
                );
              })
            ) : (
              <div>Content will be added soon!</div>
            )
          ) : (
            <div/> //loader
          )}
        </div>
      </BasicLayout>
    );
  }
}

export default Subject;
