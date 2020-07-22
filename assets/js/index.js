const weeks = [
    {
      "week": 1,
      "date": "9-10-2020",
      "topics": [
          "Overview",
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
        document.getElementById("week-list").appendChild(weekListItem);

})


// 	<div class="list-group-item list-group-item-action flex-column align-items-start">
	// 		<div class="d-flex w-100 justify-content-between">
	// 			
	// 		</div>
	// 			<p class="mb-1">
	// 				1.Overview<br>
	// 				2.Syllabus<br>
	// 				3.Assignments<br>
	// 				4.Terminology<br>
	// 				5.Pre-Computer  (Analog) Hypertext/Information Management
	// 			</p>
	// 	</div>