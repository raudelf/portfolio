import { TextFieldProps } from "react-aria-components";

export interface TextboxInputProps extends TextFieldProps {
  label: string;
  wrapperClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  placeHolder?: string;
  isRequired?: boolean;
}

export interface BaseLayoutProps {
  children: React.ReactNode;
}

export interface ProjectCardProps {
  clientLogo: string;
  clientName: string;
  clientSiteUrl: string;
  clientSummary: string;
  descriptionText: string;
}

export interface ProjectCardListProps {
  projects: ProjectCardProps[];
}
