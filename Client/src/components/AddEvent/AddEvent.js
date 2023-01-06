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
    files = [];
   
    state = {
      article: {
        title: "",
        desc: "",
        createDate: this.currentDate,
        author: "",
        image: [],
        categoryLable: "",
        id: "",
        link: "",
        verified: false,
      },
      error: "",
      loaderDisplay: false,
    };
  
    // Uploads only Image to firebase to storage
    // uploadImageCallBack = (e) => {
    //   return new Promise(async (resolve, reject) => {
    //     const file = e;
    //     const filename = uuidv4();
    //     this.storageRef
    //       .ref()
    //       .child("post/image/" + filename)
    //       .put(file)
    //       .then(async (snapshot) => {
    //         const downloadURL = await this.storageRef
    //           .ref()
    //           .child("post/image/" + filename)
    //           .getDownloadURL();
    //         resolve({
    //           success: true,
    //           data: { link: downloadURL },
    //         });
    //       });
    //   });
    // };
    // // Call uploadImageCallBack and returns a promise
    // callbk = (e) => {
    //   return new Promise(async (resolve, reject) => {
    //     const uploadState = await this.uploadImageCallBack(e);
    //     if (uploadState.success) {
    //       this.setState({
    //         hasFeatureIamge: true,
    //         article: {
    //           ...this.state.article,
    //           image: [...this.state.article.image, uploadState.data.link],
    //         },
    //       });
    //     }
    //     resolve({ success: true });
    //   });
    // };
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
        } = this.state.article;
        if (desc == "") {
          return alert("Description is not valid");
        } else if (title == "") {
          return alert("Title is not valid");
  
          // this.setState({ error: "Title is not valid" });
        } else if (categoryLable == "") {
          return alert("CategoryLable is not valid");
  
          // this.setState({ error: "Category is not valid" });
        } else if (author == "") {
          return alert("Author is not valid");
  
          // this.setState({ error: "Author is not valid" });
        } else {
          this.setState({
            loaderDisplay: true,
          });
          const len = this.files.length;
          for (var i = 0; i < len; i++) {
            const result = await this.callbk(this.files[i]);
            // if (result.success) {
            // }
          }
  
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
    //           author: "",
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
    fileAdded = (e) => {
      var len = 0;
      for (const f in e.target.files) {
        if (e.target.files.hasOwnProperty(f)) len++;
      }
      for (var i = 0; i < len; i++) {
        this.files = [...this.files, e.target.files[i]];
      }
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
  
    //This function update the author if the user chages it
    onChangeArticleAuthor = (value) => {
      this.setState({
        article: {
          ...this.state.article,
          author: value,
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
          {this.state.loaderDisplay ? (
            <GeneralModal>
              <BookLoader/>
            </GeneralModal>
          ) : (
            <div></div>
          )}
  
          {this.state.error !== "" ? (
            <span style={{ color: "red" }}>{this.state.error}</span>
          ) : (
            ""
          )}
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
                value={this.state.article.author}
                onChange={(e) => this.onChangeArticleAuthor(e.target.value)}
                title="Author(Chapter/Club Email-Id)"
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
              <label for="fileImage" className={classes.btn}>
                Choose Image
              </label>
              <input
                className={classes.filechossen}
                type="file"
                id="fileImage"
                accept="image/x-png,image/gif,image/jpeg"
                onChange={(e) => {
                  this.fileAdded(e);
                }}
              ></input>
  
              {this.files.map((imageName) => {
                return <div>{imageName.name}</div>;
              })}
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
