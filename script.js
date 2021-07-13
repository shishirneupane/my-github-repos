fetch('https://api.github.com/users/shishirneupane')
.then((res) => res.json())
.then((data) => {
	console.log(data)
	document.getElementById('profileImage').src = data['avatar_url']
	document.getElementById('fullName').textContent = data['name']
	document.getElementById('bio').textContent = data['bio']
	document.getElementById('followersInfo').textContent = 'GitHub followers - ' + data['followers']
	document.getElementById('followingInfo').textContent = 'GitHub following - ' + data['following']
	document.getElementById('reposInfo').textContent = 'GitHub public repositories - ' + data['public_repos']
	document.getElementById('githubLink').href = data['html_url']
	document.getElementById('linkedinLink').href = data['blog']
	document.getElementById('mainContainer').hidden = false
	document.getElementById('loading').hidden = true
})
.catch((err) => console.log(err));


fetch('https://api.github.com/users/shishirneupane/repos')
.then(res => res.json())
.then((reposData) => {
	console.log(reposData)
	let output = '<h2>My Projects</h2>'
	document.getElementById('output').innerHTML = output;
	for (var i=0; i < reposData.length; i++) {
		document.getElementById('output').innerHTML += 
		"<a href=" + reposData[i].html_url + " id='singleRepo' target='_blank'/>" + reposData[i].name + "<br/><br/>";
	}
})
.catch((err) => console.log(err));