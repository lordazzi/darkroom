FROM mobiledevops/android-sdk-image

ENV NVM_VERSION v10.2.4
ENV NODE_VERSION v22.12.0
ENV NVM_DIR /usr/local/nvm
RUN mkdir $NVM_DIR
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN echo "source $NVM_DIR/nvm.sh && \
    nvm install $NODE_VERSION && \
    nvm alias default $NODE_VERSION && \
    nvm use default && \
    npm install typescript @angular/cli sass -g" | bash

RUN apt update
RUN apt install -y libwebkit2gtk-4.1-dev build-essential curl wget file libxdo-dev libssl-dev libayatana-appindicator3-dev librsvg2-dev

RUN apt clean
RUN rm -rf /var/lib/apt/lists/*

ENV LANG C.UTF-8
WORKDIR /darkroom

# Instala rust
RUN curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh -s -- -y

EXPOSE 4199

CMD [ "/bin/bash" ]
