/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2023-06-30 23:11:33                          */
/*==============================================================*/


drop table if exists BRAND;

drop table if exists ITEM;

drop table if exists LAPTOP;

drop table if exists PHONE;

drop table if exists TABLET;

drop table if exists VIDEOGAMECONSOLE;

/*==============================================================*/
/* Table: BRAND                                                 */
/*==============================================================*/
create table BRAND
(
   BRAN_ID              int not null auto_increment,
   BRAN_NAME            longtext not null,
   primary key (BRAN_ID)
);

/*==============================================================*/
/* Table: ITEM                                                  */
/*==============================================================*/
create table ITEM
(
   ITEM_ID              int not null auto_increment,
   BRAN_ID              int not null,
   ITEM_NAME            varchar(20) not null,
   ITEM_PRICE           decimal(7,2) not null,
   ITEM_IMG             longblob not null,
   ITEM_STOCK           int not null,
   primary key (ITEM_ID)
);

/*==============================================================*/
/* Table: LAPTOP                                                */
/*==============================================================*/
create table LAPTOP
(
   ITEM_ID              int not null,
   LAP_WEIGHT           decimal(5,2) not null,
   primary key (ITEM_ID)
);

/*==============================================================*/
/* Table: PHONE                                                 */
/*==============================================================*/
create table PHONE
(
   ITEM_ID              int not null,
   PHO_RESOLUTION       int not null,
   primary key (ITEM_ID)
);

/*==============================================================*/
/* Table: TABLET                                                */
/*==============================================================*/
create table TABLET
(
   ITEM_ID              int not null,
   TAB_INCHES           decimal(7,2) not null,
   primary key (ITEM_ID)
);

/*==============================================================*/
/* Table: VIDEOGAMECONSOLE                                      */
/*==============================================================*/
create table VIDEOGAMECONSOLE
(
   ITEM_ID              int not null,
   VID_STORAGE          decimal(5,2) not null,
   primary key (ITEM_ID)
);

alter table ITEM add constraint FK_HAS foreign key (BRAN_ID)
      references BRAND (BRAN_ID) on delete restrict on update restrict;

alter table LAPTOP add constraint FK_INHERITANCE_1 foreign key (ITEM_ID)
      references ITEM (ITEM_ID) on delete restrict on update restrict;

alter table PHONE add constraint FK_INHERITANCE_3 foreign key (ITEM_ID)
      references ITEM (ITEM_ID) on delete restrict on update restrict;

alter table TABLET add constraint FK_INHERITANCE_2 foreign key (ITEM_ID)
      references ITEM (ITEM_ID) on delete restrict on update restrict;

alter table VIDEOGAMECONSOLE add constraint FK_INHERITANCE_4 foreign key (ITEM_ID)
      references ITEM (ITEM_ID) on delete restrict on update restrict;

