list all container: docker ps -a
list images: docker images
build image from Dockerfile: docker build PATCH
create container with a name: docker create --name psql ed8591c9545f
start a container: docker start CONTAINER_NAME_OR_ID

remove container: rm CONTAINER_NAME_OR_ID
remove image: rmi IMAGE_NAME_OR_ID
    use -f to force remove image in use

create container with port mapping: docker create --name CONTAINER_NAME -p 5432:5432 IMAGE_ID
