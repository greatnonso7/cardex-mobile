import { BoxProps } from 'design-system';

export interface headerProps {
  hasBackButton?: boolean;
  hasRightIcon?: React.ReactElement;
  onPressRightIcon?: () => void;
  containerProps?: BoxProps;
  hasHeaderText?: string;
  hasSubHeaderText?: string;
  width?: number;
  hasTop?: number;
  textVariant?: 'bodySmall' | 'smallBold';
}
