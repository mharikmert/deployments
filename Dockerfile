FROM busybox:latest

COPY . .

CMD ["busybox", "httpd", "-f", "-v", "-p", "80"]