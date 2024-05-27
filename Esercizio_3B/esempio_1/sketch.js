let posizioneX1, posizioneY1,  velX1, velY1
let posizioneX2, posizioneY2,  velX2, velY2

function setup() {
	createCanvas(windowWidth, windowHeight)

	posizioneX1 = width/2
	posizioneY1 = height/2
	velX1 = 20
	velY1 = 8

	posizioneX2 = width/3
	posizioneY2 = height/3
	velX2 = 15
	velY2 = 10
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}
function draw() {
	
	posizioneX1 = posizioneX1 + velX1
	posizioneY1 = posizioneY1 + velY1

	if (posizioneX1 >= width) {
		velX1 = -velX1
	}
	if (posizioneX1 < 0) {
		velX1 = -velX1
	}

	if (posizioneY1 >= height) {
		velY1 = -velY1
	}
	
	if (posizioneY1 < 0) {
		velY1 = -velY1
	}


	posizioneX2 = posizioneX2 + velX2
	posizioneY2 = posizioneY2 + velY2

	if (posizioneX2 >= width) {
		velX2 = -velX2
	}
	if (posizioneX2 < 0) {
		velX2 = -velX2
	}

	if (posizioneY2 >= height) {
		velY2 = -velY2
	}
	
	if (posizioneY2 < 0) {
		velY2 = -velY2
	}

	background(0, 0, 0)
	noStroke()
	fill(255)
	circle(posizioneX1, posizioneY1, 40)
	fill(128, 100, 200)
	circle(posizioneX2, posizioneY2, 40)





}