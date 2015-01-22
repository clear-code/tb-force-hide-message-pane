PACKAGE_NAME = force-hide-message-pane

all: xpi

xpi: buildscript/makexpi.sh
	cp buildscript/makexpi.sh ./
	./makexpi.sh -n $(PACKAGE_NAME) -o
	rm ./makexpi.sh

buildscript/makexpi.sh:
	git submodule update --init
