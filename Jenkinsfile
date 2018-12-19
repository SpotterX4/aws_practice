pipeline {
    agent any

    tools { nodejs "NodeJS 11.4" }

    stages {
        stage('Clone Git') {
            steps {
                git 'https://github.com/SpotterX4/aws_practice.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Dockerize') {
            steps {
                docker.build('pehardy_practice')
            }
        }
        stage('Send to ECR') {
            steps {
                docker.withRegistry('974289754126.dkr.ecr.us-east-1.amazonaws.com/pehardy_practice', 'ecr:cae9743d-ac9a-47d7-820d-b8cb4deae8c2') {
                    docker.image('pehardy_practice').push('latest')
                }
            }
        }
    }
}