interface IColor {
    light?: string;
    dark?: string;
    all?: string;
}

export const japoneseName: IColor = {
  light: 'gray.500',
  dark: 'gray.300',
};

export const heading: IColor = {
  light: 'green.400',
  dark: 'green.300',
};

export const headingHover: IColor = {
  light: 'green.300',
  dark: 'green.200',
};

export const background: IColor = {
  light: 'gray.100',
  dark: 'gray.800',
};

export const darken: IColor = {
  all: 'rgba(0, 0, 0, 0.4)',
};

export const line: IColor = {
  light: heading.light,
  dark: heading.dark,
};
