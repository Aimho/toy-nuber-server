# Project Setup

- module 설명
  - nodemon: 파일 변경 시 서버를 갱신해 줌 (개발 시 편함)

# GraphQL Yoga and Express

- GraphQL Yoga: graphql로 개발환경을 만들어주는, CRA(create-react-app)같은 boilerplate
- Express: `django`나 `rails`같은 것. node.js에 서버를 만드는 프레임워크, `graphql-yoga`는 내부에 express를 가지고 있음
- middleware: app의 연결이나 요청들을 다루는 방식을 수정하는 거라고 생각하면 됨
  - ex. 모든 요청을 console에 기록하는 middleware를 만들고 싶다. = app API 요청 -> logger middleware가 요청을 가로채거 기록 후 요청이 다음 단계로 진행되도록 함
- module 설명
  - helmet: 보안을 위한 middleware. 요청 때마다 위험요소를 검사 후 이상 없으면 계속 진행시킴

# Configuring TypeORM

- ORM(Object Relational Mapper): 코드를 SQL 언어로 변경함
- PostgreSQL
  - 관계형 데이터베이스
  - install postgresql
    ```shell
      brew search postgresql                        //postgres를 찾는다.
      brew install postgresql                       // 설치
      pg_ctl -D /usr/local/var/postgres start       // 시작
      export PGDATA='/usr/local/var/postgres'
      pg_ctl status      // "server is running" 이라고 뜨면 성공적으로 설치한거임
    ```
  - Initialize database Cluster
    ```shell
      initdb /usr/local/var/postgres
    ```
  - Create a new database
    ```shell
      createdb "db_name"
    ```
  - Start
    ```shell
      psql "db_name"
    ```
  - Etc
    ```shell
      pg_ctl -D /usr/local/var/postgres stop -s -m fast // Stop postgresql
      brew info postgres    // Check if postgres is installed
      dropdb postgis_test   // Drop the database
      \dt                   // List all tables in our database
      \conninfo             // Database, user, port information
    ```

# Hashing and Encrypting User Passwords

- user의 password 같은 데이터는 암호화(hashing)해서 저장해야 함
- module 설명
  - bcrypt: 뭔가를 암호화하거나, 비교하거나 등등 할 때 좋은 utility
- typeorm method 설명
  - BeforeInsert: 새로운 object를 만들기 전에 불려지는 method
  - BeforeUpdate: object를 update 하기 전에 불려지는 method
