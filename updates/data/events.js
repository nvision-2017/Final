'use strict';

let events = [{
	"name": "CadPro",
	"introduction": "Do you think you are good at design? Like CAD modelling?.\n\nBE A PRO Design Challenge will test your designing skills in 3D design software and here, you have to prove your expertise in a challenging scenario where you race against time.\n\nIt will be an on-spot designing round. Participants will be given a problem statement at the time of event and they have to submit their design in the specified time limit.",
	"file": "https://s3-ap-southeast-1.amazonaws.com/nvision/events/CADPRO.pdf",
	domain: "torque"
}, {
	name: "Drift King",
	introduction: "Want to try making an IC engine? Drift king gives you a chance to design a machine with given constraints. \n\nIn this event, the contestants are expected to make to an IC engine powered machine, that can be controlled remotely using a wireless remote controller, which can race against machines of similar construct on an all-terrain track  packed with a number of obstacles.",
	"file": "https://s3-ap-southeast-1.amazonaws.com/nvision/events/DriftKing.pdf",
	domain: "torque"
}, {
	name: "Mine Strife",
	introduction: "Well, digging the earth has been something man has been doing for centuries. We have dug earth to obtain so many metals, minerals, and even the precious drinking water. So, why not excavate and have fun!?\n\nDesign a wired/wireless remote controlled bot that can move around the mud covered arena and dig to collect coins under the given conditions.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/MINESTRIFE.pdf",
	domain: "torque"
}, {
	name: "Hack a Maze",
	introduction: "Compete against others hackers in exploring different levels of a challenge maze with your hacking skills. You will have to find your way to victory to defeat others. Its an on-the-spot event, in which there will a website/portal hosted locally and all the teams will have to navigate the website solving a series of puzzles and challenges. The first team to reach the goal or go the farthest in the time limit bags the prize.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/hackamaze.pdf",
	domain: "kludge"
}, {
	name: "Got A Root",
	introduction: "If you like hacking and want to try something real fun, then this certainly will be a promising event.\n\nBreak into the victim‘s computer and perform some devilish tasks - the dream of every hacker. The tasks to be done will be revealed on the spot.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/gotaroot.pdf",
	domain: "kludge"
}, {
	name: "Enigma",
	introduction: "Find the mysterious secret techniques to decrypt the given texts/messages. Clear all the levels in the allotted time to become the ultimate \"cryptacker\". It's a pen and paper event. Each team has to decode a series of crypted messages.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/enigma.pdf",
	domain: "kludge"
}, {
	name: "Aquanaut",
	introduction: "Ever dreamt of building your own rocket prototype and flying it. Here’s your chance. In this event, participants have to build a Water rocket which is pressurised by compressed air. Water acts as the fuel. \n\n\nBe a Newton and test the Third law for yourselves.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/Aquanaut.pdf",
	domain: "cepheid"
}, {
	name: "Eureka",
	introduction: "Interested in astrophysics? Try solving challenging problems in the field of physics, astronomy and astrophysics.\n\nAll of you competitors, I welcome you to the court of Cepheid. If you can use your inventiveness and creativity to solve what promise to be enticing problems of physics and stars and go “Eureka!” just like Archimedes did all those years ago(not necessarily with your clothes off), delightful prizes await you. Join the race to be the first.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/Eureka.pdf",
	domain: "torque"
}, {
	name: "The Galelio Project",
	introduction: "“By taking the sense our sense of sight far beyond the realm of our forebear’s imagination, these wonderful instruments, the telescopes, open the way to a deeper and more perfect understanding of nature.”   -  Rene Descartes.\n\nMake your own Optical tube.\n\n\nThis event is based on building of a simple terrestrial telescope with given components. Also, test your talent in physics by participating in a challenging quiz.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/TheGalelioProject.pdf",
	domain: "cepheid"
}, {
	name: "Proquest",
	introduction: "Proquest is a competitive programming competition composed of three levels, for participants of all levels of expertise. Experience the beginner, medium and advance levels of programming from pen and paper programming to a truly challenging problem statement.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/proquest.pdf",
	domain: "infero"
}, {
	name: "Algorithma",
	introduction: "Algorithma is the perfect event for those who like to solve mathematical and logical puzzles as well as design algorithms, regardless of your knowledge of programming. Here we will test your problem solving ability in a series of steps. You will be given a set of puzzles and algorithmic problems. You have to write pseudocode or steps for solving a problem in words or draw a flowchart highlighting the approach for solving the problem anything which clearly describes your logic.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/algorithma.pdf",
	domain: "infero"
}, {
	name: "Hello World",
	introduction: "Hello World is an online event spanning 4 days, where participants are allowed to enter and work on the sub sections according to their flexibility. The event will consist of Sections like picture-connect, brain teasers and other related trivia. To participate in the event, a basic understanding of programming is the only requirement; but even if you are completely new to it, you are welcome to try your hand.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/helloworld.pdf",
	domain: "infero"
}, {
	"name": "Robosoccer",
	"introduction": "A soccer freak as well as a Robotics Freak too? well, this event is just for you.\n\n\nRobosoccer combines the universal excitement and amusement inspired by football, with the thrill and satisfaction of making a working robot from scratch. This event is a platform to showcase their robotics talents and bringing the football spirit alive. Teams are expected to build and operate a manual robot to play one-on-one soccer in a knockout tournament but just with cheering, heckling, massacres, nail-biters and a lot more!",
	"file": "https://s3-ap-southeast-1.amazonaws.com/nvision/events/RoboSoccer.pdf",
	domain: "robotics"
}, {
	name: "RoboWars",
	introduction: "Interested in designing a bot? Want to test your robotic skills?\n\nThe challenge is to create a robot (manually controlled / autonomous) whose sole purpose is to immobilize or otherwise move your opponent out of the arena within a stipulated time. This event aims to test your Robot against another in a field of combat where brute strength and cat-like reflexes hold the key to success.",
	"file": "https://s3-ap-southeast-1.amazonaws.com/nvision/events/robowars.pdf",
	domain: "robotics"
}, {
	name: "Arcade Run",
	introduction: "Is making your bot follow the line a piece of cake for you? Tired of monochrome racing arenas?\n\nWe have just the thing for you.\n\nRace through multicoloured track to get to the right target. That too before everyone else!\n\nWith interesting and challenging constraints, this event will bring out all the robotic talents in you.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/arcaderun.pdf",
	domain: "robotics"
}, {
	name: "Battle Of Breadboards",
	introduction: "The fun of designing challenging circuits can be experienced here.\n\nFor problem statements that show you the face of present day situations and challenges, give your best solution through your bread board.\n\nParticipants will give the demo of the problem statement which they solve using any microcontroller and winner will be declared depending on judging criteria.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/BoB.pdf",
	domain: "electronika"
}, {
	name: "Electronic Bloopers",
	introduction: "As your faults are rectified, your confidence is amplified. Come this January and enjoy one of the most fascinating and interesting quizzes you will have ever encountered.\n\nThis is an on-spot event, an exciting journey which will let you explore the world of electronics.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/electronicbloopers.pdf",
	domain: "electronika"
}, {
	name: "DTMF Race",
	introduction: "A competition can never be fair. One uses all the means available to reach to that final goal of victory which everyone dreams of. So, it is not just winning anymore but how you win one. Crush your competitors and hold the victory cup that is within your hand’s reach.\n\nAs the name sounds, this event will be an exciting race with interesting constraints!!",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/dtmfrace.pdf",
	domain: "electronika"
}, {
	name: "Elixir of Electricity",
	introduction: "It’s time that you give your best ideas for the betterment of this planet.\n\nIn the recent decade, world has witnessed decrease in fuel resources like coal, petroleum. Also, energy consumption for human needs has increased, especially ELECRICITY.\n\n\nAs fuel resources are on the verge of depletion and their prices soar higher and higher, the think tanks of world starts exploring other alternative sources of energy to harness….and so should YOU. So nvision 2k16 provides you the chance to bring forth your innovation and creativity to show your technical skills.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/ElixirOfE.pdf",
	domain: "electronika"
}, {
	name: "Bridge Builder",
	introduction: "Civil Engineering is an art; a profession of creative ability and logic. Architect provides an opportunity for participants to unleash their innovation in designing an object of significance and splendour. This event aims to harness practical design and constructional abilities of the participants.\n\nParticipants have to design a Bridge using Popsicle sticks (icecream sticks) satisfying the given constraints.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/bridge_builder.pdf",
	domain: "equilibria"
}, {
	name: "Junkyard Wars!!",
	introduction: "Here is our version of Junkyard Wars. Do not miss hogging the limelight as contestants scramble to make something out of nothing. Yeah you read it right- Something out of nothing. This is the land where, missile launchers are made of paper, choppers are made from ice cream sticks and balloons, lifting machines are made out of syringes and hydraulics. It has been traditionally getting massive participation as engineers here have been trained to build everything from anything.",
	domain: "equilibria"
}, {
	name: "Crowd Pitch",
	introduction: "Have you ever had an idea that you wanted to expand upon but didn’t have the necessary tools to develop it?\n\nIt's a place where motivated creators and innovators can access funding and support beyond 'official' channels. If you have the aspirations..and passion to create, this is the place to make great things possible. It doesn't matter if you're a student, an intern, part-time photographer, aspiring illustrator, a tech- startup, an aspiring movie maker, an indie musician or anyone with just an idea who desires to Pitch it to the crowd.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/crowdpitch.pdf",
	domain: "e-cell"
}, {
	name: "BUSINESS SIMULATION GAME",
	introduction: "Ever wanted to own a company of your own?Wanna enhance your entrepreneurial experience through real life examples? Then \"Business Stimulation game\" is the apt place for you. Participate in this mega event this ηvision presented by E-Cell, IIT Hyderabad and master your professional, marketing and other skills needed for an entrepreneur!",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/businesssimulation.pdf",
	domain: "e-cell"
}, {
	name: "Cake Eating",
	introduction: "Civilised much? Now it is time to let go of all inhibitions and dive into that yummy cake! But hold on… there’s a twist. It’s not as simple as it looks!",
	domain: "infi"
}, {
	name: "Final Desatination",
	introduction: "Remember when finding  the hidden treasure using an old ‘X’ treasure map was our only ambition? Well, Nvision brings to you a real treasure map with a real treasure!",
	domain: "infi"
}, {
	name: "Wheel of Fortune",
	introduction: "Like to quiz? Here’s a chance to put those grey cells to work. But don’t forget to get your lucky charms because the stakes are high! May the odds always be in your favour…",
	domain: "infi"
}, {
	name: "Street Football",
	introduction: "The name says it all doesn’t it? Nvision invites all the ‘footballers’!",
	domain: "infi"

}, {
	name: "Lan Gaming",
	introduction: "Whom are you kidding!? We all know what happens throughout the night! Nvision calls all the gamers… it’s time to find out who the real gamer is!",
	domain: "infi"
}, {
	name: "Paper Presentation",
	introduction: "Participants are invited to present papers spanning various research topics pertaining to the different branches of engineering and science. It will be conducted in 2 rounds, selected students in first will give their presentation in final round in Nvision 2016",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/paper.pdf",
	domain: "online"
}]

exports = module.exports = events;
