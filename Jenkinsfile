pipeline {
    agent any

    stages{
        stage ('build'){
            script{
                dockerapp = docker.build('pingu01/jenkins-tutorial', '-f ./app/Dockerfile . ./app') {}
            }
        }
    }
}