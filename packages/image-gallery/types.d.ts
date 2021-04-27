declare class ClipboardItem {
  constructor(data: Record<string, Blob>);
}

interface Clipboard {
  read?: () => Promise<ClipboardItem[]>;

  write?: (items: ClipboardItem[]) => Promise<void>;
}
