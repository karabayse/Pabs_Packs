CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  item varchar(80),
  vendor_id int,
  number_on_hand int,
  low_number int,
  type varchar(80),
  comments text
);

INSERT INTO inventory (item, vendor_id, number_on_hand, low_number, type, comments)
VALUES ('Item 1', 2, 30, 20, 'Merch', 'comments for 1'),
('Item 2', 1, 30, 20, 'Merch', 'comments for 2'),
('Item 3', 1, 50, 10, 'Pack', 'comments for 3'),
('Item 4', 3, 100, 30, 'Pack', 'comments for 4'),
('Item 5', 2, 100, 30, 'Pack', 'comments for 5'),
('Item 6', 4, 100, 30, 'Pack', 'comments for 6')

CREATE TABLE backpack_goal (
  id SERIAL PRIMARY KEY,
  annual_goal varchar(80),
  year varchar(80)
  );

INSERT INTO backpack_goal (annual_goal, year)
VALUES ('500', '2015'),
('1500', '2016'),
('2000', '2017')

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  event_date date,
  event_time time,
  event_type varchar(80),
  partner_id int,
  packs_promised int,
  packs_made int,
  comments text
);

CREATE TABLE inventory (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  item text NOT NULL,
  vendor_id text NOT NULL,
  number_on_hand integer NOT NULL,
  comments text NOT NULL,
  low_number integer NOT NULL ,
  type text NOT NULL
);

UPDATE inventory SET item='duuuuuuuuuude' WHERE id='db32fc38-6c84-479f-ad8f-be67cfcf73c1';

SELECT * FROM inventory;

DROP TABLE users;

CREATE TABLE vendor (
  id SERIAL PRIMARY KEY,
  vendor_name varchar(80),
  vendor_phone varchar(80),
  vendor_email varchar(80),
  vendor_address varchar(80)
  );

INSERT INTO vendor (vendor_name, vendor_phone, vendor_email, vendor_address)
VALUES ('Vendor 1', '612-123-1234', 'vendor2@vendor.com', '123 Main St. Minneapolis, MN 55125'),
('Vendor 2', '612-123-1234', 'vendor2@vendor.com', '123 Main St. Minneapolis, MN 55125')

DROP TABLE inventory;

INSERT INTO inventory (item, vendor_id, number_on_hand, comments, low_number, type) VALUES
    ('jkdsfjkd', 12, 110, 'Good stuff man', 1, 'merchandise'),
    ('fsdf', 1, 110, 'whoooa', 23, 'backpack');

CREATE TABLE partners (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  address VARCHAR(120) NOT NULL,
  phone_number varchar(120) NOT NULL,
  comments text NOT NULL,
  contact_name text NOT NULL
 );

 SELECT * FROM partners;

 CREATE TABLE backpack_goal (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  goal integer NOT NULL,
  year integer NOT NULL
 );

 SELECT * FROM backpack_goal;
