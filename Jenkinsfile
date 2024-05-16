pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                script {
                    // Build the Docker image and tag it with both 'latest' and the BUILD_ID
                    dockerapp = docker.build("jenkins-tutorial:${env.BUILD_ID}", "./app")
                }
            }
        }
        stage('push image to dockerhub') {
            steps {
                script {
                    // Ensure credentials are named correctly and Docker registry URL is correctly input
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                        // Push both tags
                        dockerapp.push("${env.BUILD_ID}")
                        dockerapp.push("latest")
                    }
                }
            }
        }
    }
}
