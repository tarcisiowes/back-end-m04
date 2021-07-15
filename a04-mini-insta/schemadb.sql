create database mini_insta;

create table usuarios (
  id  serial primary key,
  username text not null unique,
  senha text not null,
  nome text,
  email text unique,
  site text,
  bio text,
  telefone text,
  genero text,
  imagem text,
  verificado boolean default false  
);

create table postagens (
  id serial primary key,
  usuario_id int not null,
  data timestamptz default now(),
  texto text,
  foreign key (usuario_id) references usuarios (id)
);

create table postagens_fotos (
  id serial primary key,
  postagem_id int not null,
  imagem text not null,
  foreign key (postagem_id) references postagens (id)
);

create table postagens_comentarios (
  id serial primary key,
  texto text not null,
  deta timestamptz default now(),
  usuario_id int not null,
  postagem_id int not null,
  foreign key (postagem_id) references postagens (id),
  foreign key (usuario_id) references usuarios (id)
);

create table postagem_curtidas (
  usuario_id int not null,
  postagem_id int not null,
  data timestamptz default now(),
  foreign key (postagem_id) references postagens(id),
  foreign key (usuario_id) references usuarios (id)
);

