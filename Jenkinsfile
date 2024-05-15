pipeline {
    agent any

    stages{
        stage ('build'){
            steps{
                script{
                    dockerapp = docker.build('pingu01/jenkins-tutorial', '-f ./app/Dockerfile . ./app') {}
                }
            }

        }
    }
}