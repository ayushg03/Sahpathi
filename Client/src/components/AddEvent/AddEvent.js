import classes from "./Event.module.css";
import React, { Component, setState,useEffect } from "react";
import BasicPadding from "../UserInterface/BasicCompPadding/BasicLayout"
import Textfield from "../UserInterface/TextFormField/Textfield";
import Swal from 'sweetalert2'
import axios from 'axios';
import BookLoader from "../GlobalComponents/Loader";
import GeneralModal from "../GlobalComponents/GeneralModal/GeneralModal";

// This class is used for uploading notes
export class AddEvent extends Component {
    currentDate = new Date();
    file = {};
   
    state = {
      article: {
        title: "",
        desc: "",
        createDate: this.currentDate,
        author:"",
        email: "",
        image: [],
        categoryLable: "",
        id: "",
        link: "",
        verified: false,
      },
      error: "",
      loaderDisplay: false,
    };
  

    // Used for validation of article
    handleValidation() {
      return new Promise(async (resolve, reject) => {
        const {
          title,
          desc,
          image,
          categoryLable,
          link,
          author,
          email,
        } = this.state.article;
        if (title == "") {
          Swal.fire({
            icon: 'error',
            // position: 'top',
            title: 'Oops...',
            text: 'Title is not valid',
            showConfirmButton: false,
            timer: 1200
          })
        }
        else if (desc == "") {
          Swal.fire({
            icon: 'error',
            // position: 'top',
            title: 'Oops...',
            text: 'Description is not valid',
            showConfirmButton: false,
            timer: 1200
          })
        } else if (email == "") {
          Swal.fire({
            icon: 'error',
            // position: 'top',
            title: 'Oops...',
            text: 'Email is not valid',
            showConfirmButton: false,
            timer: 1200
          })
        }else if (author == "") {
          Swal.fire({
            icon: 'error',
            // position: 'top',
            title: 'Oops...',
            text: 'Email is not valid',
            showConfirmButton: false,
            timer: 1200
          })
        } 
        else if (categoryLable == "") {
          Swal.fire({
            icon: 'error',
            // position: 'top',
            title: 'Oops...',
            text: 'Category is not valid',
            showConfirmButton: false,
            timer: 1200
          })
        }
          else if (link == "") {
            Swal.fire({
              icon: 'error',
              // position: 'top',
              title: 'Oops...',
              text: 'link is not valid',
              showConfirmButton: false,
              timer: 1200
            })
          } 
          
        else {
          this.setState({
            loaderDisplay: true,
          });
          // const len = this.files.length;
          // for (var i = 0; i < len; i++) {
          //   const result = await this.callbk(this.files[i]);
          //   // if (result.success) {
          //   // }
          // }
  
        //   this.uploadPost();
        }
      });
    }
  
    //If article is valid this function will upload the post to firebase
    // uploadPost = () => {
    //   this.setState({ error: "" });
    //   // let id = this.state.article.title;
    //   const article = this.state.article;
    //   // id = id.split(" ").join("-");
    //   //article.id = id;
    //   this.db
    //     .collection("Posts")
    //     .doc()
    //     .set(article)
    //     .then((res) => {
    //       this.files = [];
    //       this.setState({
    //         article: {
    //           title: "",
    //           desc: "",
    //           createDate: this.currentDate,
    //           email: "",
    //           image: [],
    //           categoryLable: "",
    //           id: "",
    //           link: "",
    //           verified: false,
    //         },
    //         loaderDisplay: false,
    //       });
    //       alert("Your post has been uploaded for verification 👍");
    //     })
    //     .catch((err) => console.log(err));
    // };
  
    // For mounting local file to website
    addFile = (e) => {
      this.file = e.target.files[0];
      this.setState({});
    };
  
    //This function update the title if the user chages it
    onChangeArticleTitle = (value) => {
      this.setState({
        article: {
          ...this.state.article,
          title: value,
        },
      });
    };
  
    //This function update the email if the user chages it
    onChangeArticleemail = (value) => {
      this.setState({
        article: {
          ...this.state.article,
          email: value,
        },
      });
    };
  
    //This function update the Description if the user chages it
    onChangeArticleDesc = (value) => {
      this.setState({
        article: {
          ...this.state.article,
          desc: value,
        },
      });
    };
  
    onChangeArticleAuthor = (value) => {
      this.setState({
        article: {
          ...this.state.article,
          author: value,
        },
      });
    };

    //This function update the link if the user chages it
    onChangeArticleLink = (value) => {
      this.setState({
        article: {
          ...this.state.article,
          link: value,
        },
      });
    };
  
    //This function update the category if the user chages it
    onChangeArticlecategory = (value) => {
      this.setState({
        article: {
          ...this.state.article,
          categoryLable: value,
        },
      });
    };
  
    render() {
      this.index = 0;
      return (
        <BasicPadding>
 
          <h1 className={classes.notes}>Add Club/Chapter or Upcoming Event</h1>
          <div></div>
          <div className={classes.col}>
            <div className={classes.basicInput}>
              <Textfield
                value={this.state.article.title}
                onChange={(e) => this.onChangeArticleTitle(e.target.value)}
                title="Title"
              />
              <Textfield
                value={this.state.article.desc}
                onChange={(e) => this.onChangeArticleDesc(e.target.value)}
                title="Description"
              />
              <Textfield
                value={this.state.article.link}
                onChange={(e) => this.onChangeArticleLink(e.target.value)}
                title="Link"
              />
              <Textfield
                value={this.state.article.link}
                onChange={(e) => this.onChangeArticleAuthor(e.target.value)}
                title="Author"
              />
              <Textfield
                value={this.state.article.email}
                onChange={(e) => this.onChangeArticleemail(e.target.value)}
                title="Chapter/Club Institute Email-Id"
              />
              <label className={classes.label}>Category</label>
              <select
                className={classes.select}
                onChange={(e) => this.onChangeArticlecategory(e.target.value)}
                value={this.state.article.categoryLable}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option name="education">Student Chapter/Club</option>
                <option name="education">Event</option>
                <option name="education">Sports</option>
              </select>
              <button
                onClick={async (e) => await this.handleValidation(e)}
                className={classes.cardbutton}
              >
                Submit
              </button>
            </div>
  
            <div className={classes.drag_area}>
              <header>Select Event Poster </header>
              <div style={{color: "grey"}}>1400x2000 px recommended</div>
              <label for="file" className={classes.btn}>
                Choose Image
              </label>
              <input
                className={classes.filechossen}
                type="file"
                id="file"
                accept="image/x-png,image/gif,image/jpeg"
                onChange={(e) => {
                  this.addFile(e);
                }}
              ></input>
  
             
             <div>{this.file.name}</div>
             
            </div>
          </div>
          <div className={classes.note}>
            <div>
              *Verification may take up few hours. Thank you for your patience. :)
            </div>
            *Check your mail for what you posted.
          </div>
        </BasicPadding>
      );
    }
  }
  
  export default AddEvent;
