FROM ruby:3.1.2

RUN apt update && \
  apt install -y clang curl gcc && \
  apt clean

# rustup
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH $PATH:/root/.cargo/bin

WORKDIR /app
COPY . /app/

RUN gem update --system
