-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

drop table if exists stuff;

create table stuff (
    id bigint not null,
    name varchar not null,
    dontGet varchar not null
);

insert into stuff (id, name, dontGet) values
('1', 'mouse', 'do not get'),
('2', 'keyboard', 'dont do it')