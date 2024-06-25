export interface Widget {
  projectId: string;
  id: string;
  name: string;
  type: string;
  status: string;
}

export interface Project {
  projectId: string;
  name: string;
  description: string;
  created: string;
}

export interface WidgetType {
  id: string;
  name: string;
  logo: string;
}
