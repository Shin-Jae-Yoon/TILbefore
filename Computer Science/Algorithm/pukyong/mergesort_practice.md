```c
#include <stdio.h>
#include <string.h>   // memcpy를 쓰기 위하여
#include <stdlib.h>   // malloc을 쓰기 위하여
#define SIZE 8

void mergesort(int n, int* s);
void merge(int h, int m, int* u, int* v, int* s);

int main(void)
{
	int s[SIZE] = { 27, 10, 12, 20, 25, 13, 15, 22 };
	int n = SIZE;

	printf("입력한 배열은 ");

	for (int i = 0; i < n; i++)
	{
		printf("%d ", s[i]);
	}

	printf("입니다. \n");

	printf("mergesort1로 합병정렬한 배열은 ");

	mergesort(n, s);

	for (int i = 0; i < n; i++)
	{
		printf("%d ", s[i]);
	}

	printf("입니다. \n");

	return 0;
}

void mergesort(int n, int* s)
{
	if (n > 1) {
		int h = n / 2;
		int m = n - h;
		int* u = 0;
		int* v = 0;

		u = (int*)malloc(sizeof(int) * h);
		v = (int*)malloc(sizeof(int) * m);

		memcpy(u, s, sizeof(int) * h);
		memcpy(v, s + h, sizeof(int) * m);

		mergesort(h, u);
		mergesort(m, v);

		merge(h, m, u, v, s);
	}

	if (n <= 1)
		return;
}

void merge(int h, int m, int* u, int* v, int* s)
{
	int i = 0, j = 0, k = 0;

	while ((i < h) && (j < m))
	{
		if (u[i] < v[j])
		{
			s[k] = u[i];
			i++;
		}
		else
		{
			s[k] = v[j];
			j++;
		}
		k++;
	}

	if (i >= h)
		memcpy(s + k, v + j, sizeof(int) * (h+m-k));
	else
		memcpy(s + k, u + i, sizeof(int) * (h+m-k));

}

[출력결과]

입력한 배열은 27 10 12 20 25 13 15 22 입니다.
mergesort1로 합병정렬한 배열은 10 12 13 15 20 22 25 27 입니다.
```

<br>

```c
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#define SIZE 8

int s2[SIZE] = { 27, 10, 12, 20, 25, 13, 15, 22 };
void mergesort2(int low, int high);
void merge2(int low, int mid, int high);

int main(void)
{
	int n = SIZE;

	printf("입력한 배열은 ");

	for (int i = 0; i < n; i++)
	{
		printf("%d ", s2[i]);
	}

	printf("입니다. \n");

	mergesort2(0, SIZE-1);

	printf("mergesert2로 합병정렬한 배열은 ");

	for (int i = 0; i < n; i++)
	{
		printf("%d ", s2[i]);
	}

	printf("입니다. \n");

	return 0;
}

void mergesort2(int low, int high)
{
	int mid;

	if (low < high)
	{
		mid = floor((low + high) / 2);
		mergesort2(low, mid);
		mergesort2(mid + 1, high);
		merge2(low, mid, high);
	}
}

void merge2(int low, int mid, int high)
{
	int i, j, k;
	int* u = 0;
	u = (int*)malloc(sizeof(int) * SIZE);
	i = low, j = mid + 1, k = low;

	while (i <= mid && j <= high)
	{
		if (s2[i] < s2[j])
		{
			u[k] = s2[i];
			i++;
		}
		else
		{
			u[k] = s2[j];
			j++;
		}
		k++;
	}

	if (i > mid) {
		for (int a = j; a <= high; a++) {
			u[k] = s2[a];
			k++;
		}
	}
	else {
		for (int a = i; a <= mid; a++) {
			u[k] = s2[a];
			k++;
		}
	}

	for (int a = low; a <= high; a++) {
		s2[a] = u[a];
	}

}

[출력결과]

입력한 배열은 27 10 12 20 25 13 15 22 입니다.
mergesort2로 합병정렬한 배열은 10 12 13 15 20 22 25 27 입니다.
```
