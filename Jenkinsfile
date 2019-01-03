node {

	env.NODEJS_HOME = "${tool 'NodeJS 11.4'}"
	env.PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
	
	env.DOCKER_HOME = "${tool 'Docker'}"
	env.PATH = "${env.DOCKER_HOME}/bin:${env.PATH}"

	stage 'Clone Git'
	git 'https://github.com/SpotterX4/aws_practice.git'
	
	stage 'Build'
	sh 'npm install'
	
	stage 'Test'
	sh 'npm test'
	
	stage 'Dockerize'
	docker.build('pehardy_practice')
	
	stage 'Send to ECR'
	docker.withRegistry('974289754126.dkr.ecr.us-east-1.amazonaws.com/pehardy_practice', 'ecr:c43dca09-09c5-471e-9346-f6e221d81121') {
		docker.image('pehardy_practice').push('latest')
	}
}
