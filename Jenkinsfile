pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                script {
                    dockerapp = docker.build("jenkins-tutorial:${env.BUILD_ID}", "./app")
                }
            }
        }
    }
}
