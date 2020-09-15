const students = [
    {
        name: "Zak Wegweiser",
        bio: "I am a senior studying computer science. I have one win in Fall Guy so far.",
        image: "zak.jpg",
        timezone: 0
    }
]

students.forEach(student => {
    let studentBlock = document.createElement('div');
    studentBlock.classList.add("ta-block");
    studentBlock.innerHTML += `<img src="assets/images/students/${student.image}"/>`

    let studentInfo = document.createElement('div');
    studentInfo.classList.add("ta-info");

    let name = document.createElement('div');
    name.classList.add("name");

    let timezoneString = ''
    if (student.timezone === 0) {
        timezoneString = 'On Providence Time'
    } else if (student.timezone < 0) {
        timezoneString = `${student.timezone * -1} Hours Behind Providence`
    } else {
        timezoneString = `${student.timezone} Hours Ahead of Providence`
    }
    name.innerHTML = `${student.name}, ${timezoneString}`

    let desc = document.createElement('div');
    desc.classList.add("desc");
    desc.innerHTML = `${student.bio}`

    studentInfo.appendChild(name)
    studentInfo.appendChild(desc)

    studentBlock.appendChild(studentInfo)

    document.getElementById("student-container").appendChild(studentBlock);

})
