interface IColor {
    light?: string;
    dark?: string;
    all?: string;
}

export const primaryColor: IColor = {
  light: 'green.400',
  dark: 'green.300',
};

export const japoneseName: IColor = {
  light: 'gray.500',
  dark: 'gray.300',
};

export const heading: IColor = {
  light: primaryColor.light,
  dark: primaryColor.dark,
};

export const star: IColor = {
  light: heading.light,
  dark: heading.dark,
};

export const headingHover: IColor = {
  light: primaryColor.dark,
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
