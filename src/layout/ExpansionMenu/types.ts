export interface ExpansionProps {
  onChecked?(value: string): void;
  label: React.ReactNode;
  children: React.ReactNode;
  route: string;
  icon?: any;
}
