let students = [
    {
        name: "Zak Wegweiser",
        bio: "I am a senior studying computer science. I have one win in Fall Guy so far.",
        image: "zak.jpg",
        timezone: 0
    },
    {
        name: "Shira Abramovich",
        bio: "I'm a senior concentrating in CS and Comp Lit. Love translation, poetry, and responsible computing, also coffee!",
        image: "Shira-Abramovich.jpg",
        timezone: 0
    },
    {
        name: "Nathan Allen",
        bio: "hopes this can be changed later if it's important.",
        image: "wowihavenogoodpicturesofme.png",
        timezone: 0
    },
    {
        name: "Taylor Auten",
        bio: "Hi! my name is Taylor, and I am a fifth year CS Master's student. I am holed up in Providence and spending my time cooking, coding, and getting rejected by potential employers.",
        image: "me.jpeg",
        timezone: 0
    },
    {
        name: 'Xinzhe Chai',
        bio: "Hi! I'm a sophomore and I am friends with Jinoo, and ThinkPad is better than Mac!",
        image: 'profile.jpg',
        timezone: 0
    },
    {
        name : "Michael Cosgrove",
        bio : "I am a Senior studying Computer Science. I am primarily interested in graphics, machine learning, and systems.",
        image : "me2.jpg",
        timezone : 0
    },
    {
        name: 'Ben Givertz',
        bio: "I'm a junior from Boston, MA concentrating in CS! I am a big outdoors person and love to visit national parks. I am also into cooking and anything food related.",
        image: 'ben.png',
        timezone: 0
    },
    {
        name: "Jinoo Hong",
        bio: "Hi! I'm a sophomore and I am friends with Kira, and water is scared of me",
        image: "myBioPhoto.jpg",
        timezone: 8   
    },
    {
        name: "Jordan Idehen",
        bio: "Hi, my name is Jordan and I am a junior studying Computer Science.",
        image: "jordan.jpg",
        timezone: 0
    },
    {
        name: "Tasha J. Kim",
        bio: "Hi there, my name is Tasha. I was born in South Korea, and lived in New Zealand, China, and the US. I enjoy martial arts, tricking, and boxing. Can't wait to meet everyone at CS1951V.",
        image: "bio_image.jpg",
        timezone: 13,
    },
    {
        name: "Andrew Liu",
        bio: `Hi! I'm a senior concentrating in CS, originally from Ann Arbor, Michigan.
        In my free time I really love to play chess, exercise, and try out new types of instant coffee. 
        Excited to meet everybody!`,
        image: "AndrewLiuBio.jpg",
        timezone: 0
    },
    {
        name: "Luna McNulty",
        bio: "Fifth-year Master's student. Interested in Human-Computer Interaction and Digital Humanities. Pronouns: She/her",
        timezone: 0,
        image: "moon.png"
    },
    { 
        name: "Ambika Miglani", 
        bio: "CS and MCM concentrator who loves music, food, and art!", 
        image: "profile2.jpg", 
        timezone: 0 
    },
    {
        name: "Jacob Migneault",
        bio: "Senior from RI studying CS. Especially interested in systems engineering and interactive media!",
        image: "photo.jpg",
        timezone: 0
    },
    {
        name: "Mina Rhee",
        bio: "Senior, Computer Science/Modern Culture and Media",
        image: "IMG_2275.jpg",
        timezone: 0
    },
    {
        name: "Mia",
        bio: "I'm Mia, a senior from Long Island.",
        image: "mia_bio_pic.jpeg",
        timezone: 0
    },
    {
        name: "Kuba Tarlowski",
        bio: "A normal human person from Long Island and not three raccoons in a trench coat. I enjoy sifting through garbage bins for hidden treasures",
        image: "profile_pic.jpg",
        timezone: 0
    },
    {
        name: "Kira K. Clarke",
        bio: "Hi! I'm a sophomore & I'm friends with Chai. Looking forward to studying this year from Canada, but I miss Brown so much.",
        image: "bear-in-megaphone.jpg",
        timezone: 0
    },
    {
        name: "Joanne Han",
        bio: "I am a fourth-year Brown-RISD dual degree student studying CS and Illustration.",
        image: "joanne_cs1951v.jpg",
        timezone: 0
    },
    {
        name: "Hakan Samli",
        bio: "CS Master Student",
        image: "hakan.jpg",
        timezone: 0,
    },
    {
        name: 'Deniz',
        bio: 'hashmaps and bananas',
        image: "IMG_7276.jpg",
        timezone: 0
    },
    {
        name:'Geireann',
        bio:'First friend was a chicken',
        timezone: 12,
        image: 'geireann.jpg'
    },
    {
        name: "Matt Warren Bruinooge",
        bio: "at large",
        image: "img.png",
        timezone: 0,
    }
]

students.sort((a, b) => {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})

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
