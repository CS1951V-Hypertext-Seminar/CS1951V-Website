const readings = [
  {
    'title': 'As We May Think',
    'week': 1,
    'link': 'https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/',
    'theme': ''
  }
]

const week_to_readings = {}
readings.forEach(val => {
  if (val.week in week_to_readings) {
    week_to_readings[val.week].push(val)
  } else {
    week_to_readings[val.week] = [val]
  }
})

const weeks = [
	 {
            "week": "1",
            "date": "9/9/20",
            "topics": "Who Are We?\r\nLearning Objectives\r\nSeminar Mechanics\r\nAssignments & Grading\r\nWhy Are We Teaching This Seminar\r\nOrigins of Data and Information Processing\r\nWhat is Hypertext/Hypermedia?"
        },
        {
            "week": "2",
            "date": "9/18/20",
            "topics": "Hypertext Forerunners\r\nWhat Sparked Digital Hypertext?\r\nFrom Number Crunching to Text Processing\r\nHypertext Terminology\r\nDigital Hypertext Pioneers"
        },
    {
      "week": 1,
      "date": "9-10-2020",
      "topics": [
          "Introduction",
          "Syllabus", 
          "Assignments",
          "Terminology",
          "Pre-Computer"
      ]
    },
    {
      "week": 2,
      "date": "9-17-2020",
      "topics": [
          "Bridging Between Analog and Digital",
          "Dimensions  of Hypertext Systems", 
          "The beginnings of computer-based hypertext – the 1960s and 1970s"
      ]
    },
      {
        "week": 3,
        "date": "9-17-2020",
        "topics": ["Basic  Hypertext Features", "1980s and  Early 1990s (with Demos)"]
      },
      {
        "week": 4,
        "date": "9-17-2020",
        "topics": ["1980s and  Early 1990s (with Demos) - Part II", "The Internet Years"]
      },
      {
        "week": 5,
        "date": "9-17-2020",
        "topics": ["Advanced Hypertext Features"]
      },
      {
        "week": 6,
        "date": "9-17-2020",
        "topics": ["Advanced  Hypertext Features (cont.)"]
      },
      {
        "week": 7,
        "date": "9-17-2020",
        "topics": ["Markup,  Design Patterns, Structure, and Semantics", "Digital  Libraries"]
      },
      {
        "week": 8,
        "date": "9-17-2020",
        "topics": ["Architecture  of Hypertext Systems"]
      },
      {
        "week": 9,
        "date": "9-17-2020",
        "topics": ["21st  Century Systems – Demos and hands-on"]
      },
      {
        "week": 10,
        "date": "9-17-2020",
        "topics": ["Applications of Hypertext"]
      },
      {
        "week": 11,
        "date": "9-17-2020",
        "topics": [ "Where We  Are Now?", "Enduring  Categories in Hypertext Research and Development"]
      },
      {
        "week": 12,
        "date": "9-17-2020",
        "topics": ["Societal  Implications"]
      },
      {
        "week": 13,
        "date": "9-17-2020",
        "topics": ["Final  Project Presentations"]
      }
  ]

  // week is a number
  function getReadings(week) {
    let readingWrapper = document.createElement('div');
    readingWrapper.classList.add("mb-1")

    if (week_to_readings[week])
     readingWrapper.innerHTML += `<br><h5 class="mb-1"> Readings </h5>`

    week_to_readings[week]?.map(reading => {
      readingWrapper.innerHTML += `<a href=${reading.link} target="_blank"> ${reading.title} </a><br>`
    })

    return readingWrapper
  }
	
weeks.forEach(week => {
        let weekListItem = document.createElement('div');
        weekListItem.classList.add("list-group-item", "list-group-item-action", "flex-column", "align-items-start");

        // Title
        let title = `Week ${week.week}`;
        let titleElem = document.createElement('div');
        titleElem.classList.add("d-flex", "w-100", "justify-content-between");
        titleElem.innerHTML = `<h4 class="mb-1"> ${title} </h4>`

         // Topics
         let topics = ``
         week.topics.forEach(topic => topics += `${topic} <br>`)
         console.log(topics)
        //  let topics = document.createElement('div');;
         let topicsElem = document.createElement('p');
          topicsElem.classList.add("mb-1")
         topicsElem.innerHTML = topics

         
        //  topicsElem.classList.add("d-flex", "w-100", "justify-content-between");
        //  topicsElem.innerHTML = `<h4 class="mb-1"> ${title} </h4>`
        
        
         weekListItem.appendChild(titleElem)
         weekListItem.appendChild(topicsElem)
         const readings = getReadings(week.week)
         console.log(readings)
         weekListItem.appendChild(readings)

        document.getElementById("week-list").appendChild(weekListItem);

})
