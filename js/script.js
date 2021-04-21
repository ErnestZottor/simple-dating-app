var users = [
    {
        name: 'Lucy',
        gender: 'F',
        age: '18',
        hobby: 'pets',
        avatar: 'avatar1.png'        
    },
    {
        name: 'Betty',
        gender: 'F',
        age: '25',
        hobby: 'pets',
        avatar: 'avatar2.png'
    },
    {
        name: 'Ronald',
        gender: 'M',
        age: '27',
        hobby: 'music',
        avatar: 'avatar3.png'
    },
    {
        name: 'Christopher',
        gender: 'M',
        age: '19',
        hobby: 'sports',
        avatar: 'avatar4.png'
    },
    {
        name: 'Ximena',
        gender: 'F',
        age:'21',
        hobby: 'reading',
        avatar: 'avatar5.png'
    },
    {
        name: 'Paul',
        gender: 'M',
        age: '22',
        hobby: 'shopping',
        avatar: 'avatar6.png'
    },
    {
        name: 'Charlie',
        gender: 'M',
        age: '30',
        hobby: 'pets',
        avatar: 'avatar7.png'
    },
];

window.addEventListener('load', function() {
    
    var results = document.getElementById('results');
    
    function search() {
        
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        
        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        
        var minAgeField = document.getElementById('minAge');
       var minAge = minAgeField.value;
        
        var maxAgeField = document.getElementById('maxAge');
        var maxAge = maxAgeField.value;

        var resultsHtml = '';
        var usersLength = users.length;
        
        for(var i = 0; i < usersLength; i++) {
            //check gender
            //console.log(users[i].age)
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    //check between minimum age and maximum age  
                    if ((minAge == '' || (users[i].age >= minAge &&users[i].age<=maxAge))) {
                        resultsHtml += '<div class="person-row">\
                           <img src="images/' + users[i].avatar + '" />\
                           <div class="person-info">\
                           <div>' +'Name: ' +users[i].name + '</div>\
                           <div>' +'Age: ' + users[i].age + '</div>\
                           <div>' +'Hobby: ' + users[i].hobby + '</div></div>\
                            <button>Add as friend</button></div>';  
                }
            }
        }
    }
        results.innerHTML = resultsHtml;
    }
    
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);
});