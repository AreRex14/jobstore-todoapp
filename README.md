# Jobstore TodoApp

## Overview

**Demo:** [Google Drive Video](https://drive.google.com/file/d/1sn6CPCGOHwIlsEygwvR0at3wdY_Gp_pT/view) 

This app utilize Laravel and Vuejs mainly. 

You can create, toggle todo item completion and delete it.

Adding new todo will add it on top as recent item.

The todos are saved in Vue Pinia (state management). 

The sessions are tracked using JavaScript Session Storage.

Refreshing current tab will load your existing todos. The todos saved is saved indefinitely by default until you closed it.

User can create new session by opening other tab or new window.

No Laravel database usage is needed.

## Development Setup Guide

### 1) Application Setup with Docker/Laravel Sail

-   Ensure [Docker](https://www.docker.com/get-started) is installed and running on your development pc.
-   If you are using Windows OS, make sure to setup your docker installation properly. [Docker Desktop For WSL 2](https://docs.docker.com/desktop/windows/wsl/)
-   Clone repository to your workspace folder (For Windows, clone the repository in your WSL environment folder).
-   Open terminal (or WSL terminal in Windows OS), navigate to application directory.

Install the application's dependencies by executing the following command.

```
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/opt \
    -w /opt \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs
```

Copy environment keys.

```
cp .env.dev.example .env
```

Configure bash alias for sail application

```
alias sail='bash vendor/bin/sail'
```

Copy `docker-compose-dev.yml` to `docker-compose.yml`.

```
cp docker-compose-dev.yml docker-compose.yml
```

Run this command to initialize all service containers required in docker.

```
sail up -d
```

Generate application key.

```
sail artisan key:generate
```

Link application storage to public folder.

```
sail artisan storage:link
```

### 2) Frontend Development Setup

Run this command to install application front-end dependencies

```
sail npm install
```

Run this command to generate assets and starting up Vite development server.

```
sail npm run dev
```

Application is available at [http://localhost](http://localhost).

Run this command to build for production

```
sail npm run build
```