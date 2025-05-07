interface ISecondDepartmentMenu {
  id: number;
  label: string;
  link: string;
}

export const secondDepartmentMenu: ISecondDepartmentMenu[] = [
  {
    id: 0,
    label: 'department 1',
    link: 'second-department-1',
  },
  {
    id: 1,
    label: 'department 2',
    link: 'second-department-2',
  },
  {
    id: 2,
    label: 'department 3',
    link: 'second-department-3',
  },
  {
    id: 3,
    label: 'department 4',
    link: 'second-department-4',
  },
] as const;
