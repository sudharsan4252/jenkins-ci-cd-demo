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
        stage('Docker Check') {
    steps {
        echo 'Checking Docker...'
        bat 'docker --version'
    }
}
        stage('Build') {
            steps {
                echo 'Building application...'

                bat 'if exist build rmdir /s /q build'
                bat 'mkdir build'

                bat 'copy /Y app.js build\\app.js'
                bat 'copy /Y package.json build\\package.json'
                bat 'copy /Y package-lock.json build\\package-lock.json'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: 'build/**', fingerprint: true
        }
    }
}