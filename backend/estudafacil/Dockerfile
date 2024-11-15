FROM python:3.10-slim

WORKDIR /code

COPY . /code

RUN apt-get update && apt-get install -y curl

RUN apt-get update && apt-get install -y \
    gcc \
    libmariadb-dev \
    python3-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip
COPY requirements.txt /tmp/
RUN pip install -r /tmp/requirements.txt

RUN rm -rf /root/.cache/

RUN curl -sSLo /usr/local/bin/wait-for-it https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && chmod +x /usr/local/bin/wait-for-it
