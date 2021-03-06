FROM hayd/deno:alpine-1.2.1

WORKDIR /app

COPY . .

USER deno

CMD ["run", "--allow-net", "--allow-read", "mod.ts"]

EXPOSE 8000