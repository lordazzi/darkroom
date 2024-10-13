FROM node:22

RUN npm install typescript @angular/cli sass sassdoc -g

ENV LANG C.UTF-8
WORKDIR /darkroom

COPY ./.gitconfig /root/.gitconfig
COPY ./.ssh /root/.ssh
RUN chmod 600 -R /root/.ssh
RUN ssh-add -D && ssh-add /root/.ssh/id_ed25519 || true

EXPOSE 4199

CMD [ "/bin/bash" ]
