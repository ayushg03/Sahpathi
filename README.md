# <div align="center">Sahpathi: The Socio-Academic Portal of RGIPT</div>

![Sahpathi Logo](https://drive.google.com/uc?export=view&id=1CfuZjhKTijTvukPivq_xM0Eoh6HXAkTG)

Welcome to Sahpathi, the Socio-Academic Portal of Rajiv Gandhi Institute of Petroleum Technology (RGIPT), Jais. This platform is designed to seamlessly integrate academic resources and social interactions for the RGIPT community.

## Features

- **Examspace:**
  - Access to a vast collection of books.
  - Previous year question papers for exam preparation.
  - Comprehensive notes to aid in studies.
  - Projects section for academic collaboration.

- **Socialspace:**
  - Stay updated on upcoming events within the campus.
  - Explore information about various societies and clubs in the college.

- **Contribute:**
  - Contribute to the community by uploading and sharing notes.
  - Foster a collaborative learning environment.

## Technologies Used

- **Frontend:**
  - React.js is utilized for the client-side development.

- **Backend:**
  - Node.js and Express power the backend services.

- **Database:**
  - MongoDB is used as the database to store and retrieve information efficiently.

- **File Storage:**
  - Google Drive API is integrated for storing large files like notes and exam materials.

- **Hosting:**
  - The portal is hosted on an AWS EC2 instance, accessible via [sahpathi.co.in](http://sahpathi.co.in).

- **CI/CD Pipeline:**
  - A Continuous Integration/Continuous Deployment (CI/CD) pipeline is implemented using `.github/workflows` for automated testing and deployment.


## Installation Guide

1. Clone the repository:
   ```bash
   git clone https://github.com/ayushg03/Sahpathi.git

2. Navigate to the Client folder:
   ```bash
   cd Sahpathi/Client

3. Install frontend dependencies:
   ```bash
   npm install

4. Run the Frontend i.e. Client:
   ```bash
   npm start

5. Navigate to the Server folder:
   ```bash
   cd ../Server

6. Install Backend dependencies:
   ```bash
   npm install

7. Write .env file in Server directory & replace all secrets.

8. Write a Credentials.json file in routes folder with all google drive api secrets.

9. Run the Backend i.e. Server:
   ```bash
   node server.js

10. Voila! Frontend running on 3000 and backend on 5000 :)


## Feedback and Issues    

If you have any feedback, suggestions, or encounter issues, please feel free to open an issue or reach out to us at sahpathi03@gmail.com.

Let's make Sahpathi the go-to platform for the RGIPT community! Happy coding! 🚀

 
   
