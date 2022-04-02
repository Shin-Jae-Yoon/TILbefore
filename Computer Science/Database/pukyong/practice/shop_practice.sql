select * from 회원 where 회원번호 like 'T006';

select distinct 상품번호 from 주문상세내역;

select distinct 상품번호 from 주문상세내역 order by 상품번호;

select distinct 상품번호 from 주문상세내역 order by 상품번호 asc;

select 성명 from 회원 where 주소 like '서울%';

select 성명 from 회원 where 주소 not like '서울%';

select 성명 from 회원 where 주소 like '서울%' and 성별 = '남';

select 상품명 from 상품 where 분류코드 = '1';

select 상품명 from 상품 order by 단가 desc;

select 상품번호, 상품명 from 상품 where 단가 between '5000' and '15000';

select * from 회원 natural join 주문;
select * from 회원, 주문 where 회원.회원번호 = 주문.회원번호;

select * from 주문 natural join 주문상세내역;
select * from 주문, 주문상세내역 where 주문.주문번호 = 주문상세내역.주문번호;

select * from 상품, 주문상세내역, 주문 where 상품.상품번호 = 주문상세내역.상품번호 and 주문상세내역.주문번호 = 주문.주문번호;

select 주문상세번호, 상품.단가 * 주문상세내역.수량 as 주문액 from 상품, 주문상세내역, 주문 
where 상품.상품번호 = 주문상세내역.상품번호
and 주문상세내역.주문번호 = 주문.주문번호;