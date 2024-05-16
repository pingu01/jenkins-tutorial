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
        stage('push image to dockerhub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                        dockerapp.image('latest').push()
                        dockerapp.image("${env.BUILD_ID}").push()
                    }
                }
            }
        }
    }
}
