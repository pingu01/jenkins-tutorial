pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                script {
                    // Correcting the docker build command
                    dockerapp = docker.build('jenkins-tutorial', '-f ./app/Dockerfile ./app')
                }
            }
        }
    }
}
