export interface TocItem {
  id: string;
  label: string;
  children?: TocItem[];
}

/** Table of contents, in document order. "lead" is the article top, shown as "(Top)". */
export const tocItems: TocItem[] = [
  { id: 'lead', label: '(Top)' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'services', label: 'What I do' },
  {
    id: 'projects',
    label: 'Projects',
    children: [
      { id: 'selected', label: 'Selected systems' },
      { id: 'other-works', label: 'Other works' },
    ],
  },
  { id: 'method', label: 'How I work' },
  { id: 'background', label: 'Background' },
  { id: 'contact', label: 'Contact' },
];

/** Compact mobile bar: each slot lights up for any of its section ids. */
export const barItems = [
  { label: 'Top', target: 'intro', ids: ['intro', 'lead'] },
  { label: 'Services', target: 'services', ids: ['recognition', 'services'] },
  { label: 'Projects', target: 'projects', ids: ['projects', 'selected', 'other-works'] },
  { label: 'About', target: 'background', ids: ['method', 'background'] },
  { label: 'Contact', target: 'contact', ids: ['contact'] },
];

/** Every scroll target in document order, used to decide which one is active. */
export const orderedIds = [
  'intro',
  ...tocItems.flatMap((item) => [item.id, ...(item.children?.map((c) => c.id) ?? [])]),
];
