select avg(단가) as "단가 평균" from 상품;

select 분류코드, avg(단가) as "단가 평균" from 상품 group by 분류코드;

select count(*) as "상품의 개수" from 상품 where 단가 >= '10000';

select 회원번호, count(*) as "주문 횟수" from 주문 group by 회원번호 order by 회원번호 asc;

select 회원번호, count(*) as "주문 횟수" from 주문 group by 회원번호 having count(*) >= 3 order by 회원번호 asc;

select 상품.상품번호, sum(상품.단가) as "주문액 합계" from 상품, 주문상세내역
where 상품.상품번호 = 주문상세내역.상품번호
group by 상품.상품번호 order by 상품.상품번호 asc;

select 상품.상품번호, sum(상품.단가) as "주문액 합계" from 상품, 주문상세내역
where 상품.상품번호 = 주문상세내역.상품번호
group by 상품.상품번호 having sum(상품.단가) >= 100000 order by 상품.상품번호 asc;

select 주문.주문번호, sum(상품.단가) as "주문액 합계" from 상품, 주문, 주문상세내역
where 주문.주문번호 = 주문상세내역.주문번호 and 주문상세내역.상품번호 = 상품.상품번호
group by 주문.주문번호 order by 주문.주문번호 asc;

select 회원번호 from 주문 where 주문일 = '2017-01-02' intersect
select 회원번호 from 주문 where 주문일 = '2017-01-03';

select 회원번호 from 주문 where 주문일 = '2017-01-02' and
회원번호 in (select 회원번호 from 주문 where 주문일 = '2017-01-03');

select 상품번호, 상품명 from 상품 where 단가 > All
(select 단가 from 상품 where 분류코드 = '1');

select s1.상품번호, s1.상품명 from 상품 s1, 상품 s2
where s2.상품번호 = '14'
and s1.단가 > s2.단가;