﻿# complete-jenkins-pipeline

## Goal

Create a complete pipieline CI/CD with Jenkins for an application.

## Stacks

- ExpressJs app
- Jest
- Docker
- Jenkins

## Description

A Jenkins pipeline is trigerring each time a commit is done on the main branch of the github repo with webhook.
The Jenkins pipeline :
    - Build the app
    - Test the app
    - Build a docker image of the app
    - Deploy this image on Docker hub
    - Deploy this image on the Preprod env
    - Deploy this image on the Prod env

## Result

![image](https://user-images.githubusercontent.com/72750475/212858085-69225d6b-8f47-4b9c-be02-6cfdb36dda1a.png)
