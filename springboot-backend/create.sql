create table photos (photo_id bigint not null auto_increment, create-date datetime(6), photo_name varchar(255), url varchar(255), primary key (photo_id)) engine=InnoDB;
create table users (user_id bigint not null auto_increment, email varchar(255), first_name varchar(255), last_name varchar(255), password varchar(255), user_name varchar(255), primary key (user_id)) engine=InnoDB;
