console.log('Name: ' + 'Rakesha McIntyre'.toUpperCase());

console.log('Career: Front End Developer');

console.log('Description: I am a wife and mother to a 9 year old little boy. I have always wondering how computer softwares worked in the background, which sparked my interest in learning how to code.');

console.log('\n');

console.log('My Interests:');

console.log('* Watching Game of Thrones');

console.log('* Coding');

console.log('* Traveling');

console.log('* Going to the Movies');

console.log('\n');

console.log('My Previous Experience:');

function displayPosition (companyName, jobTitle, description) {
    console.log(companyName + jobTitle + description);
}

displayPosition('AIG - ', 'Customer Rep - ',  'Processed Life Insurance policy payments. Processed Automatic Bank Drafts.');

console.log('\n');

console.log('My Skills:');

let mySkills = [{skill: 'HTML', cool: true}, {skill: 'CSS', cool: true}, {skill: 'Writing', cool: false}, {skill: 'Jamming on the One', cool: true}, {skill: 'Selfie Taker', cool: false}];

function displaySkill(skill, cool) {
    if (cool === true) {
        console.log("* BAM: " + skill);
    } else {
        console.log("* " + skill);
    }
};

function logSkills() {
    for (s = 0; s < mySkills.length; s++) {
        displaySkill(mySkills[s].skill, mySkills[s].cool);
    }
};

logSkills();
