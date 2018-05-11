;(function(){
    'use strict';

    var btGithub = document.querySelector('#bt-github');

    btGithub.addEventListener('click', function(event){
        self.fetch('https://api.github.com/users')
            .then(function(response){
                return response.json();
            }).then(function(users){
                console.log('GitHub users', users);
            });
    });
})();