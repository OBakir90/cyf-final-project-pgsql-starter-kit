import React, {useState, useContext, useEffect } from "react";
import OverviewProfileCard from '../components/OverviewProfileCard';
import ViewProfileDetail from '../components/ViewProfileDetail';
import { ProfileContext } from '../context/ProfileContext';
import Header from '../components/Header';
import styled from 'styled-components';
import GitHubLogin from 'react-github-login';

const Home = () => {
	const { getAllProfiles, getProfile, clearProfile, allProfiles, profile, isLoading, error }= useContext(ProfileContext);
	// const [userName, setUserName] = useState('');
	// const onSuccess = response => console.log(response.code,'----> something');
	const onSuccess = (response) =>{
		const accessCode = response.code;

	  fetch(`https://oauth-frontend-cyf.herokuapp.com/api/callback?code=${accessCode}`)
      .then(res => res.json())
      .then(data => {
	//    setUserName(data);
	  console.log(data);
	   })
	// console.log(userName);	

}
    const onFailure = response => console.error(response);  

	useEffect(getAllProfiles, []);

	return (
		<Screen>
			<Header />
			<GitHubLogin clientId= "e166cb1f254d73d2fac6" //this needs to change according to heroku app configs
			onSuccess={onSuccess}
			onFailure={onFailure}
			redirectUri={'https://oauth-frontend-cyf.herokuapp.com/createprofile'}	 //this needs to be changed according to heroku app configs
			/>
			
			<Container>
				{console.log('isLoading', isLoading)}
				{isLoading ? <Text>Loading...</Text>
					: allProfiles && allProfiles.map(( profile, i ) => {
						return <OverviewProfileCard profile={ profile } getProfile={getProfile} key={ i } />;
					})}
				{error && <Text>{error}</Text>}
				{profile&&<ViewProfileDetail clearProfile={clearProfile} profile={profile} />}
			</Container>
		</Screen>

	)}

export default Home;

const Screen =styled.div`

`;

const Container = styled.div`
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
`;

const Text = styled.p`
	fontSize:20;
`;

