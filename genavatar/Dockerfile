FROM python:3.5

#RUN pip install --upgrade pip
RUN pip install --trusted-host pypi.org \
        --trusted-host files.pythonhosted.org \
        Flask uWSGI requests==2.5.1
RUN groupadd -r uwsgi && useradd -r -g uwsgi uwsgi \
    && mkdir src/
EXPOSE 9090 9191
USER uwsgi
COPY src src/
COPY scripts scripts/

CMD ["scripts/chenv.sh"]
