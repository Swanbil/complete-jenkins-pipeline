pipeline {
  environment {
    registry = "swaninho/node-web-app"
    registryCredential = 'docker-hub-credentials'
    dockerImage = ''
  }
  agent any
  tools {nodejs "NodeJs"}
  stages {
    stage('Install dependencies of the app') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test the app') {
      steps {
        sh 'npm run test'
      }
    }   
    stage('Building Docker image') {
      steps{
        script {
          dockerImage = docker.build(registry + ":$BUILD_NUMBER")
        }
      }
    }
    stage('Deploy Docker image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Test inside Docker image'){
        steps{
        script {
          dockerImage.inside{
            sh 'npm run test'
          }
        }
      }
    }
     stage('Deploy to PREPROD'){
        steps{
          script {
          docker.withRegistry( '', registryCredential ) {
            image = docker.image('swaninho/node-web-app:'+ $BUILD_NUMBER)
            image.pull()
            image.run('PREPROD-node-web-app')
          }
        }
      }
    }
    
  }
}