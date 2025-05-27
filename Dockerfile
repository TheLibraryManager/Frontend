FROM node:20

# Cria diretório da aplicação
WORKDIR /src

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Expõe a porta padrão do Vite
EXPOSE 5173

# O comando final está no docker-compose, para suporte a hot-reload
ENV CHOKIDAR_USEPOLLING=true