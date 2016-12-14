'use strict';

let events = [{
	name: "CadPro",
	introduction: "Do you think you are good at design? Like CAD modelling?.\n\nBE A PRO Design Challenge will test your designing skills in 3D design software and here, you have to prove your expertise in a challenging scenario where you race against time.\n\nIt will be an on-spot designing round. Participants will be given a problem statement at the time of event and they have to submit their design in the specified time limit.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/CADPRO.pdf",
	image: "/img/events/cadpro.png",
	domain: "torque"
}, {
	name: "Drift King",
	introduction: "Want to try making an IC engine? Drift king gives you a chance to design a machine with given constraints. \n\nIn this event, the contestants are expected to make to an IC engine powered machine, that can be controlled remotely using a wireless remote controller, which can race against machines of similar construct on an all-terrain track  packed with a number of obstacles.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/DriftKing.pdf",
	image: "/img/events/driftking.png",
	domain: "torque"
}, {
	name: "Hack a Maze",
	introduction: "Compete against others hackers in exploring different levels of a challenge maze with your hacking skills. You will have to find your way to victory to defeat others. Its an on-the-spot event, in which there will a website/portal hosted locally and all the teams will have to navigate the website solving a series of puzzles and challenges. The first team to reach the goal or go the farthest in the time limit bags the prize.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/hackamaze.pdf",
	image: "/img/events/hackamaze.png",
	domain: "kludge"
}, {
	name: "Enigma",
	introduction: "Find the mysterious secret techniques to decrypt the given texts/messages. Clear all the levels in the allotted time to become the ultimate \"cryptacker\". It's a pen and paper event. Each team has to decode a series of crypted messages.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/enigma.pdf",
	image: "/img/events/enigma.png",
	domain: "kludge"
}, {
	name: "The Galileo Project",
	introduction: "“By taking the sense our sense of sight far beyond the realm of our forebear’s imagination, these wonderful instruments, the telescopes, open the way to a deeper and more perfect understanding of nature.”   -  Rene Descartes.\n\nMake your own Optical tube.\n\n\nThis event is based on building of a simple terrestrial telescope with given components. Also, test your talent in physics by participating in a challenging quiz.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/TheGalelioProject.pdf",
	image: "/img/events/galileoproject.png",
	domain: "cepheid"
}, {
	name: "Proquest",
	introduction: "Proquest is a competitive programming competition composed of three levels, for participants of all levels of expertise. Experience the beginner, medium and advance levels of programming from pen and paper programming to a truly challenging problem statement.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/proquest.pdf",
	image: "/img/events/proquest.png",
	domain: "infero"
}, {
	name: "Algorithma",
	introduction: "Algorithma is the perfect event for those who like to solve mathematical and logical puzzles as well as design algorithms, regardless of your knowledge of programming. Here we will test your problem solving ability in a series of steps. You will be given a set of puzzles and algorithmic problems. You have to write pseudocode or steps for solving a problem in words or draw a flowchart highlighting the approach for solving the problem anything which clearly describes your logic.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/algorithma.pdf",
	image: "/img/events/algorithma.png",
	domain: "infero"
}, {
	"name": "Robosoccer",
	"introduction": "A soccer freak as well as a Robotics Freak too? well, this event is just for you.\n\n\nRobosoccer combines the universal excitement and amusement inspired by football, with the thrill and satisfaction of making a working robot from scratch. This event is a platform to showcase their robotics talents and bringing the football spirit alive. Teams are expected to build and operate a manual robot to play one-on-one soccer in a knockout tournament but just with cheering, heckling, massacres, nail-biters and a lot more!",
	"file": "https://s3-ap-southeast-1.amazonaws.com/nvision/events/RoboSoccer.pdf",
	image: "/img/events/robosoccer.png",
	domain: "robotics"
}, {
	name: "RoboWars",
	introduction: "Interested in designing a bot? Want to test your robotic skills?\n\nThe challenge is to create a robot (manually controlled / autonomous) whose sole purpose is to immobilize or otherwise move your opponent out of the arena within a stipulated time. This event aims to test your Robot against another in a field of combat where brute strength and cat-like reflexes hold the key to success.",
	"file": "https://s3-ap-southeast-1.amazonaws.com/nvision/events/robowars.pdf",
	image: "/img/events/robowars.png",
	domain: "robotics"
}, {
	name: "Electronic Bloopers",
	introduction: "As your faults are rectified, your confidence is amplified. Come this January and enjoy one of the most fascinating and interesting quizzes you will have ever encountered.\n\nThis is an on-spot event, an exciting journey which will let you explore the world of electronics.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/electronicbloopers.pdf",
	image: "/img/events/bloopers.png",
	domain: "electronika"
}, {
	name: "DTMF Race",
	introduction: "A competition can never be fair. One uses all the means available to reach to that final goal of victory which everyone dreams of. So, it is not just winning anymore but how you win one. Crush your competitors and hold the victory cup that is within your hand’s reach.\n\nAs the name sounds, this event will be an exciting race with interesting constraints!!",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/dtmfrace.pdf",
	image: "/img/events/dtmf.png",
	domain: "electronika"
}, {
	name: "Elixir of Electricity",
	introduction: "It’s time that you give your best ideas for the betterment of this planet.\n\nIn the recent decade, world has witnessed decrease in fuel resources like coal, petroleum. Also, energy consumption for human needs has increased, especially ELECRICITY.\n\n\nAs fuel resources are on the verge of depletion and their prices soar higher and higher, the think tanks of world starts exploring other alternative sources of energy to harness….and so should YOU. So nvision 2k16 provides you the chance to bring forth your innovation and creativity to show your technical skills.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/ElixirOfE.pdf",
	image: "/img/events/elixir.png",
	domain: "electronika"
}, {
	name: "Bridge Builder",
	introduction: "Civil Engineering is an art; a profession of creative ability and logic. Architect provides an opportunity for participants to unleash their innovation in designing an object of significance and splendour. This event aims to harness practical design and constructional abilities of the participants.\n\nParticipants have to design a Bridge using Popsicle sticks (icecream sticks) satisfying the given constraints.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/bridge_builder.pdf",
	image: "/img/events/bridgebuilder.png",
	domain: "equilibria"
}, {
	name: "Junkyard Wars",
	introduction: "Here is our version of Junkyard Wars. Do not miss hogging the limelight as contestants scramble to make something out of nothing. Yeah you read it right- Something out of nothing. This is the land where, missile launchers are made of paper, choppers are made from ice cream sticks and balloons, lifting machines are made out of syringes and hydraulics. It has been traditionally getting massive participation as engineers here have been trained to build everything from anything.",
	domain: "equilibria",
	image: "/img/events/junkyard.png",
}, {
	name: "Crowd Pitch",
	introduction: "Have you ever had an idea that you wanted to expand upon but didn’t have the necessary tools to develop it?\n\nIt's a place where motivated creators and innovators can access funding and support beyond 'official' channels. If you have the aspirations..and passion to create, this is the place to make great things possible. It doesn't matter if you're a student, an intern, part-time photographer, aspiring illustrator, a tech- startup, an aspiring movie maker, an indie musician or anyone with just an idea who desires to Pitch it to the crowd.",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/crowdpitch.pdf",
	image: "/img/events/crowd.png",
	domain: "e-cell"
}, {
	name: "BUSINESS SIMULATION GAME",
	introduction: "Ever wanted to own a company of your own?Wanna enhance your entrepreneurial experience through real life examples? Then \"Business Stimulation game\" is the apt place for you. Participate in this mega event this ηvision presented by E-Cell, IIT Hyderabad and master your professional, marketing and other skills needed for an entrepreneur!",
	file: "https://s3-ap-southeast-1.amazonaws.com/nvision/events/businesssimulation.pdf",
	image: "/img/events/business.png",
	domain: "e-cell"
}]

exports = module.exports = events;
