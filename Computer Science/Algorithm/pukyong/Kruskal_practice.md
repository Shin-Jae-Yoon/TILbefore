```C
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#define vertex_num 5
#define edge_num 7

typedef int index;
typedef index set_pointer;

typedef struct
{
	int weight;
	int v1;
	int v2;
}edge;

typedef struct
{
	index parent;
	int depth;
}nodetype;

typedef nodetype universe;
universe U[vertex_num + 1];

void makeset(index i);
set_pointer find(index i);
void merge(set_pointer p, set_pointer q);
int equal(set_pointer p, set_pointer q);
void initial(int n);
void kruskal(int n, int m, edge* E, edge* F);

index f_index = 0;

int main(void)
{
	FILE* fp = NULL;
	fp = fopen("input.txt", "r");

	int input_data[vertex_num][vertex_num] = { 0, };
	int output_data[vertex_num][vertex_num] = { 0, };

	for (int i = 0; i < vertex_num; i++)
	{
		for (int j = 0; j < vertex_num; j++)
		{
			fscanf_s(fp, "%d", &input_data[i][j]);
		}
	}
	fclose(fp);

	index e_index = 0;

	edge set_of_edges[edge_num] = { 0, };
	edge mst_of_edges[edge_num] = { 0, };

	for (int i = 0; i < vertex_num; i++)
	{
		for (int j = i + 1; j < vertex_num; j++)
		{
			if (input_data[i][j] != 0)
			{
				set_of_edges[e_index].v1 = i + 1;
				set_of_edges[e_index].v2 = j + 1;
				set_of_edges[e_index++].weight = input_data[i][j];
			}
		}
	}

	kruskal(vertex_num, edge_num, set_of_edges, mst_of_edges);

	for (int i = 0; i < f_index; i++)
	{
		for (int j = 0; j < vertex_num; j++)
		{
			for (int k = 0; k < vertex_num; k++)
			{
				if ((mst_of_edges[i].v1 == j + 1) && (mst_of_edges[i].v2 == k + 1))
				{
					output_data[j][k] = mst_of_edges[i].weight;
					output_data[k][j] = mst_of_edges[i].weight;
				}
			}
		}
	}

	printf("[ input.txt에서 불러온 인접행렬 ]\n");
	for (int i = 0; i < vertex_num; i++)
	{
		printf("\n ");
		for (int j = 0; j < vertex_num; j++)
		{
			printf("%d ", input_data[i][j]);
		}
	}

	printf("\n\n[ Kruscal Algorithm 이후 인접 행렬로 표현된 MST ]\n");
	for (int i = 0; i < vertex_num; i++)
	{
		printf("\n ");
		for (int j = 0; j < vertex_num; j++)
		{
			printf("%d ", output_data[i][j]);
		}
	}
	printf("\n");

	return 0;
}

void makeset(index i)
{
	U[i].parent = i;
	U[i].depth = 0;
}

set_pointer find(index i)
{
	index j;

	j = i;
	while (U[j].parent != j)
		j = U[j].parent;
	return j;
}

void merge(set_pointer p, set_pointer q)
{
	if (U[p].depth == U[q].depth)
	{
		U[p].depth = U[p].depth + 1;
		U[q].parent = p;
	}

	else if (U[p].depth < U[q].depth)
		U[p].parent = q;

	else
		U[q].parent = p;
}

int equal(set_pointer p, set_pointer q)
{
	if (p == q)
		return 1;
	else
		return 0;
}

void initial(int n)
{
	for (int i = 1; i <= n; i++)
		makeset(i);
}

void kruskal(int n, int m, edge* E, edge* F)
{

	for (int i = 0; i < m - 1; i++)
	{
		for (int j = i + 1; j < m; j++)
		{
			if (E[i].weight > E[j].weight)
			{
				edge temp = E[i];
				E[i] = E[j];
				E[j] = temp;
			}
			else if (E[i].weight == E[j].weight)
			{
				if (E[i].v1 > E[j].v1)
				{
					edge temp = E[i];
					E[i] = E[j];
					E[j] = temp;
				}
			}
		}
	}

	initial(vertex_num);

	index e_index = 0;
	while (1)
	{
		int i, j, p, q;

		i = E[e_index].v1;
		j = E[e_index].v2;

		p = find(i);
		q = find(j);

		if (!equal(p, q))
		{
			merge(p, q);
			F[f_index++] = E[e_index];
		}

		e_index++;

		int count = 0;
		for (int i = 1; i <= edge_num; i++)
		{
			if (U[i].parent == i)
				count++;
		}

		if (count == 1)
			break;
	}
}
```

<br>

```
input.txt 파일 내용

0 1 3 0 0
1 0 3 6 0
3 3 0 4 2
0 6 4 0 5
0 0 2 5 0
```
