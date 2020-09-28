# toy-nuber-server

Server for the (N)Uber Clone Course on Nomad Academy. GraphQL, Typescript, NodeJS

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

# Twilio

- API로 SMS 메시지, 전화, 영상통화 등을 해줄 수 있게 도와주는 툴
- 여기서는 SMS 메시지 (전화번호 인증)을 위해서 사용함

# Mailgun

- API로 email 전송을 도와주는 툴
- 유료로 사용하는 것이 아니면 지정된 domain에서 가입한 email 외 mail 전송 불가능함

# Subscription

- Query랑 비슷하면서 describe도 할 수 있는 것
- subscription 서버는 pubSub라 불리는 것으로 부터 가져옴
- subscriber 패턴 같은 것이 있음
- `graphql-yoga`에 PubSub이 딸려있으나 이건 데모버전에서만 사용해야 하고 제품버전에서는 `Redies`나 `Memcached` 같은걸 써야 함
- [질문] 왜 제품버전에서는 PubSub을 사용하면 안되는가?
  - https://nomadcoders.co/nuber/lectures/975/comments/6884
  - Because we should use other more stable products like Redis or RabbitMQ that are more well suited for these kind of stuff.
