drop table 주문상세내역;
drop table 주문;
drop table 상품;
drop table 분류;
drop table 거래처;
drop table 회원;

create table 회원 (
	회원번호 varchar2(7),
	성명 varchar2(20),
	생년월일 varchar2(50),
        성별 varchar2(3),
	주소 varchar2(50),
	전화번호 varchar2(20),
	이메일 varchar2(20),
	가입일 varchar2(15),
	회원구분 int,
	primary key (회원번호)
);

insert into 회원 values ('T001', '김영숙', '1984년 01월 18일', '여', '부산시 북구', '(011)1122-5555', 'kys@db1.net', '2007-12-01', 1);
insert into 회원 values ('T002', '안지윤', '1984년 05월 11일', '여', '대구시 수성구', '(010)1122-5555', 'ajy@db1.net', '2007-12-18', 2);
insert into 회원 values ('T003', '허성준', '1981년 05월 01일', '남', '부산시 수영구', '(011)1122-6666', 'hsj@db1.net', '2008-01-12', 1);
insert into 회원 values ('T004', '백남기', '1975년 11월 27일', '남', '성남시 분당구', '(016)1122-7777', NULL, '2008-02-08', 1);
insert into 회원 values ('T005', '이은희', '1988년 02월 03일', '여', '대구시 북구', '(010)1122-8888', NULL , '2008-03-05', 2);
insert into 회원 values ('T006', '한정빈', '1986년 08월 17일', '남', '부산시 수영구', '(011)1122-9999', 'hjb@db2.net', '2008-03-11', 2);
insert into 회원 values ('T007', '김한수', '1980년 12월 28일', '남', '서울시 용산구', '(019)1234-0001', 'khs@db3.net', '2008-04-23', 1);
insert into 회원 values ('T008', '공병일', '1977년 03월 06일', '남', '부산시 강서구', '(010)1234-0011', NULL , '2008-05-13', 1);
insert into 회원 values ('T009', '이신애', '1982년 06월 28일', '여', '서울시 송파구', '(011)1234-0003', 'lsa@db3.net', '2008-06-12', 2);
insert into 회원 values ('T010', '권동하', '1983년 04월 13일', '남', '서울시 관악구', '(016)1234-0004', 'kdh@db3.net', '2008-07-07', 2);


Create table 거래처 (
	거래처번호 int,
	거래처명 varchar2(30),
	주소 varchar2(50),
	전화번호 varchar2(20),
	담장자 varchar2(10),
	사업자등록번호 varchar2(15),
	primary key (거래처번호)
);

Insert into 거래처 values (1, '별컴퓨터', '서울시 관악구', '010-1234-1234', '강건우', '108-71-12346');
Insert into 거래처 values (2, '애플센터', '서울시 동작구', '010-1235-1235', '홍우승', '108-86-12345');
Insert into 거래처 values (3, '나래센터', '부산시 사상구', '010-1236-1236', '장나래', '603-55-45612');
Insert into 거래처 values (4, '도림테크노마트', '인천시 동구', '010-1237-1237', '박준규', '121-81-12345');
Insert into 거래처 values (5, '해커스쇼핑', '수원시 팔달구', '010-1238-1222', '김민기', '124-44-32165');
Insert into 거래처 values (6, '잉크다', '김해시 외동', '010-1239-1111', '전유리', '603-12-32456');
Insert into 거래처 values (7, '컴도매', '마산시 회원구 구암동', '010-1240-1133', '한지승', '608-33-18469');

Create table 분류 (
	분류코드 int,
	분류명 varchar2(20),
	primary key (분류코드)
);
Insert into 분류 values (1, '마우스');
Insert into 분류 values (2, '공CD');
Insert into 분류 values (3, 'USB메모리');

create table 상품 (
	상품번호 int,
	상품명 varchar2(80),
	거래처번호 int,
	단가 int,
	분류코드 int,
        primary key (상품번호),
	foreign key (거래처번호) references 거래처,
	foreign key (분류코드) references 분류
);

insert into 상품 values (1, 'DDZONE)마우스 DM-110(화이트)', 1, 4520, 1);
insert into 상품 values (2, '코시) 파노라마광마우스(COM-45)/블루', 1, 12030, 1);
insert into 상품 values (3, '엘레컴)파르보 무선 광 마우스(M-PADURWH)', 2, 24800, 1);
insert into 상품 values (4, '엘레컴)파르보 광 마우스(M-PPAUP2RSV)', 2, 12410, 1);
insert into 상품 values (5, '엘레컴)콤보 마우스(M-M2UP2RRD)', 2, 8280, 1);
insert into 상품 values (6, '엘레컴)노트북용 콤보 마우스(M-M1UP2RBK)', 2, 8120, 1);
insert into 상품 values (7, '삼성)광마우스 (SML-210PB)', 3, 9780, 1);
insert into 상품 values (8, '삼성)광 마우스(SPM-3650/실버)콤보', 3, 9540, 1);
insert into 상품 values (9, '로지텍 MX1100 무선 레이저 마우스', 4, 25000, 1);
insert into 상품 values (10, '로지텍 LS1 레이저 마우스', 4, 32000, 1);
insert into 상품 values (11, '[G-Cube] 지큐브 여성용 마우스+마우스패드 Wind', 5, 2890, 1);
insert into 상품 values (12, 'SKC)USB저장장치(4GB/블랙)', 7, 36020, 3);
insert into 상품 values (13, '액센)USB저장장치(8GB/i-bar)', 1, 41320, 3);
insert into 상품 values (14, '액센)USB저장장치(4GB/i-PASSION XM)', 1, 24920, 3);
insert into 상품 values (15, '액센)USB저장장치(2GB/i-PASSION GOLD)', 1, 20430, 3);
insert into 상품 values (16, '아이오셀 CellDisk 명품 Swing 1GB (블랙,실버)', 4, 6600, 3);
insert into 상품 values (17, '메모렉스)USB저장장치(4GB/오렌지)', 4, 42500, 3);
insert into 상품 values (18, '나와컴)USB저장장치(2GB)', 5, 26210, 3);
insert into 상품 values (19, 'SKC) CD-RW 1P 700MB/80min', 6, 1120, 2);
insert into 상품 values (20, 'SKC) CD-R 100P 700MB/80min', 6, 27630, 2);
insert into 상품 values (21, 'DDZONE)CD-R 50P 700MB/80min', 6, 8620, 2);
insert into 상품 values (22, 'DDZONE)CD-R 100P 700MB/80min', 6, 17220, 2);
insert into 상품 values (23, '코닥)CD-R 50P 700MB/80min', 2, 16240, 2);
insert into 상품 values (24, '이메이션)CD-R 100P', 2, 29120, 2);
insert into 상품 values (25, '액센)800MB CD-R 50P 48X/90min', 2, 13920, 2);
insert into 상품 values (26, '소니)DVD-R 1P(4.7G)', 5, 890, 2);
insert into 상품 values (27, '소니)CD-R 50P 700MB/80min', 5, 15220, 2);
insert into 상품 values (28, '메모렉스)CD-R 50P 700MB', 6, 12620, 2);
insert into 상품 values (29, '메모렉스)CD-R 100P 700MB', 6, 25210, 2);

Create table 주문 (
	주문번호 int,
	회원번호 varchar2(7),
	주문일 varchar2(50),
	배송주소 varchar2(50),
	배송연락처 varchar2(15),
	primary key (주문번호),
	foreign key (회원번호) references 회원
);

Insert into 주문 values (1,'T004','2017-01-01','성남시 분당구','(016)1122-7777');
Insert into 주문 values (2,'T004','2017-01-02','성남시 분당구','(016)1122-7777');
Insert into 주문 values (3,'T008','2017-01-02','부산시 강서구','(010)1234-0011');
Insert into 주문 values (4,'T003','2017-01-02','부산시 수영구','(011)1122-6666');
Insert into 주문 values (5,'T001','2017-01-02','부산시 북구','(011)1122-5555');
Insert into 주문 values (6,'T001','2017-01-03','부산시 북구','(011)1122-5555');
Insert into 주문 values (7,'T007','2017-01-03','서울시 용산구','(019)1234-0001');
Insert into 주문 values (8,'T005','2017-01-03','대구시 북구','(010)1122-8888');
Insert into 주문 values (9,'T010','2017-01-03','서울시 관악구','(016)1234-0004');
Insert into 주문 values (10,'T009','2017-01-04','서울시 송파구','(011)1234-0003');
Insert into 주문 values (11,'T001','2017-01-04','부산시 북구','(011)1122-5555');
Insert into 주문 values (12,'T001','2017-01-05','부산시 북구','(011)1122-5555');
Insert into 주문 values (13,'T003','2017-01-06','부산시 수영구','(011)1122-6666');
Insert into 주문 values (14,'T006','2017-01-06','부산시 수영구','(011)1122-9999');
Insert into 주문 values (15,'T007','2017-01-06','서울시 용산구','(019)1234-0001');
Insert into 주문 values (16,'T001','2017-01-06','부산시 북구','(011)1122-5555');
Insert into 주문 values (17,'T001','2017-01-07','부산시 북구','(011)1122-5555');
Insert into 주문 values (18,'T003','2017-01-08','부산시 수영구','(011)1122-6666');
Insert into 주문 values (19,'T009','2017-01-08','서울시 송파구','(011)1234-0003');
Insert into 주문 values (20,'T010','2017-01-08','서울시 관악구','(016)1234-0004');
Insert into 주문 values (21,'T005','2017-01-08','대구시 북구','(010)1122-8888');
Insert into 주문 values (22,'T007','2017-01-08','서울시 용산구','(019)1234-0001');
Insert into 주문 values (23,'T004','2017-01-09','성남시 분당구','(016)1122-7777');
Insert into 주문 values (24,'T010','2017-01-10','서울시 관악구','(016)1234-0004');
Insert into 주문 values (25,'T002','2017-01-11','대구시 수성구','(010)1122-5555');
Insert into 주문 values (26,'T005','2017-01-11','대구시 북구','(010)1122-8888');
Insert into 주문 values (27,'T007','2017-01-12','서울시 용산구','(019)1234-0001');
Insert into 주문 values (28,'T009','2017-01-13','서울시 송파구','(011)1234-0003');
Insert into 주문 values (29,'T010','2017-01-13','서울시 관악구','(016)1234-0004');
Insert into 주문 values (30,'T003','2017-01-14','부산시 수영구','(011)1122-6666');

Create table 주문상세내역 (
	주문상세번호 int,
	주문번호 int,
	상품번호 int,
	수량 int,
	primary key (주문상세번호),
	foreign key (주문번호) references 주문,
	foreign key (상품번호) references 상품
);

Insert into 주문상세내역 values (1,1,3,3);
Insert into 주문상세내역 values (2,1,13,2);
Insert into 주문상세내역 values (3,1,27,4);
Insert into 주문상세내역 values (4,2,17,4);
Insert into 주문상세내역 values (5,3,18,5);
Insert into 주문상세내역 values (6,4,19,3);
Insert into 주문상세내역 values (7,5,18,2);
Insert into 주문상세내역 values (8,6,6,3);
Insert into 주문상세내역 values (9,6,8,5);
Insert into 주문상세내역 values (10,6,16,1);
Insert into 주문상세내역 values (11,6,20,3);
Insert into 주문상세내역 values (12,6,23,1);
Insert into 주문상세내역 values (13,6,24,1);
Insert into 주문상세내역 values (14,7,23,1);
Insert into 주문상세내역 values (15,7,26,1);
Insert into 주문상세내역 values (16,8,3,1);
Insert into 주문상세내역 values (17,8,8,5);
Insert into 주문상세내역 values (18,9,5,2);
Insert into 주문상세내역 values (19,9,12,1);
Insert into 주문상세내역 values (20,10,7,4);
Insert into 주문상세내역 values (21,10,29,3);
Insert into 주문상세내역 values (22,11,8,3);
Insert into 주문상세내역 values (23,12,24,2);
Insert into 주문상세내역 values (24,12,26,3);
Insert into 주문상세내역 values (25,13,7,3);
Insert into 주문상세내역 values (26,13,18,1);
Insert into 주문상세내역 values (27,14,5,3);
Insert into 주문상세내역 values (28,14,18,1);
Insert into 주문상세내역 values (29,14,18,1);
Insert into 주문상세내역 values (30,14,19,3);
Insert into 주문상세내역 values (31,15,11,4);
Insert into 주문상세내역 values (32,15,22,4);
Insert into 주문상세내역 values (33,16,3,1);
Insert into 주문상세내역 values (34,16,24,4);
Insert into 주문상세내역 values (35,17,5,2);
Insert into 주문상세내역 values (36,18,24,4);
Insert into 주문상세내역 values (37,19,16,1);
Insert into 주문상세내역 values (38,20,8,2);
Insert into 주문상세내역 values (39,20,19,3);
Insert into 주문상세내역 values (40,20,20,4);
Insert into 주문상세내역 values (41,20,27,2);
Insert into 주문상세내역 values (42,20,28,4);
Insert into 주문상세내역 values (43,21,19,5);
Insert into 주문상세내역 values (44,21,22,4);
Insert into 주문상세내역 values (45,21,29,3);
Insert into 주문상세내역 values (46,22,4,1);
Insert into 주문상세내역 values (47,23,24,5);
Insert into 주문상세내역 values (48,24,13,3);
Insert into 주문상세내역 values (49,25,10,5);
Insert into 주문상세내역 values (50,26,15,4);
Insert into 주문상세내역 values (51,27,8,2);
Insert into 주문상세내역 values (52,27,13,3);
Insert into 주문상세내역 values (53,27,20,5);
Insert into 주문상세내역 values (54,27,20,1);
Insert into 주문상세내역 values (55,28,14,1);
Insert into 주문상세내역 values (56,28,23,4);
Insert into 주문상세내역 values (57,28,29,4);
Insert into 주문상세내역 values (58,29,11,4);
Insert into 주문상세내역 values (59,29,25,1);
Insert into 주문상세내역 values (60,30,28,3);