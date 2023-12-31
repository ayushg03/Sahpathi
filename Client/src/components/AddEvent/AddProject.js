import classes from "./Event.module.css";
import React, { Component, setState, useEffect } from "react";
import BasicPadding from "../UserInterface/BasicCompPadding/BasicLayout"
import Textfield from "../UserInterface/TextFormField/Textfield";
import Swal from 'sweetalert2'
import axios from 'axios';
import BookLoader from "../GlobalComponents/Loader";
import GeneralModal from "../GlobalComponents/GeneralModal/GeneralModal";

// This class is used for uploading notes
export class AddProject extends Component {
  currentDate = new Date();
  file = {};

  state = {
    article: {
      title: "",
      desc: "",
      createDate: this.currentDate,
      author: "",
      email: "",
      image: [],
      categoryLable: "",
      id: "",
      link: "",
      verified: false,

      eventDate: "",   // Add event date field
      time: "",     // Ad time field
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
      } else if (author == "") {
        Swal.fire({
          icon: 'error',
          // position: 'top',
          title: 'Oops...',
          text: 'Author is not valid',
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


        this.uploadPost();
      }
    });
  }

  //If article is valid this function will upload the post
  uploadPost = () => {
    return new Promise(async (resolve, reject) => {

    //   //email temp
    //   const subject="Appreciating your support!"
    // const reply="Thank you for taking the time to post the details of your project on our website. It is greatly appreciated, as it helps to ensure that our users and interested parties are aware of the activities and opportunities available within the campus."
    // const fd2 = new FormData();
    // fd2.append('to',this.state.article.email);
    // fd2.append('subject',subject);
    // fd2.append('message',this.state.article.desc);
    // fd2.append('reply',reply);
    // fd2.append('name',this.state.article.author);
    // const responseM= axios.post(`/api/send`,fd2);
   

    //next thing 
      const fd = new FormData();
      fd.append('link', this.state.article.link);
      fd.append('title', this.state.article.title);
      fd.append('desc', this.state.article.desc);
      fd.append('email', this.state.article.email);
      fd.append('author',this.state.article.author);
      const response = await axios.post(`/api/projects`, fd).then(() => {
        this.file = "";
        this.setState({
          article: {
            title: "",
            desc: "",
            createDate: this.currentDate,
            author: "",
            email: "",
            link: "",
          },
          error: "",
          loaderDisplay: false,
        });
        Swal.fire({
          icon: 'success',
          // position: 'top',
          title: 'Thank You!',
          showConfirmButton: false,
          timer: 2500
        })
        window.location.reload();
      })
        .catch((err) => console.log(err));

    });
  };

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
  onChangeArticleEmail = (value) => {
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



  render() {
    this.index = 0;
    return (
      <BasicPadding>

        <h1 className={classes.notes} style={{textAlign:"center"}}>Add your project details here</h1>
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
              title="Author"
            />
             <Textfield
              value={this.state.article.email}
              onChange={(e) => this.onChangeArticleEmail(e.target.value)}
              title="Email-Id"
            />
           
            <button
              onClick={async (e) => await this.handleValidation(e)}
              className={classes.cardbutton}
            >
              Submit
            </button>
          </div>

          
        </div>
        <div className={classes.note} style={{textAlign:"center"}}>
          <div>
            *Projects will be uploaded once it is verified. Thank you for your patience! :)
          </div>
        </div>
      </BasicPadding>
    );
  }
}

export default AddProject;
