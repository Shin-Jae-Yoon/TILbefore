desc 회원;

create table 서울회원연락처 (회원번호 varchar2(7), 성명 varchar2(20), 주소 varchar2(50), 전화번호 varchar(20), primary key(회원번호));

insert into 서울회원연락처(회원번호, 성명, 주소, 전화번호)
select 회원번호, 성명, 주소, 전화번호 from 회원 where 주소 like '서울%';

create table 지방회원연락처 as
select 회원번호, 성명, 주소, 전화번호 from 회원 where 주소 not like '서울%';

insert into 분류 values (4, '키보드');

insert into 상품 values (30, '삼성 32GB USB 메모리', 4, NULL, 2);

update 회원 set 주소 = '부산시 금정구' where 회원번호 = 'T001';

update 상품 set 단가 = 단가 * 1.1;

delete from 주문상세내역 where 상품번호 = '8';
delete from 상품 where 상품번호 = '8';

delete from 주문상세내역 where 주문번호 in (select 주문번호 from 주문 where 회원번호 = 'T004');
delete from 주문 where 회원번호 = 'T004';
delete from 회원 where 회원번호 = 'T004';

select distinct 회원.회원번호 from 회원, 주문 where 회원.회원번호 = 주문.회원번호 and 회원.성별 = '여';

select 상품번호 from 상품 where 상품번호 not in (select 상품번호 from 주문상세내역) and 단가 <= '10000';