-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

drop table if exists things;

create table things (
    id bigint not null,
    name varchar not null,
    dontget varchar not null
);

insert into things (id, name, dontget) values
('1', 'mouse', 'do not get'),
('2', 'keyboard', 'dont do it')