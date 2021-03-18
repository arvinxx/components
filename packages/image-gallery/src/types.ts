interface ImageEntry {
  title: string;
  description: string;

  dark?: boolean;
  url: string;
}

export type ImageList = ImageEntry[];
