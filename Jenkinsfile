pipeline {
    agent any

    stages{
        stage ('Initialize'){
            steps{
                echo 'Starting pipeline'
            }
        }
        stage ('Build'){
            steps{
                echo 'Building the project'
            }
            script{
                dockerapp = docker.build('pingu01/jenkins-tutorial', '-f ./app/Dockerfile . ./app') {}
            }
        }
    }
}