pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t jenkins-ci-cd-demo:%BUILD_NUMBER% .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Docker container...'

                bat 'docker stop jenkins-demo || exit 0'
                bat 'docker rm jenkins-demo || exit 0'

                bat 'docker run -d -p 3000:3000 --name jenkins-demo jenkins-ci-cd-demo:%BUILD_NUMBER%'
            }
        }
    }
}