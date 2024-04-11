

## Getting Started ###

Time Tracking (TT) is a tool for project time recording and reporting for all Zurich employees, both internal and contractors. For managers, it is also a tool for tracking their team allocations and time approval.

The application is accessible for all users with access to the Zurich internal network or via VPN, using their Zurich credentials (ID & password).

## Application Structure
```
📦timetracking
 ┗ 📂src
 ┃ ┗ 📂main
 ┃ ┃ ┣ 📂java\com\zurich
 ┃ ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┣ 📂constants
 ┃ ┃ ┃ ┣ 📂controllers
 ┃ ┃ ┃ ┣ 📂dao
 ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📂entity
 ┃ ┃ ┃ ┣ 📂rest
 ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┣ 📂utils
 ┃ ┃ ┃ ┗ 📂vo
 ┃ ┃ ┣ 📂resources
 ┃ ┃ ┃ ┣ 📂db
 ┃ ┃ ┃ ┣ 📂keystore
 ┃ ┃ ┃ ┗ 📂static
 ┃ ┃ ┣ 📂webapp
 ┃ ┃ ┃ ┣ 📂resources
 ┃ ┃ ┃ ┗ 📂WEB-INF
 ┃ ┃ ┗ 📜TimeTrackingApplication.java
 ┃ ┣ 📂test\java\com\zurich
 ┃ ┃ ┗ 📜TimeTrackingApplicationTests.java
 ┣ 📜.gitignore
 ┣ 📜Dockerfile
 ┣ 📜mvnw
 ┣ 📜mvnw.cmd
 ┣ 📜pom.xml
 ┣ 📜README.md
```
## Dependencies
* [![Java][Java]][java-url]
* [![Spring][Spring]][spring-url]

## Running locally
These instructions will get a copy of the project up and running on you local machine for development and testing purposes.

###Prerequisites


This service can be run locally with any IDE, or with the following command:

```bash
mvn compile -DskipTests
```

## Setting up in Visual Code

1. Install Java 11 JDK and all Java & Spring extensions as recommended by VS Code.
2. Install Maven .
3. Install MySQL Community Server and MySQL Workbench through the MySQL Community Installer .
4. Get the application-dev.yml properties file and place it under /src/main/resources.
5. Get the launch.json file an place it under /.vscode. If this folder does not exist just create it on the project root so VS Code will detect your launch configuration.
   Note that in the vmArgs property there are the arguments that will be passed to JVM on startup time:
   spring.profiles.active: Tells Spring which profile (environment) is the app running. On local environment, dev is required to use the application properties for development, and local is needed to tell TT mailing service to ignore email sending process since the SMTP server is not available locally. Alternatively, you can set the profiles directly into global application properties, but be aware that these will be applied when deploying on other environments, so it is not recommended at all.
maven.wagon.http.ssl.insecure: To tell Maven that it is OK to open the app via HTTP.
6. Run the project VS Code Run & Debug using your launch configuration. The database time_tracking_db will be automatically created as specified in the spring.datasource.url connection string property.
7. Fill the local database with a data dump from one of the existing environments databases:

Connect to the chosen environment database following the steps specified in the Database connection section below.

Access the database using MySQL Workbench.

Go to Server -> Data Export, select the time_tracking_db database and "Dump Data Only" option in the dropdown. In the section below, check "Export to Self-Contained File" to select the file location where to save the dumped data. Finally, click on "Start Export".

8. Go to http://localhost:8080/login  to access Time Tracking with your Zurich or test user credentials.

##########################################
### Time Tracking OpenShift Deployment ###
##########################################

The full procedure involves the following steps. Navigate to the base of the Time Tracking directory where the Dockerfile is stored, and execute the following commands: 

1. Build the application (.war file):

    $ mvn clean install -DskipTests

2. Build the Docker image:

    $ docker build -f Dockerfile -t <image-name>:<optional-version-tag> .

    Example:

    $ docker build -f Dockerfile -t timetrackingapp .

3. Tag the docker image so it can be pushed to the Nexus repository:

    $ docker tag <image-name> <nexus-repository-url>/<image-name>:<optional-version-number-tag>

    Example:

    $ docker tag timetrackingapp:v04 gt00-gttt-docker-hosted.docker.nexus.zurich.com/timetrackingapp:v04

4. Docker login to the Nexus repo:

    $ docker login <repository-url>

    Example: 

    $ docker login gt00-gttt-docker-hosted.docker.nexus.zurich.com


5. Push the image to the Nexus repository:

    $ docker push <nexus-repository-url>/<image-name>:<optional-version-number-tag>

    Example: 

    $ docker push gt00-gttt-docker-hosted.docker.nexus.zurich.com/timetrackingapp:v04

6. Login to OpenShift:

   $ oc login https://ocp.zurich.com

7. Ensure you are in the correct project. 

   Note: When you login to OpenShift, you are automatically logged into a specific "Namespace". A Namespace in OpenShift can be thought of logically as a project. If you run commands they effect the project you are logged into. Therefor it is very important to enusre that you are using the correct project before executing any commands. To navigate to a specific project in OpenShift use the following command:

   $ oc project <project-code>

   Time Tracking project codes:

   Production:     gttt
   Development:    gttt-dev

   Example:

   $ oc project gttt

8. Deploy the application to OpenShift. The database connection details are added as environment variables:

    $ oc new-app --name=<application-name> -e spring_datasource_url=jdbc:mysql://<mysql-pod-service-name>:3306/time_tracking_db?useSSL=false"&"allowPublicKeyRetrieval=true -e spring_datasource_username=<database-username> -e spring_datasource_password=<database-password> <nexus-repository-url>/<image-name>:<optional-version-number-tag>

    Example:

    $ oc new-app --name=timetrackingapp-demo -e spring_datasource_url=jdbc:mysql://timetrackingdb-v1:3306/time_tracking_db?useSSL=false"&"allowPublicKeyRetrieval=true -e spring_datasource_username=username -e spring_datasource_password=password gt00-gttt-docker-hosted.docker.nexus.zurich.com/timetrackingapp:bt04

9. Once the application is created, an OpenShift Route is required to access the application outside of OpenShift:

    $ oc create route edge <route-name> --hostname=<application-name>.ocpapps.zurich.com --service=<application-service-name> --insecure-policy=Redirect

    Example: 

    $ oc create route edge timetrackingapp-demo --hostname=timetracking-demo.ocpapps.zurich.com --service=timetrackingapp-demo --insecure-policy=Redirect --port=8080-tcp

    The application is now available at the URL given to the --hostname parameter:

    Example:
    
    https://timetracking-demo.ocpapps.zurich.com/


###############################
###   Database Deployment   ###
###############################

The database is deployed is a similar manner to the application. The code base for the database is stored within the application code repository in Bitbucket.

Database code: https://bitbucket.zurich.com/projects/GTTT/repos/timetracking/browse/src/main/resources/static/dataBase

In general the database doesn't require building of a docker image and pushing the image to Nexus. This is only required if changes to the code or infrastructure of the database container are required. 

Any updates of the mysql database, i.e tables, columns etc.. can be done by accessing the database container and editing using standard mysql commands. 

To deploy a database:

1. Login to OpenShift:

   $ oc login

2. Ensure you are in the correct project. 

   Note: When you login to OpenShift, you are automatically logged into a specific "Namespace". A Namespace in OpenShift can be thought of logically as a project. If you run commands they effect the project you are logged into. Therefore it is very important to enusre that you are using the correct project before executing any commands. To navigate to a specific project in OpenShift use the following command:

   $ oc project <project-code>

   Time Tracking project codes:

   Production:     gttt
   Development:    gttt-dev

   Example:

   $ oc project gttt

3. Deploy the database to OpenShift

  $ oc new-app --name <application-name> <nexus-repository-url>/<image-name>:<optional-version-number-tag>

  Example:

  $ oc new-app --name timetrackingdb-v1 gt00-gttt-docker-hosted.docker.nexus.zurich.com/timetracking-db:v1

  Note: The repo, image name and version tag are correct for pulling the 

4. Each time a new database is deployed to PRODUCTION we need to start cron to ensure the backup script is running every night. 

   Cron can be restarted with the following command:

   $ crond 

   Note: Not required in Development or Testing. 

5. The best way to create a database structure and add all of the data is to import a mysql dump file. 

   Take a mysql dump of the production database:

   Login to the ocp console:

   $ oc login

   Login to the correct project, in this case gttt is the production env:

   $ oc project gttt

   Find the full name of the database pod:

   $ oc get pods

   Take the full name of the pod and ssh into it:

   $ oc rsh <pod-name>

   Now inside the pod execute a dump of the database:

   $ mysqldump -u <database-user> -p <database-password> time_tracking_db > /tmp/backups/dump_for_time_tracking_db.sql

   Exit from the pod, then pull the mysql dump file to your local device:

   $ oc rsync <pod-name>:/tmp/backups/dump_for_time_tracking_db.sql .

   Example

   $ oc rsync timetrackingdb-v1-2-nrsxh:/tmp/backups/dump_for_time_tracking_db.sql .

   Get the name of the new database pod that requires the data import:

   $ oc project gttt-dev (only required if new database pod is in dev)

   $ oc get pods 

   Copy the dump file to the new database pod:

   $ oc rsync <path-to-file> <database-pod-name>:<directory>

   Example

   $ oc rsync C:\Users\<your-user-folder>\dump_for_time_tracking_db.sql timetrackingdb-1-s45z6:/tmp

   Login to the new database pod:

   oc rsh <pod-name>

   Import the mysql dump file:

   mysql -u <database-username> -p <database-password> time_tracking_db < dump_for_time_tracking_db.sql



#########################
### OpenShift Secrets ###
#########################

In order for OpenShift to pull images from Nexus, it stores access credentials in an object known as a secret. 
Currently the secrets are created with GITDIR user accounts that can access Nexus. We are in the process of updating this to a service account. 

For now, we use user access credentials. Since all Zurich Active Directory users are required to update their passwords every few months, the secrets become obsolete. 

This is something to be aware of. If you try to deploy to openShift but the password in the secret is no longer valid, OpenShift will not be able to login to the Nexus repo to pull the image.

If you try to deploy but get an error message similar to "Image Pull Back-Off", the first thing to check are the credentials in the secret. 

We can create a new secret anytime with the following commands:

1. This command creates the secret with the values required: 

   $ oc create secret docker-registry <name-for-secret> --docker-server=<registry-url> --docker-username=<docker-username> --docker-password=<docker-password> --docker-email=<email-address>

   Example:

   $ oc create secret docker-registry nexus-timetracking-secret --docker-server=gt00-gttt-docker-hosted.docker.nexus.zurich.com --docker-username=username --docker-password=password --docker-email=example@zurich.com


2. The secret must be granted pull permissions:

   $ oc secrets link default <name-for-secret> --for=pull

   Example:

   $ oc secrets link default nexus-timetracking-secret --for=pull


# OpenShift                                                            console

In order to use kubectl commands under oc protocol need to translate standar commands. The next list is the most commons commands that we can use


## To login under this projects
   
      oc login --token=sha256~3HeNf6RAhI-7NrdgKGZVC4qGi2t3jX8lFLn_b5NeABQ --server=https://api.ocp4.zurich.com:6443
   
curl Api

      curl -H "Authorization: Bearer sha256~3HeNf6RAhI-7NrdgKGZVC4qGi2t3jX8lFLn_b5NeABQ" "https://api.ocp4.zurich.com:6443/apis/user.openshift.io/v1/users/~"


## Portforward for database connection under dev 

For portforward run oc port-forward <pod> 8888:5000 (local port:pod port) you can see https://docs.openshift.com/container-platform/4.12/nodes/containers/nodes-containers-port-forwarding.html 

      oc port-forward timetrackingdb-v2-5874868d9d-wvqqn 3306:3306

      
## logs 

for tail logs with oc run oc logs -f <pod_name> -c <container_name>, in addition, add --since=30s for latest 30 sec of activity and it will be clean or you can use -tail=200 just to add 200 lines in buffer


      oc logs -f --tail=200 timetracking-webfrontend-364-68pz4 -c timetracking-webfrontend

                                                                                                                                                        
                                                                                   
####################
### Useful Links ###
####################

Bamboo build plan: https://bamboo.zurich.com/browse/GTTT

Bamboo deployment project: https://bamboo.zurich.com/deploy/config/configureDeploymentProject.action?id=177176583&environmentId=177340484

OpenShift Introduction (ocp cli install, etc...): https://confluence.zurich.com/display/DP/OCP+Introduction+-+The+Basics

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/screenshot.png
[Java]: https://img.shields.io/badge/java%2011-%23ED8B00?style=for-the-badge&logo=openjdk&logoColor=white
[java-url]: https://openjdk.org/projects/jdk/11/
[Spring]: https://img.shields.io/badge/spring%20Boot%202%2E7+-%236DB33F?style=for-the-badge&logo=spring&logoColor=white
[Spring-url]: https://spring.io/

# OpenShift                                                            console
In order to use kubectl commands under oc protocol need to translate standar commands. The next list is the most commons commands that we can use
## To login under this projects
   
      oc login --token=sha256~3HeNf6RAhI-7NrdgKGZVC4qGi2t3jX8lFLn_b5NeABQ --server=https://api.ocp4.zurich.com:6443
   
curl Api
      curl -H "Authorization: Bearer sha256~3HeNf6RAhI-7NrdgKGZVC4qGi2t3jX8lFLn_b5NeABQ" "https://api.ocp4.zurich.com:6443/apis/user.openshift.io/v1/users/~"
## Portforward for database connection under dev 
For portforward run oc port-forward <pod> 8888:5000 (local port:pod port) you can see https://docs.openshift.com/container-platform/4.12/nodes/containers/nodes-containers-port-forwarding.html 
      oc port-forward timetrackingdb-v2-5874868d9d-wvqqn 3306:3306
      
## logs 
for tail logs with oc run oc logs -f <pod_name> -c <container_name>, in addition, add --since=30s for latest 30 sec of activity and it will be clean or you can use -tail=200 just to add 200 lines in buffer
      oc logs -f --tail=200 timetracking-webfrontend-364-68pz4 -c timetracking-webfrontend
