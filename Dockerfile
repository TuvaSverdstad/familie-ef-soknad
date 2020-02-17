FROM navikt/node-express:12.2.0-alpine
RUN apk --no-cache add curl

ADD ./ /var/server/

RUN yarn
RUN yarn build:prod

EXPOSE 8000
CMD ["yarn", "start"]
#FROM navikt/pus-decorator:228.20190926.1521
#ENV APPLICATION_NAME=familie-ef-soknad
#ENV HEADER_TYPE=WITHOUT_MENU
#ENV CONTEXT_PATH=/familie/alene-med-barn/soknad/
#COPY ./build /app
