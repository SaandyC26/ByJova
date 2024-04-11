FROM openjdk:11.0.10-jre
EXPOSE 22
EXPOSE 25
EXPOSE 465
EXPOSE 8080
ADD target/TimeTracking.war TimeTracking.war
ENTRYPOINT ["java", "-Xmx4G", "-XX:+UnlockExperimentalVMOptions", "-jar" ,"TimeTracking.war"]

