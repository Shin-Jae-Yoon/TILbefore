create view 주문상세내역뷰 as
select 상품.*, 주문.*, 주문상세내역.주문상세번호, 주문상세내역.수량
from 상품, 주문상세내역, 주문
where 상품.상품번호 = 주문상세내역.상품번호
and 주문.주문번호 = 주문상세내역.주문번호;

create view 주문액합계뷰 as select 회원번호, sum(수량*단가) as 주문액합계 from 주문상세내역뷰 group by 회원번호;

select 회원.회원번호, 회원.성명 from 회원, 주문액합계뷰
where 회원.회원번호 = 주문액합계뷰.회원번호
and 주문액합계 = (select max(주문액합계) from 주문액합계뷰);

create view 분류액합계뷰 as select 분류코드, sum(수량*단가) as 분류액합계 from 주문상세내역뷰 group by 분류코드;

select 분류.분류코드, 분류.분류명 from 분류, 분류액합계뷰
where 분류.분류코드 = 분류액합계뷰.분류코드
and 분류액합계 = (select max(분류액합계) from 분류액합계뷰);

create view 상품수량뷰 as select 상품번호, sum(수량) as 많이팔린횟수 from 주문상세내역뷰 group by 상품번호;

select 상품.상품번호, 상품.상품명 from 상품, 상품수량뷰
where 상품.상품번호 = 상품수량뷰.상품번호
and 많이팔린횟수 = (select max(많이팔린횟수) from 상품수량뷰);