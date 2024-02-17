const projects = [
    {
        id: 1,
        projectName: "Weather App Team Project",
        thumbnailSource: require('@/assets/thumbnails/Final-Project-Weather-App.png'),
        description: 'Final project for Team 17 at Momentum Learning. My team and I wanted to work on something fun and that would help younger users get into Meteorology more.',
        youtubeVideoId: "V4lDmFBwCgU",
        githubRepo: "Final-Project-Weather-App",
        projectOverview: `
        Our final project for Momentum was the creation of an innovative animal collection weather app, named 'Is It Raining?' 

        The project was a collaborative effort among myself and three fellow students, aiming to blend weather updates with creature collecting in a manner reminiscent of 'Pokemon Go.'
        Designed with a target audience of users aged 10 and above, the app seamlessly integrates real-time weather data sourced from the OpenWeatherMap API. 

        A distinctive feature of the app is its ability to generate a unique animal corresponding to the day's weather conditions. 
        Each creature is programmed to appear in alignment with specific weather conditions, adding an element of surprise and engagement for users.
        To build their collection, users are required to catch these creatures, a process initiated by creating an account. 
        
        The app allows anyone to view weather updates, but the delightful task of creature-catching and collection-building is reserved for registered users.
        Catching the same animal multiple times unlocks the transformation into a 'Mega Beast,' a coveted achievement that accumulates points. 
        To maintain balance and prevent exploitation, users are limited to catching the same animal once every 12 hours.

        What sets this project apart is the impressive array of 47 unique creature designs, all meticulously illustrated by yours truly.
        `,
        challengesSolutions: `
        While developing this app, a notable challenge emerged concerning the scoring system for collecting identical animals. 

        Our team aimed to enable users to level up a creature after capturing it multiple times. 
        However, to prevent users from exploiting the system by repeatedly catching the same creature, a careful balance needed to be struck. 
        After thoughtful consideration, we agreed that implementing a 12-hour time restriction would be an effective solution. 

        To achieve this, I coded a mechanism that calculates the time difference between the current moment and the user's last capture date.
        `,
        technologiesUsed: ["React", "Django", "Python", "JavaScript", "JSON", "Postgresql", "HTML", "CSS"],
        designDecisions: `
        Our primary objective was to maintain a user-friendly and straightforward experience. 

        Every symbol and icon featured in the app underwent a team voting process to ensure alignment with the overall theme and design.
        In pursuit of enhanced user engagement, we implemented progress bars beneath each captured animal in the user's inventory. 
        This thoughtful design choice empowers users to visualize their progress toward leveling up each creature with ease and efficiency. 
        The integration of progress bars serves as an intuitive way to convey essential information about each animal.

        Furthermore, I prioritized consistency in the visual aesthetic, opting for a fun and cartoonish style across all the animals. 
        `,
        codeSnippet: require('@/assets/codesnippets/weatherapp_code_1.png'),
        codeExplain: `
        Below is code for my serializer named AnimalSerializer. It is designed to handle the serialization of instances of the Animal model. 
        The get_weather method maps numeric weather codes from the OpenWeatherAPI to the corresponding animals.

        The get_can_capture method checks if the current user is authenticated and has the permission to capture the animal based on a time constraint. 
        If the user has not captured the animal before or if enough time (12 hours) has passed since the last capture, the method returns True, indicating that the user can capture the animal. 

        The get_points_left_until_max method calculates the points left until the animal reaches its maximum level, considering a maximum of 10 points. The points are calculated based on the user's previous captures of the animal.
        `,
        projectImpact: `
        This project holds significant personal importance as it marked the culmination of my course at Momentum Learning. 
        
        The final presentation, which involved showcasing our app in front of a live audience and a panel of judges, was a nerve-wracking yet rewarding experience. 
        Despite the initial anxiety, the joy of presenting alongside my team and witnessing the judges' smiles and enjoyment during the live demo, complete with music and animated animals, made the entire journey worthwhile.

        The challenges encountered in the development process, particularly working with Django, not only broadened my technical skills but also significantly bolstered my confidence in presenting my work. 
        
        This project stands as a testament to my growth, not just as a developer but as a confident presenter, ultimately leaving a lasting impact on my journey in the world of technology.
        `,
        futurePlans: `
        At this moment, I haven't solidified any future plans for this project. 
        However, I've entertained the idea of leveraging the knowledge gained from this experience to embark on the creation of another app with a similar concept. 
        `,
        extraPhoto1: require('@/assets/extraPhoto/shark.gif'),
        extraPhoto2: require('@/assets/extraPhoto/toucan.gif'),
        extraPhoto3: require('@/assets/extraPhoto/trex.gif'),
    },
    {
        id: 2,
        projectName: "Dinosaur Fighting Game",
        thumbnailSource: require('@/assets/thumbnails/Dinosaur-Fighting-Game.png'),
        description: "Trying to recreate the classic 'Primal Rage' arcade game in Pygame. So far I have Diablo and Sauron.",
        youtubeVideoId: "tLRHc_CkOuQ",
        githubRepo: "Dinosaur-Fighting-Game",
        projectOverview: `
        This project stemmed from my exploration of Pygame while following a tutorial on creating fighting games. 

        As a newcomer to Pygame, the experience has been thoroughly enjoyable. 
        The application I've started is a two-player fighting game where participants select which character they want and engage in battle. 
        The life bar dynamically reflects the damage sustained and remaining life. 

        Drawing inspiration from the classic arcade game 'Primal Rage,' I crafted custom sprites featuring Diablo and Sauron.
        `,
        challengesSolutions: `
        I encountered a notable challenge while delving into this project, navigating the intricacies of Pygame, and mastering the intricacies of character movement and animations. 
        To overcome this hurdle, my approach involved persistent code review and a deep understanding of the mechanics involved. 
        
        Tasks like efficiently extracting images from a sizable spritesheet initially presented difficulty, but through study and contemplation of the code, I gradually gained clarity and confidence in handling these complexities.
        `,
        technologiesUsed: ["Python", "Pygame"],
        designDecisions: `
        As mentioned earlier, I chose to feature classic characters from 'Primal Rage' for this project as a sort of fan tribute.
        While contemplating whether to utilize the original game sprites, I ultimately opted for a more personal approach by creating my own sprite sheets through illustration. 
        
        In terms of code design, a significant decision involved isolating the Fighter class from the Main.py file due to its extensive codebase. 
        This separation not only contributes to a cleaner and more readable project structure but also simplifies the Main.py file, as now I only need to import the Fighter class for integration.
        `,
        codeSnippet: require('@/assets/codesnippets/fightinggame_code.png'),
        codeExplain: `
        Below is some code from my Fighter class for the two characters.
        This class is initialized with various attributes, such as position, size, animations, and health. 

        The load_images method extracts images from a sprite sheet for different animations. 

        The move method handles character movement, gravity, and keypress interactions, including walking, jumping, and initiating attacks. 
        `,
        projectImpact: `
        This project was a great deal of fun for me. 
        Though this is my first time using Pygame and I still have much to learn, I've come to realize that Pygame offers a robust toolkit beyond my initial expectations. 

        Engaging in this project has not only been a learning experience with Pygame but has also immersed me in the intricate mindset required to make a game functional. 
        It's a thrilling journey, and I look forward to further exploring and honing my skills in game development.
        `,
        futurePlans: `
        While this project remains a work in progress, it primarily served as my initiation into the realm of Pygame. 

        I do have plans of revisiting it in the future to bring it to completion. 
        My envisioned enhancements include incorporating death animations, introducing a broader array of moves, and expanding the roster of characters. 
        The prospect of crafting a complete 'Primal Rage' fan game is an exciting aspiration that I look forward to delving into further down the road.
        `,
    },
    {
        id: 3,
        projectName: "Social Card Team Project",
        thumbnailSource: require('@/assets/thumbnails/Social-Card-Team-Project.png'),
        description: "Team project where backend and frontend collaborated to make a social network site for users to create greeting cards, share them on a feed and follow other users.",
        youtubeVideoId: "boBPyjZqPCM",
        githubRepo: "Social-Card-Team-Project",
        projectOverview: `
        This social e-cards application offers users the ability to register, craft personalized greeting cards, and connect with fellow users through following functionality. 

        Users are presented with a curated display of cards, sorted chronologically from newest to oldest. 
        They have access to three distinct collections: their own creations, cards from users they follow, and a comprehensive collection of all cards.
        Functionally, this application operates as two separate entities—a robust back-end API developed with Django REST Framework and a dynamic front-end React application. 

        This dual structure ensures seamless integration and an intuitive user experience across both platforms.
        `,
        challengesSolutions: `
        As the backend engineer for this project, I encountered a notable challenge related to establishing a robust following and follower relationship. 
        Initially, navigating the intricacies of mapping out this relationship for each user proved to be a bit perplexing. 
        After careful consideration, I opted to streamline the process by introducing a 'Followship' model. 

        This allowed me to create instances that seamlessly linked 'follower' and 'following' for each user, providing a more organized and intuitive structure.
        `,
        technologiesUsed: ["React", "Django", "Python", "JavaScript", "JSON", "Postgresql", "HTML", "CSS"],
        designDecisions: `
        The frontend team and I decided to go for a nostalgic 90’s vibe in the layout of this app. 
        We've also incorporated elements to make it look and feel a bit like Instagram and Facebook.
        `,
        codeSnippet: require('@/assets/codesnippets/socialcards_code.png'),
        codeExplain: `
        Below is the code for my FollowshipAPIView model that inherits from Django REST Framework's APIView. 

        The purpose of this class is to handle the logic for following and unfollowing a user. 
        The class specifies that token authentication is required, and the user must be authenticated to perform these actions. 
        The post method is responsible for creating a new Followship instance when a user initiates a follow action, while the delete method handles the removal of an existing Followship instance when a user decides to unfollow. 
        The username parameter in both methods is used to identify the user being followed or unfollowed.

        It retrieves the current user (follower) from the request and fetches the user to be followed or unfollowed (following) using the username parameter. 
        Then it either creates a new Followship instance or deletes an existing one accordingly. 
        The class utilizes serializers to convert the Followship instances into JSON format for the API responses, returning the data along with the appropriate HTTP status codes.
        `,
        projectImpact: `
        This marked my first team coding project at Momentum, and I was genuinely thrilled to dive into collaborative work. 
        
        Despite initial nerves, especially as the sole backend developer in our four-person team, I believe I successfully fulfilled the team's requirements. 
        I made it a priority to effectively communicate my endpoints, ensuring a cohesive understanding among all team members.

        `,
        futurePlans: `
        While there are no concrete future plans for the project, I fondly reflect on the experience, recognizing its valuable contribution to deepening my understanding of Django models. 
        `,
    },
    {
        id: 4,
        projectName: "Library API",
        thumbnailSource: require('@/assets/thumbnails/Library-API.png'),
        description: "API that lets users keep track of books, including important information like title, author, publication date, a genre, and a field that marks it as 'featured'.",
        youtubeVideoId: "ukgu9-KHiGg",
        githubRepo: "Library-API",
        projectOverview: `
        This API application allows users to organize their book collection, providing features such as listing all books, creating new entries with details like title, author, and publication date, and marking books as 'featured.' 
        Users can manage their reading progress by categorizing books as 'want to read,' 'reading,' or 'read,' while also accessing a variety of search and retrieval functionalities based on title, author, and status. 

        The platform supports private and public notes for each book, allowing users to record personal reflections or share insights with others. 
        Administrators hold the additional capability to update or delete books, including toggling the 'featured' status, without affecting associated notes. 
        `,
        challengesSolutions: `
        This marked my initial exploration into planning of models for my application, where I delved into the process of determining the types of models required and their functionalities. 
        The early challenges I faced were rooted in my ongoing adjustment to Django and the perception of essential model structures. 
        
        As I gradually grasped the concept of models as tables, a pivotal realization occurred, shedding light on the importance of organizing and linking information. 
        This newfound perspective not only facilitated further understanding of Django but also streamlined the identification of crucial data to be stored collectively and interconnected within the application.
        `,
        technologiesUsed: "List of technologies used",
        designDecisions: "Discuss the design decisions you made for the project. Explain your thought process behind the user interface, user experience, color scheme, etc.",
        codeSnippet: "Code snippets",
        codeExplain: "Explain code snippet",
        projectImpact: "Share any impact the project has had, including user feedback, download statistics, or recognition received.",
        futurePlans: "Mention any future plans or enhancements you have in mind for the project."
    },
    {
        id: 5,
        projectName: "Poke-API Project",
        thumbnailSource: require('@/assets/thumbnails/Poke-API-Project.png'),
        description: "Self project I did to learn SQL. Pulls from the PokeAPI to return information about a given",
        youtubeVideoId: "i2Y_WlzOLAI",
        githubRepo: "Poke-API-Project",
        projectOverview: "Provide a brief overview of the project, including its purpose, goals, and key features.",
        challengesSolutions: "Share any challenges or problems you encountered during the development process and how you overcame them.",
        technologiesUsed: "List of technologies used",
        designDecisions: "Discuss the design decisions you made for the project. Explain your thought process behind the user interface, user experience, color scheme, etc.",
        codeSnippet: "Code snippets",
        codeExplain: "Explain code snippet",
        projectImpact: "Share any impact the project has had, including user feedback, download statistics, or recognition received.",
        futurePlans: "Mention any future plans or enhancements you have in mind for the project."
    },
    {
        id: 6,
        projectName: "Task Manager Application",
        thumbnailSource: require('@/assets/thumbnails/Task-Manager-Application.png'),
        description: "App that allows the user to keep track of incompleted and completed tasks.",
        youtubeVideoId: "aQKLEIFKCsg",
        githubRepo: "Task-Manager-Application",
        projectOverview: "Provide a brief overview of the project, including its purpose, goals, and key features.",
        challengesSolutions: "Share any challenges or problems you encountered during the development process and how you overcame them.",
        technologiesUsed: "List of technologies used",
        designDecisions: "Discuss the design decisions you made for the project. Explain your thought process behind the user interface, user experience, color scheme, etc.",
        codeSnippet: "Code snippets",
        codeExplain: "Explain code snippet",
        projectImpact: "Share any impact the project has had, including user feedback, download statistics, or recognition received.",
        futurePlans: "Mention any future plans or enhancements you have in mind for the project."
    },
];

export default projects;