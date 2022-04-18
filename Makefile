args=`arg="$(filter-out $@,$(MAKECMDGOALS))" && echo $${arg:-${1}}`

run-dev:
	npm start
