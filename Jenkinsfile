pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        stage('Checkout') {
            steps {
               
                git branch: 'main', url: 'https://github.com/bishnu-suyel/online-store-redux-lesson.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
              sh "pwd"
              sh 'npm install'
              }
            }
        }
        stage('Deploy') {
            steps {
                echo "Deployed to AWS"
            }
        }
    }
}
