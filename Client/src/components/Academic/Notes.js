import React, { Component } from "react";
import BasicLayout from "../UserInterface/BasicCompPadding/BasicLayout"
import Card from "../Card/Card1";
import classes from "./GeneralPage.module.css";
import axios from 'axios';
import BookLoader from "../GlobalComponents/Loader";
import GeneralModal from "../GlobalComponents/GeneralModal/GeneralModal";


var arrayy;

// Used to display the subject cards
class Notes extends Component {
  // used to initialize the arrayy var using the link of the page(using react router)
  constructor(props) {
    super(props);
    arrayy = window.location.pathname.split("/");
    console.log(arrayy);

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
       const subject=arrayy[4];
    //    const sem=arrayy[3];
        const response=await axios.get(`/api/getNotes/${subject}`);
        
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
         {arrayy[2].toUpperCase()} /{" "}
          {arrayy[3].toUpperCase()} /{" "}
          {decodeURI(arrayy[4].toUpperCase())} / Notes
        </div>
        <div className={classes.GeneralRow}>
          {this.state.isLoaded ? (
            this.state.Notes != "" ? (
              // maps all the data one by one to the Card component to display nicely to user
              this.state.Notes.map((variable, index) => {
                return (
                  <Card
                    varr={variable.title}
                    author={variable.desc}
                    label={variable.label}
                    // propp={this.props}
                    subject={arrayy[4]}
                    branch={arrayy[2]}
                    sem={arrayy[3]}
                    id={variable.id}
                    key={index}
                  />
                );
              })
            ) : (
              <div>Content will be added soon!</div>
            )
          ) : (
            // <GeneralModal>
            //   <BookLoader/>
            // </GeneralModal>
            <div/>
            
          )}
        </div>
      </BasicLayout>
    );
  }
}

export default Notes;
