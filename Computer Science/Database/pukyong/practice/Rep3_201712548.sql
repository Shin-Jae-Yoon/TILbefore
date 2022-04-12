Create or replace procedure insert_student
( v_stuid stu.stu_id%type,
  v_stuname stu.stu_name%type,
  v_studep stu.stu_dept%type)
IS
     v_stu stu%ROWTYPE;
Begin
      v_stu.stu_id := v_stuid;
      v_stu.stu_name := v_stuname;
      v_stu.stu_dept := v_studep;
     Insert into stu values (v_stu.stu_id, v_stu.stu_name, v_stu.stu_dept);
End;
/

Create or replace procedure insert_subject
( v_sjid subject.SJ_ID%type,
v_sjname subject.SJ_NAME%type,
v_sjdept subject.SJ_DEPT%type)
IS
     v_sub subject%ROWTYPE;
Begin
     v_sub.SJ_ID := v_sjid;
     v_sub.SJ_NAME := v_sjname;
     v_sub.SJ_DEPT := v_sjdept;
     Insert into subject values (v_sub.SJ_ID, v_sub.SJ_NAME, v_sub.SJ_DEPT);
End;
/

Create or replace procedure delete_data
( v_stuid stu.stu_id%type )
IS
     v_stu stu%ROWTYPE;
     v_sugang sugang%ROWTYPE;
Begin
     v_stu.stu_id := v_stuid;
     v_sugang.stu_id := v_stuid;
     delete from sugang where sugang.stu_id = v_stuid;
     delete from stu where stu.stu_id = v_stuid;
End;
/

set serveroutput on

Create or replace procedure show_sjname
( v_sjid IN subject.sj_id%type )
IS
     v_sjname subject.sj_name%type;
Begin
     select sj_name into v_sjname from subject
     where sj_id = v_sjid;
     DBMS_OUTPUT.PUT_LINE('°ú¸ñ¸í : ' || v_sjname);
End;
/

