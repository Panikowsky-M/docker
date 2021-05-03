FROM nginx:1.7

COPY default.conf /etc/nginx/conf.d/default.conf
COPY entry.sh /entry.sh
ENTRYPOINT ["/entry.sh"]
CMD ["nginx","-g","daemon off;"]
