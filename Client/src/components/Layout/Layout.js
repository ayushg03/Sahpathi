import React, { Component } from "react";
import  "./LayoutStyle.css";
import Aux from "../../imp/aaux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Modal from "../UserInterface/Modal/Modal";
import Checkbox from "../UserInterface/Checkbox/Checkbox";
import MainBuild from "../../MainBuild/MainBuild";
import Swal from 'sweetalert2'
import Hero from "../Hero";

// Main layout for the whole website

var dept = [
  {
    title: "CSE",
    name: "department",
    value: "cse",
    id: "d1",
  }, {
    title: "CSD",
    value: "csd",
    name: "department",
    id: "d2"
  },
  {
    title: "CS+AI(IDD)",
    value: "cs+ai(idd)",
    name: "department",
    id: "d3"
  },
  {
    title: "IT",
    value: "it",
    name: "department",
    id: "d4"
  },
  {
    title: "MnC",
    value: "mnc",
    name: "department",
    id: "d5"
  },
  {
    title: "EC",
    value: "ec",
    name: "department",
    id: "d6"
  },
  {
    title: "EV",
    value: "ev",
    name: "department",
    id: "d7"
  },
  {
    title: "PE",
    value: "pe",
    name: "department",
    id: "d8"
  },
  {
    title: "ChE",
    value: "che",
    name: "department",
    id: "d9"
  }
]
var sem5=[
  {
    title: "1",
    name: "semester",
    value: "1",
    id: "s1",
  },
  {
    title: "2",
    name: "semester",
    value: "2",
    id: "s2",
  },
  {
    title: "3",
    name: "semester",
    value: "3",
    id: "s3",
  },
  {
    title: "4",
    name: "semester",
    value: "4",
    id: "s4",
  },
  {
    title: "5",
    name: "semester",
    value: "5",
    id: "s5",
  },
  {
    title: "6",
    name: "semester",
    value: "6",
    id: "s6",
  },
  {
    title: "7",
    name: "semester",
    value: "7",
    id: "s7",
  },
  {
    title: "8",
    name: "semester",
    value: "8",
    id: "s8",
  },
  {
    title: "9",
    name: "semester",
    value: "9",
    id: "s9",
  },
  {
    title: "10",
    name: "semester",
    value: "10",
    id: "s10",
  },
 
]

var sem = [
  {
    title: "1",
    name: "semester",
    value: "1",
    id: "s1",
  },
  {
    title: "2",
    name: "semester",
    value: "2",
    id: "s2",
  },
  {
    title: "3",
    name: "semester",
    value: "3",
    id: "s3",
  },
  {
    title: "4",
    name: "semester",
    value: "4",
    id: "s4",
  },
  {
    title: "5",
    name: "semester",
    value: "5",
    id: "s5",
  },
  {
    title: "6",
    name: "semester",
    value: "6",
    id: "s6",
  },
  {
    title: "7",
    name: "semester",
    value: "7",
    id: "s7",
  },
  {
    title: "8",
    name: "semester",
    value: "8",
    id: "s8",
  },
]

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      department: "x",
      semester: "y",
      dept: [],
      semt: [], 
      deptName: "",
      semName: "",
    };
  }

  // shows path select screen
 showModal = () => {
    this.setState({
      semName: "",
      deptName: ""
    });
    console.log("Heloo");
    this.setState({ show: true });
  };

  // Hide path select screen
  hideModal = () => {
  
      this.setState({
        show: false,
        semName: "",
        deptName: ""
      });
  };

  // Store the data in browser (Local Storage)
  handleFormSubmit = () => {
    if (document.querySelector('input[name="department"]:checked') &&
      document.querySelector('input[name="semester"]:checked')) {
      console.log(true)
      const {  deptName, semName } = this.state;
      localStorage.setItem("department", deptName ? deptName : "");
      localStorage.setItem("semester", semName ? semName : "");
      const branch=this.state.deptName;
      const sem=this.state.semName
      this.setState({ show: false });
      this.setState({
        semester: this.state.semName,
        department: this.state.deptName
      })
      window.location = "/exams/"+branch+"/"+sem;
    }
    else {
      console.log(false)
      Swal.fire({
        icon: 'error',
        // position: 'top',
        title: 'Oops...',
        text: 'Please select all the field!',
        showConfirmButton: false,
        timer: 1200
      })
    }
  };

  //for mountaing the selected data with variables
  componentDidMount() {
    const deptName = localStorage.getItem("department");
    const semName = localStorage.getItem("semester");
    const department = deptName
    const semester = semName
    this.setState({  department, semester,  deptName, semName });
  }



  updateSem = (event) => {
    if (event === "cse" || event === "ec" || event === "it" || event === "csd" || event === "ev" || event === "pe" || event === "che"|| event === "mnc")
      this.setState({
        semt: sem
      })
    else
      this.setState({
        semt:sem5
      })
  }
  //for updating department value if user change it
  OnchangeValueDepartment = (event) => {
    this.setState({
      deptName: event,
    });
    this.updateSem(event)
  };

  //for updating semester value if user change it
  OnchangeValueSemester = (event) => {
    this.setState({
      semName: event,
    });
  };

  // For render the UI
  render() {
    return (
      <Aux>
        {/* navigation Bar on top of the screen which is fixed */}
        <Navbar
          onclick={() => this.showModal()}
        />
        {/* Main content under the Navbar */}
        <main className="Content">
          <MainBuild 
          onclick={() => this.showModal()}
          department={this.state.department}
          semester={this.state.semester}
          />
        </main>{" "}
        {/* <Footer/> */}
        {/* This modal display the layout to choose path(Department & Semester etc.) */}
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="outerdiv">
            {/* Department selection */}
            <legend className="lable">Branch</legend>
            <div className="Selection">
              {
                dept.map(e =>
                  <Checkbox
                    title={e.title}
                    value={e.value}
                    name={e.name}
                    checked={this.state.deptName}
                    id={e.id}
                    OnchageValue={(e) => this.OnchangeValueDepartment(e.target.value)}
                  />
                  ) 
              }
             
            </div>
            {/* Semester selection */}
            {this.state.semt[0] == null ? <div /> : <legend className="lable">Semester</legend>}
            <div className="Selection">
              {
                this.state.semt ? this.state.semt.map(e =>
                  <Checkbox
                    title={e.title}
                    name={e.name}
                    value={e.value}
                    checked={this.state.semName}
                    id={e.id}
                    OnchageValue={(e) =>
                      this.OnchangeValueSemester(e.target.value)
                    }
                  />) : <div />
              }
            
            </div>
            {/* Submit button */}
            <button
              className="buttonStyle"
              type="button"
              onClick={this.handleFormSubmit}
            >
              Submit
            </button>
          </div>
        </Modal>
      </Aux>
    );
  }
}

export default Layout;
