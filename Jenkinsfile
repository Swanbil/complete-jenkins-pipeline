pipeline{
    agent any
    stages {
        stage('Init') {
            steps {
                echo 'Initializing..'
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
            }
        }
        stage('Unit tests') {
            steps {
                echo 'Testing..'
                echo 'Running pytest..'
            }
        }
        stage('Build docker image') {
            steps {
                echo 'Building..'
                echo 'Running docker build -t sntshk/cotu .'
            }
        }
        stage('Publish image to docker hub') {
            steps {
                echo 'Publishing..'
                echo 'Running docker push..'
            }
        }
        stage('Deployment PREPROD env') {
            steps {
                echo 'Cleaning..'
                echo 'Running docker rmi..'
            }
        }
        stage('Deployment PROD env') {
            steps {
                echo 'Cleaning..'
                echo 'Running docker rmi..'
            }
        }
}
}