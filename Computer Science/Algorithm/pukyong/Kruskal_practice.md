```C
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#define MAX 100

int main(void)
{
	FILE* fp = fopen("input.txt", "r");
	char input_data[MAX] = { 0, };

	fread(input_data, 1, MAX, fp);
	printf("%s", input_data);

	fclose(fp);

	return 0;
}
```
