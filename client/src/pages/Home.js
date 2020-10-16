import React from "react";
import { Container } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import StyledButton from "../constant/StyledButton";
import ReactDOM from 'react-dom';
import GitHubLogin from 'react-github-login';
import Cards from "./Cards.js";

const Home = () => {
	const graduates=
	 [
	 	{ firstName:"Farhana",surname:"Khan",personalBio:"Some Personal info",skills:"JavaScript, HTML,CSS",pastExperience:"Diverse expereince",employmentStatus:"Looking for a job",organization:"" }
	 	,{ firstName:"Fatima",surname:"Khan",personalBio:"A little about me",skills:"HTML,CSS,Wordpress","pastExperience":"content creator",employmentStatus:"Employed",organization:"CYF" }
	 	,{ firstName:"Buchra",surname:"Atkeh",personalBio:"Something about me",skills:"Full stack developer","pastExperience":"Loads",employmentStatus:"Looking for a job",organization:""  },
	    { firstName:"Orhan",surname:"",personalBio:"Personal info here",skills:"HTML,CSS,JavaScript, React","pastExperience":"Loads",employmentStatus:"Looking for a job" }
		   ,{ firstName:"Humail",surname:"Khan",personalBio:"About me",skills:"HTML,CSS","pastExperience":"diverse",employmentStatus:"Employed",organization:"CYF" } ];
		   
		//    const redirectToGitHubLogin = () =>{
		// 	const proxy = "https://cors-anywhere.herokuapp.com/"   
		// 	const url = "https://graduate-dev-mode.herokuapp.com/api/login";
		// 	fetch(proxy + url)
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		console.log(data);                     
		// 	})
		// 	.catch((error)=>{ 
				
		// 		console.log(error);
		
		// 	})
		//    }	 
		const onSuccess = response => console.log(response);
        const onFailure = response => console.error(response);  
	 return (
		<Container>
		
        <GitHubLogin clientId= "a0efdcbd5af78bcc2e76"
         onSuccess={onSuccess}
         onFailure={onFailure}
		 redirectUri={'https://graduate-dev-mode.herokuapp.com/api/callback'}	 
		 />

		 

		{graduates.map( (graduate)=>(
		<Cards graduate = {graduate}/ >))}
		
           
		</Container>
	);
};


export default Home;



