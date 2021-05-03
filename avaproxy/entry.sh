#!/bin/bash
set -e

sed -i "s|{{VM_ADDR}}|$VM_ADDR|;s|{{CONTAINER}}|$CONTAINER|"\
	/etc/nginx/conf.d/default.conf
cat /etc/nginx/conf.d/default.conf;
exec "$@"
