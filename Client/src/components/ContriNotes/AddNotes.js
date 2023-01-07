import classes from "./Notes.module.css";
import React, { Component, setState,useEffect } from "react";
import BasicPadding from "../UserInterface/BasicCompPadding/BasicLayout"
import Textfield from "../UserInterface/TextFormField/Textfield";
import Swal from 'sweetalert2'
import axios from 'axios';
import BookLoader from "../GlobalComponents/Loader";
import GeneralModal from "../GlobalComponents/GeneralModal/GeneralModal";

// This class is used for uploading notes
export class AddNotes extends Component {
  file = {};

  sem4 = ['1', '2', '3', '4', '5', '6', '7', '8'];
  sem5 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  cse1 = ['Classical Physics', 'Inorganic and Physical Chemistry', 'Real Analysis & Calculus', 'Computer Programing', 'Biology'];
  cse2 = ['Modern Physics', 'Fundamentals of Electronics Engineering', 'Differential Equations', 'Engineering Thermodynamics', 'Computer Sc Engg Practices'];
  cse3 = ['Linear Algebra & Complex Analysis', 'Discrete Mathematics', 'Data Structure and Algorithm', 'Programming with Python', 'Graphics and Visual Computing', 'Materials Science'];
  cse4 = ['Database Management Systems', 'Numerical Methods', 'Statistical Methods and Data Analysis', 'Web Technology', 'Computer Organization and Architecture', 'Digital Circuits and Systems'];
  cse5 = ['Operating Systems', 'Theory of Computation', 'Microprocessor Engineering', 'Design and Analysis of Algorithms', 'Cloud Computing(E)', 'Artificial Intelligence(E)'];
  cse6 = ['Software Engineering', 'Computer Networks', 'Compiler Design', 'Operations Research', 'Data Mining'];
  cse7 = ['Mobile Computing', 'Option', 'Option', 'Option'];
  cse8 = ['Option', 'Option', 'Option', 'Option', 'Option'];
  csd1 = ['Classical Physics', 'Inorganic and Physical Chemistry', 'Real Analysis & Calculus', 'Computer Programing', 'Biology'];
  csd2 = ['Modern Physics', 'Fundamentals of Electronics Engineering', 'Differential Equations', 'Computing and Data Science', 'Data Science Engineering Practices'];
  csd3 = ['Linear Algebra and Complex Analysis', 'Discrete Mathematics', 'Data Structure and Algorithm', 'Data Handling and Visualization', 'Aerial Robotic Designing', 'Computer Vision'];
  csd4 = ['CyberSecurity', 'Numerical Methods', 'Machine Learning', 'Operations Research', 'Digital Twin', 'Computer Game Design and Programming'];
  csd5 = ['Animation Design', 'Multimedia Technologies(Video/Audio Engineering)', 'Artificial Intelligence', 'DE-1', 'Software Engineering'];
  csd6 = ['Internet of Things', 'Biomedical Imaging', 'Spatial Computing', 'Pattern Recognition', 'Web Technology'];
  csd7 = ['Mobile Computing', 'Visualization/Virtual Reality'];
  csd8 = ['Robotics Design', 'Digital Image Processing', 'Information Retrieval'];
  che1 = ['Classical Physics', 'Organic and Hydrocarbon Chemistry', 'Real Analysis and Calculus', 'Engineering Thermodynamics'];
  che2 = ['Modern Physics', 'Inorganic and Physical Chemistry', 'Differential Equations', 'Computer Programming', 'Fluid Mechanics', 'Chemical Engineering Practices'];
  che3 = ['Chemical Engineering Thermodynamics', 'Linear Algebra and Complex Analysis', 'Fluid Flow Operation', 'Mass Energy Balance', 'Fundamentals of Electronics Engineering', 'Solid,Fluid Mechanics and Mechanical Operations'];
  che4 = ['Materials Science', 'Fundamental of Polymer and Petrochemical', 'Petroleum Refining Engineering', 'Fire, Safety and Hazard Analysis', 'Heat Transfer Operations', 'Numerical Methods', 'Chemical Reaction Engineering-1', 'Energy Resources and Utilization'];
  che5 = ['Mass Transfer Operations-1', 'Chemical Reaction Engineering-2', 'DE-1', 'Process Instrumentation', 'Chemical Process Technology'];
  che6 = ['Process Dynamics and Control', 'Mass Transfer Operations-2', 'DE-2', 'Equipment Design', 'Transport Phenomenon', 'Statistical Methods and Data Analysis'];
  che7 = ['Open Elective 1', 'DE-3', 'Plant Design and Economics', 'Mass Transfer Operations-3'];
  che8 = ['Modelling Simulation and Optimization', 'DE-4', 'Open Elective-2', 'Industrial Pollution and Control', 'Corrosion Engineering', 'Biochemical Engineering'];
  ev1 = ['Classical Physics', 'Inorganic and Physical Chemistry', 'Real Analysis and Calculus', 'Fundamentals of Electronics Engineering'];
  ev2 = ['Electrical Engineering Work Practices', 'Basic Electrical Engineering', 'Computer Programming', 'Differential Equations', 'Biology'];
  ev3 = ['Linear Algebra and Complex Analysis', 'Electrical Machines-1', 'Logic Design', 'Network Analysis and Synthesis', 'Power Electronics Converter'];
  ev4 = ['Electrical Machines-2', 'Signals and Systems', 'Statistical Methods and Data Analysis', 'Control Systems-1', 'Analog Circuits and Systems'];
  ev5 = ['Fundamentals of E-Vehicle', 'Principle of Communication', 'Electromagnetic Fields and Transmission Lines', 'DE-1'];
  ev6 = ['Electric Vehicle Technology-1', 'DE-2', 'Power Systems-1', 'Instrumentation Engineering'];
  ev7 = ['Electric Vehicle Technology-2', 'Power Systems-2', 'DE-3', 'Open Elective-1'];
  ev8 = ['Power System Protection and Switchgear', 'Advanced Electric Motors and Control', 'DE-4', 'Open Elective-2'];
  it1 = ['Classical Physics', 'Inorganic and Physical Chemistry', 'Real Analysis & Calculus', 'Computer Programing', 'Biology'];
  it2 = ['Modern Physics', 'Fundamentals of Electronics Engineering', 'Differential Equations', 'Engineering Thermodynamics', 'Computer Science Engineering Practices'];
  it3 = ['Linear Algebra & Complex Analysis', 'Discrete Mathematics', 'Data Structure and Algorithm', 'Principles of Programming Languages', 'Object Oriented Methodologies'];
  it4 = ['Database Management Systems', 'Numerical Methods', 'Statistical Methods and Data Analysis', 'Web Technology', 'Computer Organization and Architecture', 'Digital Circuits and Systems'];
  it5 = ['Operating Systems', 'Theory of Computation', 'Microprocessor Engineering', 'Software Engineering', 'DE-1'];
  it6 = ['Design and Analysis of Algorithms', 'Computer Networks', 'Compiler Design', 'Operations Research', 'DE-2'];
  it7 = ['Mobile Computing', 'DE-3', 'Open Elective-1'];
  it8 = ['Soft Computing', 'Digital Image Processing', 'DE-4', 'Open Elective-2', 'Data Mining'];
  mc1 = ['Classical Physics', 'Inorganic and Physical Chemistry', 'Real Analysis & Calculus', 'Computer Programing', 'Biology'];
  mc2 = ['Modern Physics', 'Fundamentals of Electronics Engineering', 'Differential Equations', 'Engineering Thermodynamics', 'Engineering Practices in Mathematics and Computing'];
  mc3 = ['Linear Algebra & Complex Analysis', 'Discrete Mathematics', 'Data Structure and Algorithm', 'Graphics and Visual Computing', 'Programming with Python', 'Elementary Number Theory and Algebra'];
  mc4 = ['Database Management Systems', 'Numerical Methods', 'Statistical Methods and Data Analysis', 'Computer Organization and Architecture', 'Web Technology', 'Financial Engineering-1'];
  mc5 = ['Operating Systems', 'Theory of Computation', 'Computational PDE', 'Functional Analysis and Topology'];
  mc6 = ['Design and Analysis of Algorithms', 'Computer Networks', 'Optimization Methods and Applications', 'Stochastic Processes', 'DE-2'];
  mc7 = ['Graph Theory', 'DE-3', 'Open Elective-1', 'Language'];
  mc8 = ['Soft Computing', 'Data Mining', 'DE-4', 'Open Elective-2'];
  pe1 = ['Classical Physics', 'Organic and Hydrocarbon Synthesis', 'Real Analysis and Calculus', 'Engineering Thermodynamics'];
  pe2 = ['Modern Physics', 'Inorganic and Physical Chemistry', 'Differential Equations', 'Computer Programming', 'Fluid Mechanics', 'Petroleum Engineering Practices'];
  pe3 = ['Petroleum Geology', 'Linear Algebra and Complex Analysis', 'Fluid Flow Operations', 'Mass Energy Balance', 'Fundamentals of Electronics Engineering', 'Reservoir Engineering-1'];
  pe4 = ['Reservoir Engineering-2', 'Fundamental of Mechanical Engineering', 'Numerical Methods', 'Heat Transfer Operations', 'Drilling Technology', 'Production Engineering'];
  pe5 = ['Formation Evaluation', 'Well Test Analysis', 'Offshore Oil and Gas Technology', 'Petroleum Exploration and Prospecting', 'DE-1', 'Process Instrumentation'];
  pe6 = ['Process Dynamics and Control', 'Materials Science', 'Petroleum Facilities Design and Operation', 'DE-2', 'Statistical Methods and Data Analysis', 'Fire Safety and Hazard Analysis'];
  pe7 = ['Open Elective-1', 'Humanities', 'DE-3', 'Language', 'Unconventional Hydrocarbon Resources', 'EOR Techniques'];
  pe8 = ['Reservoir Modelling and Simulation', 'DE-4', 'Open Elective-2', 'Language', 'Industrial Pollution and Control', 'Corrosion Engineering', 'Petroleum Field Resource Management'];
  ec1 = ['Classical Physics', 'Inorganic and Physical Chemistry', 'Real Analysis and Calculus', 'Computer Programming', 'Electronics Engineering Work Practices'];
  ec2 = ['Modern Physics', 'Fundamentals of Electronics Engineering', 'Differential Equations', 'Engineering Thermodynamics', 'Biology'];
  ec3 = ['Linear Algebra and Complex Analysis', 'Fundamental of Electrical Engineering', 'Materials Science', 'Network Analysis and Synthesis', 'Solid State Electronic Devices', 'Data Strutures and Algorithm'];
  ec4 = ['Fundamental of Mechanical Engineering', 'Signals and Systems', 'Statistical Methods and Data Analysis', 'Numerical Methods', 'Analog Circuits and Systems', 'Digital Circuits and Systems'];
  ec5 = ['Analog Communication Systems', 'Microelectronics', 'Electromagnetic Fields and Transmission Lines', 'DE-1', 'Microprocessor Engineering'];
  ec6 = ['Digital Signal Processing', 'Digital Communication', 'DE-2', 'Control Systems', 'Instrumentation Engineering'];
  ec7 = ['Basic VLSI Design', 'Microwave Engineering', 'DE-3', 'Open Elective-1'];
  ec8 = ['Antennas and Propagation', 'Optical Communication', 'DE-4', 'Open Elective-2', 'Advances in Electronics Engineering'];
  idd1 = ['Classical Physics', 'Inorganic and Physical Chemistry', 'Real Analysis & Calculus', 'Computer Programing', 'Biology'];
  idd2 = ['Modern Physics', 'Fundamentals of Electronics Engineering', 'Differential Equations', 'Engineering Thermodynamics', 'Computer Sc Engg Practices'];
  idd3 = ['Linear Algebra & Complex Analysis', 'Discrete Mathematics', 'Data Structure and Algorithm', 'Programming with Python', 'Graphics and Visual Computing', 'Materials Science'];
  idd4 = ['Database Management Systems', 'Numerical Methods', 'Statistical Methods and Data Analysis', 'Web Technology', 'Computer Organization and Architecture', 'Digital Circuits and Systems'];
  idd5 = ['Software Engineering', 'Operating Systems', 'Theory of Computation', 'Microprocessor Engineering', 'Cloud Computing(E)', 'Artificial Intelligence(E)'];
  idd6 = ['Computer Networks', 'Compiler Design', 'Design and Analysis of Algorithms', 'Operations Research', 'DE-2'];
  idd7 = ['Mobile Computing', 'DE-3', 'OE-1'];
  idd8 = ['Soft Computing', 'Digital Image Processing', 'DE-4', 'OE-2', 'Data Mining'];
  idd9 = ['DE-5', 'DE-6', 'DE-7', 'OE-3', 'OE-4', 'Thesis'];
  idd10 = ['Thesis'];



  currentDate = new Date();
  // db = firebase.firestore();

  // storageRef = firebase.storage();
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: "",
        desc: "",
        createDate: this.currentDate,
        categoryLable: "",
        id: "",
        link: "",
        department: "",
        semester: "",
        subject: "",
        author: "",
      },
      error: "",
      opt: [],
      dept: ['CSE', 'CSD', 'CS+AI(IDD)', 'IT', 'MNC', 'EV', 'EC', 'CHE', 'PE'],
      sub: [],
      uid:"",
      loaderDisplay: false,
    };
  }

  //function to upload notes to gridfs
uploadFile=()=>{
  return new Promise(async (resolve, reject) => {
    const fd1 = new FormData();
    fd1.append('files', this.file);
    const response0=await axios.post(`/api/upload`,fd1);
    console.log(response0);
    const subject="Appreciating your support!"
    const reply="We want to extend a heartfelt thank you for your contribution to our website. Your input will be invaluable and will help us to make our website a better resource for our users. We are grateful for your support and look forward for more future contributions."
    const fd2 = new FormData();
    fd2.append('to',this.state.article.author);
    fd2.append('subject',subject);
    fd2.append('message',this.state.article.title);
    fd2.append('reply',reply);
    fd2.append('name',this.state.article.desc);
    const responseM= axios.post(`/api/send`,fd2);
    const fd = new FormData();
    fd.append('id',response0.data.id);
    fd.append('title',this.state.article.title);
    fd.append('author',this.state.article.author);
    fd.append('desc',this.state.article.desc);
    fd.append('fileName',response0.data.name);
    fd.append('size',response0.data.size);
    fd.append('label',this.state.article.categoryLable);
    const response=await axios.post(`/api/notes`,fd);
    console.log(response);
    const response2=await axios.post(`/api/sub`,{subject:this.state.article.subject,id:response.data._id});
    console.log(response2);
    const response3=await axios.post(`/api/sem`,{semester:this.state.article.semester,branch:this.state.article.department,id:response2.data._id}).then((res)=>{
      this.file = "";
      this.setState({
        article: {
          title: "",
          desc: "",
          createDate: this.currentDate,
          categoryLable: "",
          id: "",
          link: "",
          college: "",
          department: "",
          semester: "",
          subject: "",
          author: "",
        },
        error: "",
        opt: [],
        dept: ['CSE', 'CSD', 'CS+AI(IDD)', 'IT', 'MNC', 'EV', 'EC', 'CHE', 'PE'],
        sub: [],
        loaderDisplay: false,
      });
      Swal.fire({
        icon: 'success',
        // position: 'top',
        title: 'Thank You!',
        text: 'Your notes has been successfully uploaded 👍',
        showConfirmButton: false,
        timer: 1500
      })
      window.location.reload();
    })
    .catch((err) => console.log(err));

  });
  };



  // // This function checks validation of the article
  handleValidation() {
    return new Promise(async (resolve, reject) => {
      const {
        title,
        desc,
        semester,
        subject,
        department,
        link,
        author,
        categoryLable,
      } = this.state.article;
      console.log(this.file.name);
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
      } else if (author == "") {
        Swal.fire({
          icon: 'error',
          // position: 'top',
          title: 'Oops...',
          text: 'Email is not valid',
          showConfirmButton: false,
          timer: 1200
        })
      } else if (categoryLable == "") {
        Swal.fire({
          icon: 'error',
          // position: 'top',
          title: 'Oops...',
          text: 'Category is not valid',
          showConfirmButton: false,
          timer: 1200
        })
      }
      else if (department == "") {
        Swal.fire({
          icon: 'error',
          // position: 'top',
          title: 'Oops...',
          text: 'Department is not valid',
          showConfirmButton: false,
          timer: 1200
        })
      }
      else if (semester == "") {
        Swal.fire({
          icon: 'error',
          // position: 'top',
          title: 'Oops...',
          text: 'Semester is not valid',
          showConfirmButton: false,
          timer: 1200
        });
      } else if (subject == "") {
        Swal.fire({
          icon: 'error',
          // position: 'top',
          title: 'Oops...',
          text: 'Subject is not valid',
          showConfirmButton: false,
          timer: 1200
        });
      }
      else {
        if (this.file.name == undefined) {
          Swal.fire({
            icon: 'error',
            // position: 'top',
            title: 'Oops...',
            text: 'File uploading is mandatory!',
            showConfirmButton: false,
            timer: 1200
          })
        } else {
          this.setState({
            loaderDisplay: true,
          });
          this.uploadFile();
          
         
        }
      }
      
    });
    
  }


  //This function is used to add file to website
  addFile = (e) => {
    this.file = e.target.files[0];
    this.setState({});
  };

  // //This function is used to update Title
  onChangeArticleTitle = (value) => {
 
    this.setState({
      article: {
        ...this.state.article,
        title: value,
      },
    });
  };

  // //This function is used to update Description
  onChangeArticleDesc = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        desc: value,
      },
    });
  };

  // //This function is used to update Author
  onChangeArticleAuthor = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        author: value,
      },
    });
  };

  // //This function is used to update Id
  onChangeArticleId = (value) => {
    console.log(value);
    this.setState({
      article: {
        ...this.state.article,
        id: value,
      },
      
    },() => console.log(this.state.article));
  };


  // //This function is used to update Department
  onChangeDep = (value) => {
    if (value === "CS+AI(IDD)") {
      this.setState({
        opt: this.sem5,
      });
    } else {
      this.setState({
        opt: this.sem4,
      });
    }
    this.setState({
      article: {
        ...this.state.article,
        department: value,
        semester: "",
        subject:"",
      },
    });
    
  };

  // //This function is used to update Semester
  onChangeSem = (value) => {
    if (value == 1 && this.state.article.department == "CSE") {
      this.setState({
        sub: this.cse1,
      });
    } else if (value == 2 && this.state.article.department === "CSE") {
      this.setState({
        sub: this.cse2,
      });
    } else if (value == 3 && this.state.article.department === "CSE") {
      this.setState({
        sub: this.cse3,
      });
    } else if (value == 4 && this.state.article.department === "CSE") {
      this.setState({
        sub: this.cse4,
      });
    }
    else if (value == 5 && this.state.article.department === "CSE") {
      this.setState({
        sub: this.cse5,
      });
    }
    else if (value == 6 && this.state.article.department === "CSE") {
      this.setState({
        sub: this.cse6,
      });
    }
    else if (value == 7 && this.state.article.department === "CSE") {
      this.setState({
        sub: this.cse7,
      });
    }
    else if (value == 8 && this.state.article.department === "CSE") {
      this.setState({
        sub: this.cse8,
      });
    }
    else if (value == 1 && this.state.article.department == "CSD") {
      this.setState({
        sub: this.csd1,
      });
    } else if (value == 2 && this.state.article.department === "CSD") {
      this.setState({
        sub: this.csd2,
      });
    } else if (value == 3 && this.state.article.department === "CSD") {
      this.setState({
        sub: this.csd3,
      });
    } else if (value == 4 && this.state.article.department === "CSD") {
      this.setState({
        sub: this.csd4,
      });
    }
    else if (value == 5 && this.state.article.department === "CSD") {
      this.setState({
        sub: this.csd5,
      });
    }
    else if (value == 6 && this.state.article.department === "CSD") {
      this.setState({
        sub: this.csd6,
      });
    }
    else if (value == 7 && this.state.article.department === "CSD") {
      this.setState({
        sub: this.csd7,
      });
    }
    else if (value == 8 && this.state.article.department === "CSD") {
      this.setState({
        sub: this.csd8,
      });
    }
    else if (value == 1 && this.state.article.department == "IT") {
      this.setState({
        sub: this.it1,
      });
    } else if (value == 2 && this.state.article.department === "IT") {
      this.setState({
        sub: this.it2,
      });
    } else if (value == 3 && this.state.article.department === "IT") {
      this.setState({
        sub: this.it3,
      });
    } else if (value == 4 && this.state.article.department === "IT") {
      this.setState({
        sub: this.it4,
      });
    }
    else if (value == 5 && this.state.article.department === "IT") {
      this.setState({
        sub: this.it5,
      });
    }
    else if (value == 6 && this.state.article.department === "IT") {
      this.setState({
        sub: this.it6,
      });
    }
    else if (value == 7 && this.state.article.department === "IT") {
      this.setState({
        sub: this.it7,
      });
    }
    else if (value == 8 && this.state.article.department === "IT") {
      this.setState({
        sub: this.it8,
      });
    }
    else if (value == 1 && this.state.article.department == "MNC") {
      this.setState({
        sub: this.mc1,
      });
    } else if (value == 2 && this.state.article.department === "MNC") {
      this.setState({
        sub: this.mc2,
      });
    } else if (value == 3 && this.state.article.department === "MNC") {
      this.setState({
        sub: this.mc3,
      });
    } else if (value == 4 && this.state.article.department === "MNC") {
      this.setState({
        sub: this.mc4,
      });
    }
    else if (value == 5 && this.state.article.department === "MNC") {
      this.setState({
        sub: this.mc5,
      });
    }
    else if (value == 6 && this.state.article.department === "MNC") {
      this.setState({
        sub: this.mc6,
      });
    }
    else if (value == 7 && this.state.article.department === "MNC") {
      this.setState({
        sub: this.mc7,
      });
    }
    else if (value == 8 && this.state.article.department === "MNC") {
      this.setState({
        sub: this.mc8,
      });
    }
    else if (value == 1 && this.state.article.department == "PE") {
      this.setState({
        sub: this.pe1,
      });
    } else if (value == 2 && this.state.article.department === "PE") {
      this.setState({
        sub: this.pe2,
      });
    } else if (value == 3 && this.state.article.department === "PE") {
      this.setState({
        sub: this.pe3,
      });
    } else if (value == 4 && this.state.article.department === "PE") {
      this.setState({
        sub: this.pe4,
      });
    }
    else if (value == 5 && this.state.article.department === "PE") {
      this.setState({
        sub: this.pe5,
      });
    }
    else if (value == 6 && this.state.article.department === "PE") {
      this.setState({
        sub: this.pe6,
      });
    }
    else if (value == 7 && this.state.article.department === "PE") {
      this.setState({
        sub: this.pe7,
      });
    }
    else if (value == 8 && this.state.article.department === "PE") {
      this.setState({
        sub: this.pe8,
      });
    }
    else if (value == 1 && this.state.article.department == "EV") {
      this.setState({
        sub: this.ev1,
      });
    } else if (value == 2 && this.state.article.department === "EV") {
      this.setState({
        sub: this.ev2,
      });
    } else if (value == 3 && this.state.article.department === "EV") {
      this.setState({
        sub: this.ev3,
      });
    } else if (value == 4 && this.state.article.department === "EV") {
      this.setState({
        sub: this.ev4,
      });
    }
    else if (value == 5 && this.state.article.department === "EV") {
      this.setState({
        sub: this.ev5,
      });
    }
    else if (value == 6 && this.state.article.department === "EV") {
      this.setState({
        sub: this.ev6,
      });
    }
    else if (value == 7 && this.state.article.department === "EV") {
      this.setState({
        sub: this.ev7,
      });
    }
    else if (value == 8 && this.state.article.department === "EV") {
      this.setState({
        sub: this.ev8,
      });
    }
    else if (value == 1 && this.state.article.department == "EC") {
      this.setState({
        sub: this.ec1,
      });
    } else if (value == 2 && this.state.article.department === "EC") {
      this.setState({
        sub: this.ec2,
      });
    } else if (value == 3 && this.state.article.department === "EC") {
      this.setState({
        sub: this.ec3,
      });
    } else if (value == 4 && this.state.article.department === "EC") {
      this.setState({
        sub: this.ec4,
      });
    }
    else if (value == 5 && this.state.article.department === "EC") {
      this.setState({
        sub: this.ec5,
      });
    }
    else if (value == 6 && this.state.article.department === "EC") {
      this.setState({
        sub: this.ec6,
      });
    }
    else if (value == 7 && this.state.article.department === "EC") {
      this.setState({
        sub: this.ec7,
      });
    }
    else if (value == 8 && this.state.article.department === "EC") {
      this.setState({
        sub: this.ec8,
      });
    }
    else if (value == 1 && this.state.article.department == "CHE") {
      this.setState({
        sub: this.che1,
      });
    } else if (value == 2 && this.state.article.department === "CHE") {
      this.setState({
        sub: this.che2,
      });
    } else if (value == 3 && this.state.article.department === "CHE") {
      this.setState({
        sub: this.che3,
      });
    } else if (value == 4 && this.state.article.department === "CHE") {
      this.setState({
        sub: this.che4,
      });
    }
    else if (value == 5 && this.state.article.department === "CHE") {
      this.setState({
        sub: this.che5,
      });
    }
    else if (value == 6 && this.state.article.department === "CHE") {
      this.setState({
        sub: this.che6,
      });
    }
    else if (value == 7 && this.state.article.department === "CHE") {
      this.setState({
        sub: this.che7,
      });
    }
    else if (value == 8 && this.state.article.department === "CHE") {
      this.setState({
        sub: this.che8,
      });
    }
    else if (value == 1 && this.state.article.department == "CS+AI(IDD)") {
      this.setState({
        sub: this.idd1,
      });
    } else if (value == 2 && this.state.article.department === "CS+AI(IDD)") {
      this.setState({
        sub: this.idd2,
      });
    } else if (value == 3 && this.state.article.department === "CS+AI(IDD)") {
      this.setState({
        sub: this.idd3,
      });
    } else if (value == 4 && this.state.article.department === "CS+AI(IDD)") {
      this.setState({
        sub: this.idd4,
      });
    }
    else if (value == 5 && this.state.article.department === "CS+AI(IDD)") {
      this.setState({
        sub: this.idd5,
      });
    }
    else if (value == 6 && this.state.article.department === "CS+AI(IDD)") {
      this.setState({
        sub: this.idd6,
      });
    }
    else if (value == 7 && this.state.article.department === "CS+AI(IDD)") {
      this.setState({
        sub: this.idd7,
      });
    }
    else if (value == 8 && this.state.article.department === "CS+AI(IDD)") {
      this.setState({
        sub: this.idd8,
      });
    }
    else if (value == 9 && this.state.article.department === "CS+AI(IDD)") {
      this.setState({
        sub: this.idd9,
      });
    }
    else if (value == 10 && this.state.article.department === "CS+AI(IDD)") {
      this.setState({
        sub: this.idd10,
      });
    }
    else {
      this.setState({
        sub: this.csd2,
      });
    }

    this.setState({
      article: {
        ...this.state.article,
        semester: value,
      },
    });
  };

  // //This function is used to update Subject
  onChangeSub = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        subject: value,
      },
    });
    
  };

  onChangeArticlecategory = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        categoryLable: value,
      },
    });
  };

  render() {
    return (
      <BasicPadding>
      {this.state.loaderDisplay ? (
        <GeneralModal>
          <BookLoader
        background={"linear-gradient(90deg, rgb(80, 203, 177) 0%, rgb(12, 100, 158) 100%)"}
        desktopSize={"100px"}
        mobileSize={"80px"}
        text={"Uploading ..."}
        textColor={"rgb(14, 146, 163)"}
          />
          </GeneralModal>
     
      ) : (
        <div></div>
      )}
      {this.state.error !== "" ? (
        <span style={{ color: "red" }}>{this.state.error}</span>
      ) : (
        ""
      )}
        <h1 className={classes.notes}>Add Notes</h1>
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
              title="Contributor's Name"
            />
            <Textfield
              value={this.state.article.author}
              onChange={(e) => this.onChangeArticleAuthor(e.target.value)}
              title="Institute Email Id"
            />

            <label className={classes.label}>Category</label>

            <select
              className={classes.select}
              onChange={(e) => this.onChangeArticlecategory(e.target.value)}
              value={this.state.article.categoryLable}
            >
              <option value="" name="education" selected>
                Select
              </option>
              <option name="education">Assignment</option>
              <option name="education">Classnotes</option>
              <option name="education">PPT</option>
              <option name="education">Question Paper</option>
            </select>

            <label className={classes.label}>Branch</label>
            <select
              value={this.state.article.department}
              className={classes.select}
              onChange={(e) => this.onChangeDep(e.target.value)}
            >
              <option value="" disabled selected>
                Select
              </option>
              {this.state.dept.map((e) => {
                return <option name={e}>{e}</option>;
              })}
            </select>
            <label className={classes.label}>Semester</label>
            <select
              value={this.state.article.semester}
              className={classes.select}
              onChange={(e) => this.onChangeSem(e.target.value)}
            >
              <option value="" disabled selected>
                Select
              </option>
              {this.state.opt.map((e) => {
                return <option name={e}>{e}</option>;
              })}
            </select>

            <label className={classes.label}>Subject</label>
            <select
              value={this.state.article.subject}
              className={classes.select}
              onChange={(e) => this.onChangeSub(e.target.value)}
            >
              <option value="" disabled selected>
                Select
              </option>
              {this.state.sub.map((e) => {
                return <option name={e}>{e}</option>;
              })}
            </select>
            <button
              onClick={(e) => this.handleValidation(e)}
              className={classes.cardbutton}
            >
              Submit
            </button>
          </div>

          <div className={classes.drag_area}>
            <div className={classes.icon}>
              <i class="fas fa-cloud-upload-alt"></i>
            </div>
            <header>Select pdf or doc file</header>

            <label for="fileImage" className={classes.btn}>
              Choose notes
            </label>

            <input
              className={classes.filechossen}
              id="fileImage"
              type="file"
              onChange={(e) => {
                this.addFile(e);
              }}
            ></input>
            <div>{this.file.name}</div>
          </div>
        </div>
        <div className={classes.note}>
          <div>
            *Notes will be uploaded once it is verified. Thank you for your patience! :)
          </div>
        </div>
      </BasicPadding>
      
    );
    
  }
  
}

export default AddNotes;
