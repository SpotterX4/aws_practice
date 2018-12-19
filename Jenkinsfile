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

    }
}